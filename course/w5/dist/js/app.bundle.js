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

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _flickr = __webpack_require__(2);

var flickr = _interopRequireWildcard(_flickr);

var _FlickrPhoto = __webpack_require__(3);

var _FlickrPhoto2 = _interopRequireDefault(_FlickrPhoto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var searchButton, filter, imagesList;

function renderImages(images) {
    var bobTheHTMLBuilder = "",
        l = images.photos.photo.length;

    for (var i = 0; i < l; i++) {
        var o = images.photos.photo[i];
        var fphoto = new _FlickrPhoto2.default(o.id, o.owner, o.secret, o.server, o.farm);

        bobTheHTMLBuilder += '<div class="images-list__media">';
        bobTheHTMLBuilder += '<figure><img src="' + fphoto.toUrl() + '" class="images-list__img" /><figcaption>' + fphoto.id + '</figcaption></figure>';
        bobTheHTMLBuilder += '</div>';
    }

    imagesList.innerHTML = bobTheHTMLBuilder;
}

function parseUrl(flickrObject) {
    return "https://farm" + flickrObject.farm + ".staticflickr.com/" + flickrObject.server + "/" + flickrObject.id + "_" + flickrObject.secret + ".jpg";
}

function handleError(error) {
    console.error(error);
}

function loadImages() {
    var searchText = filter.value;

    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fb2d2f6cb263615ea7e383ea5205168&tags=" + searchText + "&format=json&nojsoncallback=1";
    //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5fb2d2f6cb263615ea7e383ea5205168&tags=nmct&format=json&nojsoncallback=1
    flickr.fetchPhotos(url).then(renderImages, handleError);
}

function addEventListeners() {
    searchButton.addEventListener("click", loadImages);
}

function init() {
    searchButton = document.getElementById("searchButton");
    filter = document.getElementById("filter");
    imagesList = document.querySelector(".images-list");

    addEventListeners();
}

init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPhotos = loadPhotos;
exports.fetchPhotos = fetchPhotos;
function loadPhotos(url) {
    if (!url) throw new Error("no url");

    var p = new Promise(function (ok, nok) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onerror = function (err) {
            nok(err);
        };
        xmlHttp.onload = function (res) {
            if (xmlHttp.readyState === 4) {
                ok(JSON.parse(xmlHttp.responseText));
            }
        };

        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    });

    return p;
}

