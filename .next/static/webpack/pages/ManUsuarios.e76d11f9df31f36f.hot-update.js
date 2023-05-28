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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/userSlice */ \"./src/redux/slice/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Users() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUsers);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.getUsers)());\n    }, [\n        dispatch\n    ]);\n    const handleCreateUser = ()=>{\n        const newUser = {\n            id: Math.floor(Math.random() * 1000),\n            name: name,\n            email: email,\n            rol: \"\"\n        };\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.createUser)(newUser));\n    };\n    const handleEditUser = (user)=>{\n        const editedUser = {\n            id: user.id,\n            name: user.name,\n            email: \"editeduser@example.com\",\n            rol: \"client\"\n        };\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.updateUser)(editedUser));\n    };\n    const handleDeleteUser = (userId)=>{\n        dispatch((0,_redux_slice_userSlice__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(userId));\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 51,\n            columnNumber: 14\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n            lineNumber: 55,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" container text-center p-3  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                placeholder: \"Correo electr\\xf3nico\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 60,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                placeholder: \"Contrase\\xf1a\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary \",\n                onClick: handleCreateUser,\n                children: \"Nuevo Usuario\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group p-3\",\n                children: [\n                    \" \",\n                    users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"list-group-item bg-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \" Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 16\n                                }, this),\n                                user.name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \" Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                user.email,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Rol\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                user.rol,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-success p-1 m-3\",\n                                    onClick: ()=>handleEditUser(Users),\n                                    children: \"Editar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-danger p-1\",\n                                    onClick: ()=>handleDeleteUser(user.id),\n                                    children: \"Eliminar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, user.id, true, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManUsuarios.tsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, this);\n}\n_s(Users, \"MKY10pN50EmO6/34RVWWrZV9CdM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy50c3g/Y2Y3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7XHJcbiBnZXRVc2VycyxjcmVhdGVVc2VyLGRlbGV0ZVVzZXIsc2VsZWN0RXJyb3Isc2VsZWN0TG9hZGluZyxzZWxlY3RVc2Vycyx1cGRhdGVVc2VyfSBmcm9tICcuLi9yZWR1eC9zbGljZS91c2VyU2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICByb2w6ICdhZG1pbicgfCAnY2xpZW50JztcclxuICAgIFxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VycygpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHVzZXJzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcnMpO1xyXG4gICAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xyXG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RFcnJvcik7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV09IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goZ2V0VXNlcnMoKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVVzZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1VzZXI6IFVzZXIgPSB7XHJcbiAgICAgICAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHJvbDogXCJcIixcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2goY3JlYXRlVXNlcihuZXdVc2VyKSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlRWRpdFVzZXIgPSAodXNlcjogVXNlcikgPT4ge1xyXG4gICAgICBjb25zdCBlZGl0ZWRVc2VyOiBVc2VyID0ge1xyXG4gICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICBlbWFpbDogJ2VkaXRlZHVzZXJAZXhhbXBsZS5jb20nLFxyXG4gICAgICAgIHJvbDogJ2NsaWVudCcsXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoZWRpdGVkVXNlcikpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVVzZXIgPSAodXNlcklkOiBudW1iZXIpID0+IHtcclxuICAgICAgZGlzcGF0Y2goZGVsZXRlVXNlcih1c2VySWQpKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBjb250YWluZXIgdGV4dC1jZW50ZXIgcC0zICAnPlxyXG48aW5wdXRcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ29ycmVvIGVsZWN0csOzbmljb1wiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSAnIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVVzZXJ9Pk51ZXZvIFVzdWFyaW88L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1ncm91cCBwLTMnPiB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSAgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0gYmctbGlnaHQnXHJcblxyXG4gICAgICAgICAgICAga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgICAgICAgPHA+IE5vbWJyZTwvcD5cclxuICAgICAgICAgICAgICB7dXNlci5uYW1lfSBcclxuICAgICAgICAgICAgICA8cD4gRW1haWw8L3A+XHJcbiAgICAgICAgICAgICAge3VzZXIuZW1haWx9IFxyXG4gICAgICAgICAgICAgIDxwPlJvbDwvcD5cclxuICAgICAgICAgICAgICB7dXNlci5yb2x9IFxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXN1Y2Nlc3MgcC0xIG0tMycgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRVc2VyKFVzZXJzKX0+RWRpdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyIHAtMScgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVVzZXIodXNlci5pZCl9PkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0VXNlcnMiLCJjcmVhdGVVc2VyIiwiZGVsZXRlVXNlciIsInNlbGVjdEVycm9yIiwic2VsZWN0TG9hZGluZyIsInNlbGVjdFVzZXJzIiwidXBkYXRlVXNlciIsIlVzZXJzIiwiZGlzcGF0Y2giLCJ1c2VycyIsImxvYWRpbmciLCJlcnJvciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVDcmVhdGVVc2VyIiwibmV3VXNlciIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm9sIiwiaGFuZGxlRWRpdFVzZXIiLCJ1c2VyIiwiZWRpdGVkVXNlciIsImhhbmRsZURlbGV0ZVVzZXIiLCJ1c2VySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImxpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/ManUsuarios.tsx\n"));

/***/ })

});