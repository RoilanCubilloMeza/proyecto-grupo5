"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase/firebase */ \"./src/pages/firebase/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [user, setuser] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const googleAuth = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n    const FacebookAuth = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.FacebookAuthProvider();\n    const login1 = async ()=>{\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, googleAuth);\n        const login1 = async ()=>{\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, FacebookAuth);\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(user);\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"LOGIN\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: login,\n                children: \"LOGIN\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 2\n    }, this);\n}\n_s(Home, \"PcGZMlgxQvaJKgnYw/Sdrpsore8=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDNkM7QUFDakM7QUFDckI7QUFHbEIsU0FBU00sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUVKLHVFQUFZQSxDQUFDSixvREFBSUE7SUFFdkMsTUFBTVMsYUFBWSxJQUFJUCw2REFBa0JBO0lBQzFDLE1BQU1RLGVBQWUsSUFBSVAsK0RBQW9CQTtJQUM3QyxNQUFNUSxTQUFTLFVBQVM7UUFDeEIsTUFBTUMsU0FBUyxNQUFNWCw4REFBZUEsQ0FBQ0Qsb0RBQUlBLEVBQUNTO1FBRTFDLE1BQU1JLFNBQVEsVUFBUztZQUNyQixNQUFNRCxTQUFTLE1BQU1YLDhEQUFlQSxDQUFDRCxvREFBSUEsRUFBQ1U7UUFDNUM7SUFDQTtJQUVBTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RTLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDZCxHQUFFO1FBQUNBO0tBQUs7SUFFTixxQkFDRCw4REFBQ1M7OzBCQUVBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUdKLDhEQUFDQztnQkFBT0MsU0FBU047MEJBQU87Ozs7Ozs7Ozs7OztBQUcxQixDQUFDO0dBMUJ1QlA7O1FBQ0FGLG1FQUFZQTs7O0tBRFpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9maXJlYmFzZS9maXJlYmFzZSdcbmltcG9ydCB7c2lnbkluV2l0aFBvcHVwLCBHb29nbGVBdXRoUHJvdmlkZXIsIEZhY2Vib29rQXV0aFByb3ZpZGVyfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcixzZXR1c2VyXT0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuXG4gIGNvbnN0IGdvb2dsZUF1dGg9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbmNvbnN0IEZhY2Vib29rQXV0aCA9IG5ldyBGYWNlYm9va0F1dGhQcm92aWRlcigpO1xuY29uc3QgbG9naW4xID0gYXN5bmMoKT0+e1xuY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsZ29vZ2xlQXV0aCk7XG5cbmNvbnN0IGxvZ2luID0gYXN5bmMoKT0+e1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCxGYWNlYm9va0F1dGgpXG59XG59XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXIpXG59LFt1c2VyXSk7XG5cbiAgcmV0dXJuIChcbiA8ZGl2PlxuXG4gIDxoMT5cbiAgICBMT0dJTlxuICA8L2gxPlxuICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2lufT5MT0dJTjwvYnV0dG9uPlxuIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiYXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInVzZXIiLCJzZXR1c2VyIiwiZ29vZ2xlQXV0aCIsIkZhY2Vib29rQXV0aCIsImxvZ2luMSIsInJlc3VsdCIsImxvZ2luIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});