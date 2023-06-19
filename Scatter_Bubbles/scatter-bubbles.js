// Scatter Bubles
// Copyright (c) 2023 Dimitar Hristov - 54ka, https://54ka.org

function ffkaScatterBubles(settings) {

    const textArr = [
        "Здравей",      // Bulgarian
        "Hello",        // English
        "Hola",         // Spanish
        "Bonjour",      // French
        "Ciao",         // Italian
        "Hallo",        // German
        "こんにちは",    // Japanese
        "नमस्ते",         // Hindi
        "Merhaba",      // Turkish
        "مرحبا",        // Arabic
        "שלום",         // Hebrew
        "Olá",          // Portuguese
        "Привет",       // Russian
        "你好",         // Chinese (Mandarin)
        "Szia",         // Hungarian
        "Salut",        // Romanian
        "Sveiki",       // Latvian
        "Jambo",        // Swahili
        "สวัสดี",         // Thai
        "Halo",         // Indonesian
        "ہیلو",         // Urdu
        "Xin chào",     // Vietnamese
        "Hallo",        // Dutch
        "Hei",          // Norwegian
        "Hej",          // Swedish
        "Ahoj",         // Czech
        "Здраво",       // Serbian
        "Kia ora",      // Maori
    ];

    /////////////////////////////////////////////////////
    // CODE BEGIN HERE

    settings = {
        ...settings,
        TextArr: textArr
    };

    const wrap = document.querySelector(settings.Wrapper);

    if (!wrap || !settings || !settings.Wrapper || !settings.BubblesCount) {
        console.error('Scatter bubbles error! Missing settings!');
        return;
    }

    let settingsBoxCount;

    if (typeof settings.BubblesCount === 'object') {
        settingsBoxCount = getResponsiveBoxCount(settings.BubblesCount);
    } else if (typeof settings.BubblesCount === 'number') {
        settingsBoxCount = settings.BubblesCount;
    } else {
        console.error('Scatter bubbles error! Missing settings!');
        return;
    };

    const boxCount = Math.floor(settingsBoxCount / 2);
    const txtArr = settings.TextArr ? shuffleArray(settings) : null;

    const cW = wrap.clientWidth;
    const cH = wrap.clientHeight;

    const textbox = wrap.querySelector('div:first-child');
    let tH = 20;
    if (textbox) {
        tH = textbox.clientHeight;
    }

    const boxSizeMax = cW / boxCount;
    const boxSizeMin = boxSizeMax / 2;

    let n = 0;

    for (let i = 0; i < boxCount * 2; i++) {

        const sizeWidth = getRandom(boxSizeMin, boxSizeMax);
        const sizeHeight = sizeWidth / 2;

        const box = document.createElement("span");
        box.style.width = sizeWidth + 'px';
        box.style.height = sizeWidth / 2 + 'px';

        if (txtArr) {
            const iEl = document.createElement('i');
            iEl.style.fontSize = Math.floor(sizeWidth / 5) + 'px';
            iEl.innerText = txtArr[i];
            box.appendChild(iEl);
        }

        const bubble = document.createElement("span");
        box.appendChild(bubble);

        if (settings.RandomColor) {

            let brght;
            if (settings.ColorBrightness) {
                brght = getRandom(
                    settings.ColorBrightness[0],
                    settings.ColorBrightness[1]
                );
            } else {
                brght = getRandom(1, 3);
            }

            if (brght > 2) {
                box.style.color = '#000'
            }

            bubble.style.filter = 'hue-rotate(' + getRandom(0, 360) + 'deg) brightness(' + brght + ')';
        }

        box.style.left = getRandom(
            boxSizeMax * n,
            (boxSizeMax * (n + 1)) - sizeWidth
        ) + "px";

        box.style.top = getRandom(
            i <= boxCount - 1 ?
                n < 1 || n > boxCount - 2 ? cH / 2 - sizeHeight : 0
                :
                (cH / 2) + tH - 10,

            i <= boxCount - 1 ?
                (cH / 2) - tH - sizeHeight
                :
                n < 1 || n > boxCount - 2 ? cH / 2 : cH - sizeHeight - 10
        ) + "px";

        wrap.appendChild(box);

        n = i === boxCount - 1 ? n = 0 : n + 1;

    };

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function shuffleArray(settings) {

        let arr = settings.TextArr;

        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        if (arr.length < settingsBoxCount) {
            const newArr = [];
            for (let i = 0; i < settingsBoxCount; i++) {
                newArr.push(arr[i % arr.length]);
            }

            arr = newArr
        }

        return arr;

    };

    function getResponsiveBoxCount(obj) {

        let sortedKeys = Object.keys(obj).sort((a, b) => a - b);

        let winWidth = window.innerWidth;

        for (let i = 0; i < sortedKeys.length; i++) {
            let x = sortedKeys[i];
            if (winWidth <= Number(x)) {
                return obj[x];
            }
        }

        return obj[sortedKeys[sortedKeys.length - 1]];
    };

};

/////////////////////////////////////////////////////
// WINDOW RESIZE LISTENER

let ffkaResizeTimer;

window.addEventListener('resize', handleResizeStart);

function handleResizeStart(e) {
    clearTimeout(ffkaResizeTimer);
    ffkaResizeTimer = setTimeout(handleResizeEnd, 500);
};

function handleResizeEnd() {
    const list = [...document.querySelectorAll(ffkaScatterBubbles.Wrapper + '>span')];
    if (list.length > 0) {
        list.forEach(x => x.remove());
        ffkaScatterBubles(ffkaScatterBubbles);
    }
};