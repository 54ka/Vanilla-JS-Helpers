// Merge DIVs Calendar
// Copyright (c) 2021 Dimitar Hristov - 54ka, https://54ka.org

window.addEventListener('DOMContentLoaded', merge_DIVs);

function merge_DIVs() {
    mergeDIVsSettings.forEach((element, idx) => {
        merge_DIVs_Settings(element, idx);
    });
}

function merge_DIVs_Settings(settings, idx) {

    var wrap = settings.wrap_element;
    var a_class = settings.active_class;

    var margin = settings.margin;
    var colRow = settings.rows_columns_size;
    var fontsize = settings.font_size;
    var lineheight = settings.line_height;
    var b_rad = settings.border_radius;

    var i_border = settings.inactive_border;
    var i_background = settings.inactive_background;
    var i_color = settings.inactive_text_color;

    var a_background = settings.active_background;
    var a_color = settings.active_text_color;

    // STYLE //////////////////////////////////////////////
    if (mergeDIVsSettings[idx].fLoad === undefined) {
        var docHEAD = document.querySelector('head');
        var stl = document.createElement('style');
        stl.innerHTML = md_styleCSS();
        docHEAD.appendChild(stl);

        mergeDIVsSettings[idx].fLoad = false;
    }

    ///////////////////////////////////////////////////////
    var x = document.querySelectorAll(wrap + ' > div');
    var y = a_class;
    var c, d, e;

    for (var i = 1; i < x.length - 1; i++) {

        c = x[i - 1].getAttribute('class');
        d = x[i + 1].getAttribute('class');
        e = x[i].getAttribute('class');

        if (c === y && e === y && d === y) {
            x[i].setAttribute('style', `margin: ${margin} 0 ${margin} 0; border-radius: 0 0 0 0;`);
        }
        else if (c !== y && e === y && d !== y) {
            x[i].setAttribute('style', `margin: ${margin} ${margin} ${margin} ${margin};`);
        }
        else if (c !== y && e === y && d === y) {
            x[i].setAttribute('style', `margin: ${margin} 0 ${margin} ${margin}; border-radius: ${b_rad} 0 0 ${b_rad};`);
        }
        else if (c === y && e === y && d !== y) {
            x[i].setAttribute('style', `margin: ${margin} ${margin} ${margin} 0; border-radius: 0 ${b_rad} ${b_rad} 0;`);
        }
        else if (c === y && x[i - 2] === undefined && e !== y) {
            x[i - 1].setAttribute('style', `margin: ${margin} ${margin} ${margin} ${margin};`);
        }
        else if (i === x.length - 2 && d === y) {
            x[i + 1].setAttribute('style', `margin: ${margin} ${margin} ${margin} ${margin};`);
        } else { }

        if (x[i + 2] === undefined && e === y && d === y) {
            x[i + 1].setAttribute('style', `margin: ${margin} ${margin} ${margin} 0; border-radius: 0 ${b_rad} ${b_rad} 0;`);
        }

        if (c === y && x[i - 2] === undefined && e === y) {
            x[i - 1].setAttribute('style', `margin: ${margin} 0 ${margin} ${margin}; border-radius: ${b_rad} 0 0 ${b_rad};`);
        }

        if (i % 7 === 0) {
            x[i - 1].style.marginRight = `${margin}`;
            x[i].style.marginLeft = `${margin}`;
        }

    }


    function md_styleCSS() {
        return `
                    ${wrap} {
                        display: grid;
                        grid-template-columns: ${colRow} ${colRow} ${colRow} ${colRow} ${colRow} ${colRow} ${colRow};
                        grid-template-rows: ${colRow} ${colRow} ${colRow} ${colRow} ${colRow};
                        text-align: center;
                    }

                    ${wrap}>div {
                        border: ${i_border};
                        border-radius: ${b_rad};
                        margin: ${margin} ${margin} ${margin} ${margin};
                        font-size: ${fontsize};
                        line-height: ${lineheight};
                        background: ${i_background};
                        color: ${i_color};
                    }

                    ${wrap} .${a_class} {
                        margin: ${margin} 0 ${margin} 0;
                        border: 0;
                        background: ${a_background};
                        color: ${a_color};
                    }
                `;
    }

}