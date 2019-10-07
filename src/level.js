export default class Level {
  constructor(context, game) {
    this.structures = [];

    this.spawners = [];
    this.spawnInfo = [];

    this.game = game;

    this.context = context;
  }

  checkCollision(movingObject) {
    this.structures.forEach(structure => {
      if (
        movingObject.pos.x + movingObject.getCollisionModifiers().x.left <= structure[1].x &&
        movingObject.pos.x + movingObject.getCollisionModifiers().x.right >= structure[0].x &&
        movingObject.pos.y + movingObject.getCollisionModifiers().y.bottom >= structure[0].y &&
        movingObject.pos.y + movingObject.getCollisionModifiers().y.top <= structure[1].y
      ) {
        if (
          movingObject.pos.y + movingObject.getCollisionModifiers().y.bottom >= structure[0].y &&
          movingObject.pos.y + movingObject.getCollisionModifiers().y.top <= structure[1].y &&
          movingObject.velocity.y > 0
        ) {
          if (Math.abs(movingObject.pos.y - structure[0].y) < Math.abs(movingObject.pos.y - structure[1].y)) {
            movingObject.onPlatform = true;
            movingObject.pos.y = structure[0].y - movingObject.size.height;
          } else {
            movingObject.pos.y = structure[1].y;
          }
          movingObject.velocity.y = 0;
        }
      } else {
        movingObject.onPlatform = false;
      }
    })
  }

  startSpawners() {
    this.spawnInfo.forEach(spawnInfo => {
      this.spawners.push(setInterval(() => {
        let enemy = new spawnInfo.Enemy(spawnInfo.location, this.context, this.game, spawnInfo.flipped);
        this.game.enemies.push(enemy)
      }, spawnInfo.spawnTime))
    })
  }

  stopSpawners() {
    this.spawners.forEach(spawner => {
      clearInterval(spawner);
    })
  }

  animate() {
    this.context.fillStyle = '#9E7654';
    this.structures.forEach(structure => {
      this.context.fillRect(structure[0].x, structure[0].y, structure[1].x - structure[0].x, structure[1].y - structure[0].y);
    });
  }
}