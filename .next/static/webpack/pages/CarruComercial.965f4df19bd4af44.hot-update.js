"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/CarruComercial",{

/***/ "./src/pages/CarruComercial.tsx":
/*!**************************************!*\
  !*** ./src/pages/CarruComercial.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarruselAnuncios; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/anunciosSlice */ \"./src/redux/slice/anunciosSlice.ts\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CarruselAnuncios() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const anuncios = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectAnuncio);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.getAnuncios)());\n    }, [\n        dispatch\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center h2 p-3\",\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"carouselExampleSlidesOnly\",\n        className: \"carousel slide d-flex\",\n        \"data-ride\": \"carousel\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"carousel-inner\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"carousel-item active\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n                    className: \"d-block w-100\",\n                    children: anuncios.map((anuncio)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                url: anuncio.url,\n                                controls: true,\n                                playing: true,\n                                width: 1920,\n                                height: 720\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this)\n                        }, anuncio.id, false, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(CarruselAnuncios, \"61fmVquE0DrelFpkvBVqeDHUyyQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CarruselAnuncios;\nvar _c;\n$RefreshReg$(_c, \"CarruselAnuncios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ2FycnVDb21lcmNpYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ1c7QUFNakI7QUFDSztBQUNKO0FBVXhCLFNBQVNTLG1CQUFtQjs7SUFDekMsTUFBTUMsV0FBV1Qsd0RBQVdBO0lBQzVCLE1BQU1VLFdBQVdULHdEQUFXQSxDQUFDSSxxRUFBYUE7SUFDMUMsTUFBTU0sVUFBVVYsd0RBQVdBLENBQUNFLHFFQUFhQTtJQUN6QyxNQUFNUyxRQUFRWCx3REFBV0EsQ0FBQ0csbUVBQVdBO0lBRXJDTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVLFNBQVNQLHVFQUFXQTtJQUN0QixHQUFHO1FBQUNPO0tBQVM7SUFHYixJQUFJRSxTQUFTO1FBQ1gscUJBQU8sOERBQUNFO1lBQUlDLFdBQVU7c0JBQXFCOzs7Ozs7SUFDN0MsQ0FBQztJQUVELElBQUlGLE9BQU87UUFDVCxxQkFBTyw4REFBQ0M7O2dCQUFJO2dCQUFRRDs7Ozs7OztJQUN0QixDQUFDO0lBR0QscUJBQ0UsOERBQUNDO1FBQUlFLElBQUc7UUFBNEJELFdBQVU7UUFBd0JFLGFBQVU7a0JBQzlFLDRFQUFDSDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1IscURBQVFBO29CQUFDUSxXQUFVOzhCQUNqQkosU0FBU08sR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDWiwwREFBYTtzQ0FDWiw0RUFBQ0Msb0RBQVdBO2dDQUFDYSxLQUFLRixRQUFRRSxHQUFHO2dDQUFFQyxVQUFVLElBQUk7Z0NBQUVDLFNBQVMsSUFBSTtnQ0FBRUMsT0FBTztnQ0FBTUMsUUFBUTs7Ozs7OzJCQURqRU4sUUFBUUgsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU1QyxDQUFDO0dBcEN1QlA7O1FBQ0xSLG9EQUFXQTtRQUNYQyxvREFBV0E7UUFDWkEsb0RBQVdBO1FBQ2JBLG9EQUFXQTs7O0tBSkhPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9DYXJydUNvbWVyY2lhbC50c3g/OTQ3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBnZXRBbnVuY2lvcyxcclxuICBzZWxlY3RMb2FkaW5nLFxyXG4gIHNlbGVjdEVycm9yLFxyXG4gIHNlbGVjdEFudW5jaW8sXHJcbn0gZnJvbSAnLi4vcmVkdXgvc2xpY2UvYW51bmNpb3NTbGljZSc7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XHJcblxyXG5pbnRlcmZhY2UgQW51bmNpbyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBkZXNjcmlwY2lvbjogc3RyaW5nO1xyXG4gIHRpdHVsbzogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FycnVzZWxBbnVuY2lvcygpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgYW51bmNpb3MgPSB1c2VTZWxlY3RvcihzZWxlY3RBbnVuY2lvKTtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XHJcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RFcnJvcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRBbnVuY2lvcygpKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGgyIHAtMyc+Q2FyZ2FuZG8uLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlU2xpZGVzT25seVwiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlIGQtZmxleFwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPSdkLWJsb2NrIHctMTAwJz5cclxuICAgICAgICAgICAge2FudW5jaW9zLm1hcCgoYW51bmNpbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17YW51bmNpby5pZH0+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXIgdXJsPXthbnVuY2lvLnVybH0gY29udHJvbHM9e3RydWV9IHBsYXlpbmc9e3RydWV9IHdpZHRoPXsxOTIwfSBoZWlnaHQ9ezcyMH0vPlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldEFudW5jaW9zIiwic2VsZWN0TG9hZGluZyIsInNlbGVjdEVycm9yIiwic2VsZWN0QW51bmNpbyIsIkNhcm91c2VsIiwiUmVhY3RQbGF5ZXIiLCJDYXJydXNlbEFudW5jaW9zIiwiZGlzcGF0Y2giLCJhbnVuY2lvcyIsImxvYWRpbmciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGF0YS1yaWRlIiwibWFwIiwiYW51bmNpbyIsIkl0ZW0iLCJ1cmwiLCJjb250cm9scyIsInBsYXlpbmciLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/CarruComercial.tsx\n"));

/***/ })

});