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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telephone, setTelephone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleEmailChange = (event)=>{\n        setEmail(event.target.value);\n    };\n    const handleCompanyChange = (event)=>{\n        setCompany(event.target.value);\n    };\n    const handleTelephoneChange = (event)=>{\n        setTelephone(event.target.value);\n    };\n    const handleReasonChange = (event)=>{\n        setReason(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"Nombre:\", name);\n        console.log(\"Correo electr\\xf3nico:\", email);\n        console.log(\"Empresa:\", company);\n        console.log(\"Telefono:\", telephone);\n        console.log(\"Motivo:\", reason);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"my-form \",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-inline p-2 bg-dark text-white text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" d-inline p-2 bg-dark text-white text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                clas: true,\n                                htmlFor: \"name\",\n                                children: \"Nombre:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: handleNameChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Correo electr\\xf3nico:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                value: email,\n                                onChange: handleEmailChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"company\",\n                                children: \"Empresa:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"company\",\n                                value: company,\n                                onChange: handleCompanyChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"telephone\",\n                                children: \"Telefono:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"telephone\",\n                                value: telephone,\n                                onChange: handleTelephoneChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"reason\",\n                                children: \"Motivo:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"reason\",\n                                value: reason,\n                                onChange: handleReasonChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Enviar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"LR3qaUjnQw2GqzhqXHHhEwmemfc=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQ2pDLE1BQU1DLG1CQUFtQixJQUFNOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1ZLG1CQUFtQixDQUFDQyxRQUErQztRQUN2RVYsUUFBUVUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNILFFBQStDO1FBQ3hFUixTQUFTUSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxNQUFNRSxzQkFBc0IsQ0FBQ0osUUFBK0M7UUFDMUVOLFdBQVdNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1HLHdCQUF3QixDQUFDTCxRQUErQztRQUM1RUosYUFBYUksTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsTUFBTUkscUJBQXFCLENBQUNOLFFBQStDO1FBQ3pFRixVQUFVRSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNSyxlQUFlLENBQUNQLFFBQTRDO1FBQ2hFQSxNQUFNUSxjQUFjO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsV0FBV3JCO1FBQ3ZCb0IsUUFBUUMsR0FBRyxDQUFDLDBCQUF1Qm5CO1FBQ25Da0IsUUFBUUMsR0FBRyxDQUFDLFlBQVlqQjtRQUN4QmdCLFFBQVFDLEdBQUcsQ0FBQyxhQUFhZjtRQUN6QmMsUUFBUUMsR0FBRyxDQUFDLFdBQVdiO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNjO1FBQU1DLFdBQVc7UUFDbEJDLFVBQVVOOzswQkFDTiw4REFBQ087Z0JBQUlGLFdBQVU7O2tDQUNqQiw4REFBQ0U7d0JBQUtGLFdBQVU7OzBDQUNkLDhEQUFDRztnQ0FBT0MsSUFBSTtnQ0FBQ0MsU0FBUTswQ0FBTzs7Ozs7OzBDQUM1Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQU9sQixPQUFPYjtnQ0FBTWdDLFVBQVV0Qjs7Ozs7Ozs7Ozs7O2tDQUV0RCw4REFBQ2U7OzBDQUNDLDhEQUFDQztnQ0FBTUUsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQVFDLElBQUc7Z0NBQVFsQixPQUFPWDtnQ0FBTzhCLFVBQVVsQjs7Ozs7Ozs7Ozs7O2tDQUV6RCw4REFBQ1c7OzBDQUNDLDhEQUFDQztnQ0FBTUUsU0FBUTswQ0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQVVsQixPQUFPVDtnQ0FBUzRCLFVBQVVqQjs7Ozs7Ozs7Ozs7O2tDQUU1RCw4REFBQ1U7OzBDQUNDLDhEQUFDQztnQ0FBTUUsU0FBUTswQ0FBWTs7Ozs7OzBDQUMzQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQVlsQixPQUFPUDtnQ0FBVzBCLFVBQVVoQjs7Ozs7Ozs7Ozs7O2tDQUVoRSw4REFBQ1M7OzBDQUNDLDhEQUFDQztnQ0FBTUUsU0FBUTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQVNsQixPQUFPTDtnQ0FBUXdCLFVBQVVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFELDhEQUFDZ0I7Z0JBQU9ILE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtHQWhFTS9CO0tBQUFBO0FBa0VOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXVsYXJpby50c3g/YzMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NvbXBhbnksIHNldENvbXBhbnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZWxlcGhvbmUsIHNldFRlbGVwaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29tcGFueUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldENvbXBhbnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZWxlcGhvbmVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRUZWxlcGhvbmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWFzb25DaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRSZWFzb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ05vbWJyZTonLCBuYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKCdDb3JyZW8gZWxlY3Ryw7NuaWNvOicsIGVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKCdFbXByZXNhOicsIGNvbXBhbnkpO1xyXG4gICAgY29uc29sZS5sb2coJ1RlbGVmb25vOicsIHRlbGVwaG9uZSk7XHJcbiAgICBjb25zb2xlLmxvZygnTW90aXZvOicsIHJlYXNvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtICBjbGFzc05hbWU9IFwibXktZm9ybSBcIlxyXG4gICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtaW5saW5lIHAtMiBiZy1kYXJrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXInPlxyXG4gICAgICA8ZGl2ICBjbGFzc05hbWU9JyBkLWlubGluZSBwLTIgYmctZGFyayB0ZXh0LXdoaXRlIHRleHQtY2VudGVyJz5cclxuICAgICAgICA8bGFiZWwgIGNsYXMgaHRtbEZvcj1cIm5hbWVcIj5Ob21icmU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Db3JyZW8gZWxlY3Ryw7NuaWNvOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21wYW55XCI+RW1wcmVzYTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29tcGFueVwiIHZhbHVlPXtjb21wYW55fSBvbkNoYW5nZT17aGFuZGxlQ29tcGFueUNoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxlcGhvbmVcIj5UZWxlZm9ubzo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGVsZXBob25lXCIgdmFsdWU9e3RlbGVwaG9uZX0gb25DaGFuZ2U9e2hhbmRsZVRlbGVwaG9uZUNoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWFzb25cIj5Nb3Rpdm86PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJlYXNvblwiIHZhbHVlPXtyZWFzb259IG9uQ2hhbmdlPXtoYW5kbGVSZWFzb25DaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImNvbXBhbnkiLCJzZXRDb21wYW55IiwidGVsZXBob25lIiwic2V0VGVsZXBob25lIiwicmVhc29uIiwic2V0UmVhc29uIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZUNvbXBhbnlDaGFuZ2UiLCJoYW5kbGVUZWxlcGhvbmVDaGFuZ2UiLCJoYW5kbGVSZWFzb25DaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImNsYXMiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Formulario.tsx\n"));

/***/ })

});