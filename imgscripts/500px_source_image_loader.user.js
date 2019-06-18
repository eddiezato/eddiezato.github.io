// ==UserScript==
// @name         500px_source_image_loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  reload page with source image
// @author       Вася Сидоров
// @match        http*://500px.com/photo/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var scripts = document.getElementsByTagName("script");

    var i;
    for (i = 0; i < scripts.length; i++ ) {
        var gHtml = scripts[i].innerHTML;
        if (gHtml.includes("window.PxPreloadedData"))
        {
            const regex = /\"size\":2048,\"url\":.+\"https_url\":\"(.+)\",\"format\"/gm;
            let m;

            m = regex.exec(gHtml);
            var gUrl = m[1].replace(/\\/g, '');
            window.location.replace(gUrl);
        }
    }
})();