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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarruselAnuncios; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice/anunciosSlice */ \"./src/redux/slice/anunciosSlice.ts\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CarruselAnuncios() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const anuncios = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectAnuncio);\n    const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectLoading);\n    const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.selectError);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slice_anunciosSlice__WEBPACK_IMPORTED_MODULE_3__.getAnuncios)());\n    }, [\n        dispatch\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center h2 p-3\",\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 33,\n            columnNumber: 14\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n            lineNumber: 37,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"carrusel-anuncios\",\n        children: anuncios.map((anuncio)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: anuncio.titulo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        url: anuncio.url,\n                        controls: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, anuncio.id, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\pages\\\\CarruComercial.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(CarruselAnuncios, \"61fmVquE0DrelFpkvBVqeDHUyyQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = CarruselAnuncios;\nvar _c;\n$RefreshReg$(_c, \"CarruselAnuncios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ2FycnVDb21lcmNpYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYTtBQU1qQjtBQUVDO0FBVXhCLFNBQVNRLG1CQUFtQjs7SUFDekMsTUFBTUMsV0FBV1Isd0RBQVdBO0lBQzVCLE1BQU1TLFdBQVdSLHdEQUFXQSxDQUFDSSxxRUFBYUE7SUFDMUMsTUFBTUssVUFBVVQsd0RBQVdBLENBQUNFLHFFQUFhQTtJQUN6QyxNQUFNUSxRQUFRVix3REFBV0EsQ0FBQ0csbUVBQVdBO0lBRXJDTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RTLFNBQVNOLHVFQUFXQTtJQUN0QixHQUFHO1FBQUNNO0tBQVM7SUFHYixJQUFJRSxTQUFTO1FBQ1gscUJBQU8sOERBQUNFO1lBQUlDLFdBQVU7c0JBQXFCOzs7Ozs7SUFDN0MsQ0FBQztJQUVELElBQUlGLE9BQU87UUFDVCxxQkFBTyw4REFBQ0M7O2dCQUFJO2dCQUFRRDs7Ozs7OztJQUN0QixDQUFDO0lBR0gscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2RKLFNBQVNLLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0g7O2tDQUNDLDhEQUFDSTtrQ0FBSUQsUUFBUUUsTUFBTTs7Ozs7O2tDQUNuQiw4REFBQ1gsb0RBQVdBO3dCQUFDWSxLQUFLSCxRQUFRRyxHQUFHO3dCQUFFQyxVQUFVLElBQUk7Ozs7Ozs7ZUFGckNKLFFBQVFLLEVBQUU7Ozs7Ozs7Ozs7QUFRcEIsQ0FBQztHQS9CbUJiOztRQUNMUCxvREFBV0E7UUFDWEMsb0RBQVdBO1FBQ1pBLG9EQUFXQTtRQUNiQSxvREFBV0E7OztLQUpITSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQ2FycnVDb21lcmNpYWwudHN4Pzk0NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4gIGltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuICBpbXBvcnQge1xyXG4gICAgZ2V0QW51bmNpb3MsXHJcbiAgICBzZWxlY3RMb2FkaW5nLFxyXG4gICAgc2VsZWN0RXJyb3IsXHJcbiAgICBzZWxlY3RBbnVuY2lvLFxyXG4gIH0gZnJvbSAnLi4vcmVkdXgvc2xpY2UvYW51bmNpb3NTbGljZSc7XHJcbiAgXHJcbiAgaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XHJcblxyXG4gIGludGVyZmFjZSBBbnVuY2lvIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBkZXNjcmlwY2lvbjogc3RyaW5nO1xyXG4gICAgdGl0dWxvOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FycnVzZWxBbnVuY2lvcygpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGFudW5jaW9zID0gdXNlU2VsZWN0b3Ioc2VsZWN0QW51bmNpbyk7XHJcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0TG9hZGluZyk7XHJcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdEVycm9yKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGdldEFudW5jaW9zKCkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgXHJcbiAgXHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGgyIHAtMyc+Q2FyZ2FuZG8uLi48L2Rpdj47XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XHJcbiAgICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJydXNlbC1hbnVuY2lvc1wiPlxyXG4gICAge2FudW5jaW9zLm1hcCgoYW51bmNpbykgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17YW51bmNpby5pZH0+XHJcbiAgICAgICAgPGgzPnthbnVuY2lvLnRpdHVsb308L2gzPlxyXG4gICAgICAgIDxSZWFjdFBsYXllciB1cmw9e2FudW5jaW8udXJsfSBjb250cm9scz17dHJ1ZX0gLz5cclxuICAgICAgICB7LyogQXF1w60gcHVlZGVzIGFncmVnYXIgbcOhcyBjb250ZW5pZG8gZGVsIGFudW5jaW8gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSl9XHJcbiAgPC9kaXY+XHJcbiAgIClcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldEFudW5jaW9zIiwic2VsZWN0TG9hZGluZyIsInNlbGVjdEVycm9yIiwic2VsZWN0QW51bmNpbyIsIlJlYWN0UGxheWVyIiwiQ2FycnVzZWxBbnVuY2lvcyIsImRpc3BhdGNoIiwiYW51bmNpb3MiLCJsb2FkaW5nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhbnVuY2lvIiwiaDMiLCJ0aXR1bG8iLCJ1cmwiLCJjb250cm9scyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/CarruComercial.tsx\n"));

/***/ })

});