// ClockSVG
// Copyright (c) 2021 Dimitar Hristov - 54ka, https://54ka.org

function svgClock(p, b, f, z) {

    var clockBackColor = b;
    var clockFrontColor = f;
    var clockPath = p;
    var getTimeZone = z;

    document.getElementById(clockPath).innerHTML = sourceSVG(clockPath, clockFrontColor);

    (function ffkaClockFunc() {

        setTimeout(ffkaClockFunc, 1000);

        // Get time
        var date = new Date();
        var today = new Date(date.toLocaleString("en-US", { timeZone: getTimeZone }));

        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        h = checkTime(h).toString();
        m = checkTime(m).toString();
        s = checkTime(s).toString();

        // Add zero
        function checkTime(i) {
            return i < 10 ? i = "0" + i : i;
        }

        var hsmArr = (h + m + s).split('').map(Number);

        // Clock colors
        if (clockBackColor === undefined && clockFrontColor === undefined) {
            clockBackColor = "ebebeb";
            clockFrontColor = "000000";
        }

        // Loop SVG
        hsmArr.forEach((element, i) => {

            var c;
            switch (i) {
                case 0: c = clockPath + "-num_000"; break;
                case 1: c = clockPath + "-num_001"; break;
                case 2: c = clockPath + "-num_002"; break;
                case 3: c = clockPath + "-num_003"; break;
                case 4: c = clockPath + "-num_004"; break;
                case 5: c = clockPath + "-num_005"; break;
                default: '';
            }

            var numarr;
            switch (element) {
                case 0: numarr = [1, 1, 1, 0, 1, 1, 1]; break;
                case 1: numarr = [0, 0, 1, 0, 0, 1, 0]; break;
                case 2: numarr = [1, 0, 1, 1, 1, 0, 1]; break;
                case 3: numarr = [1, 0, 1, 1, 0, 1, 1]; break;
                case 4: numarr = [0, 1, 1, 1, 0, 1, 0]; break;
                case 5: numarr = [1, 1, 0, 1, 0, 1, 1]; break;
                case 6: numarr = [1, 1, 0, 1, 1, 1, 1]; break;
                case 7: numarr = [1, 0, 1, 0, 0, 1, 0]; break;
                case 8: numarr = [1, 1, 1, 1, 1, 1, 1]; break;
                case 9: numarr = [1, 1, 1, 1, 0, 1, 1]; break;
                default: numarr = [0, 0, 0, 0, 0, 0, 0];
            }

            var p = Array.from(document.getElementById(c).getElementsByTagName("path"));

            p.forEach((el, ii) => {
                if (i === 0 && element === 0) {
                    el.setAttribute("style", "fill: #" + clockBackColor + ";");
                    el.setAttribute("class", "clockBackColor");
                } else {
                    if (numarr[ii] === 0) {
                        el.setAttribute("style", "fill: #" + clockBackColor + ";");
                        el.setAttribute("class", "clockBackColor");
                    } else {
                        el.setAttribute("style", "fill: #" + clockFrontColor + ";");
                        el.setAttribute("class", "clockFrontColor");
                    }
                }
            });

        });

    })();

}




