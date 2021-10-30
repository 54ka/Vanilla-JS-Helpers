// Image Gallery Hover Effect
// Copyright (c) 2021 Dimitar Hristov - 54ka, https://54ka.org

(function () {

    // Wrap element ID
    var wrapEl = 'myGallery';

    // The name of the CSS class with the effect
    var cssEffect = 'effect';

    //////////////////////////////////////////////////////

    var wrp = document.getElementById(wrapEl);
    var img = Array.from(wrp.getElementsByTagName('img'));

    img.forEach(el => {
        el.addEventListener("mouseover", function () {
            img.forEach(x => x.classList.add(cssEffect));
            this.classList.remove(cssEffect);
        });
        el.addEventListener("mouseout", function () {
            img.forEach(x => x.classList.remove(cssEffect));
        });
    });

})();