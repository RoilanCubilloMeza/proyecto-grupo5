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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"facebookProvider\": function() { return /* binding */ facebookProvider; },\n/* harmony export */   \"googleProvider\": function() { return /* binding */ googleProvider; },\n/* harmony export */   \"signInWithFacebook\": function() { return /* binding */ signInWithFacebook; },\n/* harmony export */   \"signInWithGoogle\": function() { return /* binding */ signInWithGoogle; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase/firebase */ \"./src/pages/firebase/firebase.ts\");\n\nconst facebookProvider = new firebase.auth.FacebookAuthProvider();\nconst googleProvider = new firebase.auth.GoogleAuthProvider();\nconst signInWithFacebook = async ()=>{\n    try {\n        const result = await _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.auth.signInWithPopup(facebookProvider);\n        return result.user;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst signInWithGoogle = async ()=>{\n    try {\n        const result = await _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.auth.signInWithPopup(googleProvider);\n        return result.user;\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst signOut = async ()=>{\n    try {\n        await _firebase_firebase__WEBPACK_IMPORTED_MODULE_0__.auth.signOut();\n    } catch (error) {\n        console.log(error);\n    }\n};\nfunction Home() {}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHMkM7QUFFcEMsTUFBTUMsbUJBQW1CLElBQUlDLFNBQVNGLElBQUksQ0FBQ0csb0JBQW9CLEdBQUc7QUFDbEUsTUFBTUMsaUJBQWlCLElBQUlGLFNBQVNGLElBQUksQ0FBQ0ssa0JBQWtCLEdBQUc7QUFFOUQsTUFBTUMscUJBQXFCLFVBQVk7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTVAsb0VBQW9CLENBQUNDO1FBQzFDLE9BQU9NLE9BQU9FLElBQUk7SUFDcEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLEVBQUU7QUFFSyxNQUFNRyxtQkFBbUIsVUFBWTtJQUMxQyxJQUFJO1FBQ0YsTUFBTU4sU0FBUyxNQUFNUCxvRUFBb0IsQ0FBQ0k7UUFDMUMsT0FBT0csT0FBT0UsSUFBSTtJQUNwQixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0YsRUFBRTtBQUVLLE1BQU1JLFVBQVUsVUFBWTtJQUNqQyxJQUFJO1FBQ0YsTUFBTWQsNERBQVk7SUFDcEIsRUFBRSxPQUFPVSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLEVBQUM7QUFDYyxTQUFTSyxPQUFPLENBRy9CLENBQUM7S0FIdUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyLCBGYWNlYm9va0F1dGhQcm92aWRlcn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcblxuZXhwb3J0IGNvbnN0IGZhY2Vib29rUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuZXhwb3J0IGNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRmFjZWJvb2sgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aC5zaWduSW5XaXRoUG9wdXAoZmFjZWJvb2tQcm92aWRlcik7XG4gICAgcmV0dXJuIHJlc3VsdC51c2VyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlUHJvdmlkZXIpO1xuICAgIHJldHVybiByZXN1bHQudXNlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGF1dGguc2lnbk91dCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG59Il0sIm5hbWVzIjpbImF1dGgiLCJmYWNlYm9va1Byb3ZpZGVyIiwiZmlyZWJhc2UiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImdvb2dsZVByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEZhY2Vib29rIiwicmVzdWx0Iiwic2lnbkluV2l0aFBvcHVwIiwidXNlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduT3V0IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});