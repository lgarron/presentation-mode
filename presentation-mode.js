"use strict";

function toggle() {
  chrome.windows.getCurrent(function (window) {
    if (window.state === "fullscreen") {
      chrome.windows.update(window.id, { state: "normal" });
    } else {
      chrome.windows.update(window.id, { state: "fullscreen" });
    }
  });
}

chrome.commands.onCommand.addListener(toggle);
chrome.browserAction.onClicked.addListener(toggle);