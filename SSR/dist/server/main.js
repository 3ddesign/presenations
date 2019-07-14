(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_0, View_ɵangular_packages_router_router_l_Host_0, ɵangular_packages_router_router_lNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵangular_packages_router_router_l", function() { return RenderType_ɵangular_packages_router_router_l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_0", function() { return View_ɵangular_packages_router_router_l_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵangular_packages_router_router_l_Host_0", function() { return View_ɵangular_packages_router_router_l_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_lNgFactory", function() { return ɵangular_packages_router_router_lNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵangular_packages_router_router_lNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });

function View_ɵangular_packages_router_router_l_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵangular_packages_router_router_l_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], [], null, null)], null, null); }
var ɵangular_packages_router_router_lNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);



/***/ }),

/***/ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng-simple-slideshow/ng-simple-slideshow.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: SlideshowModuleNgFactory, RenderType_ɵa, View_ɵa_0, View_ɵa_Host_0, ɵaNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowModuleNgFactory", function() { return SlideshowModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵa", function() { return RenderType_ɵa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_0", function() { return View_ɵa_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵa_Host_0", function() { return View_ɵa_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵaNgFactory", function() { return ɵaNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-simple-slideshow */ "ng-simple-slideshow");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var SlideshowModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["SlideshowModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_platform_browser_platform_browser_f"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["ɵb"], ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["SlideshowModule"], ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["SlideshowModule"], [])]); });

var styles_ɵa = [".display-none[_ngcontent-%COMP%] {\n      display: none !important; }\n\n    .fs-container[_ngcontent-%COMP%] {\n      display: block;\n      cursor: pointer;\n      position: fixed;\n      z-index: 1;\n      top: 16px;\n      left: 16px;\n      width: 46px;\n      height: 46px;\n      text-align: center;\n      padding: 0;\n      background-color: rgba(0, 0, 0, 0.2);\n      -webkit-transition: all .2s ease-in-out;\n      transition: all .2s ease-in-out; }\n      .fs-container[_ngcontent-%COMP%]:hover {\n        background-color: rgba(0, 0, 0, 0.33); }\n      .fs-container[_ngcontent-%COMP%]   .arrow-exitfs[_ngcontent-%COMP%] {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background: transparent;\n        border-top: 2px solid #f2f2f2;\n        -webkit-transition: all .2s ease-in-out;\n        transition: all .2s ease-in-out; }\n        .fs-container[_ngcontent-%COMP%]   .arrow-exitfs.prev[_ngcontent-%COMP%] {\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          position: relative;\n          left: 18px;\n          top: 18px; }\n        .fs-container[_ngcontent-%COMP%]   .arrow-exitfs[_ngcontent-%COMP%]:after {\n          content: '';\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          -webkit-transform: rotate(90deg);\n                  transform: rotate(90deg);\n          position: absolute;\n          left: -15px;\n          top: -17px; }\n\n    .slideshow-container.slideshow-container-fs[_ngcontent-%COMP%] {\n      position: fixed;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%; }\n\n    .slideshow-container[_ngcontent-%COMP%] {\n      position: relative;\n      display: block;\n      margin: auto;\n      height: 100%;\n      width: 100%;\n      overflow: hidden; }\n      .slideshow-container[_ngcontent-%COMP%]   .hide-slide[_ngcontent-%COMP%] {\n        visibility: hidden;\n        position: absolute;\n        top: -100vw;\n        left: -100vw;\n        opacity: 0; }\n      .slideshow-container[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        visibility: visible;\n        opacity: 1;\n        display: block; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.selected[_ngcontent-%COMP%] {\n          left: 0; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.left-slide[_ngcontent-%COMP%] {\n          left: -100%; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.right-slide[_ngcontent-%COMP%] {\n          left: 100%; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-in-left[_ngcontent-%COMP%] {\n          left: 0;\n          -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-in-right[_ngcontent-%COMP%] {\n          left: 0;\n          -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-out-left[_ngcontent-%COMP%] {\n          left: -100%;\n          -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.slide-out-right[_ngcontent-%COMP%] {\n          left: 100%;\n          -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n                  animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n        .slideshow-container[_ngcontent-%COMP%]   .slides.link[_ngcontent-%COMP%] {\n          cursor: pointer; }\n        .slideshow-container[_ngcontent-%COMP%]   .slides[_ngcontent-%COMP%]:not(.link) {\n          cursor: default; }\n      .slideshow-container[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 0;\n        padding: 10px;\n        width: 100%; }\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: auto;\n        cursor: pointer;\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));\n        background-image: linear-gradient(transparent, transparent);\n        z-index: 100;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]:before {\n          display: block;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0;\n          opacity: 0;\n          width: 100%;\n          z-index: -100;\n          -webkit-transition: opacity 0.45s;\n          transition: opacity 0.45s; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container.prev[_ngcontent-%COMP%] {\n          left: 0; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container.prev[_ngcontent-%COMP%]:before {\n            background-image: -webkit-gradient(linear, right top, left top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container.next[_ngcontent-%COMP%] {\n          right: 0; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container.next[_ngcontent-%COMP%]:before {\n            background-image: -webkit-gradient(linear, left top, right top, from(transparent), to(rgba(0, 0, 0, 0.75)));\n            background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));\n            content: ''; }\n        .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n          display: block;\n          margin: auto;\n          width: 30px;\n          height: 30px;\n          background: transparent;\n          border-top: 2px solid #f2f2f2;\n          border-left: 2px solid #f2f2f2;\n          -webkit-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before {\n            display: block;\n            height: 200%;\n            width: 200%;\n            margin-left: -50%;\n            margin-top: -50%;\n            content: \"\";\n            -webkit-transform: rotate(45deg);\n                    transform: rotate(45deg); }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow.prev[_ngcontent-%COMP%] {\n            -webkit-transform: rotate(-45deg);\n                    transform: rotate(-45deg);\n            position: relative;\n            left: 20px;\n            margin-right: 10px; }\n          .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow.next[_ngcontent-%COMP%] {\n            -webkit-transform: rotate(135deg);\n                    transform: rotate(135deg);\n            position: relative;\n            right: 20px;\n            margin-left: 10px; }\n      .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%] {\n        display: block;\n        bottom: 15px;\n        z-index: 1;\n        text-align: center;\n        position: absolute;\n        padding: 0;\n        left: 0;\n        right: 0;\n        margin: 0 auto; }\n        .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n          display: inline;\n          margin: 0;\n          padding: 0; }\n          .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n            border: none;\n            background: none;\n            text-indent: -9999px;\n            font-size: 0;\n            width: 20px;\n            height: 20px;\n            outline: none;\n            position: relative;\n            z-index: 1;\n            cursor: pointer; }\n            .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n              content: '';\n              width: 4px;\n              height: 4px;\n              background: var(--dot-color, #FFF);\n              border-radius: 4px;\n              display: block;\n              position: absolute;\n              top: 50%;\n              left: 50%;\n              -webkit-transform: translate(-50%, -50%);\n                      transform: translate(-50%, -50%);\n              opacity: .7;\n              -webkit-transition: all .5s ease-out;\n              transition: all .5s ease-out; }\n          .slideshow-container[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%]   li.slick-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n            -webkit-transform: translate(-50%, -50%) scale(1.4);\n                    transform: translate(-50%, -50%) scale(1.4);\n            opacity: 1; }\n\n    @media screen and (min-width: 768px) {\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]:hover:before {\n        opacity: 1; }\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n        border-width: 4px; }\n      .slideshow-container[_ngcontent-%COMP%]   .arrow-container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:hover {\n        border-width: 4px; } }\n\n    @-webkit-keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInRight {\n      0% {\n        left: -100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @keyframes slideInLeft {\n      0% {\n        left: 100%; }\n      100% {\n        left: 0; } }\n\n    @-webkit-keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @keyframes slideOutRight {\n      0% {\n        left: 0; }\n      100% {\n        left: -100%; } }\n\n    @-webkit-keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    @keyframes slideOutLeft {\n      0% {\n        left: 0; }\n      100% {\n        left: 100%; } }\n\n    .loader[_ngcontent-%COMP%] {\n      position: absolute;\n      left: 50%;\n      margin-left: -20px;\n      top: 50%;\n      margin-top: -20px;\n      border: 5px solid #f3f3f3;\n      border-top: 5px solid #555;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px;\n      -webkit-animation: spin 1s linear infinite;\n              animation: spin 1s linear infinite; }\n\n    @-webkit-keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n\n    @keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }"];
var RenderType_ɵa = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_ɵa, data: {} });

