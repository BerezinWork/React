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

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPost: () => (/* binding */ addPost),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getPosts: () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\nasync function getPosts() {\n  const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_js__WEBPACK_IMPORTED_MODULE_0__.GET_POSTS}`);\n  if (!response.ok) {\n    throw new Error(response.statusText);\n  }\n  return await response.json();\n}\nasync function getComments(id) {\n  const response = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL}/${id}/${_config_js__WEBPACK_IMPORTED_MODULE_0__.GET_COMMENTS}`);\n  if (!response.ok) {\n    throw new Error(response.statusText);\n  }\n  return await response.json();\n}\nasync function addPost(title, body) {\n  const response = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      title,\n      body,\n      userId: 1\n    })\n  });\n  if (!response.ok) {\n    throw new Error(response.statusText);\n  }\n  return await response.json();\n}\n\n//# sourceURL=webpack://frontendpro/./src/js/api.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_URL: () => (/* binding */ API_URL),\n/* harmony export */   GET_COMMENTS: () => (/* binding */ GET_COMMENTS),\n/* harmony export */   GET_POSTS: () => (/* binding */ GET_POSTS)\n/* harmony export */ });\nconst API_URL = \"https://jsonplaceholder.typicode.com/posts\";\nconst GET_POSTS = \"?_limit=10\";\nconst GET_COMMENTS = \"comments?_limit=2\";\n\n//# sourceURL=webpack://frontendpro/./src/js/config.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/js/ui.js\");\n\n\nconst postsContainer = document.querySelector(\"#postsContainer\");\nconst createContainer = document.querySelector(\"#createContainer\");\nconst inputTitle = document.querySelector(\"#inputTitle\");\nconst inputBody = document.querySelector(\"#inputBody\");\nasync function init() {\n  postsContainer.innerHTML = \"Loading...\";\n  try {\n    const posts = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)();\n    postsContainer.innerHTML = '';\n    posts.forEach(post => {\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createPost)(post, postsContainer);\n    });\n  } catch (err) {\n    console.log(err);\n  }\n}\nasync function renderComments(id) {\n  try {\n    const comments = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n    const commentsContainer = document.querySelector(`#comments_${id}`);\n    commentsContainer.innerHTML = '';\n    if (!comments.length) {\n      throw new Error('No comments found.');\n    }\n    comments.forEach(comment => {\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createComment)(comment, commentsContainer);\n    });\n  } catch (err) {\n    console.error(err);\n  }\n}\npostsContainer.addEventListener(\"click\", async e => {\n  if (e.target.id.split('_')[0] === \"button\") {\n    const id = e.target.id.split('_')[1];\n    await renderComments(id);\n  }\n});\ncreateContainer.addEventListener(\"submit\", async e => {\n  e.preventDefault();\n  try {\n    if (!inputTitle.value.trim()) {\n      throw new Error(\"Please enter a valid title\");\n    } else if (!inputBody.value.trim()) {\n      throw new Error(\"Please enter a valid body\");\n    }\n    const title = inputTitle.value;\n    const body = inputBody.value;\n    const post = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addPost)(title, body);\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.createPost)(post, postsContainer, \"afterbegin\");\n    inputTitle.value = \"\";\n    inputBody.value = \"\";\n    console.log(\"Posts added!\");\n  } catch (err) {\n    console.error(err);\n  }\n});\nawait init();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://frontendpro/./src/js/index.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createComment: () => (/* binding */ createComment),\n/* harmony export */   createPost: () => (/* binding */ createPost)\n/* harmony export */ });\nfunction createPost(post, container) {\n  let position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"beforeend\";\n  container.insertAdjacentHTML(position, `\n    <h2>${post.title}</h2>\n    <div>${post.body}</div>\n    <button id=\"button_${post.id}\">Show comments</button>\n    <div id=\"comments_${post.id}\"></div>\n    `);\n}\nfunction createComment(comment, container) {\n  container.innerHTML += `\n    <br>\n    <div>Name: ${comment.name}</div>\n    <div>Email: ${comment.email}</div>\n    <div>${comment.body}</div>\n    <br>\n    `;\n}\n\n//# sourceURL=webpack://frontendpro/./src/js/ui.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/api.js */ \"./src/js/api.js\");\n/* harmony import */ var _js_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/config.js */ \"./src/js/config.js\");\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js */ \"./src/js/index.js\");\n/* harmony import */ var _js_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/ui.js */ \"./src/js/ui.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_js__WEBPACK_IMPORTED_MODULE_3__]);\n_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://frontendpro/./src/script.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendpro/./src/scss/style.scss?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;