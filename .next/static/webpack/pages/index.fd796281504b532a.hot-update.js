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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\nconst schedules = [\n    {\n        id: 1,\n        time: \"10:00 AM\",\n        place: \"San isidro-Dominical\",\n        conductor: \"Isac Newtom\",\n        image: \"https://semanariouniversidad.com/wp-content/uploads/2021/09/20210901_150423_HDR-scaled.jpg\"\n    },\n    {\n        id: 2,\n        time: \"11:00 AM\",\n        place: \"Quepos-San Isidro-Parrita\",\n        conductor: \"Jane Doe\",\n        image: \"https://motor.elpais.com/wp-content/uploads/2016/10/bus.jpg\"\n    },\n    {\n        id: 3,\n        time: \"1:00 PM\",\n        place: \"Quepos-Parrita\",\n        conductor: \"Roilan Cubillo\",\n        image: \"https://thumbs.dreamstime.com/z/coche-bus-waits-del-azul-real-para-los-pasajeros-54407302.jpg\"\n    },\n    {\n        id: 4,\n        time: \"1:00 PM\",\n        place: \"Quepos-Parrita\",\n        conductor: \"Roilan \",\n        image: \"https://www.latercera.com/resizer/lFqCNwTBF35rGfJiskhL3KxrdZE=/1200x630/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/2PLW6MROHNE3ZI5LWFVBDALMKY.jpg\"\n    }\n];\nconst ScheduleCarousel = ()=>{\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSelect = (selectedIndex)=>{\n        setIndex(selectedIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        activeIndex: index,\n        onSelect: handleSelect,\n        children: schedules.map((schedule)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"d-block w-100 p-10  \",\n                        src: schedule.image,\n                        alt: \"\".concat(schedule.place, \" with \").concat(schedule.conductor)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n                        className: \"p-3 text-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Ruta \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: schedule.place\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Conductor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: schedule.conductor\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \" Hora Salida\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: schedule.time\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, schedule.id, true, {\n                fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n                lineNumber: 46,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PDV 31\\\\Desktop\\\\proyecto-grupo5\\\\src\\\\components\\\\CarruTiquetes.tsx\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, undefined);\n};\n_s(ScheduleCarousel, \"x2oTrUAHknTo02Ld7gcDOqaxQ8E=\");\n_c = ScheduleCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScheduleCarousel);\nvar _c;\n$RefreshReg$(_c, \"ScheduleCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJydVRpcXVldGVzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0Q0FBNEM7O0FBQ1g7QUFDVTtBQUUzQyxNQUFNRSxZQUFZO0lBQ2Q7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLE9BQU87SUFDVDtJQUNBO1FBQ0lKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsT0FBTztJQUNUO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7Q0FFSDtBQUVELE1BQU1DLG1CQUFtQixJQUFNOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVcsZUFBZSxDQUFDQyxnQkFBMEI7UUFDOUNGLFNBQVNFO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ1gscURBQVFBO1FBQUNZLGFBQWFKO1FBQU9LLFVBQVVIO2tCQUNyQ1QsVUFBVWEsR0FBRyxDQUFDLENBQUNDLHlCQUNkLDhEQUFDZiwwREFBYTs7a0NBQ1osOERBQUNpQjt3QkFDQ0MsV0FBVTt3QkFDVkMsS0FBS0osU0FBU1QsS0FBSzt3QkFDbkJjLEtBQUssR0FBMEJMLE9BQXZCQSxTQUFTWCxLQUFLLEVBQUMsVUFBMkIsT0FBbkJXLFNBQVNWLFNBQVM7Ozs7OztrQ0FFbkQsOERBQUNMLDZEQUFnQjt3QkFBQ2tCLFdBQVU7OzBDQUN4Qiw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDTiw4REFBQ0E7MENBQUlQLFNBQVNYLEtBQUs7Ozs7OzswQ0FDbkIsOERBQUNtQjswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBR1QsU0FBU1YsU0FBUzs7Ozs7OzBDQUN0Qiw4REFBQ2tCOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFHVCxTQUFTWixJQUFJOzs7Ozs7Ozs7Ozs7O2VBWkRZLFNBQVNiLEVBQUU7Ozs7Ozs7Ozs7QUFrQnZDO0dBM0JNSztLQUFBQTtBQTRCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcnJ1VGlxdWV0ZXMudHN4P2IwNTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3Qgc2NoZWR1bGVzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgdGltZTogJzEwOjAwIEFNJyxcclxuICAgICAgcGxhY2U6ICdTYW4gaXNpZHJvLURvbWluaWNhbCcsXHJcbiAgICAgIGNvbmR1Y3RvcjogJ0lzYWMgTmV3dG9tJyxcclxuICAgICAgaW1hZ2U6ICdodHRwczovL3NlbWFuYXJpb3VuaXZlcnNpZGFkLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wOS8yMDIxMDkwMV8xNTA0MjNfSERSLXNjYWxlZC5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGltZTogJzExOjAwIEFNJyxcclxuICAgICAgcGxhY2U6ICdRdWVwb3MtU2FuIElzaWRyby1QYXJyaXRhJyxcclxuICAgICAgY29uZHVjdG9yOiAnSmFuZSBEb2UnLFxyXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vbW90b3IuZWxwYWlzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9idXMuanBnJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB0aW1lOiAnMTowMCBQTScsXHJcbiAgICAgICAgcGxhY2U6ICdRdWVwb3MtUGFycml0YScsXHJcbiAgICAgICAgY29uZHVjdG9yOiAnUm9pbGFuIEN1YmlsbG8nICxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdGh1bWJzLmRyZWFtc3RpbWUuY29tL3ovY29jaGUtYnVzLXdhaXRzLWRlbC1henVsLXJlYWwtcGFyYS1sb3MtcGFzYWplcm9zLTU0NDA3MzAyLmpwZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHRpbWU6ICcxOjAwIFBNJyxcclxuICAgICAgICBwbGFjZTogJ1F1ZXBvcy1QYXJyaXRhJyxcclxuICAgICAgICBjb25kdWN0b3I6ICdSb2lsYW4gJyAsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3d3dy5sYXRlcmNlcmEuY29tL3Jlc2l6ZXIvbEZxQ053VEJGMzVyR2ZKaXNraEwzS3hyZFpFPS8xMjAweDYzMC9zbWFydC9jbG91ZGZyb250LXVzLWVhc3QtMS5pbWFnZXMuYXJjcHVibGlzaGluZy5jb20vY29wZXNhLzJQTFc2TVJPSE5FM1pJNUxXRlZCREFMTUtZLmpwZydcclxuICAgICAgfSxcclxuICAgIC8vIEFncmVnYSBtw6FzIGhvcmFyaW9zIGFxdcOtXHJcbiAgXTtcclxuICBcclxuICBjb25zdCBTY2hlZHVsZUNhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXtpbmRleH0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0+XHJcbiAgICAgICAge3NjaGVkdWxlcy5tYXAoKHNjaGVkdWxlKSA9PiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e3NjaGVkdWxlLmlkfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgcC0xMCAgXCJcclxuICAgICAgICAgICAgICBzcmM9e3NjaGVkdWxlLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17YCR7c2NoZWR1bGUucGxhY2V9IHdpdGggJHtzY2hlZHVsZS5jb25kdWN0b3J9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcm91c2VsLkNhcHRpb24gY2xhc3NOYW1lPSdwLTMgdGV4dC1sZyc+XHJcbiAgICAgICAgICAgICAgICA8aDM+UnV0YSA8L2gzPlxyXG4gICAgICAgICAgICAgIDxoMz57c2NoZWR1bGUucGxhY2V9PC9oMz5cclxuICAgICAgICAgICAgICA8aDQ+Q29uZHVjdG9yPC9oND5cclxuICAgICAgICAgICAgICA8cD57c2NoZWR1bGUuY29uZHVjdG9yfTwvcD5cclxuICAgICAgICAgICAgICA8aDQ+IEhvcmEgU2FsaWRhPC9oND5cclxuICAgICAgICAgICAgICA8cD57c2NoZWR1bGUudGltZX08L3A+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgICk7XHJcbiAgfTtcclxuICBleHBvcnQgZGVmYXVsdCBTY2hlZHVsZUNhcm91c2VsO1xyXG4gICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcm91c2VsIiwic2NoZWR1bGVzIiwiaWQiLCJ0aW1lIiwicGxhY2UiLCJjb25kdWN0b3IiLCJpbWFnZSIsIlNjaGVkdWxlQ2Fyb3VzZWwiLCJpbmRleCIsInNldEluZGV4IiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImFjdGl2ZUluZGV4Iiwib25TZWxlY3QiLCJtYXAiLCJzY2hlZHVsZSIsIkl0ZW0iLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJDYXB0aW9uIiwiaDMiLCJoNCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CarruTiquetes.tsx\n"));

/***/ })

});