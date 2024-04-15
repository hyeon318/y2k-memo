/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

chrome.runtime.onInstalled.addListener(function () {
    console.log("I just installed my chrome extension");
});
chrome.bookmarks.onCreated.addListener(function () {
    console.log("I just bookmarked this page");
});

/******/ })()
;
//# sourceMappingURL=background.js.map