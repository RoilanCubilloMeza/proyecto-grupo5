"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./src/pages/signup.tsx":
/*!******************************!*\
  !*** ./src/pages/signup.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Users)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/registerSlice */ \"./src/redux/slice/registerSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__]);\n_redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Users() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__.selectUsers);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    const [newUsers, setNewUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newUserName, setNewUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserEmail, setNewUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUserPassword, setNewUserPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleCreateUser = ()=>{\n        const newUser = {\n            id: Math.floor(Math.random() * 1000),\n            name: newUserName,\n            email: newUserEmail,\n            password: newUserPassword,\n            rol: \"client\"\n        };\n        setNewUsers([\n            ...newUsers,\n            newUser\n        ]);\n        setNewUserName(\"\");\n        setNewUserEmail(\"\");\n        setNewUserPassword(\"\");\n    };\n    const handleSaveUsers = ()=>{\n        newUsers.forEach((user)=>dispatch((0,_redux_slice_registerSlice__WEBPACK_IMPORTED_MODULE_3__.createUser)(user)));\n        setNewUsers([]);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-secondary container text-center p-5 tab-content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row  mb-4 p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-3\",\n                        type: \"text\",\n                        placeholder: \"Name\",\n                        value: newUserName,\n                        onChange: (e)=>setNewUserName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-3\",\n                        type: \"text\",\n                        placeholder: \"Email\",\n                        value: newUserEmail,\n                        onChange: (e)=>setNewUserEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-3\",\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        value: newUserPassword,\n                        onChange: (e)=>setNewUserPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"mb-3\",\n                        name: \"rol\",\n                        id: \"rol\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"1\",\n                            children: \"Cliente\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleCreateUser,\n                        children: \"Agregar Usuario\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            newUsers.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Nuevos Usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: newUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    user.name,\n                                    \" - \",\n                                    user.email,\n                                    \" - \",\n                                    user.password\n                                ]\n                            }, user.id, true, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleSaveUsers,\n                        children: \"Guardar Usuarios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\signup.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvLWdydXBvNS8uL3NyYy9wYWdlcy9zaWdudXAudHN4PzA3MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIGNyZWF0ZVVzZXIsXG4gIHNlbGVjdEVycm9yLFxuICBzZWxlY3RMb2FkaW5nLFxuICBzZWxlY3RVc2VycyxcbiBcbn0gZnJvbSAnLi4vcmVkdXgvc2xpY2UvcmVnaXN0ZXJTbGljZSc7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDpzdHJpbmc7XG4gIHJvbDogXCJjbGllbnRcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VycygpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB1c2VycyA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJzKTtcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdExvYWRpbmcpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcblxuICBjb25zdCBbbmV3VXNlcnMsIHNldE5ld1VzZXJzXSA9IHVzZVN0YXRlPFVzZXJbXT4oW10pO1xuICBjb25zdCBbbmV3VXNlck5hbWUsIHNldE5ld1VzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25ld1VzZXJFbWFpbCwgc2V0TmV3VXNlckVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3RbbmV3VXNlclBhc3N3b3JkLCBzZXROZXdVc2VyUGFzc3dvcmRdPSB1c2VTdGF0ZShcIlwiKTtcblxuIFxuICBjb25zdCBoYW5kbGVDcmVhdGVVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1VzZXI6IFVzZXIgPSB7XG4gICAgICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCksXG4gICAgICBuYW1lOiBuZXdVc2VyTmFtZSxcbiAgICAgIGVtYWlsOiBuZXdVc2VyRW1haWwsXG4gICAgICBwYXNzd29yZDogbmV3VXNlclBhc3N3b3JkLFxuICAgICAgcm9sOidjbGllbnQnLFxuICAgIH07XG4gICAgc2V0TmV3VXNlcnMoWy4uLm5ld1VzZXJzLCBuZXdVc2VyXSk7XG4gICAgc2V0TmV3VXNlck5hbWUoJycpO1xuICAgIHNldE5ld1VzZXJFbWFpbCgnJyk7XG4gICAgc2V0TmV3VXNlclBhc3N3b3JkKFwiXCIpXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZVVzZXJzID0gKCkgPT4ge1xuICAgIG5ld1VzZXJzLmZvckVhY2goKHVzZXIpID0+IGRpc3BhdGNoKGNyZWF0ZVVzZXIodXNlcikpKTtcbiAgICBzZXROZXdVc2VycyhbXSk7XG4gIH07XG5cblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXNlY29uZGFyeSBjb250YWluZXIgdGV4dC1jZW50ZXIgcC01IHRhYi1jb250ZW50Jz5cbiAgICAgIDxoMz5SZWdpc3RlcjwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93ICBtYi00IHAtMycgPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnXG4gICAgICAgICAgdmFsdWU9e25ld1VzZXJOYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xuICAgICAgICAgIHZhbHVlPXtuZXdVc2VyRW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyRW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgIHZhbHVlPXtuZXdVc2VyUGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdVc2VyUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICAgPHNlbGVjdCAgY2xhc3NOYW1lPSdtYi0zJyBuYW1lPVwicm9sXCIgaWQ9XCJyb2xcIj5cbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Q2xpZW50ZTwvb3B0aW9uPlxuICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17aGFuZGxlQ3JlYXRlVXNlcn0+XG4gICAgICAgICAgQWdyZWdhciBVc3VhcmlvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIHtuZXdVc2Vycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+TnVldm9zIFVzdWFyaW9zPC9oND5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bmV3VXNlcnMubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9IC0ge3VzZXIuZW1haWx9IC0ge3VzZXIucGFzc3dvcmR9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9e2hhbmRsZVNhdmVVc2Vyc30+XG4gICAgICAgICAgICBHdWFyZGFyIFVzdWFyaW9zXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJjcmVhdGVVc2VyIiwic2VsZWN0RXJyb3IiLCJzZWxlY3RMb2FkaW5nIiwic2VsZWN0VXNlcnMiLCJVc2VycyIsImRpc3BhdGNoIiwidXNlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJuZXdVc2VycyIsInNldE5ld1VzZXJzIiwibmV3VXNlck5hbWUiLCJzZXROZXdVc2VyTmFtZSIsIm5ld1VzZXJFbWFpbCIsInNldE5ld1VzZXJFbWFpbCIsIm5ld1VzZXJQYXNzd29yZCIsInNldE5ld1VzZXJQYXNzd29yZCIsImhhbmRsZUNyZWF0ZVVzZXIiLCJuZXdVc2VyIiwiaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbCIsImhhbmRsZVNhdmVVc2VycyIsImZvckVhY2giLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImxlbmd0aCIsImg0IiwidWwiLCJtYXAiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/signup.tsx\n");

