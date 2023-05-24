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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usaurioProvider1\": function() { return /* binding */ usaurioProvider1; },\n/* harmony export */   \"usuarioProvider\": function() { return /* binding */ usuarioProvider; }\n/* harmony export */ });\n/* harmony import */ var _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/config/firebase */ \"./src/database/config/firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\nconst getGifUrl = function(searchTerm) {\n    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;\n    const apiKey = \"TU_API_KEY_DE_GIPHY\"; // Reemplaza con tu API key de Giphy\n    return \"https://api.giphy.com/v1/gifs/search?q=\".concat(searchTerm, \"&api_key=\").concat(apiKey, \"&limit=\").concat(limit);\n};\nconst usaurioProvider1 = async (searchTerm)=>{\n    try {\n        const response = await fetch(getGifUrl(searchTerm));\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const data = await response.json();\n        const gifs = data.data.map((gif)=>({\n                id: gif.id,\n                title: gif.title,\n                url: gif.images.fixed_width.url\n            }));\n        return gifs;\n    } catch (error) {\n        return error;\n    }\n};\nconst getAll = async ()=>{\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\"));\n    const usuarios = querySnapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        }));\n    return usuarios;\n};\nconst getById = async (id)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        const usuarios = docSnapshot.data();\n        return {\n            id,\n            ...usuarios\n        };\n    }\n    throw new Error(\"usuarios not found\");\n};\nconst create = async (name)=>{\n    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\"), {\n        name\n    });\n    const id = docRef.id;\n    return {\n        id,\n        name\n    };\n};\nconst updateById = async (id, updatedData)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, updatedData);\n        return true;\n    }\n    throw new Error(\"Usuario not found\");\n};\nconst deleteById = async (id)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef);\n        return true;\n    }\n    throw new Error(\"Usuario not found\");\n};\nconst usuarioProvider = {\n    getAll,\n    getById,\n    create,\n    updateById,\n    deleteById\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2UvcHJvdmlkZXJzL3VzdWFyaW9zL3VzdWFyaW9zLnByb3ZpZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDZ0Q7QUFTcEI7QUFFNUIsTUFBTVEsWUFBWSxTQUFDQyxZQUEwQztRQUF0QkMseUVBQVE7SUFDN0MsTUFBTUMsU0FBUyx1QkFBdUIsb0NBQW9DO0lBQzFFLE9BQU8sMENBQWdFQSxPQUF0QkYsWUFBVyxhQUEyQkMsT0FBaEJDLFFBQU8sV0FBZSxPQUFORDtBQUN6RjtBQUNRLE1BQU9FLG1CQUFxQixPQUFRSCxhQUEwQjtJQUNwRSxJQUFJO1FBQ0YsTUFBT0ksV0FBYSxNQUFPQyxNQUFNTixVQUFVQztRQUMzQyxJQUFJLENBQUNJLFNBQVNFLEVBQUUsRUFBRTtZQUNoQixNQUFPLElBQUtDLE1BQU0sK0JBQStCO1FBQ25ELENBQUM7UUFFRCxNQUFPQyxPQUFTLE1BQU9KLFNBQVNLLElBQUk7UUFDcEMsTUFBT0MsT0FBU0YsS0FBS0EsSUFBSSxDQUFDRyxHQUFHLENBQzNCLENBQUNDLE1BQTBCO2dCQUN6QkMsSUFBS0QsSUFBSUMsRUFBRTtnQkFDWEMsT0FBUUYsSUFBSUUsS0FBSztnQkFDakJDLEtBQU1ILElBQUlJLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDRixHQUFHO1lBQ2pDO1FBRUQsT0FBUUw7SUFDVixFQUFFLE9BQU9RLE9BQU87UUFDZCxPQUFRQTtJQUNWO0FBQ0YsRUFBRTtBQUVKLE1BQU1DLFNBQVMsVUFBWTtJQUN6QixNQUFNQyxnQkFBZ0IsTUFBTXZCLDJEQUFPQSxDQUFDSiw4REFBVUEsQ0FBQ0YseURBQUVBLEVBQUU7SUFDbkQsTUFBTThCLFdBQVdELGNBQWNFLElBQUksQ0FBQ1gsR0FBRyxDQUFDLENBQUNoQixNQUFTO1lBQ2hEa0IsSUFBSWxCLElBQUlrQixFQUFFO1lBQ1YsR0FBR2xCLElBQUlhLElBQUksRUFBRTtRQUNmO0lBQ0EsT0FBT2E7QUFDVDtBQUNBLE1BQU1FLFVBQVUsT0FBT1YsS0FBZTtJQUNwQyxNQUFNVyxTQUFTN0IsdURBQUdBLENBQUNKLHlEQUFFQSxFQUFFLFlBQVlzQjtJQUNuQyxNQUFNWSxjQUFjLE1BQU03QiwwREFBTUEsQ0FBQzRCO0lBQ2pDLElBQUlDLFlBQVlDLE1BQU0sSUFBSTtRQUN4QixNQUFNTCxXQUFXSSxZQUFZakIsSUFBSTtRQUNqQyxPQUFPO1lBQUVLO1lBQUksR0FBR1EsUUFBUTtRQUFDO0lBQzNCLENBQUM7SUFDRCxNQUFNLElBQUlkLE1BQU0sc0JBQXNCO0FBQ3hDO0FBRUEsTUFBTW9CLFNBQVMsT0FBT0MsT0FBaUI7SUFDckMsTUFBTUosU0FBUyxNQUFNaEMsMERBQU1BLENBQUNDLDhEQUFVQSxDQUFDRix5REFBRUEsRUFBRSxhQUFhO1FBQUVxQztJQUFLO0lBQy9ELE1BQU1mLEtBQUtXLE9BQU9YLEVBQUU7SUFDcEIsT0FBTztRQUFFQTtRQUFJZTtJQUFLO0FBQ3BCO0FBRUEsTUFBTUMsYUFBYSxPQUFPaEIsSUFBWWlCLGNBQWtDO0lBQ3RFLE1BQU1OLFNBQVM3Qix1REFBR0EsQ0FBQ0oseURBQUVBLEVBQUUsWUFBWXNCO0lBQ25DLE1BQU1ZLGNBQWMsTUFBTTdCLDBEQUFNQSxDQUFDNEI7SUFFakMsSUFBSUMsWUFBWUMsTUFBTSxJQUFJO1FBQ3hCLE1BQU01Qiw2REFBU0EsQ0FBQzBCLFFBQVFNO1FBQ3hCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLElBQUl2QixNQUFNLHFCQUFxQjtBQUN2QztBQUVBLE1BQU13QixhQUFhLE9BQU9sQixLQUFlO0lBQ3ZDLE1BQU1XLFNBQVM3Qix1REFBR0EsQ0FBQ0oseURBQUVBLEVBQUUsWUFBWXNCO0lBQ25DLE1BQU1ZLGNBQWMsTUFBTTdCLDBEQUFNQSxDQUFDNEI7SUFFakMsSUFBSUMsWUFBWUMsTUFBTSxJQUFJO1FBQ3hCLE1BQU1oQyw2REFBU0EsQ0FBQzhCO1FBQ2hCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLElBQUlqQixNQUFNLHFCQUFxQjtBQUN2QztBQUVPLE1BQU15QixrQkFBa0I7SUFDN0JiO0lBQ0FJO0lBQ0FJO0lBQ0FFO0lBQ0FFO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZGF0YWJhc2UvcHJvdmlkZXJzL3VzdWFyaW9zL3VzdWFyaW9zLnByb3ZpZGVyLnRzPzk2NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gXCJAL3Jvb3QvdHlwZXMvdXN1YXJpb3MvdXN1YXJpb3MudHlwZXNcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9kYXRhYmFzZS9jb25maWcvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBhZGREb2MsXHJcbiAgY29sbGVjdGlvbixcclxuICBkZWxldGVEb2MsXHJcbiAgZG9jLFxyXG4gIGdldERvYyxcclxuICBnZXREb2NzLFxyXG4gIHVwZGF0ZURvYyxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBnZXRHaWZVcmwgPSAoc2VhcmNoVGVybTogc3RyaW5nLCBsaW1pdCA9IDUpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGFwaUtleSA9IFwiVFVfQVBJX0tFWV9ERV9HSVBIWVwiOyAvLyBSZWVtcGxhemEgY29uIHR1IEFQSSBrZXkgZGUgR2lwaHlcclxuICByZXR1cm4gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9xPSR7c2VhcmNoVGVybX0mYXBpX2tleT0ke2FwaUtleX0mbGltaXQ9JHtsaW1pdH1gO1xyXG59O1xyXG5leHBvcnQgIGNvbnN0ICB1c2F1cmlvUHJvdmlkZXIxICA9ICBhc3luYyAgKHNlYXJjaFRlcm06ICBzdHJpbmcpICA9PiAge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCAgcmVzcG9uc2UgID0gIGF3YWl0ICBmZXRjaChnZXRHaWZVcmwoc2VhcmNoVGVybSkpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyAgbmV3ICBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0ICBkYXRhICA9ICBhd2FpdCAgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgIGdpZnMgID0gIGRhdGEuZGF0YS5tYXAoXHJcbiAgICAgIChnaWY6ICBhbnkpOiAgVXN1YXJpbyAgPT4gKHtcclxuICAgICAgICBpZDogIGdpZi5pZCxcclxuICAgICAgICB0aXRsZTogIGdpZi50aXRsZSxcclxuICAgICAgICB1cmw6ICBnaWYuaW1hZ2VzLmZpeGVkX3dpZHRoLnVybCxcclxuICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAgZ2lmcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiAgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbmNvbnN0IGdldEFsbCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcInVzdWFyaW9zXCIpKTtcclxuICBjb25zdCB1c3VhcmlvcyA9IHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcclxuICAgIGlkOiBkb2MuaWQsXHJcbiAgICAuLi5kb2MuZGF0YSgpLFxyXG4gIH0pKTtcclxuICByZXR1cm4gdXN1YXJpb3M7XHJcbn07XHJcbmNvbnN0IGdldEJ5SWQgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgXCJ1c3Vhcmlvc1wiLCBpZCk7XHJcbiAgY29uc3QgZG9jU25hcHNob3QgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcclxuICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgIGNvbnN0IHVzdWFyaW9zID0gZG9jU25hcHNob3QuZGF0YSgpO1xyXG4gICAgcmV0dXJuIHsgaWQsIC4uLnVzdWFyaW9zIH07XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcihcInVzdWFyaW9zIG5vdCBmb3VuZFwiKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJ1c3Vhcmlvc1wiKSwgeyBuYW1lIH0pO1xyXG4gIGNvbnN0IGlkID0gZG9jUmVmLmlkO1xyXG4gIHJldHVybiB7IGlkLCBuYW1lIH07XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcsIHVwZGF0ZWREYXRhOiBQYXJ0aWFsPFVzdWFyaW8+KSA9PiB7XHJcbiAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInVzdWFyaW9zXCIsIGlkKTtcclxuICBjb25zdCBkb2NTbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG5cclxuICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgIGF3YWl0IHVwZGF0ZURvYyhkb2NSZWYsIHVwZGF0ZWREYXRhKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiVXN1YXJpbyBub3QgZm91bmRcIik7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXN1YXJpb3NcIiwgaWQpO1xyXG4gIGNvbnN0IGRvY1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XHJcblxyXG4gIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvY1JlZik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihcIlVzdWFyaW8gbm90IGZvdW5kXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzdWFyaW9Qcm92aWRlciA9IHtcclxuICBnZXRBbGwsXHJcbiAgZ2V0QnlJZCxcclxuICBjcmVhdGUsXHJcbiAgdXBkYXRlQnlJZCxcclxuICBkZWxldGVCeUlkLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiZGVsZXRlRG9jIiwiZG9jIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInVwZGF0ZURvYyIsImdldEdpZlVybCIsInNlYXJjaFRlcm0iLCJsaW1pdCIsImFwaUtleSIsInVzYXVyaW9Qcm92aWRlcjEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZ2lmcyIsIm1hcCIsImdpZiIsImlkIiwidGl0bGUiLCJ1cmwiLCJpbWFnZXMiLCJmaXhlZF93aWR0aCIsImVycm9yIiwiZ2V0QWxsIiwicXVlcnlTbmFwc2hvdCIsInVzdWFyaW9zIiwiZG9jcyIsImdldEJ5SWQiLCJkb2NSZWYiLCJkb2NTbmFwc2hvdCIsImV4aXN0cyIsImNyZWF0ZSIsIm5hbWUiLCJ1cGRhdGVCeUlkIiwidXBkYXRlZERhdGEiLCJkZWxldGVCeUlkIiwidXN1YXJpb1Byb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/database/providers/usuarios/usuarios.provider.ts\n"));

/***/ })

});