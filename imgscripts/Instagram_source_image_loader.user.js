// ==UserScript==
// @name         Instagram_source_image_loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  reload with source image
// @author       Вася Сидоров
// @match        http*://*.instagram.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var metas = document.getElementsByTagName("meta");

    var i;
    for (i = 0; i < metas.length; i++ )
    {
        if (metas[i].attributes[0].value == "og:image")
        {
            window.location.replace(metas[i].attributes[1].value);
        }
    }
})();