/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 18px;
}

/* 背景图片容器 - 初始状态不可见 */
.bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
}

body > #searchPart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 520px;
    height: 40%;
    color: white;
    /*background-color: aliceblue;*/
}

.searchType button {
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid white;
    width: 60px;
    height: 30px;
    background-color: white;
    opacity: 0.6;
}

.searchType button[data-select='true'] {
    opacity: 1 !important;
}

.search {
    margin-top: 10px;
}

.search > input[type='text'] {
    width: 500px;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid white;
    padding-left: 10px;
}

body > #motto {
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 18px;
    z-index: 10;
    opacity: 0.9;
}

#llmPart {
    position: absolute;
    right:16px;
    width: 300px;
    padding: 10px;
    margin: 40px 0px 40px 0;
    height: calc(100% - 102px);
    overflow-y: auto;
    background: white;
    opacity: 0.9;
    color: black;
    border-radius: 10px;
    display: none;
    white-space: pre-line;
}

#llmPart.active {
    display: block;
}

/*左上角的链接*/

#link {
    position: absolute;
    top: 10px;
    left: 20px;
}

#link a {
    margin-right: 10px;
    color: white;
    opacity: 0.9;
    font-size: 14px;
    text-decoration: none; /* 取消下划线 */
}

#link a:hover {
    opacity: 1;
    cursor: pointer;
}

/*左下角的设置*/

#setting {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 100;
}

#setting button {
    opacity: 0.8;
}

/* 搜索建议 */

#search-sug{
    background: white;
    border-radius: 10px;
    margin-top: 5px;
    color: black;
    display: none;
}

#search-sug div{
    height: 24px;
    padding: 10px;
    border-radius: 10px;
}

