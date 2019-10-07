/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ \"./src/knight.js\");\n/* harmony import */ var _levels_level_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/level_1 */ \"./src/levels/level_1.js\");\n/* harmony import */ var _skeleton_grunt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skeleton_grunt */ \"./src/skeleton_grunt.js\");\n\n\n\n\nclass Game {\n  constructor(context) {\n    this.context = context;\n    this.levels = [\n      new _levels_level_1__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context)\n    ];\n\n    this.currentLevel = new _levels_level_1__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.context, this);\n\n    this.score = 0;\n\n    this.running = false;\n\n    document.querySelector('.start').addEventListener('click', event => {\n      this.running = true;\n      document.getElementById('start').className = 'hidden';\n      this.animate.bind(this)();\n      this.currentLevel.startSpawners();\n    });\n    document.querySelector('.pause').addEventListener('click', event => {\n      this.running = false;\n      document.getElementById('start').className = 'start-container';\n    });\n    document.querySelector('.restart').addEventListener('click', event => {\n      this.restart()\n    });\n\n    this.restart()\n  }\n\n  restart() {\n    this.running = false;\n    this.score = 0;\n    document.getElementById('modal').className = 'hidden';\n    document.getElementById('start').className = 'start-container';\n    this.enemies = [\n      new _skeleton_grunt__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({x: 400, y: 300}, context, this),\n    ];\n    this.knight = new _knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({x: 500, y: 300}, context, this);\n\n    this.animate();\n  }\n\n  drawScore() {\n    this.context.fillStyle = \"white\";\n    this.context.font = \"20px VT323\";\n    this.context.fillText(this.score, 100, 40);\n  }\n\n  animate() {\n    this.context.clearRect(0, 0, 1000, 600);\n    this.currentLevel.animate();\n\n    this.enemies.forEach(enemy => {\n      enemy.animate();\n    });\n    this.knight.animate();\n    this.drawScore();\n    this.checkGameOver();\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  checkGameOver() {\n    this.enemies.forEach(enemy => {\n      if (\n        enemy.pos.x + enemy.getCollisionModifiers().x.left < this.knight.pos.x + this.knight.getCollisionModifiers().x.right &&\n        enemy.pos.x + enemy.getCollisionModifiers().x.right > this.knight.pos.x + this.knight.getCollisionModifiers().x.left &&\n        enemy.pos.y + enemy.getCollisionModifiers().y.bottom < this.knight.pos.y + this.knight.getCollisionModifiers().y.top &&\n        enemy.pos.y + enemy.getCollisionModifiers().y.top > this.knight.pos.y + this.knight.getCollisionModifiers().y.bottom\n      ) {\n        this.running = false;\n        let gameOver = document.querySelector(\".game-over\");\n        let modal = document.getElementById(\"modal\");\n        gameOver.innerText = \"YOU LOSE!\";\n        modal.className = 'modal'\n      }\n    });\n\n    if (this.score >= 10000) {\n      this.running = false;\n      let gameOver = document.querySelector(\".game-over\");\n      gameOver.innerText = \"YOU WIN!\";\n\n      let modal = document.getElementById(\"modal\");\n      modal.className = 'modal'\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let context = document.getElementById(\"game-canvas\").getContext(\"2d\");\n  window.context = context;\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context)\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Knight; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass Knight extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, context, game) {\n    super(pos, context, game);\n    this.keyHandlers();\n    window.knight = this;\n    this.image = new Image();\n    this.image.src = '../src/assets/animated_pixel_knight/knight-sprite-sheet.png';\n\n    this.imageFlipped = new Image();\n    this.imageFlipped.src = '../src/assets/animated_pixel_knight/knight-sprite-sheet-flipped.png';\n\n    // Animations\n    this.standingFrames =\n      [\n        {\n          x: 105,\n          y: 7\n        },\n        {\n          x: 195,\n          y: 7\n        },\n        {\n          x: 285,\n          y: 7\n        },\n        {\n          x: 375,\n          y: 7\n        }\n      ];\n\n    this.walkingFrames = [\n      {\n        x: 105,\n        y: 245\n      },\n      {\n        x: 195,\n        y: 245\n      },\n      {\n        x: 285,\n        y: 245\n      },\n      {\n        x: 375,\n        y: 245\n      }\n    ];\n\n    this.strikeFrames = [\n      {\n        x: 4,\n        y: 90\n      },\n      {\n        x: 94,\n        y: 90\n      },\n      {\n        x: 184,\n        y: 90\n      },\n      {\n        x: 274,\n        y: 90\n      }\n    ];\n\n    this.currentAnimation = this.standingFrames;\n\n    this.size = {\n      width: 70,\n      height: 70\n    };\n  }\n\n  keyHandlers() {\n    document.addEventListener('keydown', event => {\n      if (event.key === 'Right' || event.key === 'ArrowRight') {\n        this.velocity.x = 5;\n        this.flipped = false;\n        this.currentAnimation = this.walkingFrames;\n        this.ticksPerAnimation = 20;\n      } else if (event.key === 'Left' || event.key === 'ArrowLeft') {\n        this.velocity.x = - 5;\n        this.flipped = true;\n        this.currentAnimation = this.walkingFrames;\n        this.ticksPerAnimation = 20;\n      } else if ((event.key === 'Up' || event.key === 'ArrowUp') && this.velocity.y === 0) {\n        this.velocity.y = - 20;\n        this.onPlatform = false;\n      } else if (event.key === ' ') {\n        this.frameIndex = 0;\n        this.currentAnimation = this.strikeFrames;\n        this.ticksPerAnimation = 3;\n      }\n    });\n\n    document.addEventListener('keyup', event => {\n      if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'Left' || event.key === 'ArrowLeft') {\n        this.velocity.x = 0;\n        this.currentAnimation = this.standingFrames;\n      }\n    })\n  }\n\n  draw() {\n    this.ticks += 1;\n    if (this.currentAnimation === this.standingFrames) this.ticksPerAnimation = 20;\n    if (this.ticks > this.ticksPerAnimation) {\n      this.frameIndex += 1;\n      this.ticks = 0;\n\n      if (this.currentAnimation === this.strikeFrames && this.frameIndex > 3) {\n        this.currentAnimation = this.standingFrames;\n        this.ticksPerAnimation = 20;\n      }\n    }\n\n    let coords = Object.assign({}, this.currentAnimation[this.frameIndex % 4]);\n    if (this.flipped) {\n      coords.x = 450 - coords.x - 70;\n    }\n\n    this.context.drawImage(\n      this.flipped ? this.imageFlipped : this.image,\n      coords.x,\n      coords.y,\n      this.size.width,\n      this.size.height,\n      this.pos.x,\n      this.pos.y,\n      this.size.width,\n      this.size.height\n    );\n  }\n\n  getCollisionModifiers(){\n    if (this.flipped) {\n      return {\n        x: {\n          right: 58,\n          left: 26\n        },\n        y: {\n          top: 25,\n          bottom: 70\n        }\n      }\n    } else {\n      return {\n        x: {\n          right: 34,\n          left: 12\n        },\n        y: {\n          top: 25,\n          bottom: 70\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/knight.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nclass Level {\n  constructor(context, game) {\n    this.structures = [];\n\n    this.spawners = [];\n    this.spawnInfo = [];\n\n    this.game = game;\n\n    this.context = context;\n  }\n\n  checkCollision(movingObject) {\n    this.structures.forEach(structure => {\n      if (\n        movingObject.pos.x + movingObject.getCollisionModifiers().x.left <= structure[1].x &&\n        movingObject.pos.x + movingObject.getCollisionModifiers().x.right >= structure[0].x &&\n        movingObject.pos.y + movingObject.getCollisionModifiers().y.bottom >= structure[0].y &&\n        movingObject.pos.y + movingObject.getCollisionModifiers().y.top <= structure[1].y\n      ) {\n        if (\n          movingObject.pos.y + movingObject.getCollisionModifiers().y.bottom >= structure[0].y &&\n          movingObject.pos.y + movingObject.getCollisionModifiers().y.top <= structure[1].y &&\n          movingObject.velocity.y > 0\n        ) {\n          if (Math.abs(movingObject.pos.y - structure[0].y) < Math.abs(movingObject.pos.y - structure[1].y)) {\n            movingObject.onPlatform = true;\n            movingObject.pos.y = structure[0].y - movingObject.size.height;\n          } else {\n            movingObject.pos.y = structure[1].y;\n          }\n          movingObject.velocity.y = 0;\n        }\n      } else {\n        movingObject.onPlatform = false;\n      }\n    })\n  }\n\n  startSpawners() {\n    this.spawnInfo.forEach(spawnInfo => {\n      this.spawners.push(setInterval(() => {\n        let enemy = new spawnInfo.Enemy(spawnInfo.location, this.context, this.game, spawnInfo.flipped);\n        this.game.enemies.push(enemy)\n      }, spawnInfo.spawnTime))\n    })\n  }\n\n  stopSpawners() {\n    this.spawners.forEach(spawner => {\n      clearInterval(spawner);\n    })\n  }\n\n  animate() {\n    this.context.fillStyle = '#9E7654';\n    this.structures.forEach(structure => {\n      this.context.fillRect(structure[0].x, structure[0].y, structure[1].x - structure[0].x, structure[1].y - structure[0].y);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/levels/level_1.js":
/*!*******************************!*\
  !*** ./src/levels/level_1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LevelOne; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../level */ \"./src/level.js\");\n/* harmony import */ var _skeleton_grunt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skeleton_grunt */ \"./src/skeleton_grunt.js\");\n\n\n\nclass LevelOne extends _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(context) {\n    super(context);\n    this.structures = [\n      [\n        {x: 0, y: 490},\n        {x: 200, y: 500}\n      ],\n      [\n        {x: 800, y: 490},\n        {x: 1000, y: 500}\n      ]\n    ];\n\n    this.spawnInfo = [\n      {\n        location: {x: 10, y: 400},\n        Enemy: _skeleton_grunt__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        flipped: false,\n        spawnTime: 2000\n      },\n      {\n        location: {x: 10, y: 510},\n        Enemy: _skeleton_grunt__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        flipped: false,\n        spawnTime: 2000\n      },\n      {\n        location: {x: 990, y: 400},\n        Enemy: _skeleton_grunt__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        flipped: true,\n        spawnTime: 2000\n      },\n      {\n        location: {x: 990, y: 510},\n        Enemy: _skeleton_grunt__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        flipped: true,\n        spawnTime: 2000\n      }\n    ]\n  }\n\n}\n\n//# sourceURL=webpack:///./src/levels/level_1.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\nconst CONSTANTS = {\n  GRAVITY:  1.4,\n  TERMINAL_VEL:  12,\n};\n\nclass MovingObject {\n  constructor(pos, context, game) {\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.pos = {\n      x: pos.x,\n      y: pos.y\n    };\n\n    this.size = {\n      height: 100,\n      width: 100\n    };\n\n    this.context = context;\n    this.game = game;\n    this.onPlatform = false;\n\n    this.ticks = 0;\n    this.ticksPerAnimation = 20;\n    this.frameIndex = 0;\n    this.flipped = false;\n  }\n\n  move() {\n    let x = this.pos.x + this.velocity.x;\n    let y = this.pos.y + this.velocity.y;\n\n    let bounds = {\n      x: 1000 - this.size.width,\n      y: 600 - this.size.height\n    };\n\n    if(y >= bounds.y) {\n      this.onPlatform = true;\n    }\n\n    if(!this.onPlatform && this.velocity.y < CONSTANTS.TERMINAL_VEL) {\n      this.velocity.y += CONSTANTS.GRAVITY;\n    } else if (this.onPlatform) {\n      this.velocity.y = 0;\n    }\n\n    if (x > bounds.x || x < 0) this.velocity.x = 0;\n\n    this.pos = {\n      x: x < bounds.x && x > 0 ? x : x < bounds.x ? 0 : bounds.x,\n      y: y < bounds.y && y > 0 ? y : y < bounds.y ? 0 : bounds.y\n    }\n  }\n\n  draw() {\n    this.context.fillStyle = 'white';\n    this.context.fillRect(this.pos.x, this.pos.y, 100, 100)\n  }\n\n  animate() {\n    this.move();\n    this.game.currentLevel.checkCollision(this);\n    this.draw();\n  }\n\n  getCollisionModifiers(){\n    return {\n      x: {\n        right: 0,\n        left: this.size.width\n      },\n      y: {\n        top: 0,\n        bottom: this.size.height\n      }\n    }\n  }\n\n  death() {\n\n  }\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/skeleton_grunt.js":
