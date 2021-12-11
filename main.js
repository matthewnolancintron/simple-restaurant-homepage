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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n    todo:\\n    make site look better...\\n*/\\n\\n/*\\n    style tab navigation\\n*/\\nheader{\\n    background-color: green;\\n}\\n\\nnav{\\n    display: flex;\\n}\\n\\n.tab-styles{\\n    background-color: honeydew;\\n}\\n\\n.active-tab{\\n    background-color: lemonchiffon;\\n}\\n\\n.inactive-tab{\\n    background-color: seashell;\\n}\\n\\n/*\\n    home tab styles\\n*/\\n.home_page{\\n    background-color: green;\\n    color:honeydew;\\n}\\n\\n.home_heading{\\n    background-color: indigo;\\n    color:lavenderblush;\\n}\\n\\n.home_title{\\n    background-color: lawngreen;\\n    color:black;\\n}\\n\\n.home_review_container{\\n    background-color: lightseagreen;\\n    color:black;\\n}\\n\\n.home_review{\\n    background-color: black;\\n    color:bisque;\\n}\\n\\n.home_customer{\\n    background-color:crimson;\\n    color: rgb(203, 243, 203);\\n}\\n\\n.home_hours_container{\\n    background: lime;\\n    color:darkmagenta;\\n}\\n\\n.home_hours{\\n    background: darkolivegreen;\\n    color:whitesmoke;\\n}\\n\\n.home_daysOfTheWeek{\\n    background-color: chartreuse;\\n    color:white;\\n}\\n\\n.sunday{\\n    color:chocolate;\\n}\\n\\n.monday{\\n    color:cornsilk;\\n}\\n\\n.tuesday{\\n    color:dodgerblue;\\n}\\n\\n.wednesday{\\n    color:lightcyan;\\n}\\n\\n.thursday{\\n    color: midnightblue;\\n}\\n\\n.friday{\\n    color: mintcream;\\n}\\n\\n.saturday{\\n    color:mistyrose;\\n}\\n\\n.home_location_container{\\n    background-color: olivedrab;\\n}\\n\\n.home_location{\\n    background-color:orchid;\\n}\\n\\n.home_address{\\n    background-color: palegreen;\\n}\\n/*\\n    menu tab style\\n*/\\n.menu_page{\\n    background-color: peachpuff;\\n    color:rebeccapurple;\\n}\\n\\n.foodCard{\\n    background-color: seagreen;\\n    color:seashell;\\n}\\n\\n.drinkCard{\\n    background-color: sienna;\\n    color:silver;\\n}\\n\\n/*\\n    contacts tab styles\\n*/\\n.contacts_page{\\n    background-color: skyblue;\\n    color: black;\\n}\\n\\n.contacts{\\n    background-color: burlywood;\\n    color: coral;\\n}\\n\\n.contact_card{\\n    background-color: cyan;\\n    color: darkgoldenrod;\\n}\\n\\n.person{\\n    background-color: darkkhaki;\\n    color: rgb(238, 113, 113);\\n}\\n\\n.occupation{\\n    background-color: royalblue;\\n    color: yellowgreen;\\n}\\n\\n.phone{\\n    background-color: cyan;\\n    color: gold;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://simple-restaurant-homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildContactsPage\": () => (/* binding */ buildContactsPage)\n/* harmony export */ });\nfunction buildContactsPage(){\n    /**\n     * contatc heading\n     */\n    const contacts = document.createElement('div');\n    contacts.classList.add('contacts_page');\n\n    const pageTitle = document.createElement('h1');\n    pageTitle.textContent = 'Contact';\n    \n    contacts.append(pageTitle);\n\n    /**\n     * card for each contact\n     */\n    const contactsList = document.createElement('ol');\n    contactsList.classList.add('contacts');\n    const contactsArray = [\n        {name:'floor',job:'sometimes cooks',phoneNumber:'no phone'},\n        {name:'speaker',job:'kinda quiet...',phoneNumber:'too many digits over 7^7 digits long'},\n        {name:'noisy fan',job:'makes a nice atmosphere',phoneNumber:\"it's already saved in your contacts...\"},\n    ];\n    \n    contactsArray.forEach(contact => {\n        let contact_card = document.createElement('li');\n        contact_card.classList.add('contact_card');\n        \n        let person = document.createElement('h2');\n        person.classList.add('person');\n        person.textContent = contact.name;\n        contact_card.append(person);\n\n        let occupation = document.createElement('p');\n        occupation.classList.add('occupation');\n        occupation.textContent = contact.job;\n        contact_card.append(occupation);\n\n        let phoneNumber = document.createElement('p');\n        phoneNumber.classList.add('phone');\n        phoneNumber.textContent = contact.phoneNumber\n        contact_card.append(phoneNumber);\n\n        contactsList.append(contact_card);\n    });\n    \n\n    contacts.append(contactsList);\n    return contacts;\n}\n\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/contact-tab.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildHomeTabPage\": () => (/* binding */ buildHomeTabPage)\n/* harmony export */ });\nfunction buildHomeTabPage(){\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home_page');\n\n    const headingContainer = document.createElement('div');\n    headingContainer.classList.add('home_heading');\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = \"a simple restaurant\";\n    restaurantTitle.classList.add('home_title');\n\n    headingContainer.append(restaurantTitle);\n    \n    const reviewContainer = document.createElement('div');\n    reviewContainer.classList.add('home_review_container');\n\n    const review = document.createElement('p');\n    review.textContent = `I like that the restaurant is simple.`;\n    review.classList.add('home_review');\n\n    const customer = document.createElement('p');\n    customer.textContent = 'a simple person';\n    customer.classList.add('home_customer');\n\n    reviewContainer.append(review);\n    reviewContainer.append(customer);\n    \n    /**\n     * hours of operation\n     */\n    const hoursContainer = document.createElement('div');\n    hoursContainer.classList.add('home_hours_container');\n    const hours = document.createElement('h2');\n    hours.classList.add('home_hours');\n    const daysOfTheWeek = document.createElement('ol');\n    daysOfTheWeek.classList.add('home_daysOfTheWeek');\n    const daysOfTheWeekArray = [\n        'Sunday',\n        'Monday',\n        'Tuesday',\n        'Wednesday',\n        'Thursday',\n        'Friday',\n        'Saturday'\n    ];\n\n    daysOfTheWeekArray.forEach((day)=> {\n        let dayElement = document.createElement('li');\n        dayElement.textContent = `${day}: ${Math.round(Math.random()*(12-1) + 1)}am - ${Math.round(Math.random()*(12 + 1) + 1)}pm`;\n        dayElement.classList.add(day.toLowerCase());\n        daysOfTheWeek.append(dayElement);\n    });\n\n    hoursContainer.append(hours);\n    hoursContainer.append(daysOfTheWeek);\n\n\n    /**\n     * location\n     */\n    const locationContainer = document.createElement('div');\n    locationContainer.classList.add('home_location_container')\n\n    const location = document.createElement('h2');\n    location.textContent = 'Location';\n    location.classList.add('home_location');\n    const address = document.createElement('p');\n    address.textContent = 'a simple location';\n    address.classList.add('home_address');\n\n    locationContainer.append(location);\n    locationContainer.append(address);\n\n    homeContainer.append(headingContainer);\n    homeContainer.append(reviewContainer);\n    homeContainer.append(hoursContainer);\n    homeContainer.append(locationContainer);\n\n    return homeContainer;\n}\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _tab_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-navigation.js */ \"./src/tab-navigation.js\");\n/* harmony import */ var _home_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-tab.js */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-tab.js */ \"./src/menu-tab.js\");\n/* harmony import */ var _contact_tab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-tab.js */ \"./src/contact-tab.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/**\n * run npx webpack --watch\n * to not have to rerun webpack evertime\n * a change is made.\n * \n * or \n * \n * run npx webpack to update a single time\n */\n\n\n\n\n\n\n\n\nconst tabNav = (0,_tab_navigation_js__WEBPACK_IMPORTED_MODULE_1__.buildTabNavigation)();\nconst home = (0,_home_tab_js__WEBPACK_IMPORTED_MODULE_2__.buildHomeTabPage)();\nconst menu = (0,_menu_tab_js__WEBPACK_IMPORTED_MODULE_3__.buildMenuTabPage)();\nconst contacts = (0,_contact_tab_js__WEBPACK_IMPORTED_MODULE_4__.buildContactsPage)();\nconsole.log(contacts);\n\n//show default active tab page\nif(tabNav.firstElementChild.firstElementChild.classList = 'active-tab'){\n    let content = document.getElementById('content');\n    content.append(home);\n}\n\nfor(var tab of tabNav.firstElementChild.children){\n    tab.addEventListener('click',(e) => {\n        let content = document.getElementById('content');\n        \n        let isActiveTab = Boolean(e.target.classList);\n                \n        if(isActiveTab){\n            switch (e.target.textContent) {\n                case 'Home':\n                    //only add if it's not in the content div\n                    if(content.firstElementChild.classList != 'home_page'){\n                        //remove other page\n                        content.replaceChild(home,content.firstElementChild);\n                    }\n                    break;\n                case 'Menu':\n                    if(content.firstElementChild.classList != \"menu_page\"){\n                        content.replaceChild(menu,content.firstElementChild);\n                    }\n                    break;\n                case 'Contacts':\n                    if(content.firstElementChild.classList != \"contacts_page\"){\n                        content.replaceChild(contacts,content.firstElementChild);\n                    }\n                default:\n                    console.log('?')\n                    break;\n            }\n            //content.append()\n        }\n        \n    });\n}\n\n//\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(tabNav);\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/index.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildMenuTabPage\": () => (/* binding */ buildMenuTabPage)\n/* harmony export */ });\nfunction buildMenuTabPage(){\n    const menu = document.createElement('div');\n    menu.classList.add('menu_page');\n    const menuHeadingContainer = document.createElement('div');\n    const menuTitle = document.createElement('h1');\n    menuTitle.textContent = 'Menu';\n    menuHeadingContainer.append(menuTitle);\n\n    const drinksContainer = document.createElement('div');\n    const drinksTitle = document.createElement('h2');\n    drinksTitle.textContent = 'Drinks';\n    drinksContainer.append(drinksTitle);\n\n    const foodContainer = document.createElement('div');\n    const foodTitle = document.createElement('h2');\n    foodTitle.textContent = 'Foods';\n    foodContainer.append(foodTitle);\n\n    const foodRecipeList = document.createElement('ol');\n    const foodRecipeListArray = [\n        {title:'apple, plain', description:'just an apple washed and at room temp...'},\n        {title:'rice with salt',description:'whatever rice that is available with salt'},\n        {title:'spicy fish',description:'cheap in season fish, with heat that adds flavor and not overpowering'},\n    ];\n\n    foodRecipeListArray.forEach((food) => {\n        let foodCard = document.createElement('li');\n        foodCard.classList.add('foodCard');\n\n        let recipie = document.createElement('h3');\n        recipie.textContent = `${food.title}`;\n\n        let description = document.createElement('p');\n        description.textContent = `${food.description}`;\n\n        foodCard.append(recipie);\n        foodCard.append(description);\n\n        foodRecipeList.append(foodCard);\n    });\n\n    foodContainer.append(foodRecipeList);\n\n    const drinksList = document.createElement('ol');\n    const drinksListArray = [\n        {title:'water room temp', description:'clean drinking water'},\n        {title:'green tea',description:'maybe, sencha?(sometime matcha) warm not too hot'},\n    ];\n\n    drinksListArray.forEach((drink) => {\n        let drinkCard = document.createElement('li');\n        drinkCard.classList.add('drinkCard');\n\n        let drinkName = document.createElement('h3');\n        drinkName.textContent = `${drink.title}`;\n\n        let description = document.createElement('p');\n        description.textContent = `${drink.description}`;\n\n        drinkCard.append(drinkName);\n        drinkCard.append(description);\n\n        drinksList.append(drinkCard);\n    });\n\n\n    drinksContainer.append(drinksList);\n\n    menu.append(menuHeadingContainer);\n    menu.append(foodContainer);\n    menu.append(drinksContainer);\n    \n    return menu;\n}\n\n\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/menu-tab.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad(content){\n    //append content to page when first is first loaded\n    document.addEventListener('DOMContentLoaded',()=>{\n        document.body.prepend(content);\n    });\n};\n\n\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/page-load.js?");

/***/ }),

