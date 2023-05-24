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

/***/ "./src/database/providers/usuarios/usuarios.provider.ts":
/*!**************************************************************!*\
  !*** ./src/database/providers/usuarios/usuarios.provider.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usaurioProvider1\": function() { return /* binding */ usaurioProvider1; },\n/* harmony export */   \"usuarioProvider\": function() { return /* binding */ usuarioProvider; }\n/* harmony export */ });\n/* harmony import */ var _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/config/firebase */ \"./src/database/config/firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst getGifUrl = function(searchTerm) {\n    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;\n    const apiKey = \"TU_API_KEY_DE_GIPHY\"; // Reemplaza con tu API key de Giphy\n    return \"https://api.giphy.com/v1/gifs/search?q=\".concat(searchTerm, \"&api_key=\").concat(apiKey, \"&limit=\").concat(limit);\n};\nconst usaurioProvider1 = async (searchTerm)=>{\n    try {\n        const response = await fetch(getGifUrl(searchTerm));\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const data = await response.json();\n        const gifs = data.data.map((gif)=>({\n                id: gif.id,\n                username: gif.username,\n                email: gif.email,\n                password: gif.password\n            }));\n        return gifs;\n    } catch (error) {\n        return error;\n    }\n};\nconst getAll = async ()=>{\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\"));\n    const usuarios = querySnapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        }));\n    return usuarios;\n};\nconst getById = async (id)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        const usuarios = docSnapshot.data();\n        return {\n            id,\n            ...usuarios\n        };\n    }\n    throw new Error(\"usuarios not found\");\n};\nconst create = async (name)=>{\n    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\"), {\n        name\n    });\n    const id = docRef.id;\n    return {\n        id,\n        name\n    };\n};\nconst updateById = async (id, updatedData)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, updatedData);\n        return true;\n    }\n    throw new Error(\"Usuario not found\");\n};\nconst deleteById = async (id)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef);\n        return true;\n    }\n    throw new Error(\"Usuario not found\");\n};\nconst usuarioProvider = {\n    getAll,\n    getById,\n    create,\n    updateById,\n    deleteById\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2UvcHJvdmlkZXJzL3VzdWFyaW9zL3VzdWFyaW9zLnByb3ZpZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDZ0Q7QUFTcEI7QUFFNUIsTUFBTVEsWUFBWSxTQUFDQyxZQUEwQztRQUF0QkMseUVBQVE7SUFDN0MsTUFBTUMsU0FBUyx1QkFBdUIsb0NBQW9DO0lBQzFFLE9BQU8sMENBQWdFQSxPQUF0QkYsWUFBVyxhQUEyQkMsT0FBaEJDLFFBQU8sV0FBZSxPQUFORDtBQUN6RjtBQUNRLE1BQU9FLG1CQUFxQixPQUFRSCxhQUEwQjtJQUNwRSxJQUFJO1FBQ0YsTUFBT0ksV0FBYSxNQUFPQyxNQUFNTixVQUFVQztRQUMzQyxJQUFJLENBQUNJLFNBQVNFLEVBQUUsRUFBRTtZQUNoQixNQUFPLElBQUtDLE1BQU0sK0JBQStCO1FBQ25ELENBQUM7UUFFRCxNQUFPQyxPQUFTLE1BQU9KLFNBQVNLLElBQUk7UUFDcEMsTUFBT0MsT0FBU0YsS0FBS0EsSUFBSSxDQUFDRyxHQUFHLENBQzNCLENBQUNDLE1BQTBCO2dCQUN6QkMsSUFBS0QsSUFBSUMsRUFBRTtnQkFDWEMsVUFBV0YsSUFBSUUsUUFBUTtnQkFDdkJDLE9BQU1ILElBQUlHLEtBQUs7Z0JBQ2ZDLFVBQVNKLElBQUlJLFFBQVE7WUFDdEI7UUFFRCxPQUFRTjtJQUNWLEVBQUUsT0FBT08sT0FBTztRQUNkLE9BQVFBO0lBQ1Y7QUFDRixFQUFFO0FBRUosTUFBTUMsU0FBUyxVQUFZO0lBQ3pCLE1BQU1DLGdCQUFnQixNQUFNdEIsMkRBQU9BLENBQUNKLDhEQUFVQSxDQUFDRix5REFBRUEsRUFBRTtJQUNuRCxNQUFNNkIsV0FBV0QsY0FBY0UsSUFBSSxDQUFDVixHQUFHLENBQUMsQ0FBQ2hCLE1BQVM7WUFDaERrQixJQUFJbEIsSUFBSWtCLEVBQUU7WUFDVixHQUFHbEIsSUFBSWEsSUFBSSxFQUFFO1FBQ2Y7SUFDQSxPQUFPWTtBQUNUO0FBQ0EsTUFBTUUsVUFBVSxPQUFPVCxLQUFlO0lBQ3BDLE1BQU1VLFNBQVM1Qix1REFBR0EsQ0FBQ0oseURBQUVBLEVBQUUsWUFBWXNCO0lBQ25DLE1BQU1XLGNBQWMsTUFBTTVCLDBEQUFNQSxDQUFDMkI7SUFDakMsSUFBSUMsWUFBWUMsTUFBTSxJQUFJO1FBQ3hCLE1BQU1MLFdBQVdJLFlBQVloQixJQUFJO1FBQ2pDLE9BQU87WUFBRUs7WUFBSSxHQUFHTyxRQUFRO1FBQUM7SUFDM0IsQ0FBQztJQUNELE1BQU0sSUFBSWIsTUFBTSxzQkFBc0I7QUFDeEM7QUFFQSxNQUFNbUIsU0FBUyxPQUFPQyxPQUFpQjtJQUNyQyxNQUFNSixTQUFTLE1BQU0vQiwwREFBTUEsQ0FBQ0MsOERBQVVBLENBQUNGLHlEQUFFQSxFQUFFLGFBQWE7UUFBRW9DO0lBQUs7SUFDL0QsTUFBTWQsS0FBS1UsT0FBT1YsRUFBRTtJQUNwQixPQUFPO1FBQUVBO1FBQUljO0lBQUs7QUFDcEI7QUFFQSxNQUFNQyxhQUFhLE9BQU9mLElBQVlnQixjQUFrQztJQUN0RSxNQUFNTixTQUFTNUIsdURBQUdBLENBQUNKLHlEQUFFQSxFQUFFLFlBQVlzQjtJQUNuQyxNQUFNVyxjQUFjLE1BQU01QiwwREFBTUEsQ0FBQzJCO0lBRWpDLElBQUlDLFlBQVlDLE1BQU0sSUFBSTtRQUN4QixNQUFNM0IsNkRBQVNBLENBQUN5QixRQUFRTTtRQUN4QixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsTUFBTSxJQUFJdEIsTUFBTSxxQkFBcUI7QUFDdkM7QUFFQSxNQUFNdUIsYUFBYSxPQUFPakIsS0FBZTtJQUN2QyxNQUFNVSxTQUFTNUIsdURBQUdBLENBQUNKLHlEQUFFQSxFQUFFLFlBQVlzQjtJQUNuQyxNQUFNVyxjQUFjLE1BQU01QiwwREFBTUEsQ0FBQzJCO0lBRWpDLElBQUlDLFlBQVlDLE1BQU0sSUFBSTtRQUN4QixNQUFNL0IsNkRBQVNBLENBQUM2QjtRQUNoQixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsTUFBTSxJQUFJaEIsTUFBTSxxQkFBcUI7QUFDdkM7QUFFTyxNQUFNd0Isa0JBQWtCO0lBQzdCYjtJQUNBSTtJQUNBSTtJQUNBRTtJQUNBRTtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGFiYXNlL3Byb3ZpZGVycy91c3Vhcmlvcy91c3Vhcmlvcy5wcm92aWRlci50cz85NjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzdWFyaW8gfSBmcm9tIFwiQC9yb290L3R5cGVzL3VzdWFyaW9zL3VzdWFyaW9zLnR5cGVzXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZGF0YWJhc2UvY29uZmlnL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgYWRkRG9jLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgZGVsZXRlRG9jLFxyXG4gIGRvYyxcclxuICBnZXREb2MsXHJcbiAgZ2V0RG9jcyxcclxuICB1cGRhdGVEb2MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuY29uc3QgZ2V0R2lmVXJsID0gKHNlYXJjaFRlcm06IHN0cmluZywgbGltaXQgPSA1KTogc3RyaW5nID0+IHtcclxuICBjb25zdCBhcGlLZXkgPSBcIlRVX0FQSV9LRVlfREVfR0lQSFlcIjsgLy8gUmVlbXBsYXphIGNvbiB0dSBBUEkga2V5IGRlIEdpcGh5XHJcbiAgcmV0dXJuIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/cT0ke3NlYXJjaFRlcm19JmFwaV9rZXk9JHthcGlLZXl9JmxpbWl0PSR7bGltaXR9YDtcclxufTtcclxuZXhwb3J0ICBjb25zdCAgdXNhdXJpb1Byb3ZpZGVyMSAgPSAgYXN5bmMgIChzZWFyY2hUZXJtOiAgc3RyaW5nKSAgPT4gIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgIHJlc3BvbnNlICA9ICBhd2FpdCAgZmV0Y2goZ2V0R2lmVXJsKHNlYXJjaFRlcm0pKTtcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgIG5ldyAgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCAgZGF0YSAgPSAgYXdhaXQgIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0ICBnaWZzICA9ICBkYXRhLmRhdGEubWFwKFxyXG4gICAgICAoZ2lmOiAgYW55KTogIFVzdWFyaW8gID0+ICh7XHJcbiAgICAgICAgaWQ6ICBnaWYuaWQsXHJcbiAgICAgICAgdXNlcm5hbWU6ICBnaWYudXNlcm5hbWUsXHJcbiAgICAgICAgZW1haWw6Z2lmLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOmdpZi5wYXNzd29yZFxyXG4gICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuICBnaWZzO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuICBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuY29uc3QgZ2V0QWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwidXN1YXJpb3NcIikpO1xyXG4gIGNvbnN0IHVzdWFyaW9zID0gcXVlcnlTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoe1xyXG4gICAgaWQ6IGRvYy5pZCxcclxuICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgfSkpO1xyXG4gIHJldHVybiB1c3VhcmlvcztcclxufTtcclxuY29uc3QgZ2V0QnlJZCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInVzdWFyaW9zXCIsIGlkKTtcclxuICBjb25zdCBkb2NTbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgY29uc3QgdXN1YXJpb3MgPSBkb2NTbmFwc2hvdC5kYXRhKCk7XHJcbiAgICByZXR1cm4geyBpZCwgLi4udXN1YXJpb3MgfTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwidXN1YXJpb3Mgbm90IGZvdW5kXCIpO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInVzdWFyaW9zXCIpLCB7IG5hbWUgfSk7XHJcbiAgY29uc3QgaWQgPSBkb2NSZWYuaWQ7XHJcbiAgcmV0dXJuIHsgaWQsIG5hbWUgfTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZywgdXBkYXRlZERhdGE6IFBhcnRpYWw8VXN1YXJpbz4pID0+IHtcclxuICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXN1YXJpb3NcIiwgaWQpO1xyXG4gIGNvbnN0IGRvY1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XHJcblxyXG4gIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgYXdhaXQgdXBkYXRlRG9jKGRvY1JlZiwgdXBkYXRlZERhdGEpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoXCJVc3VhcmlvIG5vdCBmb3VuZFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZUJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJ1c3Vhcmlvc1wiLCBpZCk7XHJcbiAgY29uc3QgZG9jU25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcclxuXHJcbiAgaWYgKGRvY1NuYXBzaG90LmV4aXN0cygpKSB7XHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jUmVmKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiVXN1YXJpbyBub3QgZm91bmRcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXN1YXJpb1Byb3ZpZGVyID0ge1xyXG4gIGdldEFsbCxcclxuICBnZXRCeUlkLFxyXG4gIGNyZWF0ZSxcclxuICB1cGRhdGVCeUlkLFxyXG4gIGRlbGV0ZUJ5SWQsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJkYiIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJkZWxldGVEb2MiLCJkb2MiLCJnZXREb2MiLCJnZXREb2NzIiwidXBkYXRlRG9jIiwiZ2V0R2lmVXJsIiwic2VhcmNoVGVybSIsImxpbWl0IiwiYXBpS2V5IiwidXNhdXJpb1Byb3ZpZGVyMSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJnaWZzIiwibWFwIiwiZ2lmIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImdldEFsbCIsInF1ZXJ5U25hcHNob3QiLCJ1c3VhcmlvcyIsImRvY3MiLCJnZXRCeUlkIiwiZG9jUmVmIiwiZG9jU25hcHNob3QiLCJleGlzdHMiLCJjcmVhdGUiLCJuYW1lIiwidXBkYXRlQnlJZCIsInVwZGF0ZWREYXRhIiwiZGVsZXRlQnlJZCIsInVzdWFyaW9Qcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/database/providers/usuarios/usuarios.provider.ts\n"));

/***/ })

});