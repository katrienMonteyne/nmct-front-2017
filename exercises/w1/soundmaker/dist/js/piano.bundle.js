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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keyboard = __webpack_require__(1);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kb = new _keyboard2.default(110);
var render = kb.renderHTML();

document.querySelector("#piano").innerHTML = render;

var waveform = waveform || 'square';

var allKeys = document.querySelectorAll(".piano__key");
for (var i = 0, l = allKeys.length; i < l; i++) {
      allKeys[i].addEventListener('mousedown', function () {
            var hz = this.getAttribute("hz");
            //console.info(hz);
            joke.play(hz, 0.5, waveform);
      });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _frequency = __webpack_require__(2);

var freq = _interopRequireWildcard(_frequency);

var _key = __webpack_require__(3);

var _key2 = _interopRequireDefault(_key);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
    function Keyboard() {
        var startFreq = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 110;

        _classCallCheck(this, Keyboard);

        this.startFreq = startFreq;
        freq.setStartKey(this.startFreq);
        this.keys = this.generateKeys(2);
    }

    _createClass(Keyboard, [{
        key: 'renderKeys',
        value: function renderKeys() {
            var i = 0,
                l = this.keys.length,
                bobTheHTMLBuilder = "";
            for (i; i < l; i++) {
                bobTheHTMLBuilder += this.keys[i].renderHTML();
            }
            return bobTheHTMLBuilder;
        }
    }, {
        key: 'renderHTML',
        value: function renderHTML() {
            return '<div class="keyboard">' + this.renderKeys() + '</div>';
        }
    }, {
        key: 'generateKeys',
        value: function generateKeys() {
            var nrOctaves = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var i = 0,
                new_keys = [];

            for (i; i <= 2 + 12 * nrOctaves; i++) {
                var new_key = new _key2.default(_constants.notes[i % 12], freq.calculateFrequency(i));
                new_key.octave = 1 + Math.floor((i - 2) / 12);
                new_key.octave = new_key.octave === 0 ? 1 : new_key.octave;
                new_keys.push(new_key);
            }

            return new_keys;
        }
    }]);

    return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getStartKey = getStartKey;
exports.setStartKey = setStartKey;
exports.calculateFrequency = calculateFrequency;
var _startKey = null;

function getStartKey() {
    return _startKey;
}

function setStartKey(v) {
    return _startKey = v;
}

function calculateFrequency(keyNr) {
    if (_startKey === null) ;

    return _startKey * Math.exp(keyNr * Math.LN2 / 12);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Key = function () {
    function Key(name, freq) {
        _classCallCheck(this, Key);

        this.name = name;
        this.freq = freq;
    }

    _createClass(Key, [{
        key: 'renderHTML',
        value: function renderHTML() {
            if (this.name.endsWith('#')) {
                return '<div class="piano__key piano__key__sharp" note="' + this.name + '" octave="' + this.octave + '"  hz="' + this.freq + '"></div>';
            } else {
                return '<div class="piano__key" note="' + this.name + '" octave="' + this.octave + '"  hz="' + this.freq + '"></div>';
            }
        }
    }]);

    return Key;
}();

exports.default = Key;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var noteRes = exports.noteRes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
var notes = exports.notes = ['LA', 'LA#', 'SI', 'DO', 'DO#', 'RE', 'RE#', 'MI', 'FA', 'FA#', 'SOL', 'SOL#'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjkzNGU3N2FlMzZlMTRkZmZmNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5Ym9hcmQuY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZyZXF1ZW5jeS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleS5jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbImtiIiwicmVuZGVyIiwicmVuZGVySFRNTCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIndhdmVmb3JtIiwiYWxsS2V5cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibCIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoeiIsImdldEF0dHJpYnV0ZSIsImpva2UiLCJwbGF5IiwiZnJlcSIsIktleWJvYXJkIiwic3RhcnRGcmVxIiwic2V0U3RhcnRLZXkiLCJrZXlzIiwiZ2VuZXJhdGVLZXlzIiwiYm9iVGhlSFRNTEJ1aWxkZXIiLCJyZW5kZXJLZXlzIiwibnJPY3RhdmVzIiwibmV3X2tleXMiLCJuZXdfa2V5IiwiY2FsY3VsYXRlRnJlcXVlbmN5Iiwib2N0YXZlIiwiTWF0aCIsImZsb29yIiwicHVzaCIsImdldFN0YXJ0S2V5IiwiX3N0YXJ0S2V5IiwidiIsImtleU5yIiwiZXhwIiwiTE4yIiwiS2V5IiwibmFtZSIsImVuZHNXaXRoIiwibm90ZVJlcyIsIm5vdGVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTFELEVBQWlFLEtBQWpFLEVBQXdFLE1BQXhFLENBQWQsQyIsImZpbGUiOiJwaWFuby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmOTM0ZTc3YWUzNmUxNGRmZmY3MSIsImltcG9ydCBLZXlib2FyZCBmcm9tICcuL2tleWJvYXJkLmNsYXNzJztcblxuY29uc3Qga2IgPSBuZXcgS2V5Ym9hcmQoMTEwKTtcbmNvbnN0IHJlbmRlciA9IGtiLnJlbmRlckhUTUwoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWFub1wiKS5pbm5lckhUTUwgPSByZW5kZXI7XG5cbnZhciB3YXZlZm9ybSA9IHdhdmVmb3JtIHx8ICdzcXVhcmUnO1xuXG52YXIgYWxsS2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGlhbm9fX2tleVwiKTtcbmZvciAodmFyIGkgPSAwLCBsID0gYWxsS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhbGxLZXlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaHogPSB0aGlzLmdldEF0dHJpYnV0ZShcImh6XCIpO1xuICAgICAgICAgIC8vY29uc29sZS5pbmZvKGh6KTtcbiAgICAgICAgICBqb2tlLnBsYXkoaHosIDAuNSwgd2F2ZWZvcm0pO1xuICAgIH0pO1xufVxuXG5cbiAgXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2FwcC5qcyIsImltcG9ydCAqIGFzIGZyZXEgZnJvbSAnLi9mcmVxdWVuY3kubW9kdWxlJztcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXkuY2xhc3MnO1xuaW1wb3J0IHtub3Rlc30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydEZyZXEgPSAxMTApe1xuICAgICAgICB0aGlzLnN0YXJ0RnJlcSA9IHN0YXJ0RnJlcTtcbiAgICAgICAgZnJlcS5zZXRTdGFydEtleSh0aGlzLnN0YXJ0RnJlcSk7XG4gICAgICAgIHRoaXMua2V5cyA9IHRoaXMuZ2VuZXJhdGVLZXlzKDIpO1xuICAgIH1cblxuICAgIHJlbmRlcktleXMoKXtcbiAgICAgICAgdmFyIGkgPSAwLCBsID0gdGhpcy5rZXlzLmxlbmd0aCwgYm9iVGhlSFRNTEJ1aWxkZXIgPSBcIlwiO1xuICAgICAgICBmb3IoaTsgaSA8IGw7IGkrKyl7XG4gICAgICAgICAgYm9iVGhlSFRNTEJ1aWxkZXIgKz0gdGhpcy5rZXlzW2ldLnJlbmRlckhUTUwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9iVGhlSFRNTEJ1aWxkZXI7XG4gICAgfVxuXG4gICAgcmVuZGVySFRNTCgpe1xuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJrZXlib2FyZFwiPicrdGhpcy5yZW5kZXJLZXlzKCkrJzwvZGl2Pic7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVLZXlzKG5yT2N0YXZlcyA9IDEpe1xuICAgICAgICB2YXIgaSA9IDAsIG5ld19rZXlzID0gW107XG4gICAgICAgIFxuICAgICAgICAgIGZvcihpIDsgaSA8PSAyICsgMTIgKiBuck9jdGF2ZXM7IGkrKyl7XG4gICAgICAgICAgICB2YXIgbmV3X2tleSA9IG5ldyBLZXkobm90ZXNbaSUxMl0sIGZyZXEuY2FsY3VsYXRlRnJlcXVlbmN5KGkpKTtcbiAgICAgICAgICAgIG5ld19rZXkub2N0YXZlID0gMSArIE1hdGguZmxvb3IoKGkgLSAyKSAvIDEyKTtcbiAgICAgICAgICAgIG5ld19rZXkub2N0YXZlID0gbmV3X2tleS5vY3RhdmUgPT09IDAgPyAxOiBuZXdfa2V5Lm9jdGF2ZTtcbiAgICAgICAgICAgIG5ld19rZXlzLnB1c2gobmV3X2tleSk7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbmV3X2tleXM7XG4gICAgfVxufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMva2V5Ym9hcmQuY2xhc3MuanMiLCJsZXQgX3N0YXJ0S2V5ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0S2V5KCl7XG4gICAgcmV0dXJuIF9zdGFydEtleTtcbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGFydEtleSh2KXtcbiAgICByZXR1cm4gX3N0YXJ0S2V5ID0gdjtcbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGcmVxdWVuY3koa2V5TnIpe1xuICAgIGlmKF9zdGFydEtleSA9PT0gbnVsbCk7XG4gICAgXG4gICAgcmV0dXJuIF9zdGFydEtleSAqIE1hdGguZXhwKGtleU5yICogTWF0aC5MTjIgLyAxMik7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2ZyZXF1ZW5jeS5tb2R1bGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXl7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZnJlcSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZnJlcSA9IGZyZXE7XG4gICAgfVxuXG4gICAgcmVuZGVySFRNTCgpe1xuICAgICAgICBpZih0aGlzLm5hbWUuZW5kc1dpdGgoJyMnKSl7XG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJwaWFub19fa2V5IHBpYW5vX19rZXlfX3NoYXJwXCIgbm90ZT1cIicrdGhpcy5uYW1lKydcIiBvY3RhdmU9XCInK3RoaXMub2N0YXZlKydcIiAgaHo9XCInK3RoaXMuZnJlcSsnXCI+PC9kaXY+JztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInBpYW5vX19rZXlcIiBub3RlPVwiJyt0aGlzLm5hbWUrJ1wiIG9jdGF2ZT1cIicrdGhpcy5vY3RhdmUrJ1wiICBoej1cIicrdGhpcy5mcmVxKydcIj48L2Rpdj4nO1xuICAgICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2tleS5jbGFzcy5qcyIsImV4cG9ydCBjb25zdCBub3RlUmVzID0gWydBJywgJ0EjJywgJ0InLCAnQycsICdDIycsICdEJywgJ0QjJywgJ0UnLCAnRicsICdGIycsICdHJywgJ0cjJ107XG5leHBvcnQgY29uc3Qgbm90ZXMgPSBbJ0xBJywgJ0xBIycsICdTSScsICdETycsICdETyMnLCAnUkUnLCAnUkUjJywgJ01JJywgJ0ZBJywgJ0ZBIycsICdTT0wnLCAnU09MIyddO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb25zdGFudHMuanMiXSwic291cmNlUm9vdCI6IiJ9