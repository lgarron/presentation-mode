"use strict";

chrome.browserAction.onClicked.addListener(function () {
  chrome.windows.getCurrent(function (window) {
    if (window.state === "fullscreen") {
      chrome.windows.update(window.id, { state: "normal" });
    } else {
      chrome.windows.update(window.id, { state: "fullscreen" });
    }
  });
});