import MovingObject from "./moving_object";

export default class SkeletonGrunt extends MovingObject {
  constructor(pos, context, game, flipped=false) {
    super(pos, context, game);

    this.flipped = flipped;

    this.image = new Image();
    this.image.src = '../src/assets/skeleton.png';

    this.imageFlipped = new Image();
    this.imageFlipped.src = '../src/assets/skeletonFlipped.png';

    this.standingFrames = [
      {x: 0, y: 40},
      {x: 42, y: 40},
      {x: 84, y: 40},
      {x: 126, y: 40},
      {x: 168, y: 40},
      {x: 210, y: 40},
      {x: 0, y: 72},
      {x: 42, y: 72},
      {x: 84, y: 72},
      {x: 126, y: 72},
      {x: 168, y: 72},
      {x: 210, y: 72}
    ];

    this.size = {
      height: 24,
      width: 35
    };

    this.ticksPerAnimation = 5;

    this.currentAnimation = this.standingFrames;
    this.velocity.x = this.flipped ? -1 : 1;
    window.skeleton = this;
  }

  draw() {
    if (this.velocity.x === 0) {
      this.flipped = !this.flipped;
      this.velocity.x = this.flipped ? -1 : 1;
      console.log('flip');
    }
    this.ticks += 1;
    if (this.ticks > this.ticksPerAnimation) {
      this.frameIndex += 1;
      this.ticks = 0;
    }

    let coords = Object.assign({}, this.currentAnimation[this.frameIndex % 12]);
    if (this.flipped) {
      coords.x = 256 - coords.x - 42;
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

}