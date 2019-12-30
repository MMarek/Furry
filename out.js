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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Coin.js":
/*!********************!*\
  !*** ./js/Coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Coin() {\n    this.x=Math.floor(Math.random()*10);\n    this.y=Math.floor(Math.random()*10);\n}\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/Coin.js?");

/***/ }),

/***/ "./js/Furry.js":
/*!*********************!*\
  !*** ./js/Furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Furry  () {\n    this.x=0;\n    this.y=0;\n    this.direction='right';\n}\n\nmodule.exports = Furry;\n\n//# sourceURL=webpack:///./js/Furry.js?");

/***/ }),

/***/ "./js/Game.js":
/*!********************!*\
  !*** ./js/Game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Furry = __webpack_require__(/*! ./furry */ \"./js/furry.js\");\nconst Coin = __webpack_require__(/*! ./coin */ \"./js/coin.js\");\n\n\n// główne czynności gry: wyświetlanie furriego i monet\n\nconst Game = function () {\n    this.board = document.querySelector('#board').querySelectorAll('div');\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n\n\n    this.index = function (x, y) {\n        return x + (y * 10);\n    };\n    this.showFurry = function () {\n        this.hideVisibleFurry();\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n\n    const self = this;\n\n    // czynności/akcja/opcje poruszania się bohatera /instrukcja warunkowa\n\n    this.moveFurry = function () {\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n        } else if (this.furry.direction === \"up\") {\n            this.furry.y = this.furry.y - 1;\n        } else if (this.furry.direction === \"down\") {\n            this.furry.y = this.furry.y + 1;\n        }\n\n        this.gameOver();\n        this.showFurry();\n        this.checkCoinCollision();\n    };\n// funkcja inicjująca rozpoczęcie gry\n    this.startGame = function () {\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n            self.showFurry();\n            console.log(\"asdf\");\n        }, 250);\n\n    };\n// funkcja niwelująca duplikacje Furriego\n    this.hideVisibleFurry = function () {\n        const first = document.querySelector('.furry');\n\n        if (first !== null) {\n\n            first.classList.remove('furry')\n        }\n\n    };\n\n\n    // przypisanie odpowiednich klawiszy do opcji poruszania\n\n    this.turnFurry = function () {\n        switch (event.which) {\n            case 37:\n                this.furry.direction = 'left';\n                break;\n            case 38:\n                this.furry.direction = 'up';\n                break;\n            case 39:\n                this.furry.direction = 'right';\n                break;\n            case 40:\n                this.furry.direction = 'down';\n                break;\n\n        }\n    };\n\n    // funkcja ukrywająca zdobytą monete (podobnie jak z Furrym)\n    this.checkCoinCollision = function () {\n\n        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)) {\n            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\n            this.score++;\n            document.querySelector('#score div strong').innerText = this.score;\n            this.coin = new Coin();\n            this.showCoin()\n        }\n    };\n\n    //koniec gry - instrukcja warunkowa/ czynności następujące po zakończeniu gry\n    this.gameOver = function () {\n        if ((this.furry.x < 0) || (this.furry.y < 0) || (this.furry.x > 9) || (this.furry.y > 9)) {\n\n            clearInterval(this.idSetInterval);\n            this.hideVisibleFurry();\n            const over = document.getElementById('over');\n            over.classList.remove('invisible');\n            over.querySelector('h1').innerText = 'GAME OVER';\n            over.querySelector('h2').innerText = \"SCORE:\";\n            over.querySelector('h3').innerText = this.score\n        }\n    }\n}\nconst fur = new Game();\nfur.showFurry();\nfur.showCoin();\nfur.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n    fur.turnFurry(event);\n});\n\nmodule.exports = Game;\n\n\n\n\n\n//# sourceURL=webpack:///./js/Game.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("document.addEventListener('DOMContentLoaded',function () {\n\n    const Furry = __webpack_require__(/*! ./Furry.js */ \"./js/Furry.js\");\n    const Coin = __webpack_require__(/*! ./Coin.js */ \"./js/Coin.js\");\n    const Game = __webpack_require__(/*! ./Game.js */ \"./js/Game.js\")\n\n});\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Coin() {\n    this.x=Math.floor(Math.random()*10);\n    this.y=Math.floor(Math.random()*10);\n}\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Furry  () {\n    this.x=0;\n    this.y=0;\n    this.direction='right';\n}\n\nmodule.exports = Furry;\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ })

/******/ });