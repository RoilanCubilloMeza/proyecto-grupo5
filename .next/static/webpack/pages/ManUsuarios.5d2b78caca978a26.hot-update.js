"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ManUsuarios",{

/***/ "./src/pages/ManUsuarios.tsx":
/*!***********************************!*\
  !*** ./src/pages/ManUsuarios.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/userSlice */ \"./src/redux/slice/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Users() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUsers);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    const [newUserName, setNewUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserEmail, setNewUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.getUsers)());\n    }, [\n        dispatch\n    ]);\n    const handleCreateUser = ()=>{\n        const newUser = {\n            id: Math.floor(Math.random() * 1000),\n            name: newUserName,\n            email: newUserEmail,\n            rol: \"client\"\n        };\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.createUser)(newUser));\n        setNewUserName(\"\");\n        setNewUserEmail(\"\");\n    };\n    const handleEditUser = (user)=>{\n        const editedUser = {\n            id: user.id,\n            name: user.name,\n            email: user.email,\n            rol: \"client\"\n        };\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.updateUser)(editedUser));\n    };\n    const handleDeleteUser = (userId)=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(userId));\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 64,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container text-center p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name\",\n                        value: newUserName,\n                        onChange: (e)=>setNewUserName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Email\",\n                        value: newUserEmail,\n                        onChange: (e)=>setNewUserEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleCreateUser,\n                        children: \"Nuevo Usuario\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group p-3\",\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-group-item bg-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Nombre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            user.name,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            user.email,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Rol\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this),\n                            user.rol,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-success p-1 m-3\",\n                                onClick: ()=>handleEditUser(user),\n                                children: \"Editar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-danger p-1\",\n                                onClick: ()=>handleDeleteUser(user.id),\n                                children: \"Eliminar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Users, \"cBbTe8mcS6ayvw4PQNT4ffO0RfY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3MudHN4P2NmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJzLFxyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZGVsZXRlVXNlcixcclxuICBzZWxlY3RFcnJvcixcclxuICBzZWxlY3RMb2FkaW5nLFxyXG4gIHNlbGVjdFVzZXJzLFxyXG4gIHVwZGF0ZVVzZXJcclxufSBmcm9tICcuLi9yZWR1eC9zbGljZS91c2VyU2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcm9sOiAnYWRtaW4nIHwgJ2NsaWVudCc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VycyA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJzKTtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XHJcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RFcnJvcik7XHJcblxyXG4gIGNvbnN0IFtuZXdVc2VyTmFtZSwgc2V0TmV3VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtuZXdVc2VyRW1haWwsIHNldE5ld1VzZXJFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRVc2VycygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlVXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1VzZXI6IFVzZXIgPSB7XHJcbiAgICAgIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgICAgbmFtZTogbmV3VXNlck5hbWUsXHJcbiAgICAgIGVtYWlsOiBuZXdVc2VyRW1haWwsXHJcbiAgICAgIHJvbDogJ2NsaWVudCcsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goY3JlYXRlVXNlcihuZXdVc2VyKSk7XHJcbiAgICBzZXROZXdVc2VyTmFtZSgnJyk7XHJcbiAgICBzZXROZXdVc2VyRW1haWwoJycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRVc2VyID0gKHVzZXI6IFVzZXIpID0+IHtcclxuICAgIGNvbnN0IGVkaXRlZFVzZXI6IFVzZXIgPSB7XHJcbiAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICByb2w6ICdjbGllbnQnLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoZWRpdGVkVXNlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVVzZXIgPSAodXNlcklkOiBudW1iZXIpID0+IHtcclxuICAgIGRpc3BhdGNoKGRlbGV0ZVVzZXIodXNlcklkKSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgcC02Jz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcclxuICAgICAgICAgIHZhbHVlPXtuZXdVc2VyTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgdmFsdWU9e25ld1VzZXJFbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlckVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVVzZXJ9PlxyXG4gICAgICAgICAgTnVldm8gVXN1YXJpb1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtZ3JvdXAgcC0zJz5cclxuICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gYmctbGlnaHQnIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgIDxwPk5vbWJyZTwvcD5cclxuICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgPHA+RW1haWw8L3A+XHJcbiAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICA8cD5Sb2w8L3A+XHJcbiAgICAgICAgICAgIHt1c2VyLnJvbH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBwLTEgbS0zJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0VXNlcih1c2VyKX0+XHJcbiAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgcC0xJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVVc2VyKHVzZXIuaWQpfT5cclxuICAgICAgICAgICAgICBFbGltaW5hclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0VXNlcnMiLCJjcmVhdGVVc2VyIiwiZGVsZXRlVXNlciIsInNlbGVjdEVycm9yIiwic2VsZWN0TG9hZGluZyIsInNlbGVjdFVzZXJzIiwidXBkYXRlVXNlciIsIlVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VycyIsImxvYWRpbmciLCJlcnJvciIsIm5ld1VzZXJOYW1lIiwic2V0TmV3VXNlck5hbWUiLCJuZXdVc2VyRW1haWwiLCJzZXROZXdVc2VyRW1haWwiLCJoYW5kbGVDcmVhdGVVc2VyIiwibmV3VXNlciIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmFtZSIsImVtYWlsIiwicm9sIiwiaGFuZGxlRWRpdFVzZXIiLCJ1c2VyIiwiZWRpdGVkVXNlciIsImhhbmRsZURlbGV0ZVVzZXIiLCJ1c2VySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImxpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/ManUsuarios.tsx\n"));

/***/ })

});