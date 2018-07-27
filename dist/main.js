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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction drawCanvas(width, height){\n    this.canvas = document.createElement('canvas');\n    this.canvas.setAttribute(\"id\", \"myCanvas\")\n    this.canvas.width = width;\n    this.canvas.height = height;\n\n    this.dvCanvas = document.getElementById(\"dvCanvas\")\n    this.dvCanvas.innerHTML =\"\";\n    this.dvCanvas.appendChild(canvas);\n\n    let c = document.getElementById(\"myCanvas\");\n    if(c) {\n        this.ctx = c.getContext(\"2d\");\n        this.ctx.font = \"15px verdana\";\n        this.ctx.textBaseline = \"middle\";\n    }\n\n}\n\nfunction cleanCanvas() {\n    if(this.dvCanvas) {\n        this.ctx =null\n        this.canvas = null;\n        this.dvCanvas.innerHTML =\"\";\n    }\n\n}\n\n\nfunction excuteCommnd(){\n    let strCommand = document.getElementById(\"txtCommand\").value;\n    let arrCommand = strCommand.split(\" \");\n\n\n    // 1st chacter of the command text \"C\", \"L\" or \"R\"\n    let controlKey = arrCommand[0].toUpperCase();\n\n    \n    // Validation of the numeric value\n    let width = !isNaN(arrCommand[1]) ? parseInt(arrCommand[1]) : null ;\n    let height = !isNaN(arrCommand[2]) ? parseInt(arrCommand[2]) : null ;\n    let x1 = !isNaN(arrCommand[1]) ? parseInt(arrCommand[1]) : null ;\n    let x2 = !isNaN(arrCommand[3]) ? parseInt(arrCommand[3]) : null ;\n    let y1 = !isNaN(arrCommand[2]) ? parseInt(arrCommand[2]) : null ;\n    let y2 = !isNaN(arrCommand[4]) ? parseInt(arrCommand[4]) : null ;\n\n\n\n    switch(controlKey){\n        case \"C\":\n        {\n            if( width && height)\n                drawCanvas(width, height);\n\n            break;\n        }\n\n        case \"L\":\n        {\n            if( this.ctx && x1 && y1 && x2 && y2)\n                drawLine (x1, y1, x2, y2);\n\n            break;\n        }\n\n        case \"R\":\n        {\n            if( this.ctx && x1 && y1 && x2 && y2)\n                drawRectangle(x1,y1,x2,y2);\n\n            break;\n        }\n\n        case \"Q\":\n        {\n            confirm(\"Are you sure to quit the program\")? window.close(): \"\" ;\n        }\n\n        default :\n        {\n            return;\n        }\n\n    }\n\n\n}\n\nfunction drawLine (x1, y1, x2, y2 ) {\n\n    if(x2 >= x1) {\n        for (var i = x1; i <= x2; i += 10) {\n            this.ctx.fillText(\"x\",  i, y1);\n        }\n    }\n\n    else{\n\n        for (var i = x1; i >= x2; i -= 10) {\n            this.ctx.fillText(\"x\",  i, y1);\n        }\n    }\n\n    // For vertical lines\n    if(y1 < y2){\n        for (var i = y1 ; i <= y2; i += 10) {\n            this.ctx.fillText(\"x\",  x2, i);\n        }\n    }\n\n    else{\n        for (var i = y2; i <= y1; i += 10) {\n            this.ctx.fillText(\"x\",  x2, i);\n        }\n    }\n}\n\n\nfunction drawRectangle (x1, y1, x2, y2) {\n\n    if(x2 >= x1) {\n\n        for (var i = x1; i <= x2; i += 10) {\n            ctx.fillText(\"x\",  i, y1);\n            ctx.fillText(\"x\",  i, y2);\n        }\n\n    }\n\n    else{\n        for (var i = x1; i >= x2; i -= 10) {\n            ctx.fillText(\"x\",  i, y1);\n            ctx.fillText(\"x\",  i, y2);\n        }\n    }\n\n    // For vertical lines\n    if(y1 < y2){\n        for (var i = y1 ; i <= y2; i += 10) {\n            ctx.fillText(\"x\",  x2, i);\n            ctx.fillText(\"x\",  x1, i);\n        }\n    }\n\n    else{\n        for (var i = y2; i <= y1; i += 10) {\n            ctx.fillText(\"x\",  x2, i);\n            ctx.fillText(\"x\",  x1, i);\n        }\n    }\n}\n\nfunction enterKeyCommand(e){\n    if(e.keyCode === 13){\n        e.preventDefault();\n        excuteCommnd();\n    }\n}\n\n// To Be Added (Pending and some questions regarding the requirements )\nfunction fillColor (x, y, c) {\n    \n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });