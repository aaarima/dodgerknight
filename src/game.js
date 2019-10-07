import Knight from "./knight";
import LevelOne from "./levels/level_1";
import SkeletonGrunt from "./skeleton_grunt";

export default class Game {
  constructor(context) {
    this.context = context;
    this.levels = [
      new LevelOne(context)
    ];

    this.currentLevel = new LevelOne(this.context, this);

    this.score = 0;

    this.running = false;

    document.querySelector('.start').addEventListener('click', event => {
      this.running = true;
      document.getElementById('start').className = 'hidden';
      this.animate.bind(this)();
      this.currentLevel.startSpawners();
    });
    document.querySelector('.pause').addEventListener('click', event => {
      this.running = false;
      document.getElementById('start').className = 'start-container';
    });
    document.querySelector('.restart').addEventListener('click', event => {
      this.restart()
    });

    this.restart()
  }

  restart() {
    this.running = false;
    this.score = 0;
    document.getElementById('modal').className = 'hidden';
    document.getElementById('start').className = 'start-container';
    this.enemies = [
      new SkeletonGrunt({x: 400, y: 300}, context, this),
    ];
    this.knight = new Knight({x: 500, y: 300}, context, this);

    this.animate();
  }

  drawScore() {
    this.context.fillStyle = "white";
    this.context.font = "20px VT323";
    this.context.fillText(this.score, 100, 40);
  }

  animate() {
    this.context.clearRect(0, 0, 1000, 600);
    this.currentLevel.animate();

    this.enemies.forEach(enemy => {
      enemy.animate();
    });
    this.knight.animate();
    this.drawScore();
    this.checkGameOver();
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  checkGameOver() {
    this.enemies.forEach(enemy => {
      if (
        enemy.pos.x + enemy.getCollisionModifiers().x.left < this.knight.pos.x + this.knight.getCollisionModifiers().x.right &&
        enemy.pos.x + enemy.getCollisionModifiers().x.right > this.knight.pos.x + this.knight.getCollisionModifiers().x.left &&
        enemy.pos.y + enemy.getCollisionModifiers().y.bottom < this.knight.pos.y + this.knight.getCollisionModifiers().y.top &&
        enemy.pos.y + enemy.getCollisionModifiers().y.top > this.knight.pos.y + this.knight.getCollisionModifiers().y.bottom
      ) {
        this.running = false;
        let gameOver = document.querySelector(".game-over");
        let modal = document.getElementById("modal");
        gameOver.innerText = "YOU LOSE!";
        modal.className = 'modal'
      }
    });

    if (this.score >= 10000) {
      this.running = false;
      let gameOver = document.querySelector(".game-over");
      gameOver.innerText = "YOU WIN!";

      let modal = document.getElementById("modal");
      modal.className = 'modal'
    }
  }

}