/***/ }),

/***/ "./src/redux/slice/registerSlice.ts":
/*!******************************************!*\
  !*** ./src/redux/slice/registerSlice.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loginSlice\": () => (/* binding */ loginSlice),\n/* harmony export */   \"selectError\": () => (/* binding */ selectError),\n/* harmony export */   \"selectLoading\": () => (/* binding */ selectLoading),\n/* harmony export */   \"selectUsers\": () => (/* binding */ selectUsers)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst initialState = {\n    users: [],\n    loading: false,\n    error: null\n};\nconst createUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"users/createUser\", async (newUser)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3000/api/login\", newUser);\n    return response.data;\n});\nconst loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"users\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(createUser.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        }).addCase(createUser.fulfilled, (state, action)=>{\n            state.users.push(action.payload);\n            state.loading = false;\n            state.error = null;\n        }).addCase(createUser.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.error.message ?? \"Failed to create user\";\n        });\n    }\n});\nconst selectUsers = (state)=>state.users.users;\nconst selectLoading = (state)=>state.users.loading;\nconst selectError = (state)=>state.users.error;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2xpY2UvcmVnaXN0ZXJTbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDdkM7QUFpQjFCLE1BQU1HLGVBQTJCO0lBQy9CQyxPQUFPLEVBQUU7SUFDVEMsU0FBUyxLQUFLO0lBQ2RDLE9BQU8sSUFBSTtBQUNiO0FBR08sTUFBTUMsYUFBYU4sa0VBQWdCQSxDQUFDLG9CQUFvQixPQUFPTyxVQUFtQjtJQUN2RixNQUFNQyxXQUFXLE1BQU1QLGtEQUFVLENBQUMsbUNBQW1DTTtJQUNyRSxPQUFPQyxTQUFTRSxJQUFJO0FBQ3RCLEdBQUc7QUFJSSxNQUFNQyxhQUFhWiw2REFBV0EsQ0FBQztJQUNwQ2EsTUFBTTtJQUNOVjtJQUNBVyxVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQyxVQUFZO1FBQzFCQSxRQUNDQyxPQUFPLENBQUNWLFdBQVdXLE9BQU8sRUFBRSxDQUFDQyxRQUFVO1lBQ3BDQSxNQUFNZCxPQUFPLEdBQUcsSUFBSTtZQUNwQmMsTUFBTWIsS0FBSyxHQUFHLElBQUk7UUFDcEIsR0FDQ1csT0FBTyxDQUFDVixXQUFXYSxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0UsU0FBVztZQUNoREYsTUFBTWYsS0FBSyxDQUFDa0IsSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1lBQy9CSixNQUFNZCxPQUFPLEdBQUcsS0FBSztZQUNyQmMsTUFBTWIsS0FBSyxHQUFHLElBQUk7UUFDcEIsR0FDQ1csT0FBTyxDQUFDVixXQUFXaUIsUUFBUSxFQUFFLENBQUNMLE9BQU9FLFNBQVc7WUFDL0NGLE1BQU1kLE9BQU8sR0FBRyxLQUFLO1lBQ3JCYyxNQUFNYixLQUFLLEdBQUdlLE9BQU9mLEtBQUssQ0FBQ21CLE9BQU8sSUFBSTtRQUN4QztJQUVKO0FBQ0YsR0FBRztBQUVJLE1BQU1DLGNBQWMsQ0FBQ1AsUUFBcUJBLE1BQU1mLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0FBQzVELE1BQU11QixnQkFBZ0IsQ0FBQ1IsUUFBcUJBLE1BQU1mLEtBQUssQ0FBQ0MsT0FBTyxDQUFDO0FBQ2hFLE1BQU11QixjQUFjLENBQUNULFFBQXFCQSxNQUFNZixLQUFLLENBQUNFLEtBQUssQ0FBQztBQUVuRSxpRUFBZU0sV0FBV2lCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvLWdydXBvNS8uL3NyYy9yZWR1eC9zbGljZS9yZWdpc3RlclNsaWNlLnRzP2YyZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuaW50ZXJmYWNlIExvZ2luIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHJvbDogc3RyaW5nXHJcbiAgcGFzc3dvcmQ6c3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlcnNTdGF0ZSB7XHJcbiAgdXNlcnM6IExvZ2luW107XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2Vyc1N0YXRlID0ge1xyXG4gIHVzZXJzOiBbXSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3VzZXJzL2NyZWF0ZVVzZXInLCBhc3luYyAobmV3VXNlcjogTG9naW4pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLCBuZXdVc2VyKTtcclxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICd1c2VycycsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgLmFkZENhc2UoY3JlYXRlVXNlci5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGNyZWF0ZVVzZXIuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLnVzZXJzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGNyZWF0ZVVzZXIucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgPz8gJ0ZhaWxlZCB0byBjcmVhdGUgdXNlcic7XHJcbiAgICAgIH0pXHJcbiAgICAgXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlcnMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcnMudXNlcnM7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RMb2FkaW5nID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXJzLmxvYWRpbmc7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RFcnJvciA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS51c2Vycy5lcnJvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwidXNlcnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJjcmVhdGVVc2VyIiwibmV3VXNlciIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJsb2dpblNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJzZWxlY3RVc2VycyIsInNlbGVjdExvYWRpbmciLCJzZWxlY3RFcnJvciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/slice/registerSlice.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/signup.tsx"));
module.exports = __webpack_exports__;

})();