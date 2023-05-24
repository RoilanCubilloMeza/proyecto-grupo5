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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": function() { return /* binding */ createUser; }\n/* harmony export */ });\n/* harmony import */ var _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/config/firebase */ \"./src/database/config/firebase.ts\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n// redux/actions/userActions.ts\n\n\n// Acción para crear un usuario\nconst createUser = (user)=>{\n    return async (dispatch)=>{\n        try {\n            var _userCredential_user;\n            // Crea el usuario en Firebase Authentication\n            const { email , password  } = user;\n            const userCredential = await _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.auth.createUserWithEmailAndPassword(email, password);\n            const uid = (_userCredential_user = userCredential.user) === null || _userCredential_user === void 0 ? void 0 : _userCredential_user.uid;\n            // Guarda los datos adicionales del usuario en Firestore\n            if (uid) {\n                const userRef = _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore.collection(\"users\").doc(uid);\n                await userRef.set(user);\n                dispatch({\n                    type: \"CREATE_USER_SUCCESS\"\n                });\n            }\n        } catch (error) {\n            dispatch({\n                type: \"CREATE_USER_FAILURE\",\n                payload: error.message\n            });\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy91c3Vhcmlvc0FjdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0JBQStCO0FBSW1CO0FBQ0Y7QUFDaEQsK0JBQStCO0FBQ3hCLE1BQU1FLGFBQWEsQ0FBQ0MsT0FBa0I7SUFDM0MsT0FBTyxPQUFPQyxXQUF1QjtRQUNuQyxJQUFJO2dCQUlVQztZQUhaLDZDQUE2QztZQUM3QyxNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdKO1lBQzVCLE1BQU1FLGlCQUFpQixNQUFNTCwwRkFBbUMsQ0FBQ00sT0FBT0M7WUFDeEUsTUFBTUUsTUFBTUosQ0FBQUEsdUJBQUFBLGVBQWVGLElBQUksY0FBbkJFLGtDQUFBQSxLQUFBQSxJQUFBQSxxQkFBcUJJLEdBQUc7WUFFcEMsd0RBQXdEO1lBQ3hELElBQUlBLEtBQUs7Z0JBQ1AsTUFBTUMsVUFBVVQscUVBQW9CLENBQUMsU0FBU1csR0FBRyxDQUFDSDtnQkFDbEQsTUFBTUMsUUFBUUcsR0FBRyxDQUFDVjtnQkFDbEJDLFNBQVM7b0JBQUVVLE1BQU07Z0JBQXNCO1lBQ3pDLENBQUM7UUFDSCxFQUFFLE9BQU9DLE9BQU87WUFDZFgsU0FBUztnQkFBRVUsTUFBTTtnQkFBdUJFLFNBQVNELE1BQU1FLE9BQU87WUFBQztRQUNqRTtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvYWN0aW9ucy91c3Vhcmlvc0FjdGlvbnMudHM/YzA3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLnRzXHJcblxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIkAvcm9vdC90eXBlcy91c3Vhcmlvcy91c3Vhcmlvcy50eXBlc1wiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvZGF0YWJhc2UvY29uZmlnL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IEZpcmVzdG9yZSB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbi8vIEFjY2nDs24gcGFyYSBjcmVhciB1biB1c3VhcmlvXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKHVzZXI6IFVzdWFyaW8pID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ3JlYSBlbCB1c3VhcmlvIGVuIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyO1xyXG4gICAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIGNvbnN0IHVpZCA9IHVzZXJDcmVkZW50aWFsLnVzZXI/LnVpZDtcclxuXHJcbiAgICAgIC8vIEd1YXJkYSBsb3MgZGF0b3MgYWRpY2lvbmFsZXMgZGVsIHVzdWFyaW8gZW4gRmlyZXN0b3JlXHJcbiAgICAgIGlmICh1aWQpIHtcclxuICAgICAgICBjb25zdCB1c2VyUmVmID0gRmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2ModWlkKTtcclxuICAgICAgICBhd2FpdCB1c2VyUmVmLnNldCh1c2VyKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ1JFQVRFX1VTRVJfU1VDQ0VTU1wiIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ1JFQVRFX1VTRVJfRkFJTFVSRVwiLCBwYXlsb2FkOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhdXRoIiwiRmlyZXN0b3JlIiwiY3JlYXRlVXNlciIsInVzZXIiLCJkaXNwYXRjaCIsInVzZXJDcmVkZW50aWFsIiwiZW1haWwiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInVpZCIsInVzZXJSZWYiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwidHlwZSIsImVycm9yIiwicGF5bG9hZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions/usuariosActions.ts\n"));

/***/ })

});