function View_ɵa_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "loader"]], null, null, null, null, null))], null, null); }
function View_ɵa_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "div", [["class", "caption"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](3, { "color": 0, "background-color": 1 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, _co.captionColor, _co.captionBackground); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit == null) ? null : ((_v.parent.context.$implicit.image == null) ? null : _v.parent.context.$implicit.image.caption)); _ck(_v, 0, 0, currVal_0); }); }
function View_ɵa_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "a", [["class", "slides"]], [[8, "href", 4], [8, "title", 0], [2, "selected", null], [2, "hide-slide", null], [2, "left-side", null], [2, "right-side", null], [2, "slide-in-left", null], [2, "slide-in-right", null], [2, "slide-out-left", null], [2, "slide-out-right", null], [2, "link", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_11 = _co.getSlideStyle(_v.context.index); _ck(_v, 2, 0, currVal_11); var currVal_12 = !((_v.context.$implicit == null) ? null : _v.context.$implicit.loaded); _ck(_v, 4, 0, currVal_12); var currVal_13 = (_co.showCaptions && ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.image == null) ? null : _v.context.$implicit.image.caption))); _ck(_v, 6, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", (((_v.context.$implicit == null) ? null : ((_v.context.$implicit.image == null) ? null : _v.context.$implicit.image.clickAction)) ? "#" : ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.image == null) ? null : _v.context.$implicit.image.href))), ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.image == null) ? null : _v.context.$implicit.image.title)), ""); var currVal_2 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.selected); var currVal_3 = ((!((_v.context.$implicit == null) ? null : _v.context.$implicit.selected) && !((_v.context.$implicit == null) ? null : _v.context.$implicit.leftSide)) && !((_v.context.$implicit == null) ? null : _v.context.$implicit.rightSide)); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.leftSide); var currVal_5 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.rightSide); var currVal_6 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.action) === "slideInLeft"); var currVal_7 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.action) === "slideInRight"); var currVal_8 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.action) === "slideOutLeft"); var currVal_9 = (((_v.context.$implicit == null) ? null : _v.context.$implicit.action) === "slideOutRight"); var currVal_10 = (((_v.context.$implicit == null) ? null : ((_v.context.$implicit.image == null) ? null : _v.context.$implicit.image.clickAction)) || ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.image == null) ? null : _v.context.$implicit.image.href))); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10]); }); }
function View_ɵa_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "li", [], [[2, "slick-active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToSlide(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "button", [["type", "button"]], [[1, "style", 2]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.selected; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.safeStyleDotColor; _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.index; _ck(_v, 2, 0, currVal_2); }); }
function View_ɵa_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ul", [["class", "slick-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.slides; var currVal_1 = _co.trackByFn; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_ɵa_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { container: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { prevArrow: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, { nextArrow: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "fs-container"]], [[2, "display-none", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.exitFullScreen($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "i", [["class", "arrow-exitfs prev"], ["title", "Back"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, [[1, 0], ["container", 1]], null, 8, "div", [["class", "slideshow-container"]], [[2, "slideshow-container-fs", null]], [[null, "touchstart"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("touchstart" === en)) {
        var pd_0 = (_co.onSwipe($event, "start") !== false);
        ad = (pd_0 && ad);
    } if (("touchend" === en)) {
        var pd_1 = (_co.onSwipe($event, "end") !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "div", [["class", "arrow-container prev"]], [[2, "display-none", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSlide((0 - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, [[2, 0], ["prevArrow", 1]], null, 0, "i", [["class", "arrow prev"], ["title", "Previous"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "div", [["class", "arrow-container next"]], [[2, "display-none", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSlide(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, [[3, 0], ["nextArrow", 1]], null, 0, "i", [["class", "arrow next"], ["title", "Next"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ɵa_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.slides; var currVal_3 = _co.trackByFn; _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_6 = _co.showDots; _ck(_v, 13, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.fullscreen; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.fullscreen; _ck(_v, 5, 0, currVal_1); var currVal_4 = !_co.showArrows; _ck(_v, 8, 0, currVal_4); var currVal_5 = !_co.showArrows; _ck(_v, 10, 0, currVal_5); }); }
function View_ɵa_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "slideshow", [], null, null, null, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 376832, null, 0, ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ɵaNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("slideshow", ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_1__["ɵa"], View_ɵa_Host_0, { imageUrls: "imageUrls", height: "height", minHeight: "minHeight", arrowSize: "arrowSize", showArrows: "showArrows", disableSwiping: "disableSwiping", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", stopAutoPlayOnSlide: "stopAutoPlayOnSlide", autoPlayWaitForLazyLoad: "autoPlayWaitForLazyLoad", debug: "debug", backgroundSize: "backgroundSize", backgroundPosition: "backgroundPosition", backgroundRepeat: "backgroundRepeat", showDots: "showDots", dotColor: "dotColor", showCaptions: "showCaptions", captionColor: "captionColor", captionBackground: "captionBackground", lazyLoad: "lazyLoad", hideOnNoSlides: "hideOnNoSlides", fullscreen: "fullscreen" }, { onSlideLeft: "onSlideLeft", onSlideRight: "onSlideRight", onSwipeLeft: "onSwipeLeft", onSwipeRight: "onSwipeRight", onFullscreenExit: "onFullscreenExit", onIndexChanged: "onIndexChanged" }, []);



/***/ }),

/***/ "./src/app/about-me/about-me.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/about-me/about-me.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_AboutMeComponent, View_AboutMeComponent_0, View_AboutMeComponent_Host_0, AboutMeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutMeComponent", function() { return RenderType_AboutMeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutMeComponent_0", function() { return View_AboutMeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutMeComponent_Host_0", function() { return View_AboutMeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponentNgFactory", function() { return AboutMeComponentNgFactory; });
/* harmony import */ var _about_me_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me.component.scss.shim.ngstyle */ "./src/app/about-me/about-me.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/about-me/about-me.service */ "./src/app/service/about-me/about-me.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AboutMeComponent = [_about_me_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutMeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutMeComponent, data: {} });

function View_AboutMeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "li", [["class", "aboutMe__navItem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "a", [["class", "aboutMe__navLink"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.slideToElement(_v.context.$implicit.name) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "aboutMe__navTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_0); }); }
function View_AboutMeComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "aboutMe__desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.description; _ck(_v, 1, 0, currVal_0); }); }
function View_AboutMeComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [["class", "aboutMe__descItem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_AboutMeComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "aboutMe__time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "ul", [["class", "aboutMe__descList"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit.subList; _ck(_v, 7, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.subTitle; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.subDescription; _ck(_v, 4, 0, currVal_1); }); }
function View_AboutMeComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [["class", "aboutMe__descItem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_AboutMeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [["class", "aboutMe__title"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "aboutMe__descBlock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "ul", [["class", "aboutMe__descList"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_2 = _v.context.$implicit.description; _ck(_v, 5, 0, currVal_2); var currVal_3 = _v.context.$implicit.subParagraphs; _ck(_v, 7, 0, currVal_3); var currVal_4 = _v.context.$implicit.list; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 2, 0, currVal_1); }); }
function View_AboutMeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "aboutMe"], ["id", "aboutMe"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "ul", [["class", "aboutMe__navList"], ["id", "aboutMeNav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "aboutMe__resumeBar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" My resume (PDF format) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "a", [["class", "aboutMe__resumeBtn"], ["href", "https://salty-tundra-80705.herokuapp.com/api/pdf"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["download"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.aboutMe.paragraphs; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.aboutMe.paragraphs; _ck(_v, 9, 0, currVal_1); }, null); }
function View_AboutMeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AboutMeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.aboutMe; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AboutMeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-about-me", [], null, null, null, View_AboutMeComponent_0, RenderType_AboutMeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_3__["AboutMeService"], _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_3__["AboutMeService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], [_service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_3__["AboutMeService"], _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_6__["FetchDataService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var AboutMeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about-me", _about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], View_AboutMeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/about-me/about-me.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n.aboutMe[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 25px;\n  color: #a8a8a8;\n  margin-right: 35px;\n  font-size: 16px;\n}\n.aboutMe__navList[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 200px;\n  right: -15px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.aboutMe__navItem[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  position: relative;\n  width: 8px;\n  height: 8px;\n  margin-bottom: 20px;\n}\n.aboutMe__navItem[_ngcontent-%COMP%]:hover   .aboutMe__navTitle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.aboutMe__navLink[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-bottom: 15px;\n  background-color: #ffc518;\n  -webkit-transition: background-color 0.2s ease;\n  transition: background-color 0.2s ease;\n  cursor: pointer;\n}\n.aboutMe__navLink[_ngcontent-%COMP%]:hover {\n  background-color: #fe6700;\n}\n.aboutMe__navTitle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: 12px;\n  font-size: 10px;\n  font-style: italic;\n  border-radius: 3px;\n  opacity: 0;\n  color: #fe6700;\n  background-color: black;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  cursor: default;\n  pointer-events: none;\n}\n.aboutMe__clear[_ngcontent-%COMP%] {\n  clear: both;\n}\n.aboutMe__photoWrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  float: left;\n  width: 150px;\n  height: 150px;\n  background-color: black;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 3px solid #fe6700;\n}\n.aboutMe__photo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.aboutMe__title[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #e8e8e8;\n  font-size: 22px;\n  margin-left: 15px;\n  padding: 0 25px 2px 5px;\n  border-bottom: 1px solid #fe6700;\n}\n.aboutMe__descBlock[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.aboutMe__desc[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  text-align: justify;\n}\n.aboutMe__time[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 16px;\n  color: #e8e8e8;\n}\n.aboutMe__resumeBar[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 15px 0;\n  border-bottom: 1px solid #fe6700;\n  text-align: right;\n}\n.aboutMe__resumeBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 25px;\n  color: #090909;\n  background-color: #ffc518;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0 3px;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.aboutMe__resumeBtn[_ngcontent-%COMP%]:hover {\n  background-color: #fe6700;\n}\n\n\n\n@media only screen and (max-width: 992px) {\n  .aboutMe__time[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .aboutMe__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n\n@media only screen and (max-width: 480px) {\n  .aboutMe__resumeBar[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbWl0cnkvRG93bmxvYWRzLzExMS9vbGQvcG9ydGZvbGlvL3NyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZG1pdHJ5L0Rvd25sb2Fkcy8xMTEvb2xkL3BvcnRmb2xpby9zdGRpbiIsInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVVEsNkRBQUE7QUNSUjtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRERVO0VDRVYsa0JBQUE7RUFDQSxlQUFBO0FDQUY7QURDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsOEJBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ007RUFDRSxVQUFBO0FDQ1I7QURHRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRC9CVTtFQ2dDViw4Q0FBQTtFQUFBLHNDQUFBO0VBQ0EsZUFBQTtBQ0RKO0FERUk7RUFDRSx5QkRsQ0s7QUVrQ1g7QURHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjRDdDTztFQzhDUCx1QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNESjtBREdFO0VBQ0UsV0FBQTtBQ0RKO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDREo7QURHRTtFQUNFLFdBQUE7QUNESjtBREdFO0VBQ0UscUJBQUE7RUFDQSxjRGpGSTtFQ2tGSixlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDREo7QURHRTtFQUNFLG1CQUFBO0FDREo7QURHRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0RqR0k7QUVnR1I7QURHRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0QzR0k7RUM0R0oseUJEdkdVO0VDd0dWLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNESjtBREVJO0VBQ0UseUJEOUdLO0FFOEdYO0FET0Esd0NBQUE7QUFFQSxnQ0FBQTtBQUtBLDZCQUFBO0FBQ0E7RUFFSTtJQUNFLGVBQUE7RUNWSjtFRFlFO0lBQ0UsZUFBQTtFQ1ZKO0FBQ0Y7QURlQSwyQkFBQTtBQUlBLEdBQUE7QUFFQSxnQ0FBQTtBQUNBO0VBRUk7SUFDRSxlQUFBO0VDbEJKO0FBQ0Y7QURxQkEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2U4ZThlODtcbiRibGFjazogIzA5MDkwOTtcbiRncmV5RGFyazogIzIzMjMyMztcbiRncmV5OiAjNjA2MDYwO1xuJGdyZXlMaWdodDogI2E4YThhODtcblxuJGFjY2VudENvbG9yOiAjZmZjNTE4O1xuJGFkZENvbG9yOiAjZmU2NzAwO1xuXG4vL2ltcG9ydCBmb250c1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8nKTtcbiIsIkBpbXBvcnQgXCIuLi92YXJpYWJsZVwiO1xuXG4uYWJvdXRNZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBjb2xvcjogJGdyZXlMaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gICZfX25hdkxpc3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAwcHg7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgJl9fbmF2SXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICY6aG92ZXJ7XG4gICAgICAuYWJvdXRNZV9fbmF2VGl0bGV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX25hdkxpbmt7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudENvbG9yO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFkZENvbG9yO1xuICAgIH1cbiAgfVxuICAmX19uYXZUaXRsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNHB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY29sb3I6ICRhZGRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAmX19jbGVhcntcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICAmX19waG90b1dyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJGFkZENvbG9yO1xuICB9XG4gICZfX3Bob3Rve1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICZfX3RpdGxle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBwYWRkaW5nOiAwIDI1cHggMnB4IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFkZENvbG9yO1xuICB9XG4gICZfX2Rlc2NCbG9ja3tcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gICZfX2Rlc2N7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG4gICZfX3RpbWV7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG4gICZfX3Jlc3VtZUJhcntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYWRkQ29sb3I7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgJl9fcmVzdW1lQnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFkZENvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyo9PT09PT09PT09ICBEZXNrdG9wIEZpcnN0ICA9PT09PT09PT09Ki9cblxuLyogTGFyZ2UgRGV2aWNlcywgV2lkZSBTY3JlZW5zICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXG59XG5cbi8qIE1lZGl1bSBEZXZpY2VzLCBEZXNrdG9wcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYWJvdXRNZXtcbiAgICAmX190aW1le1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAmX190aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiBTbWFsbCBEZXZpY2VzLCBUYWJsZXRzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG59XG5cbi8qKi9cblxuLyogRXh0cmEgU21hbGwgRGV2aWNlcywgUGhvbmVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hYm91dE1le1xuICAgICZfX3Jlc3VtZUJhcntcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbi8qIEN1c3RvbSwgaVBob25lIFJldGluYSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG59XG5cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcbi5hYm91dE1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBjb2xvcjogI2E4YThhODtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYWJvdXRNZV9fbmF2TGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYWJvdXRNZV9fbmF2SXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hYm91dE1lX19uYXZJdGVtOmhvdmVyIC5hYm91dE1lX19uYXZUaXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYWJvdXRNZV9fbmF2TGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNTE4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFib3V0TWVfX25hdkxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2NzAwO1xufVxuLmFib3V0TWVfX25hdlRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogI2ZlNjcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYWJvdXRNZV9fY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbi5hYm91dE1lX19waG90b1dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmU2NzAwO1xufVxuLmFib3V0TWVfX3Bob3RvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXRNZV9fdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZThlOGU4O1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiAwIDI1cHggMnB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZTY3MDA7XG59XG4uYWJvdXRNZV9fZGVzY0Jsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5hYm91dE1lX19kZXNjIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5hYm91dE1lX190aW1lIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZThlOGU4O1xufVxuLmFib3V0TWVfX3Jlc3VtZUJhciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZlNjcwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYWJvdXRNZV9fcmVzdW1lQnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMjVweDtcbiAgY29sb3I6ICMwOTA5MDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM1MTg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYWJvdXRNZV9fcmVzdW1lQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjcwMDtcbn1cblxuLyo9PT09PT09PT09ICBEZXNrdG9wIEZpcnN0ICA9PT09PT09PT09Ki9cbi8qIExhcmdlIERldmljZXMsIFdpZGUgU2NyZWVucyAqL1xuLyogTWVkaXVtIERldmljZXMsIERlc2t0b3BzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hYm91dE1lX190aW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmFib3V0TWVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgKi9cbi8qKi9cbi8qIEV4dHJhIFNtYWxsIERldmljZXMsIFBob25lcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYWJvdXRNZV9fcmVzdW1lQmFyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi8qIEN1c3RvbSwgaVBob25lIFJldGluYSAqLyJdfQ== */"];



/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/about-me/about-me.service */ "./src/app/service/about-me/about-me.service.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");



var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(aboutMeService, fetchDataService) {
        this.aboutMeService = aboutMeService;
        this.fetchDataService = fetchDataService;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        this.getAboutMeInfo();
    };
    AboutMeComponent.prototype.slideToElement = function (element) {
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    AboutMeComponent.prototype.getAboutMeInfo = function () {
        var _this = this;
        this.fetchDataService.changeMessage(true);
        this.aboutMeService.getAboutMe()
            .subscribe(function (data) {
            _this.aboutMe = data;
            _this.fetchDataService.changeMessage(false);
        });
    };
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");





var ROUTES = [
    { path: '', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] },
    { path: 'training', component: _training_training_component__WEBPACK_IMPORTED_MODULE_4__["TrainingComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/about-me/about-me.service */ "./src/app/service/about-me/about-me.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["class", "footer__submit"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "i", [["class", "fa fa-telegram"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "fa--away": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "fa fa-telegram"; var currVal_1 = _ck(_v, 4, 0, _co.appComponentModel.emailSend); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 20, "div", [["class", "header__contentWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [["class", "header__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "burger"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.appComponentModel.burger ? _co.appComponentModel.burger = false : _co.appComponentModel.burger = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, { "burger--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "span", [["class", "burger__line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "span", [["class", "burger__line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "span", [["class", "burger__line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "span", [["class", "burger__line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 10, "div", [["class", "header__languages"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "span", [["class", "header__language"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.switchLanguage("ru") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, { "header__language--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" RU "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "span", [["class", "header__language "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.switchLanguage("en") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](21, { "header__language--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" EN "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 55, "main", [["class", "main"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 54, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 53, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 41, "div", [["class", "col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 40, "nav", [["class", "nav"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](30, { "nav--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 10, "a", [["class", "nav__block"], ["routerLink", "/"], ["routerLinkActive", "nav__block--active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.appComponentModel.burger = false) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](36, { exact: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "span", [["class", "nav__capital"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 2, "span", [["class", "nav__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 9, "a", [["class", "nav__block"], ["routerLink", "/portfolio"], ["routerLinkActive", "nav__block--active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.appComponentModel.burger = false) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "span", [["class", "nav__capital"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cube"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "span", [["class", "nav__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](50, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 9, "a", [["class", "nav__block"], ["routerLink", "/news"], ["routerLinkActive", "nav__block--active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = ((_co.appComponentModel.burger = false) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "span", [["class", "nav__capital"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-newspaper-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 2, "span", [["class", "nav__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 5, "a", [["class", "nav__block"], ["href", "https://ths-app-886.firebaseapp.com/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "span", [["class", "nav__capital"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-leaf"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 2, "span", [["class", "nav__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](66, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 10, "div", [["class", "col-md-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 6, "div", [["class", "main__spinnerWrap"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](72, { "main__spinnerWrap--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "div", [["class", "main__spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 0, "div", [["class", "main__cube"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "div", [["class", "main__cube main__cube--second"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "div", [["class", "main__content custom-scroll"]], null, [[null, "scroll"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("scroll" === en)) {
        var pd_0 = (_co.scrollHandler($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 55, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 54, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 53, "div", [["class", "footer__blockWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 52, "div", [["class", "footer__block"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](85, { "footer__block--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 5, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 4, "div", [["class", "footer__label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](89, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 1, "a", [["class", "footer__info"], ["href", "tel:+380962258179"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+380 96 225 81 79"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 8, "div", [["class", "col-md-4 footer__arrowBlockWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 7, "div", [["class", "footer__arrowBlock"], ["ng-model", "appComponentModel.show"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.appComponentModel.show ? _co.appComponentModel.show = false : _co.appComponentModel.show = true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 2, "span", [["class", "footer__message"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](96, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 2, "span", [["class", "footer__message"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](99, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 0, "i", [["class", "fa fa-angle-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 5, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 4, "div", [["class", "footer__label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "a", [["class", "footer__info"], ["href", "mailto:limanskiy1989@gmail.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["limanskiy1989@gmail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 26, "form", [["class", "footer__form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 110).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 21, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 7, "div", [["class", "col-md-6 offset-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 6, "textarea", [["class", "footer__textArea"], ["formControlName", "text"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](120, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 9, "div", [["class", "col-md-6 offset-md-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 8, "input", [["class", "footer__input"], ["formControlName", "email"], ["type", "email"]], [[8, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 124)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], [], { email: [0, "email"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 2, "div", [["class", "col-md-6 offset-md-3 footer__subWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "burger"; var currVal_1 = _ck(_v, 7, 0, _co.appComponentModel.burger); _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = "header__language"; var currVal_3 = _ck(_v, 16, 0, (_co.translate.currentLang === "ru")); _ck(_v, 15, 0, currVal_2, currVal_3); var currVal_4 = "header__language "; var currVal_5 = _ck(_v, 21, 0, ((_co.translate.currentLang === undefined) || (_co.translate.currentLang === "en"))); _ck(_v, 20, 0, currVal_4, currVal_5); var currVal_6 = "nav"; var currVal_7 = _ck(_v, 30, 0, _co.appComponentModel.burger); _ck(_v, 29, 0, currVal_6, currVal_7); var currVal_10 = "/"; _ck(_v, 32, 0, currVal_10); var currVal_11 = _ck(_v, 36, 0, true); var currVal_12 = "nav__block--active"; _ck(_v, 33, 0, currVal_11, currVal_12); var currVal_16 = "/portfolio"; _ck(_v, 43, 0, currVal_16); var currVal_17 = "nav__block--active"; _ck(_v, 44, 0, currVal_17); var currVal_21 = "/news"; _ck(_v, 53, 0, currVal_21); var currVal_22 = "nav__block--active"; _ck(_v, 54, 0, currVal_22); var currVal_25 = "main__spinnerWrap"; var currVal_26 = _ck(_v, 72, 0, _co.appComponentModel.spinnerShow); _ck(_v, 71, 0, currVal_25, currVal_26); _ck(_v, 78, 0); var currVal_27 = "footer__block"; var currVal_28 = _ck(_v, 85, 0, _co.appComponentModel.show); _ck(_v, 84, 0, currVal_27, currVal_28); var currVal_42 = _co.form; _ck(_v, 110, 0, currVal_42); var currVal_51 = "text"; _ck(_v, 118, 0, currVal_51); var currVal_60 = true; _ck(_v, 125, 0, currVal_60); var currVal_61 = "email"; _ck(_v, 128, 0, currVal_61); var currVal_62 = _co.form.valid; _ck(_v, 134, 0, currVal_62); }, function (_ck, _v) { var _co = _v.component; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).href; _ck(_v, 31, 0, currVal_8, currVal_9); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 40, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).transform("GENERAL.about_me")); _ck(_v, 40, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).target; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).href; _ck(_v, 42, 0, currVal_14, currVal_15); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 50, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).transform("GENERAL.portfolio")); _ck(_v, 50, 0, currVal_18); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).target; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).href; _ck(_v, 52, 0, currVal_19, currVal_20); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).transform("GENERAL.news")); _ck(_v, 60, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).transform("GENERAL.training")); _ck(_v, 66, 0, currVal_24); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 89, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).transform("FORM.phone")); _ck(_v, 89, 0, currVal_29); var currVal_30 = _co.appComponentModel.show; _ck(_v, 95, 0, currVal_30); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 96, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).transform("FORM.show_form")); _ck(_v, 96, 0, currVal_31); var currVal_32 = !_co.appComponentModel.show; _ck(_v, 98, 0, currVal_32); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 99, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).transform("FORM.hide_form")); _ck(_v, 99, 0, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 104, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).transform("FORM.email")); _ck(_v, 104, 0, currVal_34); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassUntouched; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassTouched; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassPristine; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassDirty; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassValid; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassInvalid; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).ngClassPending; _ck(_v, 108, 0, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 115, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).transform("FORM.your_message")), ""); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassUntouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassTouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassPristine; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassDirty; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassValid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassInvalid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).ngClassPending; _ck(_v, 115, 0, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 123, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 131).transform("FORM.your_email")), ""); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassUntouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassTouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassPristine; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassDirty; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassValid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassInvalid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassPending; _ck(_v, 123, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_6__["AboutMeService"], _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_6__["AboutMeService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_6__["AboutMeService"], _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_9__["FetchDataService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n@-webkit-keyframes slowLightingBackground {\n  0% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n  60% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n  80% {\n    box-shadow: 0 0 5px 0 #fe6600;\n  }\n  90% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n}\n@keyframes slowLightingBackground {\n  0% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n  60% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n  80% {\n    box-shadow: 0 0 5px 0 #fe6600;\n  }\n  90% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n  100% {\n    box-shadow: 0 0 5px 0 rgba(254, 102, 0, 0);\n  }\n}\n@-webkit-keyframes arrowSlide {\n  0% {\n    top: 35px;\n  }\n  50% {\n    top: 20px;\n  }\n  100% {\n    top: 35px;\n  }\n}\n@keyframes arrowSlide {\n  0% {\n    top: 35px;\n  }\n  50% {\n    top: 20px;\n  }\n  100% {\n    top: 35px;\n  }\n}\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n            transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n            transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n@keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n            transform: translateX(42px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n            transform: translateX(42px) translateY(42px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #232323;\n  margin-left: -15px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  background-color: #090909;\n  margin-left: -15px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 15px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #ffc518;\n  margin-left: -15px;\n  cursor: pointer;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #eeb200;\n}\n.header__contentWrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #fe6700;\n  color: white;\n  height: 50px;\n  position: relative;\n  background-image: url('header_bg.png');\n  background-size: cover;\n  background-position: center;\n}\n.header__content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 50px;\n  width: 100%;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  background-color: rgba(9, 9, 9, 0.7);\n  border-bottom: 1px solid #090909;\n  z-index: 5;\n  background: -webkit-gradient(linear, left top, right top, from(black), color-stop(20%, rgba(0, 0, 0, 0.8)), color-stop(50%, rgba(0, 0, 0, 0.2)), color-stop(99%, rgba(0, 0, 0, 0.99)), to(black));\n  background: linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.99) 99%, black 100%);\n}\n.header__languages[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 15px;\n  z-index: 5;\n}\n.header__language[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n  cursor: pointer;\n  margin-right: 4px;\n  -webkit-transition: text-shadow 0.2s ease;\n  transition: text-shadow 0.2s ease;\n}\n.header__language[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 0 #ffc518;\n}\n.header__language.header__language--active[_ngcontent-%COMP%] {\n  color: #fe6700;\n}\n.main[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.main__content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: calc(100vh - 120px);\n}\n.main__spinnerWrap[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #090909;\n  opacity: 0.8;\n  z-index: 2;\n}\n.main__spinnerWrap.main__spinnerWrap--active[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.main__spinner[_ngcontent-%COMP%] {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n.main__cube[_ngcontent-%COMP%] {\n  background-color: #fe6700;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n}\n.main__cube.main__cube--second[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n.nav[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-family: \"Roboto\";\n}\n.nav__block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: #090909;\n  height: 120px;\n  width: 120px;\n  margin-bottom: 10px;\n  color: #a8a8a8;\n  border-bottom: 3px solid #fe6700;\n  -webkit-transition: color 0.2s ease;\n  transition: color 0.2s ease;\n}\n.nav__block[_ngcontent-%COMP%]:hover {\n  color: #e8e8e8;\n  text-decoration: none;\n}\n.nav__block[_ngcontent-%COMP%]:hover   .nav__capital[_ngcontent-%COMP%] {\n  text-shadow: 0 0 22px rgba(254, 103, 0, 0.8);\n}\n.nav__block.nav__block--active[_ngcontent-%COMP%] {\n  color: #ffc518;\n  -webkit-animation-name: slowLightingBackground;\n          animation-name: slowLightingBackground;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.nav__capital[_ngcontent-%COMP%] {\n  font-size: 58px;\n  text-transform: capitalize;\n  -webkit-transition: -webkit-transform 0.4s ease;\n  transition: -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease;\n  transition: transform 0.4s ease, -webkit-transform 0.4s ease;\n}\n.nav__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.footer__blockWrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #090909;\n  height: 50px;\n  color: white;\n}\n.footer__block[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  background-color: rgba(9, 9, 9, 0.7);\n  z-index: 5;\n  border-top: 1px solid #090909;\n  overflow: hidden;\n}\n.footer__block.footer__block--active[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 350px;\n  background-color: #090909;\n  border-top: 1px solid #fe6700;\n  z-index: 200;\n  box-shadow: 0px -14px 20px -10px rgba(255, 255, 255, 0.1);\n}\n.footer__block.footer__block--active[_ngcontent-%COMP%]   .footer__arrowBlock[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.footer__label[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  font-style: italic;\n  text-align: center;\n}\n.footer__info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n  color: #ffc518;\n}\n.footer__arrowBlock[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  font-style: italic;\n  color: #fe6700;\n  cursor: pointer;\n}\n.footer__arrowBlock[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ffc518;\n  -webkit-animation: arrowSlide 3s ease-in-out infinite;\n          animation: arrowSlide 3s ease-in-out infinite;\n}\n.footer__form[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  text-align: center;\n}\n.footer__formTitle[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-bottom: 5px;\n  font-style: italic;\n  font-size: 10px;\n  color: #fe6700;\n}\n.footer__textArea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  border: 1px solid #ffc518;\n  padding: 2px 5px;\n  font-size: 12px;\n  font-style: italic;\n  resize: none;\n  border-radius: 2px;\n}\n.footer__input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25px;\n  padding: 0 5px;\n  border: 1px solid #ffc518;\n  font-style: italic;\n  border-radius: 2px;\n  font-size: 12px;\n}\n.footer__subWrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.footer__submit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -39px;\n  top: -65px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background-color: #ffc518;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 0px 0px 30px 0px #fe6600;\n}\n.footer__submit[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 29%;\n  left: 31%;\n  color: #232323;\n  padding-bottom: 2px;\n  padding-right: 1px;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n.footer__submit[_ngcontent-%COMP%]   .fa.fa--away[_ngcontent-%COMP%] {\n  top: -100%;\n  left: 100%;\n}\n.footer__submit[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.burger[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 992px) {\n  .nav__block[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n  .nav__capital[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .nav[_ngcontent-%COMP%] {\n    position: fixed;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 300;\n    opacity: 0;\n    pointer-events: none;\n    -webkit-transition: opacity 0.2s ease-in-out;\n    transition: opacity 0.2s ease-in-out;\n  }\n  .nav.nav--active[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    pointer-events: fill;\n    opacity: 1;\n  }\n  .nav__block[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 65%;\n    height: 70px;\n    margin-bottom: 15px;\n  }\n  .nav__capital[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .burger[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    width: 35px;\n    height: 35px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    z-index: 400;\n    overflow: hidden;\n  }\n  .burger.burger--active[_ngcontent-%COMP%]   .burger__line[_ngcontent-%COMP%]:first-child {\n    position: relative;\n    right: 50px;\n  }\n  .burger.burger--active[_ngcontent-%COMP%]   .burger__line[_ngcontent-%COMP%]:nth-child(2) {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    top: 7px;\n  }\n  .burger.burger--active[_ngcontent-%COMP%]   .burger__line[_ngcontent-%COMP%]:nth-child(3) {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  .burger.burger--active[_ngcontent-%COMP%]   .burger__line[_ngcontent-%COMP%]:last-child {\n    position: relative;\n    left: 50px;\n  }\n  .burger__line[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25px;\n    height: 3px;\n    margin: 2px 0;\n    background-color: #ffc518;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n  .burger__line[_ngcontent-%COMP%]:first-child {\n    right: 0;\n  }\n  .burger__line[_ngcontent-%COMP%]:last-child {\n    left: 0;\n  }\n\n  .footer__block[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n  .footer__block.footer__block--active[_ngcontent-%COMP%] {\n    height: 550px;\n  }\n  .footer__arrowBlockWrap[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n  .footer__textArea[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .footer__input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .footer__submit[_ngcontent-%COMP%] {\n    right: 35px;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .footer__submit[_ngcontent-%COMP%] {\n    right: 25px;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .footer__submit[_ngcontent-%COMP%] {\n    right: 20px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  .footer__submit[_ngcontent-%COMP%] {\n    right: 23px;\n    width: 30px;\n    height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbWl0cnkvRG93bmxvYWRzLzExMS9vbGQvcG9ydGZvbGlvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RtaXRyeS9Eb3dubG9hZHMvMTExL29sZC9wb3J0Zm9saW8vc3RkaW4iLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVUSw2REFBQTtBQ1JSO0VBQ0U7SUFDRSwwQ0FBQTtFQ0FGO0VERUE7SUFDRSwwQ0FBQTtFQ0FGO0VERUE7SUFDRSw2QkFBQTtFQ0FGO0VERUE7SUFDRSwwQ0FBQTtFQ0FGO0VERUE7SUFDRSwwQ0FBQTtFQ0FGO0FBQ0Y7QURmQTtFQUNFO0lBQ0UsMENBQUE7RUNBRjtFREVBO0lBQ0UsMENBQUE7RUNBRjtFREVBO0lBQ0UsNkJBQUE7RUNBRjtFREVBO0lBQ0UsMENBQUE7RUNBRjtFREVBO0lBQ0UsMENBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLFNBQUE7RUNERjtFREdBO0lBQ0UsU0FBQTtFQ0RGO0VER0E7SUFDRSxTQUFBO0VDREY7QUFDRjtBRFJBO0VBQ0U7SUFDRSxTQUFBO0VDREY7RURHQTtJQUNFLFNBQUE7RUNERjtFREdBO0lBQ0UsU0FBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQU0sNkRBQUE7WUFBQSxxREFBQTtFQ0ROO0VERUE7SUFBTSxvRUFBQTtZQUFBLDREQUFBO0VDQ047RURBQTtJQUFNLDhFQUFBO1lBQUEsc0VBQUE7RUNHTjtFREZBO0lBQU8sa0NBQUE7WUFBQSwwQkFBQTtFQ0tQO0FBQ0Y7QURWQTtFQUNFO0lBQU0sNkRBQUE7WUFBQSxxREFBQTtFQ0ROO0VERUE7SUFBTSxvRUFBQTtZQUFBLDREQUFBO0VDQ047RURBQTtJQUFNLDhFQUFBO1lBQUEsc0VBQUE7RUNHTjtFREZBO0lBQU8sa0NBQUE7WUFBQSwwQkFBQTtFQ0tQO0FBQ0Y7QURGRTtFQUVFLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkQxQ087RUMyQ1Asa0JBQUE7QUNHSjtBRERFO0VBRUUsVUFBQTtFQUNBLHlCRGpESTtFQ2tESixrQkFBQTtBQ0VKO0FEQUU7RUFFRSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0EseUJEbkRVO0VDb0RWLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDRSx5QkFBQTtBQ0VOO0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCRGhFTztFQ2lFUCxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDREo7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxpTUFBQTtFQUFBLG9JQUFBO0FDREo7QURHRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDREo7QURHRTtFQUNFLGNEOUZRO0VDK0ZSLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNESjtBREVJO0VBQ0UsMEJBQUE7QUNBTjtBREVJO0VBQ0UsY0RuR0s7QUVtR1g7QURNQTtFQUNFLGVBQUE7QUNIRjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRko7QURJRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCRC9ISTtFQ2dJSixZQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FER0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNETjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRko7QURJRTtFQUNFLHlCRHZJTztFQ3dJUCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3REFBQTtVQUFBLGdEQUFBO0FDRko7QURHSTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNETjtBRE1BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7QUNIRjtBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkRuS0k7RUNvS0osYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNEcEtRO0VDcUtSLGdDQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0ZKO0FER0k7RUFDRSxjRDVLRTtFQzZLRixxQkFBQTtBQ0ROO0FERU07RUFDRSw0Q0FBQTtBQ0FSO0FER0k7RUFDRSxjRDdLUTtFQzhLUiw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDRE47QURJRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLCtDQUFBO0VBQUEsdUNBQUE7RUFBQSwrQkFBQTtFQUFBLDREQUFBO0FDRko7QURJRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FET0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJEM01JO0VDNE1KLFlBQUE7RUFDQSxZQUFBO0FDSko7QURNRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtBQ0hOO0FES1E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDSFY7QURRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNOSjtBRFFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0Q1T1U7QUVzT2Q7QURRRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0R0UE87RUN1UFAsZUFBQTtBQ05KO0FET0k7RUFDRSxrQkFBQTtFQUNBLGNEM1BRO0VDNFBSLHFEQUFBO1VBQUEsNkNBQUE7QUNMTjtBRFFFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEUUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0R2UU87QUVpUVg7QURRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05KO0FEUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTko7QURRRTtFQUNFLGtCQUFBO0FDTko7QURRRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRHhTVTtFQ3lTVixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ05KO0FET0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0RwVEs7RUNxVEwsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNMTjtBRE1NO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUNKUjtBRE9JO0VBQ0UsYUFBQTtBQ0xOO0FEVUE7RUFDRSxhQUFBO0FDUEY7QURTQSx3Q0FBQTtBQUVBLGdDQUFBO0FBS0EsNkJBQUE7QUFDQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNaSjtFRGNFO0lBQ0UsZUFBQTtFQ1pKO0FBQ0Y7QURpQkEsMkJBQUE7QUFDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EsdUJBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtJQUNBLDRDQUFBO0lBQUEsb0NBQUE7RUNmRjtFRGdCRTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsVUFBQTtFQ2RKO0VEZ0JFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDZEo7RURnQkU7SUFDRSxhQUFBO0VDZEo7O0VEa0JBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ2ZGO0VEaUJJO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VDZk47RURpQkk7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsUUFBQTtFQ2ZOO0VEaUJJO0lBQ0UsZ0NBQUE7WUFBQSx3QkFBQTtFQ2ZOO0VEaUJJO0lBQ0Usa0JBQUE7SUFDQSxVQUFBO0VDZk47RURrQkU7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHlCRDFaUTtJQzJaUixpQ0FBQTtJQUFBLHlCQUFBO0VDaEJKO0VEaUJJO0lBQ0UsUUFBQTtFQ2ZOO0VEaUJJO0lBQ0UsT0FBQTtFQ2ZOOztFRHFCRTtJQUNFLGlCQUFBO0VDbEJKO0VEbUJJO0lBQ0UsYUFBQTtFQ2pCTjtFRG9CRTtJQUNFLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7RUNsQko7RURvQkU7SUFDRSxVQUFBO0VDbEJKO0VEb0JFO0lBQ0UsVUFBQTtFQ2xCSjtFRG9CRTtJQUNFLFdBQUE7RUNsQko7QUFDRjtBRHNCQSxHQUFBO0FBRUEsZ0NBQUE7QUFNQTtFQUVJO0lBQ0UsV0FBQTtFQzNCSjtBQUNGO0FEK0JBO0VBRUk7SUFDRSxXQUFBO0VDOUJKO0FBQ0Y7QURtQ0E7RUFFSTtJQUNFLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ2xDSjtBQUNGO0FEc0NBLDBCQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZThlOGU4O1xuJGJsYWNrOiAjMDkwOTA5O1xuJGdyZXlEYXJrOiAjMjMyMzIzO1xuJGdyZXk6ICM2MDYwNjA7XG4kZ3JleUxpZ2h0OiAjYThhOGE4O1xuXG4kYWNjZW50Q29sb3I6ICNmZmM1MTg7XG4kYWRkQ29sb3I6ICNmZTY3MDA7XG5cbi8vaW1wb3J0IGZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpO1xuIiwiQGltcG9ydCBcInZhcmlhYmxlXCI7XG5cbkBrZXlmcmFtZXMgc2xvd0xpZ2h0aW5nQmFja2dyb3VuZCB7XG4gIDAlICAge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDI1NCwxMDIsMCwwKTtcbiAgfVxuICA2MCUgICB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMjU0LDEwMiwwLDApO1xuICB9XG4gIDgwJSAgIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgyNTQsMTAyLDAsMSk7XG4gIH1cbiAgOTAlICAge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDI1NCwxMDIsMCwwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgyNTQsMTAyLDAsMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhcnJvd1NsaWRlIHtcbiAgMCUge1xuICAgIHRvcDogMzVweDtcbiAgfVxuICA1MCUge1xuICAgIHRvcDogMjBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDM1cHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpIH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpIH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KSB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSB9XG59XG5cbi5jdXN0b20tc2Nyb2xse1xuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xuICB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5RGFyaztcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXJcbiAge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxuICB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudENvbG9yO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYWNjZW50Q29sb3IsIDglKTtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlcntcbiAgJl9fY29udGVudFdyYXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhZGRDb2xvcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1nL2hlYWRlcl9iZy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgJl9fY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSw5LDksMC43KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJsYWNrO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpIDAlLHJnYmEoMCwwLDAsMC44KSAyMCUscmdiYSgwLDAsMCwwLjIwKSA1MCUscmdiYSgwLDAsMCwwLjk5KSA5OSUscmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgfVxuICAmX19sYW5ndWFnZXN7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTVweDtcbiAgICB6LWluZGV4OiA1O1xuICB9XG4gICZfX2xhbmd1YWdle1xuICAgIGNvbG9yOiAkZ3JleUxpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzIGVhc2U7XG4gICAgJjpob3ZlcntcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMCByZ2JhKDI1NSwgMTk3LCAyNCwgMSk7XG4gICAgfVxuICAgICYuaGVhZGVyX19sYW5ndWFnZS0tYWN0aXZle1xuICAgICAgY29sb3I6ICRhZGRDb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG4ubWFpbntcbiAgcGFkZGluZzogMTBweCAwO1xuICAmX19jb250ZW50e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpO1xuICB9XG4gICZfX3NwaW5uZXJXcmFwe1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgei1pbmRleDogMjtcbiAgICAmLm1haW5fX3NwaW5uZXJXcmFwLS1hY3RpdmV7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuICAmX19zcGlubmVyIHtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAmX19jdWJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkQ29sb3I7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgJi5tYWluX19jdWJlLS1zZWNvbmQge1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICB9XG4gIH1cbn1cblxuLm5hdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAmX19ibG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICRncmV5TGlnaHQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRhZGRDb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gICAgJjpob3ZlcntcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAubmF2X19jYXBpdGFse1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDIycHggcmdiYSgyNTQsIDEwMywgMCwgMC44KTtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5uYXZfX2Jsb2NrLS1hY3RpdmV7XG4gICAgICBjb2xvcjogJGFjY2VudENvbG9yO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsb3dMaWdodGluZ0JhY2tncm91bmQ7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgICB9XG4gIH1cbiAgJl9fY2FwaXRhbHtcbiAgICBmb250LXNpemU6IDU4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgfVxuICAmX190aXRsZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4uZm9vdGVye1xuICAmX19ibG9ja1dyYXB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAmX19ibG9ja3tcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LDksOSwwLjcpO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRibGFjaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICYuZm9vdGVyX19ibG9jay0tYWN0aXZle1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOSw5LDksMSk7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGFkZENvbG9yO1xuICAgICAgei1pbmRleDogMjAwO1xuICAgICAgYm94LXNoYWRvdzogMHB4IC0xNHB4IDIwcHggLTEwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgICAgJiAuZm9vdGVyX19hcnJvd0Jsb2Nre1xuICAgICAgICAmIC5mYXtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmX19sYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAmX19pbmZve1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgfVxuICAmX19hcnJvd0Jsb2Nre1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAkYWRkQ29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYgLmZhe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgICAgIGFuaW1hdGlvbjogYXJyb3dTbGlkZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbiAgJl9fZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAmX19mb3JtVGl0bGV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogJGFkZENvbG9yO1xuICB9XG4gICZfX3RleHRBcmVhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50Q29sb3I7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbiAgJl9faW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnRDb2xvcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAmX19zdWJXcmFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAmX19zdWJtaXR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMzlweDtcbiAgICB0b3A6IC02NXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggMHB4IHJnYmEoMjU0LDEwMiwwLDEpO1xuICAgICYgLmZhe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyOSU7XG4gICAgICBsZWZ0OiAzMSU7XG4gICAgICBjb2xvcjogJGdyZXlEYXJrO1xuICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gICAgICAmLmZhLS1hd2F5e1xuICAgICAgICB0b3A6IC0xMDAlO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmZvY3Vze1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmJ1cmdlcntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qPT09PT09PT09PSAgRGVza3RvcCBGaXJzdCAgPT09PT09PT09PSovXG5cbi8qIExhcmdlIERldmljZXMsIFdpZGUgU2NyZWVucyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblxufVxuXG4vKiBNZWRpdW0gRGV2aWNlcywgRGVza3RvcHMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm5hdntcbiAgICAmX19ibG9ja3tcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIH1cbiAgICAmX19jYXBpdGFse1xuICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5hdntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAzMDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgJi5uYXYtLWFjdGl2ZXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb2ludGVyLWV2ZW50czogZmlsbDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgICZfX2Jsb2Nre1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA2NSU7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAmX19jYXBpdGFse1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuYnVyZ2Vye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDQwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICYuYnVyZ2VyLS1hY3RpdmV7XG4gICAgICAuYnVyZ2VyX19saW5lOmZpcnN0LWNoaWxke1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgfVxuICAgICAgLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMil7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRvcDogN3B4O1xuICAgICAgfVxuICAgICAgLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMyl7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgIC5idXJnZXJfX2xpbmU6bGFzdC1jaGlsZHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmX19saW5le1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50Q29sb3I7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvb3RlcntcbiAgICAmX19ibG9ja3tcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgJi5mb290ZXJfX2Jsb2NrLS1hY3RpdmV7XG4gICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICZfX2Fycm93QmxvY2tXcmFwe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgJl9fdGV4dEFyZWF7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAmX19pbnB1dHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgICZfX3N1Ym1pdHtcbiAgICAgIHJpZ2h0OiAzNXB4O1xuICAgIH1cbiAgfVxufVxuXG4vKiovXG5cbi8qIEV4dHJhIFNtYWxsIERldmljZXMsIFBob25lcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZm9vdGVye1xuICAgICZfX3N1Ym1pdHtcbiAgICAgIHJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5mb290ZXJ7XG4gICAgJl9fc3VibWl0e1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuZm9vdGVye1xuICAgICZfX3N1Ym1pdHtcbiAgICAgIHJpZ2h0OiAyM3B4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbi8qIEN1c3RvbSwgaVBob25lIFJldGluYSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIik7XG5Aa2V5ZnJhbWVzIHNsb3dMaWdodGluZ0JhY2tncm91bmQge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMjU0LCAxMDIsIDAsIDApO1xuICB9XG4gIDYwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMjU0LCAxMDIsIDAsIDApO1xuICB9XG4gIDgwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwICNmZTY2MDA7XG4gIH1cbiAgOTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgyNTQsIDEwMiwgMCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMjU0LCAxMDIsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFycm93U2xpZGUge1xuICAwJSB7XG4gICAgdG9wOiAzNXB4O1xuICB9XG4gIDUwJSB7XG4gICAgdG9wOiAyMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMzVweDtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICB9XG59XG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMzIzO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwOTA5O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNTE4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWIyMDA7XG59XG5cbi5oZWFkZXJfX2NvbnRlbnRXcmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWcvaGVhZGVyX2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5LCA5LCA5LCAwLjcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA5MDkwOTtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjgpIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjIpIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjk5KSA5OSUsIGJsYWNrIDEwMCUpO1xufVxuLmhlYWRlcl9fbGFuZ3VhZ2VzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiA1O1xufVxuLmhlYWRlcl9fbGFuZ3VhZ2Uge1xuICBjb2xvcjogI2E4YThhODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycyBlYXNlO1xufVxuLmhlYWRlcl9fbGFuZ3VhZ2U6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgI2ZmYzUxODtcbn1cbi5oZWFkZXJfX2xhbmd1YWdlLmhlYWRlcl9fbGFuZ3VhZ2UtLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmU2NzAwO1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5tYWluX19jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEyMHB4KTtcbn1cbi5tYWluX19zcGlubmVyV3JhcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDkwOTtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAyO1xufVxuLm1haW5fX3NwaW5uZXJXcmFwLm1haW5fX3NwaW5uZXJXcmFwLS1hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5fX3NwaW5uZXIge1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX19jdWJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjcwMDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cbi5tYWluX19jdWJlLm1haW5fX2N1YmUtLXNlY29uZCB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cbi5uYXZfX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwOTA5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjYThhOGE4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZlNjcwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuLm5hdl9fYmxvY2s6aG92ZXIge1xuICBjb2xvcjogI2U4ZThlODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdl9fYmxvY2s6aG92ZXIgLm5hdl9fY2FwaXRhbCB7XG4gIHRleHQtc2hhZG93OiAwIDAgMjJweCByZ2JhKDI1NCwgMTAzLCAwLCAwLjgpO1xufVxuLm5hdl9fYmxvY2submF2X19ibG9jay0tYWN0aXZlIHtcbiAgY29sb3I6ICNmZmM1MTg7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbG93TGlnaHRpbmdCYWNrZ3JvdW5kO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XG59XG4ubmF2X19jYXBpdGFsIHtcbiAgZm9udC1zaXplOiA1OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi5uYXZfX3RpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3Rlcl9fYmxvY2tXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MDkwOTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGVyX19ibG9jayB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDksIDksIDksIDAuNyk7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDkwOTA5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZvb3Rlcl9fYmxvY2suZm9vdGVyX19ibG9jay0tYWN0aXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwOTA5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZlNjcwMDtcbiAgei1pbmRleDogMjAwO1xuICBib3gtc2hhZG93OiAwcHggLTE0cHggMjBweCAtMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4uZm9vdGVyX19ibG9jay5mb290ZXJfX2Jsb2NrLS1hY3RpdmUgLmZvb3Rlcl9fYXJyb3dCbG9jayAuZmEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5mb290ZXJfX2xhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyX19pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZjNTE4O1xufVxuLmZvb3Rlcl9fYXJyb3dCbG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNmZTY3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXJfX2Fycm93QmxvY2sgLmZhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmYzUxODtcbiAgYW5pbWF0aW9uOiBhcnJvd1NsaWRlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLmZvb3Rlcl9fZm9ybSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb290ZXJfX2Zvcm1UaXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmU2NzAwO1xufVxuLmZvb3Rlcl9fdGV4dEFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjNTE4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uZm9vdGVyX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjNTE4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvb3Rlcl9fc3ViV3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX3N1Ym1pdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zOXB4O1xuICB0b3A6IC02NXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzUxODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggMHB4ICNmZTY2MDA7XG59XG4uZm9vdGVyX19zdWJtaXQgLmZhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI5JTtcbiAgbGVmdDogMzElO1xuICBjb2xvcjogIzIzMjMyMztcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuLmZvb3Rlcl9fc3VibWl0IC5mYS5mYS0tYXdheSB7XG4gIHRvcDogLTEwMCU7XG4gIGxlZnQ6IDEwMCU7XG59XG4uZm9vdGVyX19zdWJtaXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyo9PT09PT09PT09ICBEZXNrdG9wIEZpcnN0ICA9PT09PT09PT09Ki9cbi8qIExhcmdlIERldmljZXMsIFdpZGUgU2NyZWVucyAqL1xuLyogTWVkaXVtIERldmljZXMsIERlc2t0b3BzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZfX2Jsb2NrIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gIH1cbiAgLm5hdl9fY2FwaXRhbCB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG59XG4vKiBTbWFsbCBEZXZpY2VzLCBUYWJsZXRzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDMwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICAubmF2Lm5hdi0tYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBmaWxsO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLm5hdl9fYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNjUlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5uYXZfX2NhcGl0YWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYnVyZ2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA0MDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuYnVyZ2VyLmJ1cmdlci0tYWN0aXZlIC5idXJnZXJfX2xpbmU6Zmlyc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNTBweDtcbiAgfVxuICAuYnVyZ2VyLmJ1cmdlci0tYWN0aXZlIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRvcDogN3B4O1xuICB9XG4gIC5idXJnZXIuYnVyZ2VyLS1hY3RpdmUgLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAuYnVyZ2VyLmJ1cmdlci0tYWN0aXZlIC5idXJnZXJfX2xpbmU6bGFzdC1jaGlsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLmJ1cmdlcl9fbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzUxODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB9XG4gIC5idXJnZXJfX2xpbmU6Zmlyc3QtY2hpbGQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5idXJnZXJfX2xpbmU6bGFzdC1jaGlsZCB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5mb290ZXJfX2Jsb2NrIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgfVxuICAuZm9vdGVyX19ibG9jay5mb290ZXJfX2Jsb2NrLS1hY3RpdmUge1xuICAgIGhlaWdodDogNTUwcHg7XG4gIH1cbiAgLmZvb3Rlcl9fYXJyb3dCbG9ja1dyYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuICAuZm9vdGVyX190ZXh0QXJlYSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuZm9vdGVyX19pbnB1dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuZm9vdGVyX19zdWJtaXQge1xuICAgIHJpZ2h0OiAzNXB4O1xuICB9XG59XG4vKiovXG4vKiBFeHRyYSBTbWFsbCBEZXZpY2VzLCBQaG9uZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmZvb3Rlcl9fc3VibWl0IHtcbiAgICByaWdodDogMjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZm9vdGVyX19zdWJtaXQge1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5mb290ZXJfX3N1Ym1pdCB7XG4gICAgcmlnaHQ6IDIzcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG59XG4vKiBDdXN0b20sIGlQaG9uZSBSZXRpbmEgKi8iXX0= */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/* harmony import */ var _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/about-me/about-me.service */ "./src/app/service/about-me/about-me.service.ts");





var AppComponentModel = /** @class */ (function () {
    function AppComponentModel() {
    }
    return AppComponentModel;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(fb, aboutMeService, fetchDataService, translate) {
        this.aboutMeService = aboutMeService;
        this.fetchDataService = fetchDataService;
        this.translate = translate;
        this.appComponentModel = new AppComponentModel();
        this.form = fb.group({
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        translate.setDefaultLang('en');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchDataService.currentMessage.subscribe(function (bool) { return _this.appComponentModel.spinnerShow = bool; });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.aboutMeService.mailMe(this.form.value.email, this.form.value.text)
            .subscribe(function (data) {
            _this.appComponentModel.emailSend = true;
            setTimeout(function () {
                _this.appComponentModel.emailSend = false;
                _this.form.reset();
            }, 400);
        });
    };
    AppComponent.prototype.scrollHandler = function ($event) {
        var topBuffet = 0;
        var el = document.getElementById('aboutMeNav');
        if (el) {
            var aboutMe = document.getElementById('aboutMe').getBoundingClientRect().top;
            if (aboutMe < 0) {
                topBuffet = 200;
                el.style.top = Math.abs(aboutMe) + topBuffet + 'px';
            }
        }
    };
    AppComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ "@ngx-translate/http-loader");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__);


function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _about_me_about_me_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me/about-me.component.ngfactory */ "./src/app/about-me/about-me.component.ngfactory.js");
/* harmony import */ var _news_news_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.component.ngfactory */ "./src/app/news/news.component.ngfactory.js");
/* harmony import */ var _portfolio_portfolio_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component.ngfactory */ "./src/app/portfolio/portfolio.component.ngfactory.js");
/* harmony import */ var _training_training_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./training/training.component.ngfactory */ "./src/app/training/training.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-simple-slideshow */ "ng-simple-slideshow");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _service_news_news_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/news/news.service */ "./src/app/service/news/news.service.ts");
/* harmony import */ var _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/about-me/about-me.service */ "./src/app/service/about-me/about-me.service.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/* harmony import */ var _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/portfolio/portfolio.service */ "./src/app/service/portfolio/portfolio.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






























var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _about_me_about_me_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponentNgFactory"], _news_news_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NewsComponentNgFactory"], _portfolio_portfolio_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponentNgFactory"], _training_training_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TrainingComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_c"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_f"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_f"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__["ɵb"], ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"], _app_module__WEBPACK_IMPORTED_MODULE_19__["HttpLoaderFactory"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["USE_STORE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_news_news_service__WEBPACK_IMPORTED_MODULE_20__["NewsService"], _service_news_news_service__WEBPACK_IMPORTED_MODULE_20__["NewsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_21__["AboutMeService"], _service_about_me_about_me_service__WEBPACK_IMPORTED_MODULE_21__["AboutMeService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_22__["FetchDataService"], _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_22__["FetchDataService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_23__["PortfolioService"], _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_23__["PortfolioService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_24__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_i"](p0_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_j"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_25__["AboutMeComponent"] }, { path: "news", component: _news_news_component__WEBPACK_IMPORTED_MODULE_26__["NewsComponent"] }, { path: "portfolio", component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_27__["PortfolioComponent"] }, { path: "training", component: _training_training_component__WEBPACK_IMPORTED_MODULE_28__["TrainingComponent"] }, { path: "**", redirectTo: "", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__["SlideshowModule"], ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_17__["SlideshowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_19__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_19__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/news/news.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/news/news.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_NewsComponent, View_NewsComponent_0, View_NewsComponent_Host_0, NewsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewsComponent", function() { return RenderType_NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewsComponent_0", function() { return View_NewsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewsComponent_Host_0", function() { return View_NewsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponentNgFactory", function() { return NewsComponentNgFactory; });
/* harmony import */ var _news_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component.scss.shim.ngstyle */ "./src/app/news/news.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_news_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/news/news.service */ "./src/app/service/news/news.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_NewsComponent = [_news_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NewsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NewsComponent, data: {} });

function View_NewsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [["class", "news__categoryItem"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changePressProofCategory(_v.context.$implicit.title) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "news__categoryItem--active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], function (_ck, _v) { var currVal_0 = "news__categoryItem"; var currVal_1 = _ck(_v, 3, 0, _v.context.$implicit.active); _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_2); }); }
function View_NewsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [["class", "news__option"]], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "]))], function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.code, ""); _ck(_v, 1, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.code, ""); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.code == "us"); _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.country; _ck(_v, 3, 0, currVal_3); }); }
function View_NewsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "news__bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "news__categoryWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "ul", [["class", "news__categoryList"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "div", [["class", "news__inputsWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "select", [["class", "news__select"]], null, [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.changePressProofCountry($event.target) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "news__inputWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "input", [["class", "news__input"], ["placeholder", "search in feed"], ["type", "text"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.querySearchRequest.next($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.newsAssets.categories; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.newsAssets.countries; _ck(_v, 10, 0, currVal_1); }, null); }
function View_NewsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "pressProof"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "pressProof__publishedAt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h4", [["class", "pressProof__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "pressProof__imgWrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "pressProof__img"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [["class", "pressProof__description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "pressProof__footerWrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "pressProof__magazine"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["Publication: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "a", [["class", "pressProof__link"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" read more... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "pressProof__author"]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" Author: ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.publishedAt; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.urlToImage ? _v.context.$implicit.urlToImage : "assets/img/150x80.png"), ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.title, ""); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.description; _ck(_v, 8, 0, currVal_4); var currVal_5 = _v.context.$implicit.source.name; _ck(_v, 11, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.url, ""); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.author < 1); _ck(_v, 14, 0, currVal_7); var currVal_8 = _v.context.$implicit.author; _ck(_v, 15, 0, currVal_8); }); }
function View_NewsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "news__wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.news.articles; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "news"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.newsAssets; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.news; _ck(_v, 4, 0, currVal_1); }, null); }
function View_NewsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-news", [], null, null, null, View_NewsComponent_0, RenderType_NewsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _service_news_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"], _service_news_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], [_service_news_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"], _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_7__["FetchDataService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var NewsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-news", _news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"], View_NewsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/news/news.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/news/news.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n.news[_ngcontent-%COMP%] {\n  padding-right: 25px;\n}\n.news__inputsWrap[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.news__select[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #232323;\n  padding: 3px 25px 3px 10px;\n  border-radius: 3px;\n  border: 1px solid #606060;\n  color: #ffc518;\n}\n.news__select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.news__categoryWrap[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.news__categoryList[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.news__categoryItem[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  color: #a8a8a8;\n  cursor: pointer;\n  text-transform: capitalize;\n  -webkit-transition: color 0.2s ease;\n  transition: color 0.2s ease;\n}\n.news__categoryItem[_ngcontent-%COMP%]:hover {\n  color: #e8e8e8;\n}\n.news__categoryItem[_ngcontent-%COMP%]:hover:after {\n  content: \"\";\n  width: 100%;\n  position: absolute;\n  border-bottom: #fe6700 1px solid;\n}\n.news__categoryItem.news__categoryItem--active[_ngcontent-%COMP%] {\n  color: #ffc518;\n}\n.news__inputWrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.news__input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  padding: 3px 25px 3px 10px;\n  border-radius: 3px;\n  border: 1px solid #606060;\n  background-color: #232323;\n  color: #ffc518;\n}\n.news__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.news__wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.pressProof[_ngcontent-%COMP%] {\n  margin-bottom: 65px;\n}\n.pressProof__title[_ngcontent-%COMP%] {\n  color: #e8e8e8;\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n.pressProof__description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #a8a8a8;\n  text-align: justify;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pressProof__publishedAt[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n  font-size: 11px;\n  font-style: italic;\n}\n.pressProof__magazine[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n}\n.pressProof__imgWrapper[_ngcontent-%COMP%] {\n  float: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 150px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n.pressProof__img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pressProof__author[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n  font-size: 11px;\n  font-style: italic;\n  clear: both;\n}\n.pressProof__footerWrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  clear: both;\n}\n.pressProof__link[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #ffc518;\n}\n\n\n\n@media only screen and (max-width: 992px) {\n  .news__categoryList[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .news__categoryList[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  .news__categoryItem[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n  .news__select[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .news__input[_ngcontent-%COMP%] {\n    height: 27px;\n    font-size: 12px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .pressProof__title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .pressProof__imgWrapper[_ngcontent-%COMP%] {\n    float: none;\n    width: 100%;\n  }\n  .pressProof__description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .pressProof__magazine[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .news[_ngcontent-%COMP%] {\n    padding-right: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbWl0cnkvRG93bmxvYWRzLzExMS9vbGQvcG9ydGZvbGlvL3NyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2RtaXRyeS9Eb3dubG9hZHMvMTExL29sZC9wb3J0Zm9saW8vc3RkaW4iLCJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVUSw2REFBQTtBQ1JSO0VBQ0UsbUJBQUE7QUNBRjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBRElFO0VBQ0UsV0FBQTtFQUNBLHlCRFZPO0VDV1AsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0RWVTtBRVFkO0FER0k7RUFDRSxhQUFBO0FDRE47QURPRTtFQUNFLG1CQUFBO0FDTEo7QURPRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0xKO0FET0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjRGxDUTtFQ21DUixlQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0FDTEo7QURNSTtFQUNFLGNEM0NFO0FFdUNSO0FES007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNIUjtBRE1JO0VBQ0UsY0Q5Q1E7QUUwQ2Q7QURPRTtFQUNFLGtCQUFBO0FDTEo7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJEOURPO0VDK0RQLGNEM0RVO0FFc0RkO0FETUk7RUFDRSxhQUFBO0FDSk47QURPRTtFQUNFLG1CQUFBO0FDTEo7QURTQTtFQUNFLG1CQUFBO0FDTkY7QURPRTtFQUNFLGNEOUVJO0VDK0VKLGVBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0U7RUFDRSxlQUFBO0VBQ0EsY0RoRlE7RUNpRlIsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTEo7QURPRTtFQUNFLGNEdEZRO0VDdUZSLGVBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0U7RUFDRSxjRDNGUTtBRXNGWjtBRE9FO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRE9FO0VBQ0UsV0FBQTtBQ0xKO0FET0U7RUFDRSxjRDFHUTtFQzJHUixlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTEo7QURPRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0xKO0FET0U7RUFDRSxjQUFBO0VBQ0EsY0RySFU7QUVnSGQ7QURTQSx3Q0FBQTtBQUVBLGdDQUFBO0FBS0EsNkJBQUE7QUFDQTtFQUVJO0lBQ0UsZUFBQTtFQ1pKO0FBQ0Y7QURpQkEsMkJBQUE7QUFJQTtFQUVJO0lBQ0UsZUFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0VDbkJKO0VEcUJFO0lBQ0UsY0FBQTtFQ25CSjtFRHFCRTtJQUNFLGVBQUE7RUNuQko7RURxQkU7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQ25CSjtBQUNGO0FEdUJBLEdBQUE7QUFFQSxnQ0FBQTtBQUNBO0VBRUk7SUFDRSxlQUFBO0VDdkJKO0VEeUJFO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUN2Qko7RUR5QkU7SUFDRSxlQUFBO0VDdkJKO0VEeUJFO0lBQ0UsZUFBQTtFQ3ZCSjs7RUQwQkE7SUFDRSxtQkFBQTtFQ3ZCRjtBQUNGO0FEeUJBLDBCQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZThlOGU4O1xuJGJsYWNrOiAjMDkwOTA5O1xuJGdyZXlEYXJrOiAjMjMyMzIzO1xuJGdyZXk6ICM2MDYwNjA7XG4kZ3JleUxpZ2h0OiAjYThhOGE4O1xuXG4kYWNjZW50Q29sb3I6ICNmZmM1MTg7XG4kYWRkQ29sb3I6ICNmZTY3MDA7XG5cbi8vaW1wb3J0IGZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpO1xuIiwiQGltcG9ydCBcIi4uL3ZhcmlhYmxlXCI7XG5cbi5uZXdze1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAmX19iYXJ7XG5cbiAgfVxuICAmX19pbnB1dHNXcmFwe1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgJl9fc2VsZWN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5RGFyaztcbiAgICBwYWRkaW5nOiAzcHggMjVweCAzcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG4gICAgY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgICAmOmZvY3Vze1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9fb3B0aW9ue1xuXG4gIH1cbiAgJl9fY2F0ZWdvcnlXcmFwe1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgJl9fY2F0ZWdvcnlMaXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmX19jYXRlZ29yeUl0ZW17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAkZ3JleUxpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gICAgJjpob3ZlcntcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGFkZENvbG9yIDFweCBzb2xpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5uZXdzX19jYXRlZ29yeUl0ZW0tLWFjdGl2ZXtcbiAgICAgIGNvbG9yOiAkYWNjZW50Q29sb3I7XG4gICAgfVxuICB9XG4gICZfX2lucHV0V3JhcHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgJl9faW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDNweCAyNXB4IDNweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleURhcms7XG4gICAgY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgICAmOmZvY3Vze1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9fd3JhcHBlcntcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG5cbi5wcmVzc1Byb29me1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xuICAmX190aXRsZXtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgJl9fZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAkZ3JleUxpZ2h0O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAmX19wdWJsaXNoZWRBdHtcbiAgICBjb2xvcjogJGdyZXlMaWdodDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gICZfX21hZ2F6aW5le1xuICAgIGNvbG9yOiAkZ3JleUxpZ2h0O1xuICB9XG4gICZfX2ltZ1dyYXBwZXJ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAmX19pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgJl9fYXV0aG9ye1xuICAgIGNvbG9yOiAkZ3JleUxpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgJl9fZm9vdGVyV3JhcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gICZfX2xpbmt7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgfVxufVxuXG4vKj09PT09PT09PT0gIERlc2t0b3AgRmlyc3QgID09PT09PT09PT0qL1xuXG4vKiBMYXJnZSBEZXZpY2VzLCBXaWRlIFNjcmVlbnMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG5cbn1cblxuLyogTWVkaXVtIERldmljZXMsIERlc2t0b3BzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uZXdze1xuICAgICZfX2NhdGVnb3J5TGlzdHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiBTbWFsbCBEZXZpY2VzLCBUYWJsZXRzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm5ld3N7XG4gICAgJl9fY2F0ZWdvcnlMaXN0e1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAmX19jYXRlZ29yeUl0ZW17XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG4gICAgJl9fc2VsZWN0e1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAmX19pbnB1dHtcbiAgICAgIGhlaWdodDogMjdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cblxuLyoqL1xuXG4vKiBFeHRyYSBTbWFsbCBEZXZpY2VzLCBQaG9uZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnByZXNzUHJvb2Z7XG4gICAgJl9fdGl0bGV7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgICZfX2ltZ1dyYXBwZXJ7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAmX19kZXNjcmlwdGlvbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgJl9fbWFnYXppbmV7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG4gIC5uZXdze1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbi8qIEN1c3RvbSwgaVBob25lIFJldGluYSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuXG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIik7XG4ubmV3cyB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG4ubmV3c19faW5wdXRzV3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ubmV3c19fc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIHBhZGRpbmc6IDNweCAyNXB4IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MDYwNjA7XG4gIGNvbG9yOiAjZmZjNTE4O1xufVxuLm5ld3NfX3NlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubmV3c19fY2F0ZWdvcnlXcmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5uZXdzX19jYXRlZ29yeUxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5uZXdzX19jYXRlZ29yeUl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2E4YThhODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuLm5ld3NfX2NhdGVnb3J5SXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZThlOGU4O1xufVxuLm5ld3NfX2NhdGVnb3J5SXRlbTpob3ZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1ib3R0b206ICNmZTY3MDAgMXB4IHNvbGlkO1xufVxuLm5ld3NfX2NhdGVnb3J5SXRlbS5uZXdzX19jYXRlZ29yeUl0ZW0tLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZjNTE4O1xufVxuLm5ld3NfX2lucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZXdzX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDNweCAyNXB4IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MDYwNjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG4gIGNvbG9yOiAjZmZjNTE4O1xufVxuLm5ld3NfX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5uZXdzX193cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnByZXNzUHJvb2Yge1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuLnByZXNzUHJvb2ZfX3RpdGxlIHtcbiAgY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnByZXNzUHJvb2ZfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2E4YThhODtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucHJlc3NQcm9vZl9fcHVibGlzaGVkQXQge1xuICBjb2xvcjogI2E4YThhODtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ucHJlc3NQcm9vZl9fbWFnYXppbmUge1xuICBjb2xvcjogI2E4YThhODtcbn1cbi5wcmVzc1Byb29mX19pbWdXcmFwcGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5wcmVzc1Byb29mX19pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcmVzc1Byb29mX19hdXRob3Ige1xuICBjb2xvcjogI2E4YThhODtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNsZWFyOiBib3RoO1xufVxuLnByZXNzUHJvb2ZfX2Zvb3RlcldyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNsZWFyOiBib3RoO1xufVxuLnByZXNzUHJvb2ZfX2xpbmsge1xuICBmbGV4LXNocmluazogMDtcbiAgY29sb3I6ICNmZmM1MTg7XG59XG5cbi8qPT09PT09PT09PSAgRGVza3RvcCBGaXJzdCAgPT09PT09PT09PSovXG4vKiBMYXJnZSBEZXZpY2VzLCBXaWRlIFNjcmVlbnMgKi9cbi8qIE1lZGl1bSBEZXZpY2VzLCBEZXNrdG9wcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubmV3c19fY2F0ZWdvcnlMaXN0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLm5ld3NfX2NhdGVnb3J5TGlzdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLm5ld3NfX2NhdGVnb3J5SXRlbSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiAgLm5ld3NfX3NlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5uZXdzX19pbnB1dCB7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLyoqL1xuLyogRXh0cmEgU21hbGwgRGV2aWNlcywgUGhvbmVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wcmVzc1Byb29mX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5wcmVzc1Byb29mX19pbWdXcmFwcGVyIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJlc3NQcm9vZl9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAucHJlc3NQcm9vZl9fbWFnYXppbmUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5uZXdzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59XG4vKiBDdXN0b20sIGlQaG9uZSBSZXRpbmEgKi8iXX0= */"];



/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_news_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/news/news.service */ "./src/app/service/news/news.service.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);





var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService, fetchDataService) {
        this.newsService = newsService;
        this.fetchDataService = fetchDataService;
        this.country = 'us';
        this.category = 'general';
        this.querySearch = '';
        this.querySearchRequest = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNewsAssets();
        this.showPressProof(this.country, this.category, this.querySearch);
        this.querySearchRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000)).subscribe(function (value) {
            if (value !== 0) {
                _this.querySearch = "&q=" + value;
            }
            else {
                _this.querySearch = '';
            }
            _this.showPressProof(_this.country, _this.category, _this.querySearch);
        });
    };
    NewsComponent.prototype.changePressProofCountry = function (countryCode) {
        this.country = countryCode.value;
        this.showPressProof(this.country, this.category, this.querySearch);
    };
    NewsComponent.prototype.changePressProofCategory = function (category) {
        this.newsAssets.categories.forEach(function (item, index) {
            if (category === item.title) {
                item.active = true;
            }
            else {
                item.active = false;
            }
        });
        this.category = category;
        this.showPressProof(this.country, this.category, this.querySearch);
    };
    NewsComponent.prototype.showPressProof = function (countryCode, category, querySearch) {
        var _this = this;
        this.fetchDataService.changeMessage(true);
        this.newsService.getPressProof(countryCode, category, querySearch)
            .subscribe(function (data) {
            _this.news = data;
            _this.fetchDataService.changeMessage(false);
        });
    };
    NewsComponent.prototype.showNewsAssets = function () {
        var _this = this;
        this.newsService.getNewsAssets()
            .subscribe(function (data) {
            _this.newsAssets = data;
        });
    };
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_PortfolioComponent, View_PortfolioComponent_0, View_PortfolioComponent_Host_0, PortfolioComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PortfolioComponent", function() { return RenderType_PortfolioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PortfolioComponent_0", function() { return View_PortfolioComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PortfolioComponent_Host_0", function() { return View_PortfolioComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponentNgFactory", function() { return PortfolioComponentNgFactory; });
/* harmony import */ var _portfolio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.scss.shim.ngstyle */ "./src/app/portfolio/portfolio.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_ng_simple_slideshow_ng_simple_slideshow_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/ng-simple-slideshow/ng-simple-slideshow.ngfactory */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.ngfactory.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-simple-slideshow */ "ng-simple-slideshow");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/portfolio/portfolio.service */ "./src/app/service/portfolio/portfolio.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_PortfolioComponent = [_portfolio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PortfolioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PortfolioComponent, data: {} });

function View_PortfolioComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "portfolio__block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [["class", "portfolio__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["style", "display:block;"]], [[4, "width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "slideshow", [], null, null, null, _node_modules_ng_simple_slideshow_ng_simple_slideshow_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵa_0"], _node_modules_ng_simple_slideshow_ng_simple_slideshow_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵa"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 376832, [["slideshow", 4]], 0, ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3__["ɵb"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["TransferState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], { imageUrls: [0, "imageUrls"], height: [1, "height"], minHeight: [2, "minHeight"], arrowSize: [3, "arrowSize"], showArrows: [4, "showArrows"], disableSwiping: [5, "disableSwiping"], autoPlay: [6, "autoPlay"], stopAutoPlayOnSlide: [7, "stopAutoPlayOnSlide"], debug: [8, "debug"], backgroundSize: [9, "backgroundSize"], backgroundPosition: [10, "backgroundPosition"], backgroundRepeat: [11, "backgroundRepeat"], showDots: [12, "showDots"], dotColor: [13, "dotColor"], showCaptions: [14, "showCaptions"], captionColor: [15, "captionColor"], captionBackground: [16, "captionBackground"], lazyLoad: [17, "lazyLoad"], hideOnNoSlides: [18, "hideOnNoSlides"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "portfolio__linkBlock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "a", [["class", "portfolio__link"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Open site in new tab"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "portfolio__desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _v.context.$implicit.images; var currVal_3 = _co.height; var currVal_4 = _co.minHeight; var currVal_5 = _co.arrowSize; var currVal_6 = _co.showArrows; var currVal_7 = _co.disableSwiping; var currVal_8 = _co.autoPlay; var currVal_9 = _co.stopAutoPlayOnSlide; var currVal_10 = _co.debug; var currVal_11 = _co.backgroundSize; var currVal_12 = _co.backgroundPosition; var currVal_13 = _co.backgroundRepeat; var currVal_14 = _co.showDots; var currVal_15 = _co.dotColor; var currVal_16 = _co.showCaptions; var currVal_17 = _co.captionColor; var currVal_18 = _co.captionBackground; var currVal_19 = _co.lazyLoad; var currVal_20 = _co.hideOnNoSlides; _ck(_v, 5, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.title_site; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.width; _ck(_v, 3, 0, currVal_1); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.link, ""); _ck(_v, 7, 0, currVal_21); var currVal_22 = _v.context.$implicit.desc; _ck(_v, 10, 0, currVal_22); }); }
function View_PortfolioComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "portfolio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PortfolioComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.portfolioData; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PortfolioComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PortfolioComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.portfolioData; _ck(_v, 1, 0, currVal_0); }, null); }
function View_PortfolioComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-portfolio", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_PortfolioComponent_0, RenderType_PortfolioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_6__["PortfolioService"], _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_6__["PortfolioService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], [_service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_9__["FetchDataService"], _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_6__["PortfolioService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var PortfolioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-portfolio", _portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], View_PortfolioComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n.portfolio__block[_ngcontent-%COMP%] {\n  background-color: #090909;\n  padding: 5px 15px 25px 15px;\n  margin: 0 15px 35px 0;\n}\n.portfolio__title[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  font-size: 22px;\n  padding-right: 25px;\n  margin: 15px 0 15px 15px;\n  text-transform: capitalize;\n  color: #e8e8e8;\n  border-bottom: 1px solid #fe6700;\n}\n.portfolio__imgWrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: hidden;\n}\n.portfolio__img[_ngcontent-%COMP%] {\n  width: 32%;\n}\n.portfolio__linkBlock[_ngcontent-%COMP%] {\n  margin: 10px 0 15px 0;\n}\n.portfolio__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 20px;\n  color: #090909;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-decoration: none;\n  border-radius: 3px;\n  background-color: #ffc518;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.portfolio__link[_ngcontent-%COMP%]:hover {\n  background-color: #fe6700;\n}\n.portfolio__desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: justify;\n  color: #a8a8a8;\n}\n\n\n\n\n\n@media only screen and (max-width: 480px) {\n  .portfolio__link[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbWl0cnkvRG93bmxvYWRzLzExMS9vbGQvcG9ydGZvbGlvL3NyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9kbWl0cnkvRG93bmxvYWRzLzExMS9vbGQvcG9ydGZvbGlvL3N0ZGluIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVRLDZEQUFBO0FDUE47RUFDRSx5QkRISTtFQ0lKLDJCQUFBO0VBQ0EscUJBQUE7QUNESjtBREdFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjRGZJO0VDZ0JKLGdDQUFBO0FDREo7QURHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0RoQ0k7RUNpQ0osaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkRoQ1U7RUNpQ1Ysd0NBQUE7RUFBQSxnQ0FBQTtBQ0RKO0FERU07RUFDRSx5QkRsQ0c7QUVrQ1g7QURHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNEM0NRO0FFMENaO0FES0Esd0NBQUE7QUFFQSxnQ0FBQTtBQUtBLDZCQUFBO0FBTUEsMkJBQUE7QUFJQSxHQUFBO0FBRUEsZ0NBQUE7QUFDQTtFQUVJO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VDakJKO0FBQ0Y7QURvQkEsMEJBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZThlOGU4O1xuJGJsYWNrOiAjMDkwOTA5O1xuJGdyZXlEYXJrOiAjMjMyMzIzO1xuJGdyZXk6ICM2MDYwNjA7XG4kZ3JleUxpZ2h0OiAjYThhOGE4O1xuXG4kYWNjZW50Q29sb3I6ICNmZmM1MTg7XG4kYWRkQ29sb3I6ICNmZTY3MDA7XG5cbi8vaW1wb3J0IGZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpO1xuIiwiQGltcG9ydCBcIi4uL3ZhcmlhYmxlXCI7XG5cbi5wb3J0Zm9saW97XG4gICZfX2Jsb2Nre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICBwYWRkaW5nOiA1cHggMTVweCAyNXB4IDE1cHg7XG4gICAgbWFyZ2luOiAwIDE1cHggMzVweCAwO1xuICB9XG4gICZfX3RpdGxle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweCAxNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRhZGRDb2xvcjtcbiAgfVxuICAmX19pbWdXcmFwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICZfX2ltZ3tcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gICZfX2xpbmtCbG9ja3tcbiAgICBtYXJnaW46IDEwcHggMCAxNXB4IDA7XG4gIH1cbiAgJl9fbGlua3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnRDb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhZGRDb2xvcjtcbiAgICAgIH1cbiAgfVxuICAmX19kZXNje1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGNvbG9yOiAkZ3JleUxpZ2h0O1xuICB9XG59XG5cbi8qPT09PT09PT09PSAgRGVza3RvcCBGaXJzdCAgPT09PT09PT09PSovXG5cbi8qIExhcmdlIERldmljZXMsIFdpZGUgU2NyZWVucyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblxufVxuXG4vKiBNZWRpdW0gRGV2aWNlcywgRGVza3RvcHMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcblxufVxuXG5cbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbn1cblxuLyoqL1xuXG4vKiBFeHRyYSBTbWFsbCBEZXZpY2VzLCBQaG9uZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnBvcnRmb2xpb3tcbiAgICAmX19saW5re1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIH1cbiAgfVxufVxuLyogQ3VzdG9tLCBpUGhvbmUgUmV0aW5hICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG5cbn1cblxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuLnBvcnRmb2xpb19fYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwOTA5O1xuICBwYWRkaW5nOiA1cHggMTVweCAyNXB4IDE1cHg7XG4gIG1hcmdpbjogMCAxNXB4IDM1cHggMDtcbn1cbi5wb3J0Zm9saW9fX3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgbWFyZ2luOiAxNXB4IDAgMTVweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmU2NzAwO1xufVxuLnBvcnRmb2xpb19faW1nV3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBvcnRmb2xpb19faW1nIHtcbiAgd2lkdGg6IDMyJTtcbn1cbi5wb3J0Zm9saW9fX2xpbmtCbG9jayB7XG4gIG1hcmdpbjogMTBweCAwIDE1cHggMDtcbn1cbi5wb3J0Zm9saW9fX2xpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICMwOTA5MDk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzUxODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucG9ydGZvbGlvX19saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjcwMDtcbn1cbi5wb3J0Zm9saW9fX2Rlc2Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjYThhOGE4O1xufVxuXG4vKj09PT09PT09PT0gIERlc2t0b3AgRmlyc3QgID09PT09PT09PT0qL1xuLyogTGFyZ2UgRGV2aWNlcywgV2lkZSBTY3JlZW5zICovXG4vKiBNZWRpdW0gRGV2aWNlcywgRGVza3RvcHMgKi9cbi8qIFNtYWxsIERldmljZXMsIFRhYmxldHMgKi9cbi8qKi9cbi8qIEV4dHJhIFNtYWxsIERldmljZXMsIFBob25lcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucG9ydGZvbGlvX19saW5rIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICB9XG59XG4vKiBDdXN0b20sIGlQaG9uZSBSZXRpbmEgKi8iXX0= */"];



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/* harmony import */ var _service_portfolio_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/portfolio/portfolio.service */ "./src/app/service/portfolio/portfolio.service.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(fetchDataService, portfolioService) {
        this.fetchDataService = fetchDataService;
        this.portfolioService = portfolioService;
        this.height = '400px';
        this.arrowSize = '30px';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = true;
        this.dotColor = '#fe6700';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .58)';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.width = '100%';
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getPortfolioData();
        this.sizingSlider();
    };
    PortfolioComponent.prototype.onResize = function (event) {
        this.sizingSlider();
    };
    PortfolioComponent.prototype.sizingSlider = function () {
        if (window.innerWidth > 991) {
            this.height = '400px';
        }
        else if (window.innerWidth > 410) {
            this.height = '300px';
        }
        else {
            this.height = '150px';
        }
    };
    PortfolioComponent.prototype.getPortfolioData = function () {
        var _this = this;
        this.fetchDataService.changeMessage(true);
        this.portfolioService.getPortfolioData()
            .subscribe(function (data) {
            _this.portfolioData = data;
            _this.fetchDataService.changeMessage(false);
        });
    };
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/service/about-me/about-me.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/about-me/about-me.service.ts ***!
  \******************************************************/
/*! exports provided: AboutMeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeService", function() { return AboutMeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





var AboutMeService = /** @class */ (function () {
    function AboutMeService(http) {
        this.http = http;
        this.serverUrl = 'https://salty-tundra-80705.herokuapp.com';
    }
    AboutMeService.prototype.getAboutMe = function () {
        return this.http.get(this.serverUrl + "/api/profile").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err); })));
    };
    AboutMeService.prototype.mailMe = function (email, message) {
        return this.http.post(this.serverUrl + "/api/mail", {
            mail: email,
            message: message
        }).pipe();
    };
    AboutMeService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function AboutMeService_Factory() { return new AboutMeService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: AboutMeService, providedIn: "root" });
    return AboutMeService;
}());



/***/ }),

/***/ "./src/app/service/fetch-data/fetch-data.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/fetch-data/fetch-data.service.ts ***!
  \**********************************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


var FetchDataService = /** @class */ (function () {
    function FetchDataService() {
        this.fetchData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.currentMessage = this.fetchData.asObservable();
    }
    FetchDataService.prototype.changeMessage = function (data) {
        this.fetchData.next(data);
    };
    FetchDataService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function FetchDataService_Factory() { return new FetchDataService(); }, token: FetchDataService, providedIn: "root" });
    return FetchDataService;
}());



/***/ }),

/***/ "./src/app/service/news/news.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/news/news.service.ts ***!
  \**********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getPressProof = function (countryCode, category, querySearch) {
        var publicKey = '554d9aa5103d42e6a2360610deca0601';
        var templateUrl = 'https://newsapi.org/v2/top-headlines';
        var newsUrl = templateUrl + "?country=" + countryCode + "&category=" + category + querySearch + "&apiKey=" + publicKey;
        return this.http.get(newsUrl);
    };
    NewsService.prototype.getNewsAssets = function () {
        return this.http.get('assets/newsAssets.json');
    };
    NewsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function NewsService_Factory() { return new NewsService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: NewsService, providedIn: "root" });
    return NewsService;
}());



/***/ }),

/***/ "./src/app/service/portfolio/portfolio.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/portfolio/portfolio.service.ts ***!
  \********************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
        this.serverUrl = 'https://salty-tundra-80705.herokuapp.com';
    }
    // serverUrl = 'http://localhost:3000';
    PortfolioService.prototype.getPortfolioData = function () {
        return this.http.get(this.serverUrl + "/api/portfolio").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    PortfolioService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function PortfolioService_Factory() { return new PortfolioService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: PortfolioService, providedIn: "root" });
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/service/training/training.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/training/training.service.ts ***!
  \******************************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





var TrainingService = /** @class */ (function () {
    function TrainingService(http) {
        this.http = http;
        this.serverUrl = 'https://salty-tundra-80705.herokuapp.com';
    }
    TrainingService.prototype.getTrainingData = function () {
        return this.http.get(this.serverUrl + "/api/training").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    };
    TrainingService.prototype.updateTrainingData = function (data) {
        return this.http.post(this.serverUrl + "/api/trainingupdate", { data: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data1) { return data1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(err);
        }));
    };
    TrainingService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function TrainingService_Factory() { return new TrainingService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: TrainingService, providedIn: "root" });
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/training/training.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/training/training.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_TrainingComponent, View_TrainingComponent_0, View_TrainingComponent_Host_0, TrainingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TrainingComponent", function() { return RenderType_TrainingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TrainingComponent_0", function() { return View_TrainingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TrainingComponent_Host_0", function() { return View_TrainingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponentNgFactory", function() { return TrainingComponentNgFactory; });
/* harmony import */ var _training_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training.component.scss.shim.ngstyle */ "./src/app/training/training.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/* harmony import */ var _service_training_training_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/training/training.service */ "./src/app/service/training/training.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_TrainingComponent = [_training_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TrainingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TrainingComponent, data: {} });

function View_TrainingComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "training__exercise col-12 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "training__exerciseBlock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "div", [["class", "training__exercise"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "training__exerciseName"]], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "input", [["class", "training__exerciseInput"], ["disabled", ""], ["type", "text"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_v.context.$implicit.weight = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["class", "training__nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "button", [["class", "training__btn"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeValue(true, _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-arrow-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "button", [["class", "training__btn"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeValue(false, _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-arrow-down"]], null, null, null, null, null))], function (_ck, _v) { var currVal_10 = ""; var currVal_11 = _v.context.$implicit.weight; _ck(_v, 8, 0, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.name, ""); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_12 = !_co.enableBtn; _ck(_v, 12, 0, currVal_12); var currVal_13 = !_co.enableBtn; _ck(_v, 14, 0, currVal_13); }); }
function View_TrainingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "training"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TrainingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.trainingData; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TrainingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-training", [], null, null, null, View_TrainingComponent_0, RenderType_TrainingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _training_component__WEBPACK_IMPORTED_MODULE_4__["TrainingComponent"], [_service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_5__["FetchDataService"], _service_training_training_service__WEBPACK_IMPORTED_MODULE_6__["TrainingService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TrainingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-training", _training_component__WEBPACK_IMPORTED_MODULE_4__["TrainingComponent"], View_TrainingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/training/training.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/training/training.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n.training[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.training__blockName[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: capitalize;\n  color: #e8e8e8;\n  border-bottom: 1px solid #fe6700;\n}\n.training__exerciseBlock[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 25px;\n}\n.training__exercise[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.training__exerciseName[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n  text-transform: capitalize;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 2px;\n}\n.training__exerciseInput[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #e8e8e8;\n  font-family: fantasy;\n  background-color: transparent;\n  border: none;\n  font-size: 38px;\n  border-bottom: 1px solid #ffc518;\n}\n.training__nav[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  margin-left: 25px;\n}\n.training__btn[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: transparent;\n  border: 1px solid #fe6700;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #fe6700;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.training__btn[_ngcontent-%COMP%]:disabled {\n  color: #ffc298;\n  border-color: #ffc298;\n}\n.training__btn[_ngcontent-%COMP%]:hover {\n  background-color: #fe6700;\n  color: #090909;\n}\n.training__btn[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kbWl0cnkvRG93bmxvYWRzLzExMS9vbGQvcG9ydGZvbGlvL3NyYy9hcHAvdHJhaW5pbmcvdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZG1pdHJ5L0Rvd25sb2Fkcy8xMTEvb2xkL3BvcnRmb2xpby9zdGRpbiIsInNyYy9hcHAvdHJhaW5pbmcvdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVVEsNkRBQUE7QUNSUjtFQUNFLGVBQUE7QUNBRjtBRElFO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNEVkk7RUNXSixnQ0FBQTtBQ0ZKO0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRko7QURJRTtFQUNFLGNEcEJRO0VDcUJSLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRElFO0VBQ0UsV0FBQTtFQUNBLGNEaENJO0VDaUNKLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDRko7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0Q1Q087RUM2Q1AsaUNBQUE7RUFBQSx5QkFBQTtBQ0ZKO0FER0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNETjtBREdJO0VBQ0UseUJEbkRLO0VDb0RMLGNEMURFO0FFeURSO0FER0k7RUFDRSxrQkFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdHJhaW5pbmcvdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNlOGU4ZTg7XG4kYmxhY2s6ICMwOTA5MDk7XG4kZ3JleURhcms6ICMyMzIzMjM7XG4kZ3JleTogIzYwNjA2MDtcbiRncmV5TGlnaHQ6ICNhOGE4YTg7XG5cbiRhY2NlbnRDb2xvcjogI2ZmYzUxODtcbiRhZGRDb2xvcjogI2ZlNjcwMDtcblxuLy9pbXBvcnQgZm9udHNcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJyk7XG4iLCJAaW1wb3J0IFwiLi4vdmFyaWFibGVcIjtcblxuLnRyYWluaW5nIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICAmX19ibG9jayB7XG5cbiAgfVxuICAmX19ibG9ja05hbWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYWRkQ29sb3I7XG4gIH1cbiAgJl9fZXhlcmNpc2VCbG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gICZfX2V4ZXJjaXNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgJl9fZXhlcmNpc2VOYW1lIHtcbiAgICBjb2xvcjogJGdyZXlMaWdodDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgJl9fZXhlcmNpc2VJbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYWNjZW50Q29sb3I7XG4gIH1cbiAgJl9fbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgJl9fYnRuIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYWRkQ29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJGFkZENvbG9yO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbGlnaHRlbigkYWRkQ29sb3IsIDMwJSk7XG4gICAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJGFkZENvbG9yLCAzMCUpO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhZGRDb2xvcjtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXCIpO1xuLnRyYWluaW5nIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnRyYWluaW5nX19ibG9ja05hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZTY3MDA7XG59XG4udHJhaW5pbmdfX2V4ZXJjaXNlQmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4udHJhaW5pbmdfX2V4ZXJjaXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50cmFpbmluZ19fZXhlcmNpc2VOYW1lIHtcbiAgY29sb3I6ICNhOGE4YTg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi50cmFpbmluZ19fZXhlcmNpc2VJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2U4ZThlODtcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM1MTg7XG59XG4udHJhaW5pbmdfX25hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi50cmFpbmluZ19fYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmU2NzAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZTY3MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4udHJhaW5pbmdfX2J0bjpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZjMjk4O1xuICBib3JkZXItY29sb3I6ICNmZmMyOTg7XG59XG4udHJhaW5pbmdfX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY3MDA7XG4gIGNvbG9yOiAjMDkwOTA5O1xufVxuLnRyYWluaW5nX19idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"];



/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_fetch_data_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/fetch-data/fetch-data.service */ "./src/app/service/fetch-data/fetch-data.service.ts");
/* harmony import */ var _service_training_training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/training/training.service */ "./src/app/service/training/training.service.ts");



var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(fetchDataService, trainingService) {
        this.fetchDataService = fetchDataService;
        this.trainingService = trainingService;
        this.enableBtn = true;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.fetchDataService.changeMessage(false);
        this.getTrainingData();
    };
    TrainingComponent.prototype.changeValue = function (bool, i) {
        var _this = this;
        bool ? this.trainingData[i].weight += 5 : this.trainingData[i].weight -= 5;
        this.enableBtn = false;
        this.trainingService.updateTrainingData(this.trainingData[i]).subscribe(function (data) {
            _this.enableBtn = true;
            console.log(data);
        });
    };
    TrainingComponent.prototype.getTrainingData = function () {
        var _this = this;
        this.fetchDataService.changeMessage(true);
        this.trainingService.getTrainingData().subscribe(function (data) {
            _this.trainingData = data;
            _this.fetchDataService.changeMessage(false);
        });
    };
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmitry/Downloads/111/old/portfolio/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ngx-translate/core":
/*!**************************************!*\
  !*** external "@ngx-translate/core" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/core");

/***/ }),

/***/ "@ngx-translate/http-loader":
/*!*********************************************!*\
  !*** external "@ngx-translate/http-loader" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/http-loader");

/***/ }),

/***/ "ng-simple-slideshow":
/*!**************************************!*\
  !*** external "ng-simple-slideshow" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-simple-slideshow");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map