/***/ "./src/tab-navigation.js":
/*!*******************************!*\
  !*** ./src/tab-navigation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTabNavigation\": () => (/* binding */ buildTabNavigation)\n/* harmony export */ });\nfunction buildTabNavigation() {\n    //header and navigation\n    const headerElement = document.createElement('header');\n    headerElement.classList.add('tab_nav_header')\n\n    const navigationElement = document.createElement('nav');\n    navigationElement.classList.add('tab_nav');\n\n    function updateActiveInactiveTab(e){\n        console.log(e.target);\n        if(e.target.classList.contains('inactive-tab')){\n            //find previously active tab and set to inactive\n            for (var tab of e.target.parentElement.children){\n                if(tab.classList.contains(\"active-tab\")){\n                    tab.classList.replace('active-tab','inactive-tab');\n                }\n            }\n            //replace selected tab's inactive with active\n            e.target.classList.replace('inactive-tab','active-tab');\n        }\n    }\n\n    const homeTab = document.createElement('div');\n    homeTab.textContent = \"Home\"\n    homeTab.classList.add('tab-styles');\n    homeTab.classList.add('active-tab');\n    homeTab.addEventListener('click', updateActiveInactiveTab);\n\n    const menuTab = document.createElement('div');\n    menuTab.textContent = \"Menu\";\n    menuTab.classList.add('tab-styles');\n    menuTab.classList.add('inactive-tab');\n    menuTab.addEventListener('click',updateActiveInactiveTab);\n\n    const contactsTab = document.createElement('div');\n    contactsTab.textContent = 'Contacts';\n    contactsTab.classList.add('tab-styles');\n    contactsTab.classList.add('inactive-tab');\n    contactsTab.addEventListener('click',updateActiveInactiveTab);\n\n    navigationElement.append(homeTab);\n    navigationElement.append(menuTab);\n    navigationElement.append(contactsTab);\n    headerElement.append(navigationElement);\n    \n    return headerElement;\n}\n\n\n\n//# sourceURL=webpack://simple-restaurant-homepage/./src/tab-navigation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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