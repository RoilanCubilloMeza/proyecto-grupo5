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
exports.id = "pages/api/usuarios";
exports.ids = ["pages/api/usuarios"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "(api)/./src/database/config/firebase.ts":
/*!*****************************************!*\
  !*** ./src/database/config/firebase.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCeZ9s_BW639Wrim3zX2fbtcn0kR-7V5l4\",\n    authDomain: \"proyecto-api-5b7c8.firebaseapp.com\",\n    databaseURL: \"https://proyecto-api-5b7c8-default-rtdb.firebaseio.com\",\n    projectId: \"proyecto-api-5b7c8\",\n    storageBucket: \"proyecto-api-5b7c8.appspot.com\",\n    messagingSenderId: \"932283162568\",\n    appId: \"1:932283162568:web:0e86f4602c0706733a2afd\",\n    measurementId: \"G-20HCCMK81Q\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst storage = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvY29uZmlnL2ZpcmViYXNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDRztBQUNUO0FBQ1o7QUFFNUIsTUFBTUcsaUJBQWlCO0lBQ25CQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxNQUFNQyxNQUFNWiwyREFBYUEsQ0FBQ0c7QUFDbEIsTUFBTVUsS0FBS1osZ0VBQVlBLENBQUNXLEtBQUs7QUFDOUIsTUFBTUUsVUFBU2IsZ0VBQVlBLENBQUNXLEtBQUs7QUFDakMsTUFBTUcsT0FBT2Isc0RBQU9BLENBQUNVLEtBQUs7QUFFakMsaUVBQWVDLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm95ZWN0by1ncnVwbzUvLi9zcmMvZGF0YWJhc2UvY29uZmlnL2ZpcmViYXNlLnRzPzM3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9ICBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7Z2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q2VaOXNfQlc2MzlXcmltM3pYMmZidGNuMGtSLTdWNWw0XCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInByb3llY3RvLWFwaS01YjdjOC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcHJveWVjdG8tYXBpLTViN2M4LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInByb3llY3RvLWFwaS01YjdjOFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwcm95ZWN0by1hcGktNWI3YzguYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjkzMjI4MzE2MjU2OFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo5MzIyODMxNjI1Njg6d2ViOjBlODZmNDYwMmMwNzA2NzMzYTJhZmRcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy0yMEhDQ01LODFRXCJcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gICBleHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuICBleHBvcnQgY29uc3Qgc3RvcmFnZT0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbiAgZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZGIiLCJzdG9yYWdlIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/database/config/firebase.ts\n");

/***/ }),

