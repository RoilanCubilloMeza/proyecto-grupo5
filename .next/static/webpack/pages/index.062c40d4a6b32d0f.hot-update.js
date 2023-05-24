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

/***/ "./src/redux/actions/usuariosActions.ts":
/*!**********************************************!*\
  !*** ./src/redux/actions/usuariosActions.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; }\n/* harmony export */ });\n/* harmony import */ var _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/config/firebase */ \"./src/database/config/firebase.ts\");\n// redux/actions/userActions.ts\n\n// Acción para crear un usuario\nconst createUser = (user)=>{\n    return async (dispatch)=>{\n        try {\n            var _userCredential_user;\n            // Crea el usuario en Firebase Authentication\n            const { email , password  } = user;\n            const userCredential = await _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.auth.createUserWithEmailAndPassword(email, password);\n            const uid = (_userCredential_user = userCredential.user) === null || _userCredential_user === void 0 ? void 0 : _userCredential_user.uid;\n            // Guarda los datos adicionales del usuario en Firestore\n            if (uid) {\n                const userRef = firestore.collection(\"users\").doc(uid);\n                await userRef.set(user);\n                dispatch({\n                    type: \"CREATE_USER_SUCCESS\"\n                });\n            }\n        } catch (error) {\n            dispatch({\n                type: \"CREATE_USER_FAILURE\",\n                payload: error.message\n            });\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy91c3Vhcmlvc0FjdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBK0I7QUFJbUI7QUFFbEQsK0JBQStCO0FBQ3hCLE1BQU1DLGFBQWEsQ0FBQ0MsT0FBa0I7SUFDM0MsT0FBTyxPQUFPQyxXQUF1QjtRQUNuQyxJQUFJO2dCQUlVQztZQUhaLDZDQUE2QztZQUM3QyxNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdKO1lBQzVCLE1BQU1FLGlCQUFpQixNQUFNSiwwRkFBbUMsQ0FBQ0ssT0FBT0M7WUFDeEUsTUFBTUUsTUFBTUosQ0FBQUEsdUJBQUFBLGVBQWVGLElBQUksY0FBbkJFLGtDQUFBQSxLQUFBQSxJQUFBQSxxQkFBcUJJLEdBQUc7WUFFcEMsd0RBQXdEO1lBQ3hELElBQUlBLEtBQUs7Z0JBQ1AsTUFBTUMsVUFBVUMsVUFBVUMsVUFBVSxDQUFDLFNBQVNDLEdBQUcsQ0FBQ0o7Z0JBQ2xELE1BQU1DLFFBQVFJLEdBQUcsQ0FBQ1g7Z0JBQ2xCQyxTQUFTO29CQUFFVyxNQUFNO2dCQUFzQjtZQUN6QyxDQUFDO1FBQ0gsRUFBRSxPQUFPQyxPQUFPO1lBQ2RaLFNBQVM7Z0JBQUVXLE1BQU07Z0JBQXVCRSxTQUFTRCxNQUFNRSxPQUFPO1lBQUM7UUFDakU7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXN1YXJpb3NBY3Rpb25zLnRzP2MwN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy50c1xyXG5cclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gXCJAL3Jvb3QvdHlwZXMvdXN1YXJpb3MvdXN1YXJpb3MudHlwZXNcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2RhdGFiYXNlL2NvbmZpZy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBGaXJlc3RvcmUgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG4vLyBBY2Npw7NuIHBhcmEgY3JlYXIgdW4gdXN1YXJpb1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9ICh1c2VyOiBVc3VhcmlvKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENyZWEgZWwgdXN1YXJpbyBlbiBGaXJlYmFzZSBBdXRoZW50aWNhdGlvblxyXG4gICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlcjtcclxuICAgICAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICBjb25zdCB1aWQgPSB1c2VyQ3JlZGVudGlhbC51c2VyPy51aWQ7XHJcblxyXG4gICAgICAvLyBHdWFyZGEgbG9zIGRhdG9zIGFkaWNpb25hbGVzIGRlbCB1c3VhcmlvIGVuIEZpcmVzdG9yZVxyXG4gICAgICBpZiAodWlkKSB7XHJcbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIikuZG9jKHVpZCk7XHJcbiAgICAgICAgYXdhaXQgdXNlclJlZi5zZXQodXNlcik7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkNSRUFURV9VU0VSX1NVQ0NFU1NcIiB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkNSRUFURV9VU0VSX0ZBSUxVUkVcIiwgcGF5bG9hZDogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYXV0aCIsImNyZWF0ZVVzZXIiLCJ1c2VyIiwiZGlzcGF0Y2giLCJ1c2VyQ3JlZGVudGlhbCIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1aWQiLCJ1c2VyUmVmIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInR5cGUiLCJlcnJvciIsInBheWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/actions/usuariosActions.ts\n"));

/***/ })

});