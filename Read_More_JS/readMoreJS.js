// READ MORE JS
// Copyright (c) 2021 Dimitar Hristov - 54ka, https://54ka.org

(function () {

    // CUSTOM USER SETTINGS
    // Number of letters
    var max = 30;

    // You can change this text "..."  or add "false"
    var dots = '...';

    // Class name selector
    var selector = '.column';

    ////////////////////////////////////////////////

    // Add style ".read_more" to <HEAD>
    var docHEAD = document.querySelector('head');
    var stl = document.createElement('style');
    stl.innerHTML = '.read_more { display: none; }';
    docHEAD.appendChild(stl);

    // Loop
    document.querySelectorAll(selector)
        .forEach(el => {
            var w = el.innerText.split(' ');
            var sum = 0;
            var l = 0;

            for (var i = 0; i < w.length; i++) {
                sum = w[i].length + sum;
                if (sum > max) { break; } else { l = i + 1; }
            }

            if (sum > max) {
                w.splice(l, 0, '<span class="read_more">');
                el.innerHTML = w.join(' ');

                if (dots) {
                    el.innerHTML += '<span>' + dots + '</span>';
                }

                el.addEventListener('click', function () {
                    closeOpen(this);
                });
            }
        });

    function closeOpen(x) {
        x.children[0].classList.toggle("read_more");
        if (dots) {
            x.children[1].classList.toggle("read_more");
        }
    }

})();