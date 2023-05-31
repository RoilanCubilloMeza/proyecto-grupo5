"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ManAnuncios",{

/***/ "./src/pages/ManAnuncios.tsx":
/*!***********************************!*\
  !*** ./src/pages/ManAnuncios.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Anuncios; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/AdvertisementSlice */ \"./src/redux/slice/AdvertisementSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Anuncios() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const anuncios = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.selectAnuncio);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    const [editedAnuncio, setEditedAnuncio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [newTittle, setNewTittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newUrl, setNewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.getAnuncios)());\n    }, [\n        dispatch\n    ]);\n    const handleCreateAnuncio = ()=>{\n        const newAnuncio = {\n            id: Math.floor(Math.random() * 1000),\n            tittle: newTittle,\n            url: newUrl\n        };\n        dispatch((0,_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.createAnuncios)(newAnuncio));\n        setNewTittle(\"\");\n        setNewUrl(\"\");\n    };\n    const handleEditAnuncio = (anuncio)=>{\n        setEditedAnuncio(anuncio);\n    };\n    const handleSaveAnuncioChanges = ()=>{\n        if (editedAnuncio) {\n            dispatch((0,_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.updateAnuncios)(editedAnuncio));\n            setEditedAnuncio(null);\n        }\n    };\n    const handleDeleteAnuncio = (anuncioId)=>{\n        dispatch((0,_redux_slice_AdvertisementSlice__WEBPACK_IMPORTED_MODULE_3__.deleteAnuncios)(anuncioId));\n    };\n    const filteredAnuncios = anuncios.filter((anuncio)=>anuncio.tittle.toLowerCase().includes(searchQuery.toLowerCase()));\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center h2 p-3\",\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n            lineNumber: 69,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container text-center p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \" \",\n                    type: \"text\",\n                    value: searchQuery,\n                    onChange: (e)=>setSearchQuery(e.target.value),\n                    placeholder: \"Buscar anuncio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newTittle,\n                        onChange: (e)=>setNewTittle(e.target.value),\n                        placeholder: \"T\\xedtulo del anuncio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newUrl,\n                        onChange: (e)=>setNewUrl(e.target.value),\n                        placeholder: \"URL del anuncio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: handleCreateAnuncio,\n                        children: \"Nuevo Anuncio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group p-3\",\n                children: filteredAnuncios.map((anuncio)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-group-item bg-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Descripci\\xf3n\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this),\n                            editedAnuncio && editedAnuncio.id === anuncio.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: editedAnuncio.tittle,\n                                        onChange: (e)=>setEditedAnuncio({\n                                                ...editedAnuncio,\n                                                tittle: e.target.value\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: editedAnuncio.url,\n                                        onChange: (e)=>setEditedAnuncio({\n                                                ...editedAnuncio,\n                                                url: e.target.value\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-success p-1 m-3\",\n                                        onClick: handleSaveAnuncioChanges,\n                                        children: \"Guardar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: anuncio.tittle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: anuncio.url\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-success p-1 m-3\",\n                                        onClick: ()=>handleEditAnuncio(anuncio),\n                                        children: \"Editar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-danger p-1\",\n                                        onClick: ()=>handleDeleteAnuncio(anuncio.id),\n                                        children: \"Eliminar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, anuncio.id, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\ManAnuncios.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Anuncios, \"UObduYXf3IlBkNGCp5Cewc8IsaI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Anuncios;\nvar _c;\n$RefreshReg$(_c, \"Anuncios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvTWFuQW51bmNpb3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNXO0FBU1o7QUFRNUIsU0FBU1csV0FBVzs7SUFDakMsTUFBTUMsV0FBV1Ysd0RBQVdBO0lBQzVCLE1BQU1XLFdBQVdWLHdEQUFXQSxDQUFDTywwRUFBYUE7SUFDMUMsTUFBTUksVUFBVVgsd0RBQVdBLENBQUNFLDBFQUFhQTtJQUN6QyxNQUFNVSxRQUFRWix3REFBV0EsQ0FBQ0csd0VBQVdBO0lBRXJDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdoQiwrQ0FBUUEsQ0FBaUIsSUFBSTtJQUN2RSxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNtQixRQUFRQyxVQUFVLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNxQixhQUFhQyxlQUFlLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWSxTQUFTUiw0RUFBV0E7SUFDdEIsR0FBRztRQUFDUTtLQUFTO0lBRWIsTUFBTVksc0JBQXNCLElBQU07UUFDaEMsTUFBTUMsYUFBc0I7WUFDMUJDLElBQUlDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO1lBQy9CQyxRQUFRWjtZQUNSYSxLQUFLWDtRQUNQO1FBQ0FSLFNBQVNMLCtFQUFjQSxDQUFDa0I7UUFDeEJOLGFBQWE7UUFDYkUsVUFBVTtJQUNaO0lBRUEsTUFBTVcsb0JBQW9CLENBQUNDLFVBQXFCO1FBQzlDaEIsaUJBQWlCZ0I7SUFDbkI7SUFFQSxNQUFNQywyQkFBMkIsSUFBTTtRQUNyQyxJQUFJbEIsZUFBZTtZQUNqQkosU0FBU0osK0VBQWNBLENBQUNRO1lBQ3hCQyxpQkFBaUIsSUFBSTtRQUN2QixDQUFDO0lBQ0g7SUFFQSxNQUFNa0Isc0JBQXNCLENBQUNDLFlBQXNCO1FBQ2pEeEIsU0FBU0gsK0VBQWNBLENBQUMyQjtJQUMxQjtJQUVBLE1BQU1DLG1CQUFtQnhCLFNBQVN5QixNQUFNLENBQUNMLENBQUFBLFVBQ3ZDQSxRQUFRSCxNQUFNLENBQUNTLFdBQVcsR0FBR0MsUUFBUSxDQUFDbEIsWUFBWWlCLFdBQVc7SUFHL0QsSUFBSXpCLFNBQVM7UUFDWCxxQkFBTyw4REFBQzJCO1lBQUlDLFdBQVU7c0JBQXFCOzs7Ozs7SUFDN0MsQ0FBQztJQUVELElBQUkzQixPQUFPO1FBQ1QscUJBQU8sOERBQUMwQjs7Z0JBQUk7Z0JBQVExQjs7Ozs7OztJQUN0QixDQUFDO0lBRUQscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2YsNEVBQUNDO29CQUFNRCxXQUFVO29CQUNiRSxNQUFLO29CQUNMQyxPQUFPdkI7b0JBQ1B3QixVQUFVQyxDQUFBQSxJQUFLeEIsZUFBZXdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFDNUNJLGFBQVk7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQ1I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBTzNCO3dCQUNQNEIsVUFBVUMsQ0FBQUEsSUFBSzVCLGFBQWE0QixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzFDSSxhQUFZOzs7Ozs7a0NBRWQsOERBQUNOO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPekI7d0JBQ1AwQixVQUFVQyxDQUFBQSxJQUFLMUIsVUFBVTBCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDdkNJLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0M7d0JBQU9SLFdBQVU7d0JBQWtCUyxTQUFTM0I7a0NBQXFCOzs7Ozs7Ozs7Ozs7MEJBSXBFLDhEQUFDaUI7Z0JBQUlDLFdBQVU7MEJBQ1pMLGlCQUFpQmUsR0FBRyxDQUFDbkIsQ0FBQUEsd0JBQ3BCLDhEQUFDb0I7d0JBQUdYLFdBQVU7OzBDQUNaLDhEQUFDWTswQ0FBRTs7Ozs7OzRCQUNGdEMsaUJBQWlCQSxjQUFjVSxFQUFFLEtBQUtPLFFBQVFQLEVBQUUsaUJBQy9DLDhEQUFDZTs7a0RBQ0MsOERBQUNFO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPN0IsY0FBY2MsTUFBTTt3Q0FDM0JnQixVQUFVQyxDQUFBQSxJQUNSOUIsaUJBQWlCO2dEQUFFLEdBQUdELGFBQWE7Z0RBQUVjLFFBQVFpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7NENBQUM7Ozs7OztrREFHaEUsOERBQUNGO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPN0IsY0FBY2UsR0FBRzt3Q0FDeEJlLFVBQVVDLENBQUFBLElBQUs5QixpQkFBaUI7Z0RBQUUsR0FBR0QsYUFBYTtnREFBRWUsS0FBS2dCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0Q0FBQzs7Ozs7O2tEQUUxRSw4REFBQ0s7d0NBQ0NSLFdBQVU7d0NBQ1ZTLFNBQVNqQjtrREFDVjs7Ozs7Ozs7Ozs7cURBS0gsOERBQUNPOztrREFDQyw4REFBQ2E7a0RBQUdyQixRQUFRSCxNQUFNOzs7Ozs7a0RBQ2xCLDhEQUFDd0I7a0RBQUdyQixRQUFRRixHQUFHOzs7Ozs7a0RBQ2YsOERBQUNtQjt3Q0FDQ1IsV0FBVTt3Q0FDVlMsU0FBUyxJQUFNbkIsa0JBQWtCQztrREFDbEM7Ozs7OztrREFHRCw4REFBQ2lCO3dDQUNDUixXQUFVO3dDQUNWUyxTQUFTLElBQU1oQixvQkFBb0JGLFFBQVFQLEVBQUU7a0RBQzlDOzs7Ozs7Ozs7OztvQ0FJSjs7dUJBeEMyQ08sUUFBUVAsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQThDbEUsQ0FBQztHQWhJdUJmOztRQUNMVCxvREFBV0E7UUFDWEMsb0RBQVdBO1FBQ1pBLG9EQUFXQTtRQUNiQSxvREFBV0E7OztLQUpIUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvTWFuQW51bmNpb3MudHN4PzAxMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIGdldEFudW5jaW9zLFxyXG4gIHNlbGVjdExvYWRpbmcsXHJcbiAgc2VsZWN0RXJyb3IsXHJcbiAgY3JlYXRlQW51bmNpb3MsXHJcbiAgdXBkYXRlQW51bmNpb3MsXHJcbiAgZGVsZXRlQW51bmNpb3MsXHJcbiAgc2VsZWN0QW51bmNpbyxcclxufSBmcm9tICcuLi9yZWR1eC9zbGljZS9BZHZlcnRpc2VtZW50U2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIEFudW5jaW8ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0dGxlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFudW5jaW9zKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBhbnVuY2lvcyA9IHVzZVNlbGVjdG9yKHNlbGVjdEFudW5jaW8pO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcclxuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcclxuXHJcbiAgY29uc3QgW2VkaXRlZEFudW5jaW8sIHNldEVkaXRlZEFudW5jaW9dID0gdXNlU3RhdGU8QW51bmNpbyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtuZXdUaXR0bGUsIHNldE5ld1RpdHRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25ld1VybCwgc2V0TmV3VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFudW5jaW9zKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVBbnVuY2lvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QW51bmNpbzogQW51bmNpbyA9IHtcclxuICAgICAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApLFxyXG4gICAgICB0aXR0bGU6IG5ld1RpdHRsZSxcclxuICAgICAgdXJsOiBuZXdVcmwsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goY3JlYXRlQW51bmNpb3MobmV3QW51bmNpbykpO1xyXG4gICAgc2V0TmV3VGl0dGxlKCcnKTtcclxuICAgIHNldE5ld1VybCgnJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdEFudW5jaW8gPSAoYW51bmNpbzogQW51bmNpbykgPT4ge1xyXG4gICAgc2V0RWRpdGVkQW51bmNpbyhhbnVuY2lvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQW51bmNpb0NoYW5nZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoZWRpdGVkQW51bmNpbykge1xyXG4gICAgICBkaXNwYXRjaCh1cGRhdGVBbnVuY2lvcyhlZGl0ZWRBbnVuY2lvKSk7XHJcbiAgICAgIHNldEVkaXRlZEFudW5jaW8obnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQW51bmNpbyA9IChhbnVuY2lvSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgZGlzcGF0Y2goZGVsZXRlQW51bmNpb3MoYW51bmNpb0lkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRBbnVuY2lvcyA9IGFudW5jaW9zLmZpbHRlcihhbnVuY2lvID0+XHJcbiAgICBhbnVuY2lvLnRpdHRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgaDIgcC0zJz5DYXJnYW5kby4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBwLTMnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0zJz5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT0nICdcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nQnVzY2FyIGFudW5jaW8nXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci00Jz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICB2YWx1ZT17bmV3VGl0dGxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmV3VGl0dGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdUw610dWxvIGRlbCBhbnVuY2lvJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgdmFsdWU9e25ld1VybH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5ld1VybChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nVVJMIGRlbCBhbnVuY2lvJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17aGFuZGxlQ3JlYXRlQW51bmNpb30+XHJcbiAgICAgICAgICBOdWV2byBBbnVuY2lvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1ncm91cCBwLTMnPlxyXG4gICAgICAgIHtmaWx0ZXJlZEFudW5jaW9zLm1hcChhbnVuY2lvID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBiZy1saWdodCcga2V5PXthbnVuY2lvLmlkfT5cclxuICAgICAgICAgICAgPHA+RGVzY3JpcGNpw7NuPC9wPlxyXG4gICAgICAgICAgICB7ZWRpdGVkQW51bmNpbyAmJiBlZGl0ZWRBbnVuY2lvLmlkID09PSBhbnVuY2lvLmlkID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRlZEFudW5jaW8udGl0dGxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldEVkaXRlZEFudW5jaW8oeyAuLi5lZGl0ZWRBbnVuY2lvLCB0aXR0bGU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRlZEFudW5jaW8udXJsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFZGl0ZWRBbnVuY2lvKHsgLi4uZWRpdGVkQW51bmNpbywgdXJsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1zdWNjZXNzIHAtMSBtLTMnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVBbnVuY2lvQ2hhbmdlc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPnthbnVuY2lvLnRpdHRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57YW51bmNpby51cmx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBwLTEgbS0zJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0QW51bmNpbyhhbnVuY2lvKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdGFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlciBwLTEnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUFudW5jaW8oYW51bmNpby5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZ2V0QW51bmNpb3MiLCJzZWxlY3RMb2FkaW5nIiwic2VsZWN0RXJyb3IiLCJjcmVhdGVBbnVuY2lvcyIsInVwZGF0ZUFudW5jaW9zIiwiZGVsZXRlQW51bmNpb3MiLCJzZWxlY3RBbnVuY2lvIiwiQW51bmNpb3MiLCJkaXNwYXRjaCIsImFudW5jaW9zIiwibG9hZGluZyIsImVycm9yIiwiZWRpdGVkQW51bmNpbyIsInNldEVkaXRlZEFudW5jaW8iLCJuZXdUaXR0bGUiLCJzZXROZXdUaXR0bGUiLCJuZXdVcmwiLCJzZXROZXdVcmwiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiaGFuZGxlQ3JlYXRlQW51bmNpbyIsIm5ld0FudW5jaW8iLCJpZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRpdHRsZSIsInVybCIsImhhbmRsZUVkaXRBbnVuY2lvIiwiYW51bmNpbyIsImhhbmRsZVNhdmVBbnVuY2lvQ2hhbmdlcyIsImhhbmRsZURlbGV0ZUFudW5jaW8iLCJhbnVuY2lvSWQiLCJmaWx0ZXJlZEFudW5jaW9zIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/ManAnuncios.tsx\n"));

/***/ })

});