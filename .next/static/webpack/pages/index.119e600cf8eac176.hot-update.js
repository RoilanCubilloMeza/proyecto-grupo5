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

/***/ "./src/components/CrearUsuarioForm.tsx":
/*!*********************************************!*\
  !*** ./src/components/CrearUsuarioForm.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_usuariosActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/actions/usuariosActions */ \"./src/redux/actions/usuariosActions.ts\");\n// components/CrearUsuarioForm.tsx\n\nvar _s = $RefreshSig$();\n\n\n\nconst CrearUsuarioForm = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [id, setid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setusername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const usuario = {\n            username,\n            email,\n            password,\n            id\n        };\n        dispatch((0,_redux_actions_usuariosActions__WEBPACK_IMPORTED_MODULE_3__.crearUsuario)(usuario));\n        setusername(\"\");\n        setEmail(\"\");\n    };\n    const handleLimpiarFormulario = ()=>{\n        dispatch((0,_redux_actions_usuariosActions__WEBPACK_IMPORTED_MODULE_3__.limpiarFormulario)());\n        setusername(\"\");\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Nombre:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: username,\n                        onChange: (e)=>setusername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Email:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Crear Usuario\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleLimpiarFormulario,\n                children: \"Limpiar Formulario\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n    console.log(CrearUsuarioForm);\n};\n_s(CrearUsuarioForm, \"UAEOFDiG2iBnq21k/EI8Te/l9HU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = CrearUsuarioForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrearUsuarioForm);\nvar _c;\n$RefreshReg$(_c, \"CrearUsuarioForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmVhclVzdWFyaW9Gb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsa0NBQWtDOzs7QUFFTTtBQUNFO0FBRXdDO0FBRWxGLE1BQU1LLG1CQUE2QixJQUFNOztJQUN2QyxNQUFNQyxXQUFXSix3REFBV0E7SUFDNUIsTUFBSyxDQUFDSyxJQUFHQyxNQUFNLEdBQUNQLCtDQUFRQSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1jLGVBQWUsQ0FBQ0MsSUFBd0M7UUFDNURBLEVBQUVDLGNBQWM7UUFFaEIsTUFBTUMsVUFBbUI7WUFDckJUO1lBQ0FFO1lBQ0FFO1lBQ0FOO1FBQ0o7UUFFQUQsU0FBU0gsNEVBQVlBLENBQUNlO1FBQ3RCUixZQUFZO1FBQ1pFLFNBQVM7SUFDWDtJQUVBLE1BQU1PLDBCQUEwQixJQUFNO1FBQ3BDYixTQUFTRixpRkFBaUJBO1FBQzFCTSxZQUFZO1FBQ1pFLFNBQVM7SUFDWDtJQUVBLHFCQUNFLDhEQUFDUTtRQUFLQyxVQUFVTjs7MEJBQ2QsOERBQUNPOztvQkFBTTtrQ0FFTCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLE9BQU9oQjt3QkFBVWlCLFVBQVUsQ0FBQ1YsSUFBTU4sWUFBWU0sRUFBRVcsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7MEJBRWpGLDhEQUFDSDs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFRQyxPQUFPZDt3QkFBT2UsVUFBVSxDQUFDVixJQUFNSixTQUFTSSxFQUFFVyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OzswQkFFNUUsOERBQUNHO2dCQUFPSixNQUFLOzBCQUFTOzs7Ozs7MEJBQ3RCLDhEQUFDSTtnQkFBT0osTUFBSztnQkFBU0ssU0FBU1Y7MEJBQXlCOzs7Ozs7Ozs7Ozs7SUFRNURXLFFBQVFDLEdBQUcsQ0FBQzFCO0FBQ2Q7R0FoRE1BOztRQUNhSCxvREFBV0E7OztLQUR4Qkc7QUFrRE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcmVhclVzdWFyaW9Gb3JtLnRzeD8zNGNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ3JlYXJVc3VhcmlvRm9ybS50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIkAvcm9vdC90eXBlcy91c3Vhcmlvcy91c3Vhcmlvcy50eXBlc1wiO1xyXG5pbXBvcnQgeyBjcmVhclVzdWFyaW8sIGxpbXBpYXJGb3JtdWxhcmlvIH0gZnJvbSBcIkAvcmVkdXgvYWN0aW9ucy91c3Vhcmlvc0FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IENyZWFyVXN1YXJpb0Zvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdFtpZCxzZXRpZF09dXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldHVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXN1YXJpbzogVXN1YXJpbyA9IHtcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBlbWFpbCwgXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgaWRcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2goY3JlYXJVc3VhcmlvKHVzdWFyaW8pKTtcclxuICAgIHNldHVzZXJuYW1lKFwiXCIpO1xyXG4gICAgc2V0RW1haWwoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGltcGlhckZvcm11bGFyaW8gPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsaW1waWFyRm9ybXVsYXJpbygpKTtcclxuICAgIHNldHVzZXJuYW1lKFwiXCIpO1xyXG4gICAgc2V0RW1haWwoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAgTm9tYnJlOlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXR1c2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBFbWFpbDpcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXIgVXN1YXJpbzwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVMaW1waWFyRm9ybXVsYXJpb30+XHJcbiAgICAgICAgTGltcGlhciBGb3JtdWxhcmlvIFxyXG4gICAgICAgIFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgXHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKENyZWFyVXN1YXJpb0Zvcm0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhclVzdWFyaW9Gb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwiY3JlYXJVc3VhcmlvIiwibGltcGlhckZvcm11bGFyaW8iLCJDcmVhclVzdWFyaW9Gb3JtIiwiZGlzcGF0Y2giLCJpZCIsInNldGlkIiwidXNlcm5hbWUiLCJzZXR1c2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXN1YXJpbyIsImhhbmRsZUxpbXBpYXJGb3JtdWxhcmlvIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CrearUsuarioForm.tsx\n"));

/***/ })

});