/***/ "(api)/./src/database/providers/usuarios/usuarios.provider.ts":
/*!**************************************************************!*\
  !*** ./src/database/providers/usuarios/usuarios.provider.ts ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"usuarioProvider\": () => (/* binding */ usuarioProvider)\n/* harmony export */ });\n/* harmony import */ var _database_config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/config/firebase */ \"(api)/./src/database/config/firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst getAll = async ()=>{\n    const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\"));\n    const usuarios = querySnapshot.docs.map((doc)=>({\n            id: doc.id,\n            ...doc.data()\n        }));\n    return usuarios;\n};\nconst getById = async (id)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        const usuarios = docSnapshot.data();\n        return {\n            id,\n            ...usuarios\n        };\n    }\n    throw new Error(\"usuarios not found\");\n};\nconst create = async (name)=>{\n    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\"), {\n        name\n    });\n    const id = docRef.id;\n    return {\n        id,\n        name\n    };\n};\nconst updateById = async (id, updatedData)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, updatedData);\n        return true;\n    }\n    throw new Error(\"Usuario not found\");\n};\nconst deleteById = async (id)=>{\n    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_database_config_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"usuarios\", id);\n    const docSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);\n    if (docSnapshot.exists()) {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef);\n        return true;\n    }\n    throw new Error(\"Usuario not found\");\n};\nconst usuarioProvider = {\n    getAll,\n    getById,\n    create,\n    updateById,\n    deleteById\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvcHJvdmlkZXJzL3VzdWFyaW9zL3VzdWFyaW9zLnByb3ZpZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lEO0FBU3JCO0FBS3JCLE1BQU1RLFNBQVMsVUFBWTtJQUNoQyxNQUFNQyxnQkFBZ0IsTUFBTUgsMkRBQU9BLENBQUNKLDhEQUFVQSxDQUFDRix5REFBRUEsRUFBRTtJQUNuRCxNQUFNVSxXQUFXRCxjQUFjRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDUixNQUFTO1lBQ2hEUyxJQUFJVCxJQUFJUyxFQUFFO1lBQ1YsR0FBR1QsSUFBSVUsSUFBSSxFQUFFO1FBQ2Y7SUFDQSxPQUFPSjtBQUNULEVBQUU7QUFFRixNQUFNSyxVQUFVLE9BQU9GLEtBQWU7SUFDcEMsTUFBTUcsU0FBU1osdURBQUdBLENBQUNKLHlEQUFFQSxFQUFFLFlBQVlhO0lBQ25DLE1BQU1JLGNBQWMsTUFBTVosMERBQU1BLENBQUNXO0lBQ2pDLElBQUlDLFlBQVlDLE1BQU0sSUFBSTtRQUN4QixNQUFNUixXQUFXTyxZQUFZSCxJQUFJO1FBQ2pDLE9BQU87WUFBRUQ7WUFBSSxHQUFHSCxRQUFRO1FBQUM7SUFDM0IsQ0FBQztJQUNELE1BQU0sSUFBSVMsTUFBTSxzQkFBc0I7QUFDeEM7QUFFTyxNQUFNQyxTQUFTLE9BQU9DLE9BQWlCO0lBQzVDLE1BQU1MLFNBQVMsTUFBTWYsMERBQU1BLENBQUNDLDhEQUFVQSxDQUFDRix5REFBRUEsRUFBRSxhQUFhO1FBQUVxQjtJQUFLO0lBQy9ELE1BQU1SLEtBQUtHLE9BQU9ILEVBQUU7SUFDcEIsT0FBTztRQUFFQTtRQUFJUTtJQUFLO0FBQ3BCLEVBQUU7QUFFRixNQUFNQyxhQUFhLE9BQU9ULElBQVlVLGNBQWtDO0lBQ3RFLE1BQU1QLFNBQVNaLHVEQUFHQSxDQUFDSix5REFBRUEsRUFBRSxZQUFZYTtJQUNuQyxNQUFNSSxjQUFjLE1BQU1aLDBEQUFNQSxDQUFDVztJQUVqQyxJQUFJQyxZQUFZQyxNQUFNLElBQUk7UUFDeEIsTUFBTVgsNkRBQVNBLENBQUNTLFFBQVFPO1FBQ3hCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLElBQUlKLE1BQU0scUJBQXFCO0FBQ3ZDO0FBRUEsTUFBTUssYUFBYSxPQUFPWCxLQUFlO0lBQ3ZDLE1BQU1HLFNBQVNaLHVEQUFHQSxDQUFDSix5REFBRUEsRUFBRSxZQUFZYTtJQUNuQyxNQUFNSSxjQUFjLE1BQU1aLDBEQUFNQSxDQUFDVztJQUVqQyxJQUFJQyxZQUFZQyxNQUFNLElBQUk7UUFDeEIsTUFBTWYsNkRBQVNBLENBQUNhO1FBQ2hCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLElBQUlHLE1BQU0scUJBQXFCO0FBQ3ZDO0FBRU8sTUFBTU0sa0JBQWtCO0lBQzdCakI7SUFDQU87SUFDQUs7SUFDQUU7SUFDQUU7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tZ3J1cG81Ly4vc3JjL2RhdGFiYXNlL3Byb3ZpZGVycy91c3Vhcmlvcy91c3Vhcmlvcy5wcm92aWRlci50cz85NjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzdWFyaW8gfSBmcm9tIFwiQC9yb290L3R5cGVzL3VzdWFyaW9zL3VzdWFyaW9zLnR5cGVzXCI7XHJcbmltcG9ydCB7ICBkYiB9IGZyb20gXCJAL2RhdGFiYXNlL2NvbmZpZy9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGFkZERvYyxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGRlbGV0ZURvYyxcclxuICBkb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIGdldERvY3MsXHJcbiAgdXBkYXRlRG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgXCJ1c3Vhcmlvc1wiKSk7XHJcbiAgY29uc3QgdXN1YXJpb3MgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICBpZDogZG9jLmlkLFxyXG4gICAgLi4uZG9jLmRhdGEoKSxcclxuICB9KSk7XHJcbiAgcmV0dXJuIHVzdWFyaW9zO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnlJZCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInVzdWFyaW9zXCIsIGlkKTtcclxuICBjb25zdCBkb2NTbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG4gIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgY29uc3QgdXN1YXJpb3MgPSBkb2NTbmFwc2hvdC5kYXRhKCk7XHJcbiAgICByZXR1cm4geyBpZCwgLi4udXN1YXJpb3MgfTtcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwidXN1YXJpb3Mgbm90IGZvdW5kXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IGFzeW5jIChuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJ1c3Vhcmlvc1wiKSwgeyBuYW1lIH0pO1xyXG4gIGNvbnN0IGlkID0gZG9jUmVmLmlkO1xyXG4gIHJldHVybiB7IGlkLCBuYW1lIH07XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcsIHVwZGF0ZWREYXRhOiBQYXJ0aWFsPFVzdWFyaW8+KSA9PiB7XHJcbiAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcInVzdWFyaW9zXCIsIGlkKTtcclxuICBjb25zdCBkb2NTbmFwc2hvdCA9IGF3YWl0IGdldERvYyhkb2NSZWYpO1xyXG5cclxuICBpZiAoZG9jU25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgIGF3YWl0IHVwZGF0ZURvYyhkb2NSZWYsIHVwZGF0ZWREYXRhKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiVXN1YXJpbyBub3QgZm91bmRcIik7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVCeUlkID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwidXN1YXJpb3NcIiwgaWQpO1xyXG4gIGNvbnN0IGRvY1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XHJcblxyXG4gIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvY1JlZik7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihcIlVzdWFyaW8gbm90IGZvdW5kXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzdWFyaW9Qcm92aWRlciA9IHtcclxuICBnZXRBbGwsXHJcbiAgZ2V0QnlJZCxcclxuICBjcmVhdGUsXHJcbiAgdXBkYXRlQnlJZCxcclxuICBkZWxldGVCeUlkLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiZGIiLCJhZGREb2MiLCJjb2xsZWN0aW9uIiwiZGVsZXRlRG9jIiwiZG9jIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsInVwZGF0ZURvYyIsImdldEFsbCIsInF1ZXJ5U25hcHNob3QiLCJ1c3VhcmlvcyIsImRvY3MiLCJtYXAiLCJpZCIsImRhdGEiLCJnZXRCeUlkIiwiZG9jUmVmIiwiZG9jU25hcHNob3QiLCJleGlzdHMiLCJFcnJvciIsImNyZWF0ZSIsIm5hbWUiLCJ1cGRhdGVCeUlkIiwidXBkYXRlZERhdGEiLCJkZWxldGVCeUlkIiwidXN1YXJpb1Byb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/database/providers/usuarios/usuarios.provider.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/usuarios/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/api/usuarios/index.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usuariosController)\n/* harmony export */ });\n/* harmony import */ var _database_providers_usuarios_usuarios_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/providers/usuarios/usuarios.provider */ \"(api)/./src/database/providers/usuarios/usuarios.provider.ts\");\n/* harmony import */ var _root_api_response_notAllowedResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/root/api/response/notAllowedResponse */ \"(api)/./src/root/api/response/notAllowedResponse.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_providers_usuarios_usuarios_provider__WEBPACK_IMPORTED_MODULE_0__]);\n_database_providers_usuarios_usuarios_provider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getAll = async (res)=>{\n    try {\n        const entities = await _database_providers_usuarios_usuarios_provider__WEBPACK_IMPORTED_MODULE_0__.usuarioProvider.getAll();\n        res.status(200).json(entities);\n    } catch (error) {\n        res.status(500).json({\n            message: error.message\n        });\n    }\n};\nconst create = async (req, res)=>{\n    try {\n        const { name  } = req.body;\n        const entityCreated = await _database_providers_usuarios_usuarios_provider__WEBPACK_IMPORTED_MODULE_0__.usuarioProvider.create(name);\n        res.status(200).json(entityCreated);\n    } catch (error) {\n        res.status(500).json({\n            message: error.message\n        });\n    }\n};\nconst handlers = {};\nhandlers[\"GET\"] = (_req, res)=>getAll(res);\nhandlers[\"POST\"] = (req, res)=>create(req, res);\nfunction usuariosController(req, res) {\n    const { method  } = req;\n    const handler = handlers[method];\n    if (handler) {\n        return handler(req, res);\n    } else {\n        return (0,_root_api_response_notAllowedResponse__WEBPACK_IMPORTED_MODULE_1__.notAllowedResponse)(res, method);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzdWFyaW9zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRjtBQUNOO0FBRzVFLE1BQU1FLFNBQVMsT0FBT0MsTUFBeUI7SUFDN0MsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUosa0dBQXNCO1FBQzdDRyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtJQUN2QixFQUFFLE9BQU9HLE9BQU87UUFDZEosSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxTQUFTLE1BQWlCQSxPQUFPO1FBQUM7SUFDM0Q7QUFDRjtBQUVBLE1BQU1DLFNBQVMsT0FBT0MsS0FBcUJQLE1BQXlCO0lBQ2xFLElBQUk7UUFDRixNQUFNLEVBQUVRLEtBQUksRUFBRSxHQUFHRCxJQUFJRSxJQUFJO1FBQ3pCLE1BQU1DLGdCQUFnQixNQUFNYixrR0FBc0IsQ0FBQ1c7UUFDbkRSLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNPO0lBQ3ZCLEVBQUUsT0FBT04sT0FBTztRQUNkSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVMsTUFBaUJBLE9BQU87UUFBQztJQUMzRDtBQUNGO0FBRUEsTUFBTU0sV0FBZ0IsQ0FBQztBQUN2QkEsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDQyxNQUFzQlosTUFBeUJELE9BQU9DO0FBQ3pFVyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUNKLEtBQXFCUCxNQUF5Qk0sT0FBT0MsS0FBS1A7QUFFL0QsU0FBU2EsbUJBQW1CTixHQUFtQixFQUFFUCxHQUFvQixFQUFFO0lBQ3BGLE1BQU0sRUFBRWMsT0FBTSxFQUFFLEdBQUdQO0lBRW5CLE1BQU1RLFVBQVVKLFFBQVEsQ0FBQ0csT0FBZ0M7SUFDekQsSUFBSUMsU0FBUztRQUNYLE9BQU9BLFFBQVFSLEtBQUtQO0lBQ3RCLE9BQU87UUFDTCxPQUFPRix5RkFBa0JBLENBQUNFLEtBQUtjO0lBQ2pDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tZ3J1cG81Ly4vc3JjL3BhZ2VzL2FwaS91c3Vhcmlvcy9pbmRleC50cz85ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzdWFyaW9Qcm92aWRlciB9IGZyb20gXCJAL2RhdGFiYXNlL3Byb3ZpZGVycy91c3Vhcmlvcy91c3Vhcmlvcy5wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBub3RBbGxvd2VkUmVzcG9uc2UgfSBmcm9tIFwiQC9yb290L2FwaS9yZXNwb25zZS9ub3RBbGxvd2VkUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5jb25zdCBnZXRBbGwgPSBhc3luYyAocmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCB1c3VhcmlvUHJvdmlkZXIuZ2V0QWxsKCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihlbnRpdGllcyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBlbnRpdHlDcmVhdGVkID0gYXdhaXQgdXN1YXJpb1Byb3ZpZGVyLmNyZWF0ZShuYW1lKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGVudGl0eUNyZWF0ZWQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXJzOiBhbnkgPSB7fTtcclxuaGFuZGxlcnNbXCJHRVRcIl0gPSAoX3JlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiBnZXRBbGwocmVzKTtcclxuaGFuZGxlcnNbXCJQT1NUXCJdID0gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiBjcmVhdGUocmVxLCByZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXN1YXJpb3NDb250cm9sbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzW21ldGhvZCBhcyBrZXlvZiB0eXBlb2YgaGFuZGxlcnNdO1xyXG4gIGlmIChoYW5kbGVyKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBub3RBbGxvd2VkUmVzcG9uc2UocmVzLCBtZXRob2QhKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzdWFyaW9Qcm92aWRlciIsIm5vdEFsbG93ZWRSZXNwb25zZSIsImdldEFsbCIsInJlcyIsImVudGl0aWVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImNyZWF0ZSIsInJlcSIsIm5hbWUiLCJib2R5IiwiZW50aXR5Q3JlYXRlZCIsImhhbmRsZXJzIiwiX3JlcSIsInVzdWFyaW9zQ29udHJvbGxlciIsIm1ldGhvZCIsImhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/usuarios/index.ts\n");

