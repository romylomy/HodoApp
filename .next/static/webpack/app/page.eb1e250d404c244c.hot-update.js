"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ \"(app-pages-browser)/./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SORT_OPTIONS = [\n    {\n        name: \"None\",\n        value: \"none\"\n    },\n    {\n        name: \"Distance: low to high\",\n        value: \"distance-asc\"\n    },\n    {\n        name: \"Distance: high to low\",\n        value: \"distance-desc\"\n    }\n];\nfunction Home() {\n    _s();\n    const [filter, setfilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        sort: \"none\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold tracking-tight text-gray-900\",\n                    children: \"Hodo App\"\n                }, void 0, false, {\n                    fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuTrigger, {\n                                className: \"group inline-flex justify-center text-sm font-medium text-fray-700 hover:text-gray-900 \",\n                                children: [\n                                    \"Sort\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        className: \"-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuContent, {\n                                align: \"end\",\n                                children: SORT_OPTIONS.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: setfilter((prev)=>({\n                                                ...prev,\n                                                sort: option.value\n                                            }))\n                                    }, option.name, false, {\n                                        fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jerome/Desktop/GithubRepo /HodoApp/src/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"QPbpRcAxEOTq0v/TWApMUB9UNNI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWtGO0FBQ2Q7QUFDakI7QUFDbEI7QUFFakMsTUFBTUssZUFBYztJQUNsQjtRQUFDQyxNQUFLO1FBQVFDLE9BQU07SUFBTTtJQUMxQjtRQUFDRCxNQUFLO1FBQXlCQyxPQUFNO0lBQWM7SUFDbkQ7UUFBQ0QsTUFBSztRQUF5QkMsT0FBTTtJQUFlO0NBQ3JEO0FBRWMsU0FBU0M7O0lBRXRCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUNuQ08sTUFBSztJQUVQO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQWtEOzs7Ozs7OEJBRzlELDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ2Isc0VBQVlBOzswQ0FDYiw4REFBQ0MsNkVBQW1CQTtnQ0FBQ1ksV0FBVTs7b0NBQTBGO2tEQUV2SCw4REFBQ1YsdUZBQVdBO3dDQUFDVSxXQUFVOzs7Ozs7Ozs7Ozs7MENBRXpCLDhEQUFDWCw4RUFBbUJBO2dDQUFDYyxPQUFNOzBDQUV4QlgsYUFBYVksR0FBRyxDQUFDLENBQUNDLHVCQUNqQiw4REFBQ0M7d0NBQXlCQyxTQUN4QlYsVUFBVSxDQUFDVyxPQUFVO2dEQUNuQixHQUFHQSxJQUFJO2dEQUNQVixNQUFNTyxPQUFPWCxLQUFLOzRDQUNwQjt1Q0FKV1csT0FBT1osSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnRDO0dBeEN3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IERyb3Bkb3duTWVudSwgRHJvcGRvd25NZW51VHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51Q29udGVudCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24sIEZpbHRlciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7IFxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU09SVF9PUFRJT05TID1bXG4gIHtuYW1lOlwiTm9uZVwiLCB2YWx1ZTpcIm5vbmVcIn0sIFxuICB7bmFtZTpcIkRpc3RhbmNlOiBsb3cgdG8gaGlnaFwiLCB2YWx1ZTpcImRpc3RhbmNlLWFzY1wifSxcbiAge25hbWU6XCJEaXN0YW5jZTogaGlnaCB0byBsb3dcIiwgdmFsdWU6XCJkaXN0YW5jZS1kZXNjXCJ9LCBcbl0gYXMgY29uc3RcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbZmlsdGVyLCBzZXRmaWx0ZXJdID0gdXNlU3RhdGUoe1xuICAgIHNvcnQ6J25vbmUnLFxuXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J214LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04Jz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTYgcHQtMjQnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAnPlxuICAgICAgICBIb2RvIEFwcFxuICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgY2xhc3NOYW1lPVwiZ3JvdXAgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWZyYXktNzAwIGhvdmVyOnRleHQtZ3JheS05MDAgXCI+XG4gICAgICAgICAgICBTb3J0XG4gICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPSctbXItMSBtbC0xIGgtNSB3LTUgZmxleC1zaHJpbmstMCB0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAnIC8+XG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGFsaWduPSdlbmQnPlxuXG4gICAgICAgICAgICB7U09SVF9PUFRJT05TLm1hcCgob3B0aW9uKT0+KFxuICAgICAgICAgICAgICA8YnV0dG9uIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIHNldGZpbHRlcigocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICBzb3J0OiBvcHRpb24udmFsdWVcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IFxuICAgICAgICBcbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51VHJpZ2dlciIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJDaGV2cm9uRG93biIsInVzZVN0YXRlIiwiU09SVF9PUFRJT05TIiwibmFtZSIsInZhbHVlIiwiSG9tZSIsImZpbHRlciIsInNldGZpbHRlciIsInNvcnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJhbGlnbiIsIm1hcCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});