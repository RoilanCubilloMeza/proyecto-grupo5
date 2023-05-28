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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/userSlice */ \"./src/redux/slice/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Users() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUsers);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    const [newUsers, setNewUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newUserName, setNewUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserEmail, setNewUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserRole, setNewUserRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"client\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.getUsers)());\n    }, [\n        dispatch\n    ]);\n    const handleCreateUser = ()=>{\n        const newUser = {\n            id: Math.floor(Math.random() * 1000),\n            name: newUserName,\n            email: newUserEmail,\n            rol: newUserRole\n        };\n        setNewUsers([\n            ...newUsers,\n            newUser\n        ]);\n        setNewUserName(\"\");\n        setNewUserEmail(\"\");\n        setNewUserRole(\"client\");\n    };\n    const handleSaveUsers = ()=>{\n        newUsers.forEach((user)=>dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.createUser)(user)));\n        setNewUsers([]);\n    };\n    const handleEditUser = (user)=>{\n        const editedUser = {\n            id: user.id,\n            name: user.name,\n            email: \"editeduser@example.com\",\n            rol: \"client\"\n        };\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.updateUser)(editedUser));\n    };\n    const handleDeleteUser = (userId)=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(userId));\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 69,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 73,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container text-center p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name\",\n                        value: newUserName,\n                        onChange: (e)=>setNewUserName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Email\",\n                        value: newUserEmail,\n                        onChange: (e)=>setNewUserEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: newUserRole,\n                        onChange: (e)=>setNewUserRole(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"admin\",\n                                children: \"Admin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"client\",\n                                children: \"Client\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleCreateUser,\n                        children: \"Agregar Usuario\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group p-3\",\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-group-item bg-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Nombre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            user.name,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            user.email,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Rol\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            user.rol,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-success p-1 m-3\",\n                                onClick: ()=>handleEditUser(user),\n                                children: \"Editar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-danger p-1\",\n                                onClick: ()=>handleDeleteUser(user.id),\n                                children: \"Eliminar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            newUsers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Nuevos Usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: newUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    user.name,\n                                    \" - \",\n                                    user.email,\n                                    \" - \",\n                                    user.rol\n                                ]\n                            }, user.id, true, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleSaveUsers,\n                        children: \"Guardar Usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Users, \"iNSJlMvnW+EDI5/0sdkfgpsCqZs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBQUU7Ozs7Ozs0QkFDRnBCLEtBQUtKLEtBQUs7MENBQ1gsOERBQUN3QjswQ0FBRTs7Ozs7OzRCQUNGcEIsS0FBS0gsR0FBRzswQ0FFVCw4REFBQ21CO2dDQUFPVixXQUFVO2dDQUEwQlcsU0FBUyxJQUFNaEIsZUFBZUQ7MENBQU87Ozs7OzswQ0FHakYsOERBQUNnQjtnQ0FBT1YsV0FBVTtnQ0FBcUJXLFNBQVMsSUFBTWQsaUJBQWlCSCxLQUFLVCxFQUFFOzBDQUFHOzs7Ozs7O3VCQVhyQ1MsS0FBS1QsRUFBRTs7Ozs7Ozs7OztZQWlCeERWLFNBQVN3QyxNQUFNLEdBQUcsbUJBQ2pCLDhEQUFDaEI7O2tDQUNDLDhEQUFDaUI7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQ0UxQyxTQUFTcUMsR0FBRyxDQUFDLENBQUNsQixxQkFDYiw4REFBQ21COztvQ0FDRW5CLEtBQUtMLElBQUk7b0NBQUM7b0NBQUlLLEtBQUtKLEtBQUs7b0NBQUM7b0NBQUlJLEtBQUtILEdBQUc7OytCQUQvQkcsS0FBS1QsRUFBRTs7Ozs7Ozs7OztrQ0FLcEIsOERBQUN5Qjt3QkFBT1YsV0FBVTt3QkFBa0JXLFNBQVNuQjtrQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RSxDQUFDO0dBbEh1QnRCOztRQUNMVCxvREFBV0E7UUFDZEMsb0RBQVdBO1FBQ1RBLG9EQUFXQTtRQUNiQSxvREFBV0E7OztLQUpIUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvTWFuVXN1YXJpb3MudHN4P2NmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJzLFxyXG4gIGNyZWF0ZVVzZXIsXHJcbiAgZGVsZXRlVXNlcixcclxuICBzZWxlY3RFcnJvcixcclxuICBzZWxlY3RMb2FkaW5nLFxyXG4gIHNlbGVjdFVzZXJzLFxyXG4gIHVwZGF0ZVVzZXJcclxufSBmcm9tICcuLi9yZWR1eC9zbGljZS91c2VyU2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcm9sOiAnYWRtaW4nIHwgJ2NsaWVudCc7XHJcbiBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXJzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcnMpO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcclxuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcclxuXHJcbiAgY29uc3QgW25ld1VzZXJzLCBzZXROZXdVc2Vyc10gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKTtcclxuICBjb25zdCBbbmV3VXNlck5hbWUsIHNldE5ld1VzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbmV3VXNlckVtYWlsLCBzZXROZXdVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtuZXdVc2VyUm9sZSwgc2V0TmV3VXNlclJvbGVdID0gdXNlU3RhdGU8J2FkbWluJyB8ICdjbGllbnQnPignY2xpZW50Jyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRVc2VycygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlVXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1VzZXI6IFVzZXIgPSB7XHJcbiAgICAgIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgICAgbmFtZTogbmV3VXNlck5hbWUsXHJcbiAgICAgIGVtYWlsOiBuZXdVc2VyRW1haWwsXHJcbiAgICAgIHJvbDogbmV3VXNlclJvbGUsXHJcbiAgICB9O1xyXG4gICAgc2V0TmV3VXNlcnMoWy4uLm5ld1VzZXJzLCBuZXdVc2VyXSk7XHJcbiAgICBzZXROZXdVc2VyTmFtZSgnJyk7XHJcbiAgICBzZXROZXdVc2VyRW1haWwoJycpO1xyXG4gICAgc2V0TmV3VXNlclJvbGUoJ2NsaWVudCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVVc2VycyA9ICgpID0+IHtcclxuICAgIG5ld1VzZXJzLmZvckVhY2goKHVzZXIpID0+IGRpc3BhdGNoKGNyZWF0ZVVzZXIodXNlcikpKTtcclxuICAgIHNldE5ld1VzZXJzKFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0VXNlciA9ICh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0ZWRVc2VyOiBVc2VyID0ge1xyXG4gICAgICBpZDogdXNlci5pZCxcclxuICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICBlbWFpbDogJ2VkaXRlZHVzZXJAZXhhbXBsZS5jb20nLFxyXG4gICAgICByb2w6ICdjbGllbnQnLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoZWRpdGVkVXNlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVVzZXIgPSAodXNlcklkOiBudW1iZXIpID0+IHtcclxuICAgIGRpc3BhdGNoKGRlbGV0ZVVzZXIodXNlcklkKSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgcC0zJz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcclxuICAgICAgICAgIHZhbHVlPXtuZXdVc2VyTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgdmFsdWU9e25ld1VzZXJFbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlckVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e25ld1VzZXJSb2xlfSBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXJSb2xlKGUudGFyZ2V0LnZhbHVlIGFzICdhZG1pbicgfCAnY2xpZW50Jyl9PlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nYWRtaW4nPkFkbWluPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjbGllbnQnPkNsaWVudDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVVzZXJ9PlxyXG4gICAgICAgICAgQWdyZWdhciBVc3VhcmlvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1ncm91cCBwLTMnPlxyXG4gICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBiZy1saWdodCcga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgPHA+Tm9tYnJlPC9wPlxyXG4gICAgICAgICAgICB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICA8cD5FbWFpbDwvcD5cclxuICAgICAgICAgICAge3VzZXIuZW1haWx9XHJcbiAgICAgICAgICAgIDxwPlJvbDwvcD5cclxuICAgICAgICAgICAge3VzZXIucm9sfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBwLTEgbS0zJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0VXNlcih1c2VyKX0+XHJcbiAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgcC0xJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVVc2VyKHVzZXIuaWQpfT5cclxuICAgICAgICAgICAgICBFbGltaW5hclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bmV3VXNlcnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoND5OdWV2b3MgVXN1YXJpb3M8L2g0PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7bmV3VXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICB7dXNlci5uYW1lfSAtIHt1c2VyLmVtYWlsfSAtIHt1c2VyLnJvbH1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXtoYW5kbGVTYXZlVXNlcnN9PlxyXG4gICAgICAgICAgICBHdWFyZGFyIFVzdWFyaW9zXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldFVzZXJzIiwiY3JlYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJzZWxlY3RFcnJvciIsInNlbGVjdExvYWRpbmciLCJzZWxlY3RVc2VycyIsInVwZGF0ZVVzZXIiLCJVc2VycyIsImRpc3BhdGNoIiwidXNlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJuZXdVc2VycyIsInNldE5ld1VzZXJzIiwibmV3VXNlck5hbWUiLCJzZXROZXdVc2VyTmFtZSIsIm5ld1VzZXJFbWFpbCIsInNldE5ld1VzZXJFbWFpbCIsIm5ld1VzZXJSb2xlIiwic2V0TmV3VXNlclJvbGUiLCJoYW5kbGVDcmVhdGVVc2VyIiwibmV3VXNlciIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmFtZSIsImVtYWlsIiwicm9sIiwiaGFuZGxlU2F2ZVVzZXJzIiwiZm9yRWFjaCIsInVzZXIiLCJoYW5kbGVFZGl0VXNlciIsImVkaXRlZFVzZXIiLCJoYW5kbGVEZWxldGVVc2VyIiwidXNlcklkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJsaSIsInAiLCJsZW5ndGgiLCJoNCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/ManUsuarios.tsx\n"));

/***/ })

});