/*!*******************************!*\
  !*** ./src/skeleton_grunt.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SkeletonGrunt; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\n\nclass SkeletonGrunt extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(pos, context, game, flipped=false) {\n    super(pos, context, game);\n\n    this.flipped = flipped;\n\n    this.image = new Image();\n    this.image.src = '../src/assets/skeleton.png';\n\n    this.imageFlipped = new Image();\n    this.imageFlipped.src = '../src/assets/skeletonFlipped.png';\n\n    this.standingFrames = [\n      {x: 0, y: 40},\n      {x: 42, y: 40},\n      {x: 84, y: 40},\n      {x: 126, y: 40},\n      {x: 168, y: 40},\n      {x: 210, y: 40},\n      {x: 0, y: 72},\n      {x: 42, y: 72},\n      {x: 84, y: 72},\n      {x: 126, y: 72},\n      {x: 168, y: 72},\n      {x: 210, y: 72}\n    ];\n\n    this.size = {\n      height: 24,\n      width: 35\n    };\n\n    this.ticksPerAnimation = 5;\n\n    this.currentAnimation = this.standingFrames;\n    this.velocity.x = this.flipped ? -1 : 1;\n    window.skeleton = this;\n  }\n\n  draw() {\n    if (this.velocity.x === 0) {\n      this.flipped = !this.flipped;\n      this.velocity.x = this.flipped ? -1 : 1;\n      console.log('flip');\n    }\n    this.ticks += 1;\n    if (this.ticks > this.ticksPerAnimation) {\n      this.frameIndex += 1;\n      this.ticks = 0;\n    }\n\n    let coords = Object.assign({}, this.currentAnimation[this.frameIndex % 12]);\n    if (this.flipped) {\n      coords.x = 256 - coords.x - 42;\n    }\n\n    this.context.drawImage(\n      this.flipped ? this.imageFlipped : this.image,\n      coords.x,\n      coords.y,\n      this.size.width,\n      this.size.height,\n      this.pos.x,\n      this.pos.y,\n      this.size.width,\n      this.size.height\n    );\n  }\n\n}\n\n//# sourceURL=webpack:///./src/skeleton_grunt.js?");

/***/ })

/******/ });