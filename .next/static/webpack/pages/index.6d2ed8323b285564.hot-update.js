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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telephone, setTelephone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleEmailChange = (event)=>{\n        setEmail(event.target.value);\n    };\n    const handleCompanyChange = (event)=>{\n        setCompany(event.target.value);\n    };\n    const handleTelephoneChange = (event)=>{\n        setTelephone(event.target.value);\n    };\n    const handleReasonChange = (event)=>{\n        setReason(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        //RegistrationForm\n        console.log(\"Nombre:\", name);\n        console.log(\"Correo electr\\xf3nico:\", email);\n        console.log(\"Empresa:\", company);\n        console.log(\"Telefono:\", telephone);\n        console.log(\"Motivo:\", reason);\n    };\n    //agregar apellido1 y apellido2 \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-3 text-center form-control\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3 mt-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \" Mas Informacion\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    htmlFor: \"name\",\n                                    children: \"Nombre:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    type: \"text\",\n                                    id: \"name\",\n                                    value: name,\n                                    onChange: handleNameChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    htmlFor: \"email\",\n                                    children: \"Correo:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    type: \"text\",\n                                    id: \"email\",\n                                    value: email,\n                                    onChange: handleEmailChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    htmlFor: \"company\",\n                                    children: \"Empresa:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    type: \"text\",\n                                    id: \"company\",\n                                    value: company,\n                                    onChange: handleCompanyChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    htmlFor: \"telephone\",\n                                    children: \"Telefono:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    type: \"text\",\n                                    id: \"telephone\",\n                                    value: telephone,\n                                    onChange: handleTelephoneChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    htmlFor: \"reason\",\n                                    children: \"Motivo:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    type: \"text\",\n                                    id: \"reason\",\n                                    value: reason,\n                                    onChange: handleReasonChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-success text-center\",\n                    type: \"submit\",\n                    children: \"Enviar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n            lineNumber: 43,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"LR3qaUjnQw2GqzhqXHHhEwmemfc=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztvQ0FBT0MsSUFBRztvQ0FBU2xCLE9BQU9MO29DQUFRd0IsVUFBVWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJbkYsOERBQUNnQjtvQkFBUVYsV0FBVTtvQkFBOEJPLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJFO0dBeEVNL0I7S0FBQUE7QUEwRU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeD9jMzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGFueSwgc2V0Q29tcGFueV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RlbGVwaG9uZSwgc2V0VGVsZXBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb21wYW55Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0Q29tcGFueShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRlbGVwaG9uZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFRlbGVwaG9uZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlYXNvbkNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFJlYXNvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL1JlZ2lzdHJhdGlvbkZvcm1cclxuICAgIGNvbnNvbGUubG9nKCdOb21icmU6JywgbmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ycmVvIGVsZWN0csOzbmljbzonLCBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZygnRW1wcmVzYTonLCBjb21wYW55KTtcclxuICAgIGNvbnNvbGUubG9nKCdUZWxlZm9ubzonLCB0ZWxlcGhvbmUpO1xyXG4gICAgY29uc29sZS5sb2coJ01vdGl2bzonLCByZWFzb24pO1xyXG4gIH07XHJcblxyXG4gIC8vYWdyZWdhciBhcGVsbGlkbzEgeSBhcGVsbGlkbzIgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG10LTMgdGV4dC1jZW50ZXIgZm9ybS1jb250cm9sJz5cclxuICAgIDxmb3JtIFxyXG4gICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zIG10LTMnPlxyXG4gICAgICAgICAgPGgzPiBNYXMgSW5mb3JtYWNpb248L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgIDxsYWJlbCAgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCcgaHRtbEZvcj1cIm5hbWVcIj5Ob21icmU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ2h0bWxGb3I9XCJlbWFpbFwiPkNvcnJlbzo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgIDxsYWJlbCAgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCcgaHRtbEZvcj1cImNvbXBhbnlcIj5FbXByZXNhOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB0eXBlPVwidGV4dFwiIGlkPVwiY29tcGFueVwiIHZhbHVlPXtjb21wYW55fSBvbkNoYW5nZT17aGFuZGxlQ29tcGFueUNoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT0nZm9ybS1sYWJlbCdodG1sRm9yPVwidGVsZXBob25lXCI+VGVsZWZvbm86PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZWxlcGhvbmVcIiB2YWx1ZT17dGVsZXBob25lfSBvbkNoYW5nZT17aGFuZGxlVGVsZXBob25lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPSdmb3JtLWxhYmVsJ2h0bWxGb3I9XCJyZWFzb25cIj5Nb3Rpdm86PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ3R5cGU9XCJ0ZXh0XCIgaWQ9XCJyZWFzb25cIiB2YWx1ZT17cmVhc29ufSBvbkNoYW5nZT17aGFuZGxlUmVhc29uQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgdGV4dC1jZW50ZXInIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb25Gb3JtOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJjb21wYW55Iiwic2V0Q29tcGFueSIsInRlbGVwaG9uZSIsInNldFRlbGVwaG9uZSIsInJlYXNvbiIsInNldFJlYXNvbiIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVDb21wYW55Q2hhbmdlIiwiaGFuZGxlVGVsZXBob25lQ2hhbmdlIiwiaGFuZGxlUmVhc29uQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaDMiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Formulario.tsx\n"));

/***/ })

});