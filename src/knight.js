import MovingObject from "./moving_object";

export default class Knight extends MovingObject {
  constructor(pos, context, game) {
    super(pos, context, game);
    this.keyHandlers();
    window.knight = this;
    this.image = new Image();
    this.image.src = '../src/assets/animated_pixel_knight/knight-sprite-sheet.png';

    this.imageFlipped = new Image();
    this.imageFlipped.src = '../src/assets/animated_pixel_knight/knight-sprite-sheet-flipped.png';

    // Animations
    this.standingFrames =
      [
        {
          x: 105,
          y: 7
        },
        {
          x: 195,
          y: 7
        },
        {
          x: 285,
          y: 7
        },
        {
          x: 375,
          y: 7
        }
      ];

    this.walkingFrames = [
      {
        x: 105,
        y: 245
      },
      {
        x: 195,
        y: 245
      },
      {
        x: 285,
        y: 245
      },
      {
        x: 375,
        y: 245
      }
    ];

    this.strikeFrames = [
      {
        x: 4,
        y: 90
      },
      {
        x: 94,
        y: 90
      },
      {
        x: 184,
        y: 90
      },
      {
        x: 274,
        y: 90
      }
    ];

    this.currentAnimation = this.standingFrames;

    this.size = {
      width: 70,
      height: 70
    };
  }

  keyHandlers() {
    document.addEventListener('keydown', event => {
      if (event.key === 'Right' || event.key === 'ArrowRight') {
        this.velocity.x = 5;
        this.flipped = false;
        this.currentAnimation = this.walkingFrames;
        this.ticksPerAnimation = 20;
      } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
        this.velocity.x = - 5;
        this.flipped = true;
        this.currentAnimation = this.walkingFrames;
        this.ticksPerAnimation = 20;
      } else if ((event.key === 'Up' || event.key === 'ArrowUp') && this.velocity.y === 0) {
        this.velocity.y = - 20;
        this.onPlatform = false;
      } else if (event.key === ' ') {
        this.frameIndex = 0;
        this.currentAnimation = this.strikeFrames;
        this.ticksPerAnimation = 3;
      }
    });

    document.addEventListener('keyup', event => {
      if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'Left' || event.key === 'ArrowLeft') {
        this.velocity.x = 0;
        this.currentAnimation = this.standingFrames;
      }
    })
  }

  draw() {
    this.ticks += 1;
    if (this.currentAnimation === this.standingFrames) this.ticksPerAnimation = 20;
    if (this.ticks > this.ticksPerAnimation) {
      this.frameIndex += 1;
      this.ticks = 0;

      if (this.currentAnimation === this.strikeFrames && this.frameIndex > 3) {
        this.currentAnimation = this.standingFrames;
        this.ticksPerAnimation = 20;
      }
    }

    let coords = Object.assign({}, this.currentAnimation[this.frameIndex % 4]);
    if (this.flipped) {
      coords.x = 450 - coords.x - 70;
    }

    this.context.drawImage(
      this.flipped ? this.imageFlipped : this.image,
      coords.x,
      coords.y,
      this.size.width,
      this.size.height,
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    );
  }

  getCollisionModifiers(){
    if (this.flipped) {
      return {
        x: {
          right: 58,
          left: 26
        },
        y: {
          top: 25,
          bottom: 70
        }
      }
    } else {
      return {
        x: {
          right: 34,
          left: 12
        },
        y: {
          top: 25,
          bottom: 70
        }
      }
    }
  }
}