#search-sug div:hover{
    background: #dddddd;
}`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA,qBAAqB;AACrB;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,SAAS;IACT,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA,SAAS;;AAET;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,qBAAqB,EAAE,UAAU;AACrC;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA,SAAS;;AAET;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA,SAAS;;AAET;IACI,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["html, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-size: 18px;\n}\n\n/* 背景图片容器 - 初始状态不可见 */\n.bg-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-position: center;\n    z-index: -1;\n}\n\nbody > #searchPart {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    margin: auto;\n    width: 520px;\n    height: 40%;\n    color: white;\n    /*background-color: aliceblue;*/\n}\n\n.searchType button {\n    cursor: pointer;\n    border-radius: 30px;\n    border: 1px solid white;\n    width: 60px;\n    height: 30px;\n    background-color: white;\n    opacity: 0.6;\n}\n\n.searchType button[data-select='true'] {\n    opacity: 1 !important;\n}\n\n.search {\n    margin-top: 10px;\n}\n\n.search > input[type='text'] {\n    width: 500px;\n    height: 50px;\n    font-size: 18px;\n    border-radius: 10px;\n    border: 1px solid white;\n    padding-left: 10px;\n}\n\nbody > #motto {\n    position: absolute;\n    bottom: 20px;\n    text-align: center;\n    width: 100%;\n    color: white;\n    font-size: 18px;\n    z-index: 10;\n    opacity: 0.9;\n}\n\n#llmPart {\n    position: absolute;\n    right:16px;\n    width: 300px;\n    padding: 10px;\n    margin: 40px 0px 40px 0;\n    height: calc(100% - 102px);\n    overflow-y: auto;\n    background: white;\n    opacity: 0.9;\n    color: black;\n    border-radius: 10px;\n    display: none;\n    white-space: pre-line;\n}\n\n#llmPart.active {\n    display: block;\n}\n\n/*左上角的链接*/\n\n#link {\n    position: absolute;\n    top: 10px;\n    left: 20px;\n}\n\n#link a {\n    margin-right: 10px;\n    color: white;\n    opacity: 0.9;\n    font-size: 14px;\n    text-decoration: none; /* 取消下划线 */\n}\n\n#link a:hover {\n    opacity: 1;\n    cursor: pointer;\n}\n\n/*左下角的设置*/\n\n#setting {\n    position: absolute;\n    left: 10px;\n    bottom: 10px;\n    z-index: 100;\n}\n\n#setting button {\n    opacity: 0.8;\n}\n\n/* 搜索建议 */\n\n#search-sug{\n    background: white;\n    border-radius: 10px;\n    margin-top: 5px;\n    color: black;\n    display: none;\n}\n\n#search-sug div{\n    height: 24px;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n#search-sug div:hover{\n    background: #dddddd;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/note.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/note.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#openBtn {
    margin: 10px;
    padding: 8px;
    opacity: 0.4;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#popupWindow {
    display: none;
    position: absolute;
    width: 360px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    background: white;
    z-index: 1000;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
}

.header-left {
    display: flex;
    align-items: center;
}

#processText{
    font-size: 14px;
    margin-left: 14px;
}

.header button {
    padding: 4px 8px;
    margin: 0 2px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.content {
    padding: 10px;
}

textarea {
    width: calc(100% - 20px);
    height: 220px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: vertical;
}

#closeBtn {
    color: gray;
    border-radius: 3px;
    border: 1px solid #ccc;
}

/* 加载圆圈 */
.spinner {
    margin-left: 20px;
    width: 16px;
    height: 16px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    display: none;
    animation: spin 1s linear infinite;
    position: absolute;
    right: 10px;
    top: 10px;
}

.spinner.active {
    display: block;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`, "",{"version":3,"sources":["webpack://./src/css/note.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA,SAAS;AACT;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,kCAAkC;IAClC,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,KAAK,uBAAuB,EAAE;IAC9B,OAAO,yBAAyB,EAAE;AACtC","sourcesContent":["#openBtn {\n    margin: 10px;\n    padding: 8px;\n    opacity: 0.4;\n    color: black;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#popupWindow {\n    display: none;\n    position: absolute;\n    width: 360px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    background: white;\n    z-index: 1000;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 8px;\n    background-color: #f5f5f5;\n    border-bottom: 1px solid #ddd;\n}\n\n.header-left {\n    display: flex;\n    align-items: center;\n}\n\n#processText{\n    font-size: 14px;\n    margin-left: 14px;\n}\n\n.header button {\n    padding: 4px 8px;\n    margin: 0 2px;\n    cursor: pointer;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n}\n\n.content {\n    padding: 10px;\n}\n\ntextarea {\n    width: calc(100% - 20px);\n    height: 220px;\n    padding: 8px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    resize: vertical;\n}\n\n#closeBtn {\n    color: gray;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n}\n\n/* 加载圆圈 */\n.spinner {\n    margin-left: 20px;\n    width: 16px;\n    height: 16px;\n    border: 3px solid #f3f3f3;\n    border-top: 3px solid #3498db;\n    border-radius: 50%;\n    display: none;\n    animation: spin 1s linear infinite;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.spinner.active {\n    display: block;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/note.css":
/*!**************************!*\
  !*** ./src/css/note.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./note.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/note.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_note_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/data/imgData.js":
/*!*****************************!*\
  !*** ./src/data/imgData.js ***!
  \*****************************/
/***/ (() => {

const imgIdArray = ['OHR.SaCalobra_ZH-CN0945855556_1920x1080.jpg',
    'OHR.ZinnowitzSeebruecke_ZH-CN6706198565_1920x1080.jpg',
    'OHR.OctoClam_ZH-CN5427646548_1920x1080.jpg',
    'OHR.AsianElephants_ZH-CN2736490825_1920x1080.jpg',
    'OHR.HippoDayChobe_ZH-CN2883647954_1920x1080.jpg',
    'OHR.LlanberisSnowdoniaSunset_ZH-CN6682238671_1920x1080.jpg',
    'OHR.VarandhaGhat_ZH-CN1268827595_1920x1080.jpg',
    'OHR.StartPointLight_ZH-CN4021540566_1920x1080.jpg',
    'OHR.ViennaAutumn_ZH-CN7011999199_1920x1080.jpg',
    'OHR.SquirrelNetherlands_ZH-CN0757138587_1920x1080.jpg',
    'OHR.EmptyQuarter_ZH-CN0670918289_1920x1080.jpg',
    'OHR.EarthDayFox_ZH-CN7926350207_1920x1080.jpg',
    'OHR.WheatonYukon_ZH-CN5573629391_1920x1080.jpg',
    'OHR.StartPointLight_ZH-CN4021540566_1920x1080.jpg',
    'OHR.RhinocerosUnicornis_ZH-CN6380546992_1920x1080.jpg',
    'OHR.BrightEye_ZH-CN6196887876_1920x1080.jpg',
    'OHR.Qingming2021_ZH-CN6154314555_1920x1080.jpg',
    'OHR.CumberlandSeashore_ZH-CN1662936356_1920x1080.jpg',
    'OHR.BambooTreesIndia_ZH-CN3943852151_1920x1080.jpg',
    'OHR.DancingTrees_ZH-CN2946844631_1920x1080.jpg',
    'OHR.TetraoTetrix_ZH-CN3813461274_1920x1080.jpg',
    'OHR.FichtelbergWinter_ZH-CN9274877146_1920x1080.jpg',
    'OHR.CrescentLake_ZH-CN8294493832_1920x1080.jpg',
    'OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg',
    'OHR.BenasqueValley_ZH-CN7931589735_1920x1080.jpg',
    'OHR.BorregoBadlands_ZH-CN9913349081_1920x1080.jpg',
    'OHR.MeotoIwa_ZH-CN3126370410_1920x1080.jpg',
    'OHR.SWColorado_ZH-CN2381176407_1920x1080.jpg',
    'OHR.FannetteIsland_ZH-CN2395055456_1920x1080.jpg',
    'OHR.CasteldelMonte_ZH-CN4436589634_1920x1080.jpg',
    'OHR.BabblingBrook_ZH-CN9371346787_1920x1080.jpg',
    'OHR.MatiSiTemple_ZH-CN1153907273_1920x1080.jpg',
    'OHR.Ortygia_ZH-CN5237934114_1920x1080.jpg',
    'OHR.ProseccoItaly_ZH-CN6802010344_1920x1080.jpg',
    'OHR.ElephantRock_ZH-CN9293300383_1920x1080.jpg',
    'OHR.FooledYa_ZH-CN1264990804_1920x1080.jpg',
    'OHR.LjubljanaLights_ZH-CN3179297953_1920x1080.jpg',
    'OHR.FoucaultsPendulum_ZH-CN9435794626_1920x1080.jpg',
    'OHR.AmmoniteGraveyard_ZH-CN8904427525_1920x1080.jpg',
    'OHR.MistyForest_ZH-CN3024731044_1920x1080.jpg',
    'OHR.BluebirdsEastern_ZH-CN2598458880_1920x1080.jpg',
    'OHR.Albarracin_ZH-CN0019262872_1920x1080.jpg',
    'OHR.GemsbokNamibia_ZH-CN0963988839_1920x1080.jpg',
    'OHR.TinyHummer_ZH-CN9853929957_1920x1080.jpg',
    'OHR.PhangNgaBay_ZH-CN9408705933_1920x1080.jpg',
    'OHR.LesserAntilles_ZH-CN3012679657_1920x1080.jpg',
    'OHR.HedgehogMeadow_ZH-CN8845586473_1920x1080.jpg',
    'OHR.MarsalaSalt_ZH-CN4943158328_1920x1080.jpg',
    'OHR.WalrusSvalbard_ZH-CN6343458320_1920x1080.jpg',
    'OHR.AnivaLighthouse_ZH-CN3021410274_1920x1080.jpg',
    'OHR.ParanalStars_ZH-CN9247250519_1920x1080.jpg',
    'OHR.OkavangoElephant_ZH-CN0058670579_1920x1080.jpg',
    'OHR.Holi2022_ZH-CN2265496434_1920x1080.jpg',
    'OHR.BrehatIsland_ZH-CN6015596530_1920x1080.jpg',
    'OHR.AtraniAmalfi_ZH-CN6391731688_1920x1080.jpg',
    'OHR.PolarBearFrost_ZH-CN5918160947_1920x1080.jpg',
    'OHR.BrazilSandDunes_ZH-CN2924749051_1920x1080.jpg',
    'OHR.HickmanBridge_ZH-CN0976106691_1920x1080.jpg',
    'OHR.WheatonYukon_ZH-CN5573629391_1920x1080.jpg',
    'OHR.SusitnaRiver_ZH-CN2317772890_1920x1080.jpg',
    'OHR.PoinsettiaDay_ZH-CN5115071992_1920x1080.jpg',
    'OHR.GrandCanyonVerdon_ZH-CN6025902720_1920x1080.jpg',
    'OHR.MontereyPup_ZH-CN7914017418_1920x1080.jpg',
    'OHR.SessileOaks_ZH-CN6385464274_1920x1080.jpg',
    'OHR.UNBuilding_ZH-CN7730281645_1920x1080.jpg',
    'OHR.CanadaLynx_ZH-CN8645816958_1920x1080.jpg',
    'OHR.Itaimbezinho_ZH-CN5641449623_1920x1080.jpg',
    'OHR.TaughannockFalls_ZH-CN4580750386_1920x1080.jpg',
    'OHR.MackArch_ZH-CN1068755647_1920x1080.jpg',
    'OHR.VeniceBeach_ZH-CN9971532384_1920x1080.jpg',
    'OHR.ChittorgarhFort_ZH-CN2955182965_1920x1080.jpg',
    'OHR.BeltedGalloway_ZH-CN8570849064_1920x1080.jpg',
    'OHR.WorldFrogDay_ZH-CN7191299445_1920x1080.jpg',
    'OHR.Turku_ZH-CN6008877545_1920x1080.jpg',
    'OHR.DorsetHeather_ZH-CN8284282373_1920x1080.jpg',
    'OHR.AvilaSpain_ZH-CN1792280503_1920x1080.jpg',
    'OHR.IceWalking_ZH-CN5122217505_1920x1080.jpg',
    'OHR.TorontoSky_ZH-CN6932705886_1920x1080.jpg',
    'OHR.BryceSnow_ZH-CN7489999663_1920x1080.jpg',
    'OHR.DragonBoat2022_ZH-CN2392684688_1920x1080.jpg',
    'OHR.PhangNgaBay_ZH-CN9408705933_1920x1080.jpg',
    'OHR.TulipAbbotsford_ZH-CN1401627293_1920x1080.jpg',
    'OHR.WaterfallsSunwaptaValley_ZH-CN1804229850_1920x1080.jpg',
    'OHR.PantheraTigris_ZH-CN3331361509_1920x1080.jpg',
    'OHR.RoeTrentinoSnow_ZH-CN3122890500_1920x1080.jpg',
    'OHR.TigerIndia_ZH-CN6657629375_1920x1080.jpg',
    'OHR.YellowstoneFalls_ZH-CN8050562150_1920x1080.jpg',
    'OHR.Trossachs_ZH-CN9299955040_1920x1080.jpg',
    'OHR.SangreCristoDunes_ZH-CN7193190503_1920x1080.jpg',
    'OHR.NCHighCountry_ZH-CN0617631531_1920x1080.jpg',
    'OHR.QuebecFrontenac_ZH-CN9519096458_1920x1080.jpg',
    'OHR.RedAlley_ZH-CN2795378972_1920x1080.jpg',
    'OHR.Calakmul_ZH-CN5969688954_1920x1080.jpg',
    'OHR.BandedPipefish_ZH-CN8209616080_1920x1080.jpg',
    'OHR.GHDMarmot_ZH-CN5983212280_1920x1080.jpg',
    'OHR.FaceOff_ZH-CN9969100257_1920x1080.jpg',
    'OHR.Unesco50_ZH-CN3652927413_1920x1080.jpg',
    'OHR.GorgeSavoie_ZH-CN9079188802_1920x1080.jpg',
    'OHR.NakupendaBeach_ZH-CN7913805608_1920x1080.jpg',
    'OHR.RichmondParkDuck_ZH-CN4956127005_1920x1080.jpg'];

window.imgIdArray = imgIdArray;

/***/ }),

/***/ "./src/data/mottoData.js":
/*!*******************************!*\
  !*** ./src/data/mottoData.js ***!
  \*******************************/
/***/ (() => {

// 一个保存格言的数组
const mottoArray = ["决定明天的不是明天，而是今天的态度",
    "真正的才智是刚毅的志向",
    "每一个普通的改变，都将改变你的普通。",
    "城市中，那些美好的的东西不是别人给予的，而是自己建造的",
    "认真你就输了？一直认真你就赢了！",
    "不要再继续睡着做梦，醒来吧，开始圆梦",
    "一些话靠实力和诚信出行的人，会越走越远。",
    "坚持是迈向成绩的第一步，坚持是走向成绩必走的路线，坚持是获得成绩的秘诀。",
    "成绩的关键是行动、行动、再行动。",
    "成绩不会属于只想不做的人，早一点为梦想努力",
    "成绩没有快车道，它来自平凡的奋斗和坚持",
    "行者必至，做者必成",
    "你的时间花在哪儿，你的人生就在哪儿"];

window.mottoArray = mottoArray;

/***/ }),

/***/ "./src/js/gist.js":
/*!************************!*\
  !*** ./src/js/gist.js ***!
  \************************/
/***/ (() => {

function checkNoteKey() {
    return localStorage.getItem('noteKey');
}

function getNoteKey() {
    const noteKey = localStorage.getItem('noteKey');
    if (!noteKey) {
        throw new Error("noteKey is null");
    }
    return noteKey;
}

function getGistHeader() {
    let noteKey = getNoteKey();
    return {
        'Accept': 'application/vnd.github+json',
        'Authorization': 'token ' + noteKey,
        'X-GitHub-Api-Version': '2022-11-28'
    };
}

async function getGists() {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists', {
            method: 'GET',
            headers: gistHeader
        });
        console.log("getGists success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

async function getGist(gistId, noteContent) {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists/' + gistId, {
            method: 'GET',
            headers: gistHeader
        });
        console.log("getGist success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

async function updateGist(gistId, noteContent) {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists/' + gistId, {
            method: 'PATCH',
            headers: gistHeader,
            body: JSON.stringify({
                "description": 'this is newtabNote',
                "public": false,
                "files": {"newtabNote.md": {"content": noteContent}}
            })
        });
        console.log("updateGist success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

async function createGist(noteContent) {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists', {
            method: 'POST',
            headers: gistHeader,
            body: JSON.stringify({
                "description": 'this is newtabNote',
                "public": false,
                "files": {"newtabNote.md": {"content": noteContent}}
            })
        });
        console.log("createGist success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

// 初始化搜索按钮选中状态
initBtnSelected();

//初始化搜索建议
// initSearchSug();

function initSearchSug() {
    const inputElement = document.getElementById('search');
    const searchSug = document.getElementById('search-sug');

    let isComposing = false; // 标记是否在输入法输入中

    inputElement.addEventListener('compositionstart', () => {
        isComposing = true;
        console.log('isComposing = true;')
    });

    inputElement.addEventListener('compositionend', (event) => {
        isComposing = false;
        console.log('isComposing = false;')
        if (event.target.value) {
            updateSearchSug(event.target.value);
        }
    });

    inputElement.addEventListener('input', function (event) {
        if (isComposing) {
            return;
        }
        if (event.target.value) {
            updateSearchSug(event.target.value);
        }
        searchSug.innerHTML = '';
    });

// inputElement.addEventListener('blur', function(event) {
//     console.log('输入框失去焦点，当前值:', event.target.value);
//     const searchSug = document.getElementById('search-sug');
//     searchSug.style.display = 'none';
// });
}

function updateSearchSug(word) {
    const searchSug = document.getElementById('search-sug');
    searchSug.style.display = 'block';

    //组装查询地址
    var sugurl = `https://suggestion.baidu.com/su?wd=${word}&cb=window.baidu.sug`;

    //定义回调函数
    window.baidu = {
        sug: function (json) {
            console.log(json)
            let suggestions = json.s;
            let length = Math.min(suggestions.length, 4);
            for (let i = 0; i < length; i++) {
                // 创建新div元素
                const childDiv = document.createElement('div');

                // 设置子div内容
                childDiv.textContent = suggestions[i];

                // 添加子元素按钮事件
                childDiv.addEventListener('click', function () {
                    window.open(`https://www.baidu.com/baidu?wd=${suggestions[i]}`);
                });

                // 添加到父容器
                searchSug.appendChild(childDiv);
            }
        }
    }

    //动态添加JS脚本
    var script = document.createElement("script");
    script.src = sugurl;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// 初始化搜索按钮选中状态
function initBtnSelected() {
    let btns = document.querySelectorAll(".searchType button");
    for (let btn of btns) {
        btn.addEventListener('click', function (e) {
            let btns = document.querySelectorAll(".searchType button");
            for (let btn of btns) {
                if (btn.id === e.target.id) {
                    btn.setAttribute("data-select", "true");
                } else {
                    btn.removeAttribute("data-select");
                }
            }
        });
    }
}

function search() {
    if (window.event.keyCode === 13) {// enter键
        let word = document.querySelector('input[id="search"]').value;
        let site = document.querySelector('button[data-select="true"]').id;
        if (site === "baidu") {
            window.open(`https://www.baidu.com/baidu?wd=${word}`);
        }
        if (site === "bing") {
            window.open(`https://cn.bing.com/search?form=bing&q=${word}`);
        }
        if (site === "sogou") {
            window.open(`https://www.sogou.com/web?query=${word}`);
        }
        if (site === "zhihu") {
            window.open(`https://www.zhihu.com/search?type=content&q=${word}`);
        }
        if (site === "google") {
            window.open(`https://google.com/search?q=${word}`);
        }
        if (site === "yandex") {
            window.open(`https://yandex.com/search/?text=${word}`);
        }
        if (site === "github") {
            window.open(`https://github.com/search?q=${word}`);
        }
        if (site === "fanyi") {
            window.open(`https://www.iciba.com/word?w=${word}`);
        }
        if (site === "ai") {
            testllm(word);
        }
    }
}

function changeSearch(button){
    const llmPart = document.getElementById('llmPart');
    if (button.id === "ai") {
        llmPart.classList.add('active');
    }else{
        llmPart.classList.remove('active');
    }
}

window.search=search;
window.changeSearch=changeSearch;

/***/ }),

/***/ "./src/js/llm.js":
/*!***********************!*\
  !*** ./src/js/llm.js ***!
  \***********************/
/***/ (() => {

async function pingTest() {
    const spinner = document.getElementById('spinner');//加载圆圈
    let url = 'http://127.0.0.1:32008/testHello';
    fetch(url, {
        method: 'POST',
        mode: "cors"
    }).then(response => response.json()
    ).then(data => {
        //隐藏加载效果
        spinner.classList.remove('active');
    
        console.log("请求成功");
        console.log(data);
    }).catch(error => {
        //隐藏加载效果
        spinner.classList.remove('active');
    
        console.log("请求失败");
        console.log(error);
    });
}

async function testllm(word) {
    // 展示加载效果
    spinner.classList.add('active');

    // 发起 Fetch 请求
    const response = await fetch('http://localhost:32008/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "question": word,
        }),
    });

    // 获取可读流
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const bottom = document.getElementById('llmPart');
    bottom.textContent = '';
    bottom.classList.add('active');

    let buffer = '';
    // 逐步读取数据
    while (true) {
        const { done, value } = await reader.read();
        if (done) break; // 如果流结束，退出循环

        // 解码并处理数据
        buffer += decoder.decode(value, { stream: true });
        
        // 按行分割处理
        let lastIndex = 0;
        while ((lastIndex = buffer.indexOf('\n')) !== -1) {
            const line = buffer.slice(0, lastIndex).trim();
            buffer = buffer.slice(lastIndex + 1);

            // 跳过空行和注释
            if (line === '') continue;
            if (line.startsWith(':')) continue;

            // 解析 data 字段
            if (line.startsWith('data:')) {
                // 提取 data 内容（移除前缀和首尾空格）
                const eventData = line.slice(5).trim();
                let data = JSON.parse(eventData);
                // 逐步更新页面内容
                bottom.textContent += data.c;
            }
        }

        // 将滚动位置设置为元素的最大可滚动高度
        bottom.scrollTop = bottom.scrollHeight;
    }

    //隐藏加载效果
    spinner.classList.remove('active');
}

window.testllm = testllm;

/***/ }),

/***/ "./src/js/motto.js":
/*!*************************!*\
  !*** ./src/js/motto.js ***!
  \*************************/
/***/ (() => {

// 初始化格言
function initMotto() {
    const nowDate = getNowDate();
    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        if (obj.hasOwnProperty('mottoIndex')) {
            setMottoByIndex(obj.mottoIndex);
            return;
        }
    }

    // 对mottoArray的length取模,保证同一天的格言都一样，且mottoArray里的每张图片都能被用到
    let mottoIndex = getDayOfYear() % mottoArray.length;

    setMottoByIndex(mottoIndex);
}

function setMottoByIndex(mottoIndex) {
    let mottoDiv = document.querySelector("#motto");
    mottoDiv.textContent = "「 " + mottoArray[mottoIndex] + " 」";
}

function changeMotto() {
    const nowDate = getNowDate();
    let randomInt = getRandomInt(0, mottoArray.length);

    setMottoByIndex(randomInt);

    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        obj.mottoIndex = randomInt;
        localStorage.setItem(nowDate, JSON.stringify(obj));
    } else {
        let obj = {mottoIndex: randomInt};
        localStorage.setItem(nowDate, JSON.stringify(obj));
    }
}

// 初始化格言
initMotto();
window.changeMotto=changeMotto;

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ (() => {

// 获取指定范围内的随机整数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 获取格式化日期，类似2023-05-15
function getNowDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 一年中第几天
function getDayOfYear() {
    const now = new Date(); // 当前日期
    const start = new Date(now.getFullYear(), 0, 0); // 去年12月31日
    const diff = now - start; // 时间差（毫秒）
    const oneDay = 1000 * 60 * 60 * 24; // 一天的毫秒数
    return Math.floor(diff / oneDay); // 返回天数
}

window.getRandomInt = getRandomInt;
window.getNowDate = getNowDate;
window.getDayOfYear = getDayOfYear;

/***/ }),

/***/ "./src/js/wallpaper.js":
/*!*****************************!*\
  !*** ./src/js/wallpaper.js ***!
  \*****************************/
/***/ (() => {

// 说明：
// 默认展示必应每日壁纸，一天一换；
// 每个人看到的每日壁纸都一样；
// 点击“更换壁纸”按钮，随机一张新的壁纸，当日有效；

// 初始化背景
function initImg() {
    const nowDate = getNowDate();
    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        if (obj.hasOwnProperty('imgIndex')) {
            setImgByIndex(obj.imgIndex);
            return;
        }
    }

    // 对imgIdArray的length取模,保证同一天的图片都一样，且imgIdArray里的每张图片都能被用到
    let imgIndex = getDayOfYear() % imgIdArray.length;

    setImgByIndex(imgIndex);
}

function setImgByIndex(imgIndex) {
    // 防止意外
    if (imgIndex >= imgIdArray.length) {
        imgIndex = imgIdArray.length - 1;
    }

    // imgIndex的范围是0 ～ imgIdArray.length-1
    const imgId = imgIdArray[imgIndex];
    const imageUrl = `https://cn.bing.com/th?id=${imgId}`;

    // 1. 创建Image对象预加载
    const loader = new Image();

    // 2. 设置加载完成的回调
    const bgTarget = document.getElementById('bgTarget');
    loader.onload = function() {
        // 应用背景图片
        bgTarget.style.backgroundImage = `url(${imageUrl})`;
    };

    // 3. 处理加载错误
    loader.onerror = function() {
        console.error('图片加载失败');
    };

    // 4. 开始加载（设置src触发加载）
    loader.src = imageUrl;
}

// 更换背景
function changeImg() {
    const nowDate = getNowDate();
    let randomInt = getRandomInt(0, imgIdArray.length);

    setImgByIndex(randomInt);

    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        obj.imgIndex = randomInt;
        localStorage.setItem(nowDate, JSON.stringify(obj));
    } else {
        let obj = {imgIndex: randomInt};
        localStorage.setItem(nowDate, JSON.stringify(obj));
    }
}

initImg();
window.changeImg=changeImg;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_imgData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/imgData.js */ "./src/data/imgData.js");
/* harmony import */ var _data_imgData_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_imgData_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_mottoData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/mottoData.js */ "./src/data/mottoData.js");
/* harmony import */ var _data_mottoData_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_mottoData_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/util.js */ "./src/js/util.js");
/* harmony import */ var _js_util_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_util_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_llm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/llm.js */ "./src/js/llm.js");
/* harmony import */ var _js_llm_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_llm_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/index.js */ "./src/js/index.js");
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_gist_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/gist.js */ "./src/js/gist.js");
/* harmony import */ var _js_gist_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_gist_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_wallpaper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/wallpaper.js */ "./src/js/wallpaper.js");
/* harmony import */ var _js_wallpaper_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_wallpaper_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_motto_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/motto.js */ "./src/js/motto.js");
/* harmony import */ var _js_motto_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_motto_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_note_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/note.css */ "./src/css/note.css");
//js








//css



// 注册 serviceWorker
// 处理兼容性问题
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => {
        console.log("sw 注册成功");
      })
      .catch(() => {
        console.error("sw 注册失败");
      });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map