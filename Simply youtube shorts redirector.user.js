// ==UserScript==
// @name         Simply youtube shorts redirector
// @namespace    http://tampermonkey.net/
// @version      0.2137
// @description  Redirecting youtub shorts!
// @author       Yolopronoscop3r & AvengeR-13
// @match        https://www.youtube.com/*
// @match        http://www.youtube.com/*
// @match        https://m.youtube.com/*
// @match        https://www.youtube-nocookie.com/*
// @match        https://music.youtube.com/*
// @run-at       document-start

// ==/UserScript==

let previousUrl = '';
const observer = new MutationObserver(function (mutations) {
    if (location.href !== previousUrl) {
        previousUrl = location.href;
        if (/shorts\//.test(location.pathname)) {
            location.replace(location.protocol + "//" + location.host + location.pathname.replace(/shorts\//, "watch?v=") + location.search + location.hash);
        }
    }
});

const config = { subtree: true, childList: true };
observer.observe(document, config);