// ==UserScript==
// @name         Hentai-Foundry_source_image_loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  reload page with source image
// @author       Вася Сидоров
// @match        http*://*.hentai-foundry.com/pictures/user/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const regex = /\/user\/(.*)\/(\d*)\/(.*)/g;
    let m;

    m = regex.exec(window.location.href);

    if (m != null)
    {
        var imgs = document.getElementsByTagName("img");

        var i;
        for(i = 0; i < imgs.length; i++ )
        {
            if (imgs[i].src.includes(m[1]) && imgs[i].src.includes(m[2])) window.location.replace(imgs[i].src);
        }
    }
})();