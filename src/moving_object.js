const CONSTANTS = {
  GRAVITY:  1.4,
  TERMINAL_VEL:  12,
};

export default class MovingObject {
  constructor(pos, context, game) {
    this.velocity = {
      x: 0,
      y: 0
    };
    this.pos = {
      x: pos.x,
      y: pos.y
    };

    this.size = {
      height: 100,
      width: 100
    };

    this.context = context;
    this.game = game;
    this.onPlatform = false;

    this.ticks = 0;
    this.ticksPerAnimation = 20;
    this.frameIndex = 0;
    this.flipped = false;
  }

  move() {
    let x = this.pos.x + this.velocity.x;
    let y = this.pos.y + this.velocity.y;

    let bounds = {
      x: 1000 - this.size.width,
      y: 600 - this.size.height
    };

    if(y >= bounds.y) {
      this.onPlatform = true;
    }

    if(!this.onPlatform && this.velocity.y < CONSTANTS.TERMINAL_VEL) {
      this.velocity.y += CONSTANTS.GRAVITY;
    } else if (this.onPlatform) {
      this.velocity.y = 0;
    }

    if (x > bounds.x || x < 0) this.velocity.x = 0;

    this.pos = {
      x: x < bounds.x && x > 0 ? x : x < bounds.x ? 0 : bounds.x,
      y: y < bounds.y && y > 0 ? y : y < bounds.y ? 0 : bounds.y
    }
  }

  draw() {
    this.context.fillStyle = 'white';
    this.context.fillRect(this.pos.x, this.pos.y, 100, 100)
  }

  animate() {
    this.move();
    this.game.currentLevel.checkCollision(this);
    this.draw();
  }

  getCollisionModifiers(){
    return {
      x: {
        right: 0,
        left: this.size.width
      },
      y: {
        top: 0,
        bottom: this.size.height
      }
    }
  }

  death() {

  }
}