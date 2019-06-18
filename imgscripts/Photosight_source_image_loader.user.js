// ==UserScript==
// @name         Photosight_source_image_loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  reload with source image
// @author       Вася Сидоров
// @match        http*://*.photosight.ru/photos/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var target = document.getElementById('big_photo');
    window.location.replace(target.src);
})();