function fetchPhotos(url) {
    return fetch(url).then(function (response) {

        return response.json();
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Photo2 = __webpack_require__(4);

var _Photo3 = _interopRequireDefault(_Photo2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlickrPhoto = function (_Photo) {
    _inherits(FlickrPhoto, _Photo);

    function FlickrPhoto(id, owner, secret, server, farm) {
        _classCallCheck(this, FlickrPhoto);

        var _this = _possibleConstructorReturn(this, (FlickrPhoto.__proto__ || Object.getPrototypeOf(FlickrPhoto)).call(this));

        _this.id = id;
        _this.owner = owner;
        _this.secret = secret;
        _this.server = server;
        _this.farm = farm;
        return _this;
    }

    _createClass(FlickrPhoto, [{
        key: 'toUrl',
        value: function toUrl() {
            return 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '.jpg';
        }
    }]);

    return FlickrPhoto;
}(_Photo3.default);

exports.default = FlickrPhoto;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Photo = function () {
    function Photo() {
        _classCallCheck(this, Photo);
    }

    _createClass(Photo, [{
        key: 'toUrl',
        value: function toUrl() {
            throw new Error('You have not implemented toUrl');
        }
    }]);

    return Photo;
}();

exports.default = Photo;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDE1MzRmNWJlMDE1MDFiNDY2MjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvZmxpY2tyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9GbGlja3JQaG90by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWxzL1Bob3RvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzIl0sIm5hbWVzIjpbImZsaWNrciIsInNlYXJjaEJ1dHRvbiIsImZpbHRlciIsImltYWdlc0xpc3QiLCJyZW5kZXJJbWFnZXMiLCJpbWFnZXMiLCJib2JUaGVIVE1MQnVpbGRlciIsImwiLCJwaG90b3MiLCJwaG90byIsImxlbmd0aCIsImkiLCJvIiwiZnBob3RvIiwiaWQiLCJvd25lciIsInNlY3JldCIsInNlcnZlciIsImZhcm0iLCJ0b1VybCIsImlubmVySFRNTCIsInBhcnNlVXJsIiwiZmxpY2tyT2JqZWN0IiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2FkSW1hZ2VzIiwic2VhcmNoVGV4dCIsInZhbHVlIiwidXJsIiwiZmV0Y2hQaG90b3MiLCJ0aGVuIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yIiwibG9hZFBob3RvcyIsIkVycm9yIiwicCIsIlByb21pc2UiLCJvayIsIm5vayIsInhtbEh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9uZXJyb3IiLCJlcnIiLCJvbmxvYWQiLCJyZXMiLCJyZWFkeVN0YXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsIkZsaWNrclBob3RvIiwiUGhvdG8iXSwibWFwcGlu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Ozs7Ozs7O0lDRkFDLEs7Ozs7Ozs7Z0NBQ1Y7QUFDSCxrQkFBTSxJQUFJckIsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDSDs7Ozs7O2tCQUhnQnFCLEs7Ozs7OztBQ0FyQix5QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDE1MzRmNWJlMDE1MDFiNDY2MjEiLCJpbXBvcnQgKiBhcyBmbGlja3IgZnJvbSAnLi9zZXJ2aWNlcy9mbGlja3Iuc2VydmljZSc7XG5pbXBvcnQgRmxpY2tyUGhvdG8gZnJvbSAnLi9tb2RlbHMvRmxpY2tyUGhvdG8nO1xuXG52YXIgc2VhcmNoQnV0dG9uLCBmaWx0ZXIsIGltYWdlc0xpc3Q7XG5cbmZ1bmN0aW9uIHJlbmRlckltYWdlcyhpbWFnZXMpe1xuICAgIHZhciBib2JUaGVIVE1MQnVpbGRlciA9IFwiXCIsXG4gICAgICAgIGwgPSBpbWFnZXMucGhvdG9zLnBob3RvLmxlbmd0aDtcblxuICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgbCA7IGkrKyl7XG4gICAgICAgIHZhciBvID0gaW1hZ2VzLnBob3Rvcy5waG90b1tpXTtcbiAgICAgICAgdmFyIGZwaG90byA9IG5ldyBGbGlja3JQaG90byhvLmlkLG8ub3duZXIsby5zZWNyZXQsIG8uc2VydmVyLG8uZmFybSk7XG5cblxuICAgICAgICBib2JUaGVIVE1MQnVpbGRlciArPSAnPGRpdiBjbGFzcz1cImltYWdlcy1saXN0X19tZWRpYVwiPic7XG4gICAgICAgIGJvYlRoZUhUTUxCdWlsZGVyICs9ICc8ZmlndXJlPjxpbWcgc3JjPVwiJytmcGhvdG8udG9VcmwoKSsnXCIgY2xhc3M9XCJpbWFnZXMtbGlzdF9faW1nXCIgLz48ZmlnY2FwdGlvbj4nK2ZwaG90by5pZCsnPC9maWdjYXB0aW9uPjwvZmlndXJlPidcbiAgICAgICAgYm9iVGhlSFRNTEJ1aWxkZXIgKz0gJzwvZGl2Pic7XG4gICAgfVxuXG4gICAgaW1hZ2VzTGlzdC5pbm5lckhUTUwgPSBib2JUaGVIVE1MQnVpbGRlcjtcbn1cblxuZnVuY3Rpb24gcGFyc2VVcmwoZmxpY2tyT2JqZWN0KXtcbiAgICByZXR1cm4gXCJodHRwczovL2Zhcm1cIitmbGlja3JPYmplY3QuZmFybStcIi5zdGF0aWNmbGlja3IuY29tL1wiK2ZsaWNrck9iamVjdC5zZXJ2ZXIrXCIvXCIrZmxpY2tyT2JqZWN0LmlkK1wiX1wiK2ZsaWNrck9iamVjdC5zZWNyZXQrXCIuanBnXCI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKXtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn1cblxuZnVuY3Rpb24gbG9hZEltYWdlcygpe1xuICAgIHZhciBzZWFyY2hUZXh0ID0gZmlsdGVyLnZhbHVlO1xuICAgXG4gICAgdmFyIHVybCA9IFwiaHR0cHM6Ly9hcGkuZmxpY2tyLmNvbS9zZXJ2aWNlcy9yZXN0Lz9tZXRob2Q9ZmxpY2tyLnBob3Rvcy5zZWFyY2gmYXBpX2tleT01ZmIyZDJmNmNiMjYzNjE1ZWE3ZTM4M2VhNTIwNTE2OCZ0YWdzPVwiK3NlYXJjaFRleHQrXCImZm9ybWF0PWpzb24mbm9qc29uY2FsbGJhY2s9MVwiO1xuLy9odHRwczovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL3Jlc3QvP21ldGhvZD1mbGlja3IucGhvdG9zLnNlYXJjaCZhcGlfa2V5PTVmYjJkMmY2Y2IyNjM2MTVlYTdlMzgzZWE1MjA1MTY4JnRhZ3M9bm1jdCZmb3JtYXQ9anNvbiZub2pzb25jYWxsYmFjaz0xXG4gICAgZmxpY2tyLmZldGNoUGhvdG9zKHVybCkudGhlbihyZW5kZXJJbWFnZXMsIGhhbmRsZUVycm9yKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiBpbml0KCl7XG4gICAgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdXR0b25cIik7XG4gICAgZmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXJcIik7XG4gICAgaW1hZ2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VzLWxpc3RcIilcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmluaXQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUGhvdG9zKHVybCl7XG4gICAgaWYoIXVybCkgdGhyb3cgbmV3IEVycm9yKFwibm8gdXJsXCIpO1xuXG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZSgob2ssIG5vayk9PntcbiAgICAgICAgY29uc3QgeG1sSHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4bWxIdHRwLm9uZXJyb3IgPSAoZXJyKT0+e25vayhlcnIpO31cbiAgICAgICAgeG1sSHR0cC5vbmxvYWQgPSAgKHJlcyk9PntcbiAgICAgICAgICAgIGlmKHhtbEh0dHAucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgb2soSlNPTi5wYXJzZSh4bWxIdHRwLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeG1sSHR0cC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhtbEh0dHAuc2VuZCgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBob3Rvcyh1cmwpe1xuICAgcmV0dXJuIGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cbiAgIH0pO1xufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zZXJ2aWNlcy9mbGlja3Iuc2VydmljZS5qcyIsImltcG9ydCBQaG90byBmcm9tICcuL1Bob3RvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpY2tyUGhvdG8gZXh0ZW5kcyBQaG90b3tcblxuICAgIGNvbnN0cnVjdG9yKGlkLCBvd25lciwgc2VjcmV0LCBzZXJ2ZXIsIGZhcm0pe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLnNlY3JldCA9IHNlY3JldDtcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgICAgIHRoaXMuZmFybSA9IGZhcm07XG4gICAgfVxuXG4gICAgdG9VcmwoKXtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL2Zhcm0ke3RoaXMuZmFybX0uc3RhdGljZmxpY2tyLmNvbS8ke3RoaXMuc2VydmVyfS8ke3RoaXMuaWR9XyR7dGhpcy5zZWNyZXR9LmpwZ2A7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZGVscy9GbGlja3JQaG90by5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBob3Rve1xuICAgIHRvVXJsKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgbm90IGltcGxlbWVudGVkIHRvVXJsJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2RlbHMvUGhvdG8uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==