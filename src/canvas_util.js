export default class CanvasUtil {
  constructor() {
    this.context = document.getElementById('game-canvas').getContext('2d');
    this.canvas = document.getElementById('game-canvas');

    this.getMousePosition = this.getMousePosition.bind(this);

    this.models = {};
  }

  getMousePosition(event) {
    let canvasRect = this.canvas.getBoundingClientRect();
    return {
      x: event.clientX - canvasRect.left,
      y: event.clientY - canvasRect.top
    }
  }

  isClickingButton(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
  }

  // drawButton(name, rect, callback) {
  //   this.context.
  // }
  //
  // addButtonListener(rect) {
  //   this.canvas.addEventListener('click', event => {
  //     let currPos = this.getMousePosition(event);
  //     if (this.isClickingButton(currPos, rect)) {
  //       callback();
  //     }
  //   })
  // }
}