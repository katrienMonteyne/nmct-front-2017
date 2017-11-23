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

var searchButton = void 0,
    filter = void 0,
    imagesList = void 0;

function loadImages() {
    var f = filter.value;
    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=919ac138c867e720fcb7fe21f94ee7cd&tags=' + f + '&format=json&nojsoncallback=1';

    flickr.getPhotos(url).then(showImages, showError);
}

function showImages(response) {
    //console.info(response);
    var bobHTMLBuilder = "",
        l = response.photos.photo.length;

    for (var i = 0; i < l; i++) {
        var o = response.photos.photo[i];
        var fPhoto = new _FlickrPhoto2.default(o.id, o.owner, o.secret, o.server, o.farm, o.title);

        bobHTMLBuilder += '<div class="images-list__media">';
        bobHTMLBuilder += '<figure><img src="' + fPhoto.toUrl() + '" class="images-list__media__img" /><figcaption>' + fPhoto.title + '</figcaption></figure>';
        bobHTMLBuilder += '</div>';
    }

    imagesList.innerHTML = bobHTMLBuilder;
}

function showError(err) {
    console.error(err);
}

function addEventListeners() {
    searchButton.addEventListener("click", loadImages); // <--- let op de s die er nu niet staat
}

function init() {

    searchButton = document.querySelector("#searchButton");
    filter = document.querySelector("#filter");
    imagesList = document.querySelector(".images-list");

    addEventListeners(); // <--- let op de extra s
}

init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPhotos = getPhotos;
exports.fetchPhotos = fetchPhotos;
function getPhotos(url) {

    // TODO exception class maken
    if (!url) throw new Error("UrlNotFoundException");

    var p = new Promise(function (ok, nok) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onerror = function (err) {
            //console.error(err);
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

// TODO --> fetch api
function fetchPhotos(url) {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Media2 = __webpack_require__(4);

var _Media3 = _interopRequireDefault(_Media2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlickrPhoto = function (_Media) {
    _inherits(FlickrPhoto, _Media);

    function FlickrPhoto(id, owner, secret, server, farm, title) {
        _classCallCheck(this, FlickrPhoto);

        var _this = _possibleConstructorReturn(this, (FlickrPhoto.__proto__ || Object.getPrototypeOf(FlickrPhoto)).call(this));

        _this.id = id;
        _this.owner = owner;
        _this.secret = secret;
        _this.server = server;
        _this.farm = farm;
        _this.title = title;
        return _this;
    }

    _createClass(FlickrPhoto, [{
        key: 'toUrl',
        value: function toUrl() {
            return 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '.jpg';
        }
    }]);

    return FlickrPhoto;
}(_Media3.default);

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

var Media = function () {
    function Media() {
        _classCallCheck(this, Media);
    }

    _createClass(Media, [{
        key: "toUrl",
        value: function toUrl() {
            //TODO: class NotImplementedException --> inherits
            throw new Error("NotImplementedException");
        }
    }]);

    return Media;
}();

exports.default = Media;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);