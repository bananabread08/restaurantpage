/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initpage */ \"./src/modules/initpage.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n\n\n\n\n\n_modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.loadPage(); //load initial page\n_modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n\nconst tabBtns = document.querySelectorAll(\"button\");\ntabBtns.forEach(button => { //button events\n    button.addEventListener(\"click\", function(e){\n        showThisTab(e);\n    });\n});\n\nconst clearOtherTabs = () => {\n    while(_modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.hasChildNodes()){\n        _modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.removeChild(_modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.firstChild);\n    }\n}\n\nconst showThisTab = (e) =>{\n    switch(e.target.id){\n        case \"home\":\n            clearOtherTabs();\n            _modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n            break;\n        case \"menu\":\n            clearOtherTabs();\n            _modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.default)());\n            break;\n        case \"about\":\n            clearOtherTabs();\n            _modules_initpage__WEBPACK_IMPORTED_MODULE_0__.default.tabCont.appendChild((0,_modules_about__WEBPACK_IMPORTED_MODULE_3__.default)());\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadAbout = () => {\n    const aboutCont = document.createElement(\"div\");\n    aboutCont.classList.add(\"about-cont\");\n    const aboutDesc = document.createElement(\"p\");\n    aboutDesc.classList.add(\"about-desc\");\n    aboutDesc.textContent = \"asdfsdsgdflktpqopwems,dmf,msdnasdnljjslfjlerorotppsdfkfgljldfjglkd\"\n    + \"rlwejrlwjrlwrjwlernsd,mfsnd,fns,fsnfsdfn,msdf\"\n    + \"kjlsfjlsdjflsdjflksdjfwierqwendsdnf,dfn,sn,fsdf\"; \n    aboutCont.appendChild(aboutDesc);\n    aboutCont.style.display = \"flex\";\n    return aboutCont;\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadHome = () => {\n    const homeCont = document.createElement(\"div\");\n    homeCont.classList.add(\"home-cont\");\n    const homeDesc = document.createElement(\"p\");\n    homeDesc.classList.add(\"home-desc\");\n    homeDesc.textContent = \"Manam Comfort Filipino pays homage to classic\"\n    + \"all-time Filipino favorites by elevating these into modern gustatory masterpieces.\"\n    + \" Named “The No. 1 Sisig in Manila” for two consecutive years by Spot.ph, Metro Manila's top online publication.\"\n    + \" Indulge to Pinoy culinary treasures, served with a mix of classic and modern twist.\"\n    homeCont.appendChild(homeDesc);\n    homeCont.style.display = \"flex\";\n    return homeCont;\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initpage.js":
/*!*********************************!*\
  !*** ./src/modules/initpage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initpage = (() => {\n    //get selectors\n    const content = document.querySelector(\"#content\");\n    const topNav = document.createElement(\"div\");\n    const headerCont = document.createElement(\"header\");\n    const restoName = document.createElement(\"h1\");\n    const buttonCont = document.createElement(\"div\");\n    const homeBtn = document.createElement(\"button\");\n    const menuBtn = document.createElement(\"button\");\n    const aboutBtn = document.createElement(\"button\");\n    const tabCont = document.createElement(\"div\");\n    const footer = document.createElement(\"footer\");\n\n    topNav.classList.add(\"top-nav\");\n\n    restoName.textContent = \"Manam\";\n    restoName.classList.add(\"resto-name\");\n\n    buttonCont.classList.add(\"button-cont\");\n\n    homeBtn.innerText = \"Home\";\n    homeBtn.classList.add(\"nav-buttons\");\n    homeBtn.setAttribute(\"id\", \"home\");\n\n    menuBtn.innerText = \"Menu\";\n    menuBtn.classList.add(\"nav-buttons\");\n    menuBtn.setAttribute(\"id\", \"menu\");\n\n    aboutBtn.innerText = \"About\";\n    aboutBtn.classList.add(\"nav-buttons\");\n    aboutBtn.setAttribute(\"id\", \"about\");\n\n    tabCont.classList.add(\"tab-cont\");\n\n    footer.textContent = \"Developed by bananabread08\";\n    footer.classList.add(\"footer\");\n\n    const loadPage = () => {\n        headerCont.appendChild(restoName);\n        buttonCont.appendChild(homeBtn);\n        buttonCont.appendChild(menuBtn);\n        buttonCont.appendChild(aboutBtn);\n\n        topNav.appendChild(headerCont);\n        topNav.appendChild(buttonCont);\n\n        content.appendChild(topNav);\n        content.appendChild(tabCont);\n        content.appendChild(footer); \n    }\n\n    return {loadPage, tabCont};\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initpage);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/initpage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadMenu = () => {\n    const menuCont = document.createElement(\"div\");\n    menuCont.classList.add(\"menu-cont\");\n    const menuDesc = document.createElement(\"p\");\n    menuDesc.classList.add(\"menu-desc\");\n    menuDesc.textContent = \"aslflnsdlfnlsnadflalsdflsdfsldfslfsldfsldflsdflsdfnlsdfsdlf\" \n    + \"asdwqioeroitfnsdd,nsldkfnlasdsfjnwenrlwejrlwjrlwrjwlernsd,mfsnd,fns,fsnfsdfn,msdf\"\n    + \"kjlsfjlsdjflsdjflksdjfwierqwendsdnf,dfn,sn,fsdf\"; \n    menuCont.appendChild(menuDesc);\n    menuCont.style.display = \"flex\";\n    return menuCont;\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;