"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/firebase/firebase.ts":
/*!****************************************!*\
  !*** ./src/pages/firebase/firebase.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCeZ9s_BW639Wrim3zX2fbtcn0kR-7V5l4\",\n    authDomain: \"proyecto-api-5b7c8.firebaseapp.com\",\n    projectId: \"proyecto-api-5b7c8\",\n    storageBucket: \"proyecto-api-5b7c8.appspot.com\",\n    messagingSenderId: \"932283162568\",\n    appId: \"1:932283162568:web:0e86f4602c0706733a2afd\",\n    measurementId: \"G-20HCCMK81Q\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmlyZWJhc2UvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ1I7QUFFckMsTUFBTUUsaUJBQWlCO0lBQ25CQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsTUFBTUMsTUFBS1YsMkRBQWFBLENBQUNFO0FBQ2xCLE1BQU1TLE9BQU9WLHNEQUFPQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tZ3J1cG81Ly4vc3JjL3BhZ2VzL2ZpcmViYXNlL2ZpcmViYXNlLnRzPzI4ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHtnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDZVo5c19CVzYzOVdyaW0zelgyZmJ0Y24wa1ItN1Y1bDRcIixcclxuICAgIGF1dGhEb21haW46IFwicHJveWVjdG8tYXBpLTViN2M4LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInByb3llY3RvLWFwaS01YjdjOFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwcm95ZWN0by1hcGktNWI3YzguYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkzMjI4MzE2MjU2OFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo5MzIyODMxNjI1Njg6d2ViOjBlODZmNDYwMmMwNzA2NzMzYTJhZmRcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0yMEhDQ01LODFRXCJcclxuICB9O1xyXG5cclxuICBjb25zdCBhcHA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/firebase/firebase.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase/firebase */ \"./src/pages/firebase/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home() {\n    const [user, setuser] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const googleAuth = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n    const login = async ()=>{\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, googleAuth);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(user);\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"LOGIN\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: login,\n                children: \"LOGIN\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 2\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDdUI7QUFDWDtBQUNyQjtBQUdsQixTQUFTSyxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFFSix1RUFBWUEsQ0FBQ0gsb0RBQUlBO0lBRXZDLE1BQU1RLGFBQVksSUFBSU4sNkRBQWtCQTtJQUUxQyxNQUFNTyxRQUFRLFVBQVM7UUFDdkIsTUFBTUMsU0FBUyxNQUFNVCw4REFBZUEsQ0FBQ0Qsb0RBQUlBLEVBQUNRO0lBQzFDO0lBRUFKLGdEQUFTQSxDQUFDLElBQU07UUFDZE8sUUFBUUMsR0FBRyxDQUFDTjtJQUNkLEdBQUU7UUFBQ0E7S0FBSztJQUVOLHFCQUNELDhEQUFDTzs7MEJBRUEsOERBQUNDOzBCQUFHOzs7Ozs7MEJBR0osOERBQUNDO2dCQUFPQyxTQUFTUDswQkFBTzs7Ozs7Ozs7Ozs7O0FBRzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0by1ncnVwbzUvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vZmlyZWJhc2UvZmlyZWJhc2UnXG5pbXBvcnQge3NpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcixzZXR1c2VyXT0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIGNvbnN0IGdvb2dsZUF1dGg9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuY29uc3QgbG9naW4gPSBhc3luYygpPT57XG5jb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCxnb29nbGVBdXRoKTtcbn1cblxudXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc29sZS5sb2codXNlcilcbn0sW3VzZXJdKTtcblxuICByZXR1cm4gKFxuIDxkaXY+XG5cbiAgPGgxPlxuICAgIExPR0lOXG4gIDwvaDE+XG4gIDxidXR0b24gb25DbGljaz17bG9naW59PkxPR0lOPC9idXR0b24+XG4gPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJhdXRoIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInVzZXIiLCJzZXR1c2VyIiwiZ29vZ2xlQXV0aCIsImxvZ2luIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();