/***/ }),

/***/ "(api)/./src/root/api/response/notAllowedResponse.ts":
/*!*****************************************************!*\
  !*** ./src/root/api/response/notAllowedResponse.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notAllowedResponse\": () => (/* binding */ notAllowedResponse)\n/* harmony export */ });\nconst notAllowedResponse = (res, method)=>{\n    res.status(405).end(`Method ${method} Not Allowed`);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcm9vdC9hcGkvcmVzcG9uc2Uvbm90QWxsb3dlZFJlc3BvbnNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxxQkFBcUIsQ0FBQ0MsS0FBc0JDLFNBQW1CO0lBQzFFRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFRixPQUFPLFlBQVksQ0FBQztBQUNwRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tZ3J1cG81Ly4vc3JjL3Jvb3QvYXBpL3Jlc3BvbnNlL25vdEFsbG93ZWRSZXNwb25zZS50cz8yMWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90QWxsb3dlZFJlc3BvbnNlID0gKHJlczogTmV4dEFwaVJlc3BvbnNlLCBtZXRob2Q6IHN0cmluZykgPT4ge1xyXG4gIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxufTsiXSwibmFtZXMiOlsibm90QWxsb3dlZFJlc3BvbnNlIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/root/api/response/notAllowedResponse.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/usuarios/index.ts"));
module.exports = __webpack_exports__;

})();