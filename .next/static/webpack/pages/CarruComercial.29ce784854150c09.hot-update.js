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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarruselAnuncios; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/anunciosSlice */ \"./src/redux/slice/anunciosSlice.ts\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CarruselAnuncios() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const anuncios = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectAnuncio);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.getAnuncios)());\n    }, [\n        dispatch\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center h2 p-3\",\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 33,\n            columnNumber: 14\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 37,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"carouselExampleSlidesOnly\",\n        class: \"carousel slide\",\n        \"data-ride\": \"carousel\",\n        children: [\n            \"    \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n                children: anuncios.map((anuncio)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            url: anuncio.url,\n                            controls: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, anuncio.id, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                lineNumber: 42,\n                columnNumber: 85\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n        lineNumber: 42,\n        columnNumber: 1\n    }, this);\n}\n_s(CarruselAnuncios, \"61fmVquE0DrelFpkvBVqeDHUyyQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CarruselAnuncios;\nvar _c;\n$RefreshReg$(_c, \"CarruselAnuncios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ2FycnVDb21lcmNpYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2E7QUFNakI7QUFDSztBQUNKO0FBVXhCLFNBQVNTLG1CQUFtQjs7SUFDekMsTUFBTUMsV0FBV1Qsd0RBQVdBO0lBQzVCLE1BQU1VLFdBQVdULHdEQUFXQSxDQUFDSSxxRUFBYUE7SUFDMUMsTUFBTU0sVUFBVVYsd0RBQVdBLENBQUNFLHFFQUFhQTtJQUN6QyxNQUFNUyxRQUFRWCx3REFBV0EsQ0FBQ0csbUVBQVdBO0lBRXJDTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVLFNBQVNQLHVFQUFXQTtJQUN0QixHQUFHO1FBQUNPO0tBQVM7SUFHYixJQUFJRSxTQUFTO1FBQ1gscUJBQU8sOERBQUNFO1lBQUlDLFdBQVU7c0JBQXFCOzs7Ozs7SUFDN0MsQ0FBQztJQUVELElBQUlGLE9BQU87UUFDVCxxQkFBTyw4REFBQ0M7O2dCQUFJO2dCQUFRRDs7Ozs7OztJQUN0QixDQUFDO0lBR0gscUJBQ0YsOERBQUNDO1FBQUlFLElBQUc7UUFBNEJDLE9BQU07UUFBaUJDLGFBQVU7O1lBQVc7MEJBQUksOERBQUNYLHFEQUFRQTswQkFDdEZJLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ2IsMERBQWE7a0NBQ1osNEVBQUNDLG9EQUFXQTs0QkFBQ2MsS0FBS0YsUUFBUUUsR0FBRzs0QkFBRUMsVUFBVSxJQUFJOzs7Ozs7dUJBRDNCSCxRQUFRSixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWhDLENBQUM7R0EvQm1CUDs7UUFDTFIsb0RBQVdBO1FBQ1hDLG9EQUFXQTtRQUNaQSxvREFBV0E7UUFDYkEsb0RBQVdBOzs7S0FKSE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0NhcnJ1Q29tZXJjaWFsLnRzeD85NDc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuICBpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbiAgaW1wb3J0IHtcclxuICAgIGdldEFudW5jaW9zLFxyXG4gICAgc2VsZWN0TG9hZGluZyxcclxuICAgIHNlbGVjdEVycm9yLFxyXG4gICAgc2VsZWN0QW51bmNpbyxcclxuICB9IGZyb20gJy4uL3JlZHV4L3NsaWNlL2FudW5jaW9zU2xpY2UnO1xyXG4gIGltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuICBpbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcclxuXHJcbiAgaW50ZXJmYWNlIEFudW5jaW8ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXBjaW9uOiBzdHJpbmc7XHJcbiAgICB0aXR1bG86IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJydXNlbEFudW5jaW9zKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgYW51bmNpb3MgPSB1c2VTZWxlY3RvcihzZWxlY3RBbnVuY2lvKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RMb2FkaW5nKTtcclxuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0RXJyb3IpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goZ2V0QW51bmNpb3MoKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2hdKTtcclxuICBcclxuICBcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgaDIgcC0zJz5DYXJnYW5kby4uLjwvZGl2PjtcclxuICAgIH1cclxuICBcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yfTwvZGl2PjtcclxuICAgIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbjxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVTbGlkZXNPbmx5XCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+ICAgIDxDYXJvdXNlbD5cclxuICAgICAge2FudW5jaW9zLm1hcCgoYW51bmNpbykgPT4gKFxyXG4gICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17YW51bmNpby5pZH0+XHJcbiAgICAgICAgICA8UmVhY3RQbGF5ZXIgdXJsPXthbnVuY2lvLnVybH0gY29udHJvbHM9e3RydWV9IC8+XHJcbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICApKX1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgXHJcbiAgPC9kaXY+XHJcbiAgIClcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldEFudW5jaW9zIiwic2VsZWN0TG9hZGluZyIsInNlbGVjdEVycm9yIiwic2VsZWN0QW51bmNpbyIsIkNhcm91c2VsIiwiUmVhY3RQbGF5ZXIiLCJDYXJydXNlbEFudW5jaW9zIiwiZGlzcGF0Y2giLCJhbnVuY2lvcyIsImxvYWRpbmciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiY2xhc3MiLCJkYXRhLXJpZGUiLCJtYXAiLCJhbnVuY2lvIiwiSXRlbSIsInVybCIsImNvbnRyb2xzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/CarruComercial.tsx\n"));

/***/ })

});