function sourceSVG(clockPath, clockFrontColor) {

    return '\
              <style>\
                #'+ clockPath + '-dots path { fill:#' + clockFrontColor + ';}\
              </style>\
              <svg style="display: none;">\
                <symbol id="'+ clockPath + '-myClock">\
                  <g>\
                    <g id="'+ clockPath + '-num_000">\
                      <path d="M 10,8 L 14,4 L 42,4 L 46,8 L 42,12 L 14,12 L 10,8 z" />\
                      <path d="M 8,10 L 12,14 L 12,42 L 8,46 L 4,42 L 4,14 L 8,10 z" />\
                      <path d="M 48,10 L 52,14 L 52,42 L 48,46 L 44,42 L 44,14 L 48,10 z" />\
                      <path d="M 10,48 L 14,44 L 42,44 L 46,48 L 42,52 L 14,52 L 10,48 z" />\
                      <path d="M 8,50 L 12,54 L 12,82 L 8,86 L 4,82 L 4,54 L 8,50 z" />\
                      <path d="M 48,50 L 52,54 L 52,82 L 48,86 L 44,82 L 44,54 L 48,50 z" />\
                      <path d="M 10,88 L 14,84 L 42,84 L 46,88 L 42,92 L 14,92 L 10,88 z" />\
                    </g>\
                    <g id="'+ clockPath + '-num_001">\
                      <path d="M 66,8 L 70,4 L 98,4 L 102,8 L 98,12 L 70,12 L 66,8 z" />\
                      <path d="M 64,10 L 68,14 L 68,42 L 64,46 L 60,42 L 60,14 L 64,10 z" />\
                      <path d="M 104,10 L 108,14 L 108,42 L 104,46 L 100,42 L 100,14 L 104,10 z" />\
                      <path d="M 66,48 L 70,44 L 98,44 L 102,48 L 98,52 L 70,52 L 66,48 z" />\
                      <path d="M 64,50 L 68,54 L 68,82 L 64,86 L 60,82 L 60,54 L 64,50 z" />\
                      <path d="M 104,50 L 108,54 L 108,82 L 104,86 L 100,82 L 100,54 L 104,50 z" />\
                      <path d="M 66,88 L 70,84 L 98,84 L 102,88 L 98,92 L 70,92 L 66,88 z" />\
                    </g>\
                    <g id="'+ clockPath + '-num_002">\
                      <path d="M 134,8 L 138,4 L 166,4 L 170,8 L 166,12 L 138,12 L 134,8 z" />\
                      <path d="M 132,10 L 136,14 L 136,42 L 132,46 L 128,42 L 128,14 L 132,10 z" />\
                      <path d="M 172,10 L 176,14 L 176,42 L 172,46 L 168,42 L 168,14 L 172,10 z" />\
                      <path d="M 134,48 L 138,44 L 166,44 L 170,48 L 166,52 L 138,52 L 134,48 z" />\
                      <path d="M 132,50 L 136,54 L 136,82 L 132,86 L 128,82 L 128,54 L 132,50 z" />\
                      <path d="M 172,50 L 176,54 L 176,82 L 172,86 L 168,82 L 168,54 L 172,50 z" />\
                      <path d="M 134,88 L 138,84 L 166,84 L 170,88 L 166,92 L 138,92 L 134,88 z" />\
                    </g>\
                    <g id="'+ clockPath + '-num_003">\
                      <path d="M 190,8 L 194,4 L 222,4 L 226,8 L 222,12 L 194,12 L 190,8 z" />\
                      <path d="M 188,10 L 192,14 L 192,42 L 188,46 L 184,42 L 184,14 L 188,10 z" />\
                      <path d="M 228,10 L 232,14 L 232,42 L 228,46 L 224,42 L 224,14 L 228,10 z" />\
                      <path d="M 190,48 L 194,44 L 222,44 L 226,48 L 222,52 L 194,52 L 190,48 z" />\
                      <path d="M 188,50 L 192,54 L 192,82 L 188,86 L 184,82 L 184,54 L 188,50 z" />\
                      <path d="M 228,50 L 232,54 L 232,82 L 228,86 L 224,82 L 224,54 L 228,50 z" />\
                      <path d="M 190,88 L 194,84 L 222,84 L 226,88 L 222,92 L 194,92 L 190,88 z" />\
                    </g>\
                    <g id="'+ clockPath + '-num_004">\
                      <path d="M 258,8 L 262,4 L 290,4 L 294,8 L 290,12 L 262,12 L 258,8 z" />\
                      <path d="M 256,10 L 260,14 L 260,42 L 256,46 L 252,42 L 252,14 L 256,10 z" />\
                      <path d="M 296,10 L 300,14 L 300,42 L 296,46 L 292,42 L 292,14 L 296,10 z" />\
                      <path d="M 258,48 L 262,44 L 290,44 L 294,48 L 290,52 L 262,52 L 258,48 z" />\
                      <path d="M 256,50 L 260,54 L 260,82 L 256,86 L 252,82 L 252,54 L 256,50 z" />\
                      <path d="M 296,50 L 300,54 L 300,82 L 296,86 L 292,82 L 292,54 L 296,50 z" />\
                      <path d="M 258,88 L 262,84 L 290,84 L 294,88 L 290,92 L 262,92 L 258,88 z" />\
                    </g>\
                    <g id="'+ clockPath + '-num_005">\
                      <path d="M 314,8 L 318,4 L 346,4 L 350,8 L 346,12 L 318,12 L 314,8 z" />\
                      <path d="M 312,10 L 316,14 L 316,42 L 312,46 L 308,42 L 308,14 L 312,10 z" />\
                      <path d="M 352,10 L 356,14 L 356,42 L 352,46 L 348,42 L 348,14 L 352,10 z" />\
                      <path d="M 314,48 L 318,44 L 346,44 L 350,48 L 346,52 L 318,52 L 314,48 z" />\
                      <path d="M 312,50 L 316,54 L 316,82 L 312,86 L 308,82 L 308,54 L 312,50 z" />\
                      <path d="M 352,50 L 356,54 L 356,82 L 352,86 L 348,82 L 348,54 L 352,50 z" />\
                      <path d="M 314,88 L 318,84 L 346,84 L 350,88 L 346,92 L 318,92 L 314,88 z" />\
                    </g>\
                  </g>\
                  <g id="'+ clockPath + '-dots">\
                    <path class="clockFrontColor" transform="matrix(0.9887175,0,0,0.9870497,88.293345,-3.5855904)" d="M 34,32 A 4,4 0 1 1 26,32 A 4,4 0 1 1 34,32 z" />\
                    <path class="clockFrontColor" transform="matrix(0.9887175,0,0,0.9870497,88.293345,36.41441)" d="M 34,32 A 4,4 0 1 1 26,32 A 4,4 0 1 1 34,32 z" />\
                    <path class="clockFrontColor" transform="matrix(0.9887175,0,0,0.9870497,212.29334,-3.5855904)" d="M 34,32 A 4,4 0 1 1 26,32 A 4,4 0 1 1 34,32 z" />\
                    <path class="clockFrontColor" transform="matrix(0.9887175,0,0,0.9870497,212.29334,36.41441)" d="M 34,32 A 4,4 0 1 1 26,32 A 4,4 0 1 1 34,32 z" />\
                  </g>\
                </symbol>\
              </svg>\
              <div class="ffkaClockWrapBox">\
                <svg viewBox="0 0 360 96">\
                  <use xlink:href="#'+ clockPath + '-myClock" />\
                </svg>\
              </div>\
        ';
}