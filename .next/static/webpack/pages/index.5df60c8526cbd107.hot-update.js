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

/***/ "./src/components/Formulario.tsx":
/*!***************************************!*\
  !*** ./src/components/Formulario.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telephone, setTelephone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleEmailChange = (event)=>{\n        setEmail(event.target.value);\n    };\n    const handleCompanyChange = (event)=>{\n        setCompany(event.target.value);\n    };\n    const handleTelephoneChange = (event)=>{\n        setTelephone(event.target.value);\n    };\n    const handleReasonChange = (event)=>{\n        setReason(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"Nombre:\", name);\n        console.log(\"Correo electr\\xf3nico:\", email);\n        console.log(\"Empresa:\", company);\n        console.log(\"Telefono:\", telephone);\n        console.log(\"Motivo:\", reason);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"my-form\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Nombre:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: handleNameChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Correo electr\\xf3nico:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                value: email,\n                                onChange: handleEmailChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"company\",\n                                children: \"Empresa:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"company\",\n                                value: company,\n                                onChange: handleCompanyChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"telephone\",\n                                children: \"Telefono:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"telephone\",\n                                value: telephone,\n                                onChange: handleTelephoneChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"reason\",\n                                children: \"Motivo:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"reason\",\n                                value: reason,\n                                onChange: handleReasonChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Enviar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"LR3qaUjnQw2GqzhqXHHhEwmemfc=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQ2pDLE1BQU1DLG1CQUFtQixJQUFNOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1ZLG1CQUFtQixDQUFDQyxRQUErQztRQUN2RVYsUUFBUVUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNILFFBQStDO1FBQ3hFUixTQUFTUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNRSxzQkFBc0IsQ0FBQ0osUUFBK0M7UUFDMUVOLFdBQVdNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1HLHdCQUF3QixDQUFDTCxRQUErQztRQUM1RUosYUFBYUksTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsTUFBTUkscUJBQXFCLENBQUNOLFFBQStDO1FBQ3pFRixVQUFVRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNSyxlQUFlLENBQUNQLFFBQTRDO1FBQ2hFQSxNQUFNUSxjQUFjO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsV0FBV3JCO1FBQ3ZCb0IsUUFBUUMsR0FBRyxDQUFDLDBCQUF1Qm5CO1FBQ25Da0IsUUFBUUMsR0FBRyxDQUFDLFlBQVlqQjtRQUN4QmdCLFFBQVFDLEdBQUcsQ0FBQyxhQUFhZjtRQUN6QmMsUUFBUUMsR0FBRyxDQUFDLFdBQVdiO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNjO1FBQU1DLFdBQVc7UUFDbEJDLFVBQVVOOzswQkFDTiw4REFBQ087O2tDQUNILDhEQUFDQTs7MENBQ0MsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFPOzs7Ozs7MENBQ3RCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsSUFBRztnQ0FBT2pCLE9BQU9iO2dDQUFNK0IsVUFBVXJCOzs7Ozs7Ozs7Ozs7a0NBRXRELDhEQUFDZTs7MENBQ0MsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBUUMsSUFBRztnQ0FBUWpCLE9BQU9YO2dDQUFPNkIsVUFBVWpCOzs7Ozs7Ozs7Ozs7a0NBRXpELDhEQUFDVzs7MENBQ0MsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFVOzs7Ozs7MENBQ3pCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsSUFBRztnQ0FBVWpCLE9BQU9UO2dDQUFTMkIsVUFBVWhCOzs7Ozs7Ozs7Ozs7a0NBRTVELDhEQUFDVTs7MENBQ0MsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFZOzs7Ozs7MENBQzNCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsSUFBRztnQ0FBWWpCLE9BQU9QO2dDQUFXeUIsVUFBVWY7Ozs7Ozs7Ozs7OztrQ0FFaEUsOERBQUNTOzswQ0FDQyw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQVM7Ozs7OzswQ0FDeEIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPQyxJQUFHO2dDQUFTakIsT0FBT0w7Z0NBQVF1QixVQUFVZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxRCw4REFBQ2U7Z0JBQU9ILE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtHQWhFTTlCO0tBQUFBO0FBa0VOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXVsYXJpby50c3g/YzMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBhbnksIHNldENvbXBhbnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZWxlcGhvbmUsIHNldFRlbGVwaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29tcGFueUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldENvbXBhbnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZWxlcGhvbmVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRUZWxlcGhvbmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWFzb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRSZWFzb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ05vbWJyZTonLCBuYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKCdDb3JyZW8gZWxlY3Ryw7NuaWNvOicsIGVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKCdFbXByZXNhOicsIGNvbXBhbnkpO1xyXG4gICAgY29uc29sZS5sb2coJ1RlbGVmb25vOicsIHRlbGVwaG9uZSk7XHJcbiAgICBjb25zb2xlLmxvZygnTW90aXZvOicsIHJlYXNvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtICBjbGFzc05hbWU9IFwibXktZm9ybVwiXHJcbiAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICA8ZGl2ICA+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tYnJlOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+Q29ycmVvIGVsZWN0csOzbmljbzo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPkVtcHJlc2E6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbXBhbnlcIiB2YWx1ZT17Y29tcGFueX0gb25DaGFuZ2U9e2hhbmRsZUNvbXBhbnlDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVsZXBob25lXCI+VGVsZWZvbm86PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRlbGVwaG9uZVwiIHZhbHVlPXt0ZWxlcGhvbmV9IG9uQ2hhbmdlPXtoYW5kbGVUZWxlcGhvbmVDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVhc29uXCI+TW90aXZvOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17cmVhc29ufSBvbkNoYW5nZT17aGFuZGxlUmVhc29uQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJjb21wYW55Iiwic2V0Q29tcGFueSIsInRlbGVwaG9uZSIsInNldFRlbGVwaG9uZSIsInJlYXNvbiIsInNldFJlYXNvbiIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVDb21wYW55Q2hhbmdlIiwiaGFuZGxlVGVsZXBob25lQ2hhbmdlIiwiaGFuZGxlUmVhc29uQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Formulario.tsx\n"));

/***/ })

});