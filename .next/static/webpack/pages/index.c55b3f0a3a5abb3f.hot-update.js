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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RegistrationForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [telephone, setTelephone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [reason, setReason] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n    };\n    const handleEmailChange = (event)=>{\n        setEmail(event.target.value);\n    };\n    const handleCompanyChange = (event)=>{\n        setCompany(event.target.value);\n    };\n    const handleTelephoneChange = (event)=>{\n        setTelephone(event.target.value);\n    };\n    const handleReasonChange = (event)=>{\n        setReason(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        //RegistrationForm\n        console.log(\"Nombre:\", name);\n        console.log(\"Correo electr\\xf3nico:\", email);\n        console.log(\"Empresa:\", company);\n        console.log(\"Telefono:\", telephone);\n        console.log(\"Motivo:\", reason);\n    };\n    //agregar apellido1 y apellido2 \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex  mb-3 mt-3 text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"name\",\n                                    children: \"Nombre:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    value: name,\n                                    onChange: handleNameChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    children: \"Correo electr\\xf3nico:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    value: email,\n                                    onChange: handleEmailChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"company\",\n                                    children: \"Empresa:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"company\",\n                                    value: company,\n                                    onChange: handleCompanyChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"telephone\",\n                                    children: \"Telefono:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"telephone\",\n                                    value: telephone,\n                                    onChange: handleTelephoneChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"reason\",\n                                    children: \"Motivo:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"reason\",\n                                    value: reason,\n                                    onChange: handleReasonChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Enviar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\Formulario.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"LR3qaUjnQw2GqzhqXHHhEwmemfc=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeD9jMzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBSZWdpc3RyYXRpb25Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY29tcGFueSwgc2V0Q29tcGFueV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RlbGVwaG9uZSwgc2V0VGVsZXBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb21wYW55Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0Q29tcGFueShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRlbGVwaG9uZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFRlbGVwaG9uZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlYXNvbkNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFJlYXNvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL1JlZ2lzdHJhdGlvbkZvcm1cclxuICAgIGNvbnNvbGUubG9nKCdOb21icmU6JywgbmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ycmVvIGVsZWN0csOzbmljbzonLCBlbWFpbCk7XHJcbiAgICBjb25zb2xlLmxvZygnRW1wcmVzYTonLCBjb21wYW55KTtcclxuICAgIGNvbnNvbGUubG9nKCdUZWxlZm9ubzonLCB0ZWxlcGhvbmUpO1xyXG4gICAgY29uc29sZS5sb2coJ01vdGl2bzonLCByZWFzb24pO1xyXG4gIH07XHJcblxyXG4gIC8vYWdyZWdhciBhcGVsbGlkbzEgeSBhcGVsbGlkbzIgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4ICBtYi0zIG10LTMgdGV4dC13aGl0ZSc+XHJcblxyXG4gICAgPGZvcm0gXHJcbiAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICA8bGFiZWwgIGh0bWxGb3I9XCJuYW1lXCI+Tm9tYnJlOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Db3JyZW8gZWxlY3Ryw7NuaWNvOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zJz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBhbnlcIj5FbXByZXNhOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb21wYW55XCIgdmFsdWU9e2NvbXBhbnl9IG9uQ2hhbmdlPXtoYW5kbGVDb21wYW55Q2hhbmdlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMnPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVsZXBob25lXCI+VGVsZWZvbm86PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRlbGVwaG9uZVwiIHZhbHVlPXt0ZWxlcGhvbmV9IG9uQ2hhbmdlPXtoYW5kbGVUZWxlcGhvbmVDaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyc+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWFzb25cIj5Nb3Rpdm86PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJlYXNvblwiIHZhbHVlPXtyZWFzb259IG9uQ2hhbmdlPXtoYW5kbGVSZWFzb25DaGFuZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiAgdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkZvcm07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVnaXN0cmF0aW9uRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImNvbXBhbnkiLCJzZXRDb21wYW55IiwidGVsZXBob25lIiwic2V0VGVsZXBob25lIiwicmVhc29uIiwic2V0UmVhc29uIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZUNvbXBhbnlDaGFuZ2UiLCJoYW5kbGVUZWxlcGhvbmVDaGFuZ2UiLCJoYW5kbGVSZWFzb25DaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Formulario.tsx\n"));

/***/ })

});