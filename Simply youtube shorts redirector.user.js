// ==UserScript==
// @name         Simply youtube shorts redirector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redirecting youtub shorts!
// @author       Macieg
// @match           https://www.youtube.com/shorts/*
// @match           https://m.youtube.com/shorts/*
// @match           https://www.youtube-nocookie.com/shorts/*
// @match           https://music.youtube.com/shorts/*
// @run-at          document-start
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

//    if (/shorts\//.test(location.pathname) ) {
location.replace(location.protocol + "//" + location.host + location.pathname.replace(/shorts\//, "watch?v=") + location.search + location.hash);