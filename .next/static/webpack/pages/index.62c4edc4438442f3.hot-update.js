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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n// components/CrearUsuarioForm.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst CrearUsuarioForm = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const [id, setid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setusername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const usuario = {\n            username,\n            email,\n            password,\n            id\n        };\n        dispatch(crearUsuario(usuario));\n        setusername(\"\");\n        setEmail(\"\");\n    };\n    const handleLimpiarFormulario = ()=>{\n        dispatch(limpiarFormulario());\n        setusername(\"\");\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Nombre:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: username,\n                        onChange: (e)=>setusername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Email:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Crear Usuario\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: handleLimpiarFormulario,\n                children: \"Limpiar Formulario\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CrearUsuarioForm.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CrearUsuarioForm, \"UAEOFDiG2iBnq21k/EI8Te/l9HU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = CrearUsuarioForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrearUsuarioForm);\nvar _c;\n$RefreshReg$(_c, \"CrearUsuarioForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmVhclVzdWFyaW9Gb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrQ0FBa0M7OztBQUVNO0FBQ0U7QUFHMUMsTUFBTUcsbUJBQTZCLElBQU07O0lBQ3ZDLE1BQU1DLFdBQVdGLHdEQUFXQTtJQUM1QixNQUFLLENBQUNHLElBQUdDLE1BQU0sR0FBQ0wsK0NBQVFBLENBQUM7SUFDekIsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFFekMsTUFBTVksZUFBZSxDQUFDQyxJQUF3QztRQUM1REEsRUFBRUMsY0FBYztRQUVoQixNQUFNQyxVQUFtQjtZQUNyQlQ7WUFDQUU7WUFDQUU7WUFDSE47UUFDRDtRQUVBRCxTQUFTYSxhQUFhRDtRQUN0QlIsWUFBWTtRQUNaRSxTQUFTO0lBQ1g7SUFFQSxNQUFNUSwwQkFBMEIsSUFBTTtRQUNwQ2QsU0FBU2U7UUFDVFgsWUFBWTtRQUNaRSxTQUFTO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ1U7UUFBS0MsVUFBVVI7OzBCQUNkLDhEQUFDUzs7b0JBQU07a0NBRUwsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxPQUFPbEI7d0JBQVVtQixVQUFVLENBQUNaLElBQU1OLFlBQVlNLEVBQUVhLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUVqRiw4REFBQ0g7O29CQUFNO2tDQUVMLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBUUMsT0FBT2hCO3dCQUFPaUIsVUFBVSxDQUFDWixJQUFNSixTQUFTSSxFQUFFYSxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OzswQkFFNUUsOERBQUNHO2dCQUFPSixNQUFLOzBCQUFTOzs7Ozs7MEJBQ3RCLDhEQUFDSTtnQkFBT0osTUFBSztnQkFBU0ssU0FBU1g7MEJBQXlCOzs7Ozs7Ozs7Ozs7QUFLOUQ7R0E1Q01mOztRQUNhRCxvREFBV0E7OztLQUR4QkM7QUE4Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DcmVhclVzdWFyaW9Gb3JtLnRzeD8zNGNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ3JlYXJVc3VhcmlvRm9ybS50c3hcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIkAvcm9vdC90eXBlcy91c3Vhcmlvcy91c3Vhcmlvcy50eXBlc1wiO1xyXG5cclxuY29uc3QgQ3JlYXJVc3VhcmlvRm9ybTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0W2lkLHNldGlkXT11c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0dXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1c3VhcmlvOiBVc3VhcmlvID0ge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIGVtYWlsLCBcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICBpZFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwYXRjaChjcmVhclVzdWFyaW8odXN1YXJpbykpO1xyXG4gICAgc2V0dXNlcm5hbWUoXCJcIik7XHJcbiAgICBzZXRFbWFpbChcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMaW1waWFyRm9ybXVsYXJpbyA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGxpbXBpYXJGb3JtdWxhcmlvKCkpO1xyXG4gICAgc2V0dXNlcm5hbWUoXCJcIik7XHJcbiAgICBzZXRFbWFpbChcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBOb21icmU6XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldHVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIEVtYWlsOlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhciBVc3VhcmlvPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUxpbXBpYXJGb3JtdWxhcmlvfT5cclxuICAgICAgICBMaW1waWFyIEZvcm11bGFyaW9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWFyVXN1YXJpb0Zvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJDcmVhclVzdWFyaW9Gb3JtIiwiZGlzcGF0Y2giLCJpZCIsInNldGlkIiwidXNlcm5hbWUiLCJzZXR1c2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXN1YXJpbyIsImNyZWFyVXN1YXJpbyIsImhhbmRsZUxpbXBpYXJGb3JtdWxhcmlvIiwibGltcGlhckZvcm11bGFyaW8iLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CrearUsuarioForm.tsx\n"));

/***/ })

});