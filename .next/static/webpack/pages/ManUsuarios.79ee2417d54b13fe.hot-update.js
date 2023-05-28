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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/userSlice */ \"./src/redux/slice/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Users() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUsers);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    const [newUsers, setNewUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newUserName, setNewUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserEmail, setNewUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserRole, setNewUserRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"client\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.getUsers)());\n    }, [\n        dispatch\n    ]);\n    const handleCreateUser = ()=>{\n        const newUser = {\n            id: Math.floor(Math.random() * 1000),\n            name: newUserName,\n            email: newUserEmail,\n            rol: newUserRole\n        };\n        setNewUsers([\n            ...newUsers,\n            newUser\n        ]);\n        setNewUserName(\"\");\n        setNewUserEmail(\"\");\n        setNewUserRole(\"client\");\n    };\n    const handleSaveUsers = ()=>{\n        newUsers.forEach((user)=>dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.createUser1)(user)));\n        setNewUsers([]);\n    };\n    const handleEditUser = (user)=>{\n        const editedUser = {\n            id: user.id,\n            name: user.name,\n            email: \"editeduser@example.com\",\n            rol: \"client\"\n        };\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.updateUser)(editedUser));\n    };\n    const handleDeleteUser = (userId)=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(userId));\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 69,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 73,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container text-center p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name\",\n                        value: newUserName,\n                        onChange: (e)=>setNewUserName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Email\",\n                        value: newUserEmail,\n                        onChange: (e)=>setNewUserEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: newUserRole,\n                        onChange: (e)=>setNewUserRole(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"admin\",\n                                children: \"Admin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"client\",\n                                children: \"Client\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleCreateUser,\n                        children: \"Agregar Usuario\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group p-3\",\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-group-item bg-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Nombre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            user.name,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            user.email,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Rol\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            user.rol,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-success p-1 m-3\",\n                                onClick: ()=>handleEditUser(user),\n                                children: \"Editar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-danger p-1\",\n                                onClick: ()=>handleDeleteUser(user.id),\n                                children: \"Eliminar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            newUsers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Nuevos Usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: newUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    user.name,\n                                    \" - \",\n                                    user.email,\n                                    \" - \",\n                                    user.rol\n                                ]\n                            }, user.id, true, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleSaveUsers,\n                        children: \"Guardar Usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s(Users, \"iNSJlMvnW+EDI5/0sdkfgpsCqZs=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBQUU7Ozs7Ozs0QkFDRnBCLEtBQUtKLEtBQUs7MENBQ1gsOERBQUN3QjswQ0FBRTs7Ozs7OzRCQUNGcEIsS0FBS0gsR0FBRzswQ0FFVCw4REFBQ21CO2dDQUFPVixXQUFVO2dDQUEwQlcsU0FBUyxJQUFNaEIsZUFBZUQ7MENBQU87Ozs7OzswQ0FHakYsOERBQUNnQjtnQ0FBT1YsV0FBVTtnQ0FBcUJXLFNBQVMsSUFBTWQsaUJBQWlCSCxLQUFLVCxFQUFFOzBDQUFHOzs7Ozs7O3VCQVhyQ1MsS0FBS1QsRUFBRTs7Ozs7Ozs7OztZQWlCeERWLFNBQVN3QyxNQUFNLEdBQUcsbUJBQ2pCLDhEQUFDaEI7O2tDQUNDLDhEQUFDaUI7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQ0UxQyxTQUFTcUMsR0FBRyxDQUFDLENBQUNsQixxQkFDYiw4REFBQ21COztvQ0FDRW5CLEtBQUtMLElBQUk7b0NBQUM7b0NBQUlLLEtBQUtKLEtBQUs7b0NBQUM7b0NBQUlJLEtBQUtILEdBQUc7OytCQUQvQkcsS0FBS1QsRUFBRTs7Ozs7Ozs7OztrQ0FLcEIsOERBQUN5Qjt3QkFBT1YsV0FBVTt3QkFBa0JXLFNBQVNuQjtrQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RSxDQUFDO0dBbEh1QnRCOztRQUNMVCxvREFBV0E7UUFDZEMsb0RBQVdBO1FBQ1RBLG9EQUFXQTtRQUNiQSxvREFBV0E7OztLQUpIUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvTWFuVXN1YXJpb3MudHN4P2NmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIGdldFVzZXJzLFxyXG4gIGNyZWF0ZVVzZXIxLFxyXG4gIGRlbGV0ZVVzZXIsXHJcbiAgc2VsZWN0RXJyb3IsXHJcbiAgc2VsZWN0TG9hZGluZyxcclxuICBzZWxlY3RVc2VycyxcclxuICB1cGRhdGVVc2VyXHJcbn0gZnJvbSAnLi4vcmVkdXgvc2xpY2UvdXNlclNsaWNlJztcclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHJvbDogJ2FkbWluJyB8ICdjbGllbnQnO1xyXG4gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VycyA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJzKTtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XHJcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RFcnJvcik7XHJcblxyXG4gIGNvbnN0IFtuZXdVc2Vycywgc2V0TmV3VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XHJcbiAgY29uc3QgW25ld1VzZXJOYW1lLCBzZXROZXdVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25ld1VzZXJFbWFpbCwgc2V0TmV3VXNlckVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbmV3VXNlclJvbGUsIHNldE5ld1VzZXJSb2xlXSA9IHVzZVN0YXRlPCdhZG1pbicgfCAnY2xpZW50Jz4oJ2NsaWVudCcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0VXNlcnMoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVVzZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdVc2VyOiBVc2VyID0ge1xyXG4gICAgICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksXHJcbiAgICAgIG5hbWU6IG5ld1VzZXJOYW1lLFxyXG4gICAgICBlbWFpbDogbmV3VXNlckVtYWlsLFxyXG4gICAgICByb2w6IG5ld1VzZXJSb2xlLFxyXG4gICAgfTtcclxuICAgIHNldE5ld1VzZXJzKFsuLi5uZXdVc2VycywgbmV3VXNlcl0pO1xyXG4gICAgc2V0TmV3VXNlck5hbWUoJycpO1xyXG4gICAgc2V0TmV3VXNlckVtYWlsKCcnKTtcclxuICAgIHNldE5ld1VzZXJSb2xlKCdjbGllbnQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlVXNlcnMgPSAoKSA9PiB7XHJcbiAgICBuZXdVc2Vycy5mb3JFYWNoKCh1c2VyKSA9PiBkaXNwYXRjaChjcmVhdGVVc2VyMSh1c2VyKSkpO1xyXG4gICAgc2V0TmV3VXNlcnMoW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRVc2VyID0gKHVzZXI6IFVzZXIpID0+IHtcclxuICAgIGNvbnN0IGVkaXRlZFVzZXI6IFVzZXIgPSB7XHJcbiAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiAnZWRpdGVkdXNlckBleGFtcGxlLmNvbScsXHJcbiAgICAgIHJvbDogJ2NsaWVudCcsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2godXBkYXRlVXNlcihlZGl0ZWRVc2VyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVXNlciA9ICh1c2VySWQ6IG51bWJlcikgPT4ge1xyXG4gICAgZGlzcGF0Y2goZGVsZXRlVXNlcih1c2VySWQpKTtcclxuICB9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBwLTMnPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJ1xyXG4gICAgICAgICAgdmFsdWU9e25ld1VzZXJOYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICB2YWx1ZT17bmV3VXNlckVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyRW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmV3VXNlclJvbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlclJvbGUoZS50YXJnZXQudmFsdWUgYXMgJ2FkbWluJyB8ICdjbGllbnQnKX0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdhZG1pbic+QWRtaW48L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2NsaWVudCc+Q2xpZW50PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17aGFuZGxlQ3JlYXRlVXNlcn0+XHJcbiAgICAgICAgICBBZ3JlZ2FyIFVzdWFyaW9cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwIHAtMyc+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGJnLWxpZ2h0JyBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICA8cD5Ob21icmU8L3A+XHJcbiAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDxwPkVtYWlsPC9wPlxyXG4gICAgICAgICAgICB7dXNlci5lbWFpbH1cclxuICAgICAgICAgICAgPHA+Um9sPC9wPlxyXG4gICAgICAgICAgICB7dXNlci5yb2x9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIHAtMSBtLTMnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRVc2VyKHVzZXIpfT5cclxuICAgICAgICAgICAgICBFZGl0YXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBwLTEnIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVVzZXIodXNlci5pZCl9PlxyXG4gICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtuZXdVc2Vycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg0Pk51ZXZvcyBVc3VhcmlvczwvaDQ+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtuZXdVc2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9IC0ge3VzZXIuZW1haWx9IC0ge3VzZXIucm9sfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9e2hhbmRsZVNhdmVVc2Vyc30+XHJcbiAgICAgICAgICAgIEd1YXJkYXIgVXN1YXJpb3NcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0VXNlcnMiLCJjcmVhdGVVc2VyMSIsImRlbGV0ZVVzZXIiLCJzZWxlY3RFcnJvciIsInNlbGVjdExvYWRpbmciLCJzZWxlY3RVc2VycyIsInVwZGF0ZVVzZXIiLCJVc2VycyIsImRpc3BhdGNoIiwidXNlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJuZXdVc2VycyIsInNldE5ld1VzZXJzIiwibmV3VXNlck5hbWUiLCJzZXROZXdVc2VyTmFtZSIsIm5ld1VzZXJFbWFpbCIsInNldE5ld1VzZXJFbWFpbCIsIm5ld1VzZXJSb2xlIiwic2V0TmV3VXNlclJvbGUiLCJoYW5kbGVDcmVhdGVVc2VyIiwibmV3VXNlciIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmFtZSIsImVtYWlsIiwicm9sIiwiaGFuZGxlU2F2ZVVzZXJzIiwiZm9yRWFjaCIsInVzZXIiLCJoYW5kbGVFZGl0VXNlciIsImVkaXRlZFVzZXIiLCJoYW5kbGVEZWxldGVVc2VyIiwidXNlcklkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJsaSIsInAiLCJsZW5ndGgiLCJoNCIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/ManUsuarios.tsx\n"));

/***/ })

});