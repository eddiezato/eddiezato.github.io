// ==UserScript==
// @name         35photo_source_image_loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  reload with source image
// @author       Вася Сидоров
// @match        http*://*.35photo.pro/photo_*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var images = document.getElementsByTagName("img");
    var mainimg;
    var seriesimgs = [];
    var i;
    for (i = 0; i < images.length; i++)
    {
        if (images[i].src.includes("photos_main")) mainimg = images[i].src;
        if (images[i].src.includes("photos_series")) seriesimgs.push(images[i].src);
    }
    if (seriesimgs.length > 0)
    {
        var j;
        for (j = 1; j < seriesimgs.length; j++)
        {
            window.open(seriesimgs[j]);
        }
        window.location.replace(seriesimgs[0]);
    }
    else window.location.replace(mainimg);
})();