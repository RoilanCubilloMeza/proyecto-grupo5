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

/***/ "./src/components/CarruTiquetes.tsx":
/*!******************************************!*\
  !*** ./src/components/CarruTiquetes.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst schedules = [\n    {\n        id: 1,\n        time: \"10:00 AM\",\n        place: \"San isidro Dominical\",\n        instructor: \"John Doe\",\n        image: \"https://picsum.photos/200/300\"\n    },\n    {\n        id: 2,\n        time: \"11:00 AM\",\n        place: \"Quepos San Isidro Parrita\",\n        instructor: \"Jane Doe\",\n        image: \"https://picsum.photos/200/300\"\n    }\n];\nconst ScheduleCarousel = ()=>{\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSelect = (selectedIndex)=>{\n        setIndex(selectedIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        activeIndex: index,\n        onSelect: handleSelect,\n        children: schedules.map((schedule)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"d-block w-100 bg-black\",\n                        src: schedule.image,\n                        alt: \"\".concat(schedule.place, \" with \").concat(schedule.instructor)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: schedule.place\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: schedule.instructor\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: schedule.time\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, schedule.id, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ScheduleCarousel, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n_c = ScheduleCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScheduleCarousel);\nvar _c;\n$RefreshReg$(_c, \"ScheduleCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJydVRpcXVldGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNVO0FBRTNDLE1BQU1FLFlBQVk7SUFDZDtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLE9BQU87SUFDVDtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsT0FBTztJQUNUO0NBRUQ7QUFFRCxNQUFNQyxtQkFBbUIsSUFBTTs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1XLGVBQWUsQ0FBQ0MsZ0JBQTBCO1FBQzlDRixTQUFTRTtJQUNYO0lBRUEscUJBQ0UsOERBQUNYLHFEQUFRQTtRQUFDWSxhQUFhSjtRQUFPSyxVQUFVSDtrQkFDckNULFVBQVVhLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZCw4REFBQ2YsMERBQWE7O2tDQUNaLDhEQUFDaUI7d0JBQ0NDLFdBQVU7d0JBQ1ZDLEtBQUtKLFNBQVNULEtBQUs7d0JBQ25CYyxLQUFLLEdBQTBCTCxPQUF2QkEsU0FBU1gsS0FBSyxFQUFDLFVBQTRCLE9BQXBCVyxTQUFTVixVQUFVOzs7Ozs7a0NBRXBELDhEQUFDTCw2REFBZ0I7OzBDQUNmLDhEQUFDc0I7MENBQUlQLFNBQVNYLEtBQUs7Ozs7OzswQ0FDbkIsOERBQUNtQjswQ0FBR1IsU0FBU1YsVUFBVTs7Ozs7OzBDQUN2Qiw4REFBQ2tCOzBDQUFHUixTQUFTWixJQUFJOzs7Ozs7Ozs7Ozs7O2VBVERZLFNBQVNiLEVBQUU7Ozs7Ozs7Ozs7QUFldkM7R0F4Qk1LO0tBQUFBO0FBeUJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FycnVUaXF1ZXRlcy50c3g/YjA1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3Qgc2NoZWR1bGVzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgdGltZTogJzEwOjAwIEFNJyxcclxuICAgICAgcGxhY2U6ICdTYW4gaXNpZHJvIERvbWluaWNhbCcsXHJcbiAgICAgIGluc3RydWN0b3I6ICdKb2huIERvZScsXHJcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGltZTogJzExOjAwIEFNJyxcclxuICAgICAgcGxhY2U6ICdRdWVwb3MgU2FuIElzaWRybyBQYXJyaXRhJyxcclxuICAgICAgaW5zdHJ1Y3RvcjogJ0phbmUgRG9lJyxcclxuICAgICAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCdcclxuICAgIH0sXHJcbiAgICAvLyBBZ3JlZ2EgbcOhcyBob3JhcmlvcyBhcXXDrVxyXG4gIF07XHJcbiAgXHJcbiAgY29uc3QgU2NoZWR1bGVDYXJvdXNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoc2VsZWN0ZWRJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHNldEluZGV4KHNlbGVjdGVkSW5kZXgpO1xyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17aW5kZXh9IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxyXG4gICAgICAgIHtzY2hlZHVsZXMubWFwKChzY2hlZHVsZSkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtzY2hlZHVsZS5pZH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIGJnLWJsYWNrXCJcclxuICAgICAgICAgICAgICBzcmM9e3NjaGVkdWxlLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17YCR7c2NoZWR1bGUucGxhY2V9IHdpdGggJHtzY2hlZHVsZS5pbnN0cnVjdG9yfWB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxoMz57c2NoZWR1bGUucGxhY2V9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57c2NoZWR1bGUuaW5zdHJ1Y3Rvcn08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3NjaGVkdWxlLnRpbWV9PC9wPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgZXhwb3J0IGRlZmF1bHQgU2NoZWR1bGVDYXJvdXNlbDtcclxuICAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJvdXNlbCIsInNjaGVkdWxlcyIsImlkIiwidGltZSIsInBsYWNlIiwiaW5zdHJ1Y3RvciIsImltYWdlIiwiU2NoZWR1bGVDYXJvdXNlbCIsImluZGV4Iiwic2V0SW5kZXgiLCJoYW5kbGVTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiYWN0aXZlSW5kZXgiLCJvblNlbGVjdCIsIm1hcCIsInNjaGVkdWxlIiwiSXRlbSIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIkNhcHRpb24iLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CarruTiquetes.tsx\n"));

/***/ })

});