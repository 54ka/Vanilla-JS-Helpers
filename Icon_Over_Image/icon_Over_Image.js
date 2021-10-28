// ICON OVER IMAGE
// Copyright (c) 2021 Dimitar Hristov - 54ka, https://54ka.org

// Settings
const ioi_Settings = {
    // Select wrap element:
    // For all images in document use 'body'
    // To select images only in a specific item select by class or ID // .wrap / #wrap
    wrapElement: 'body',

    // Icon position
    // left-top / right-top / left-bottom / right-bottom / center-center
    position: 'left-bottom',

    // Images larger than the specified size in pixels
    imageMinSize: 200,

    // When we stand with the mouse on a picture to change the transparency of the icon
    // 'iconOpactOver' is transparency value
    imageHover: true,
    iconOpacityOver: 0.5,

    // Add an event listener when the photo is clicked
    // If 'true' when click over image call function 'clickOverImage()'
    imageClick: true,

    // Add an event listener when the icon is clicked
    // If 'true' when click over icon call function 'clickOverIcon()'
    iconClick: true,

    // Icon path, size, and margins
    iconPath: 'icon-image-zoom.svg',
    iconSizeW: 50,
    iconSizeH: 50,
    marginTop: 10,
    marginLeft: 10,

    // Transparency of the icon
    iconOpacity: 0.2,

    // Icon`s transparency when hover it
    iconOpacityHover: 1,
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// WRITE YOUR CODE HERE
// What to do when you click on the icon and image

function clickOverIcon() {

    // Click on the ICON
    // This example code takes the path of the picture
    alert('Icon Click: ' + this.nextSibling.src);

}

function clickOverImage() {

    // Click on the IMAGE
    // This example code takes the path of the picture
    alert('Image Click: ' + this.src);

}

// END YOUR CODE
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

window.addEventListener("load", iconOverImage);

function iconOverImage() {

    var wrapElement = ioi_Settings.wrapElement;

    var position = ioi_Settings.position;

    var imageMinSize = ioi_Settings.imageMinSize;

    var imageHover = ioi_Settings.imageHover;
    var imageClick = ioi_Settings.imageClick;

    var iconClick = ioi_Settings.iconClick;

    var iconPath = ioi_Settings.iconPath;
    var iconSizeW = ioi_Settings.iconSizeW;
    var iconSizeH = ioi_Settings.iconSizeH;
    var marginTop = ioi_Settings.marginTop;
    var marginLeft = ioi_Settings.marginLeft;
    var iconOpactLeave = ioi_Settings.iconOpacity;
    var iconOpactOver = ioi_Settings.iconOpacityOver;
    var iconOpactHover = ioi_Settings.iconOpacityHover;

    //////////////////////////////////////////////////
    var wrap = document.querySelector(wrapElement);
    var list = wrap.querySelectorAll('img');

    if (list.length > 0) {

        // First Load ////////////////////////////////
        list.forEach(function (el) {

            if (el.width >= imageMinSize || el.height >= imageMinSize) {

                var icon = document.createElement("div");
                icon.classList.add('img-zoom-icon');
                el.parentNode.insertBefore(icon, el);

                if (imageHover) {
                    el.addEventListener('mouseover', function () {
                        this.previousSibling.style.opacity = iconOpactOver;
                    });

                    el.addEventListener('mouseleave', function () {
                        this.previousSibling.style.opacity = null;
                    });
                }

                if (imageClick) {
                    el.addEventListener('click', clickOverImage);
                }

                if (iconClick) {
                    icon.addEventListener('click', clickOverIcon);
                }

            }

        });

        // Add Style to HEAD //////////////////////////
        var docHEAD = document.querySelector('head');
        var stl = document.createElement('style');

        stl.innerHTML = '.img-zoom-icon {position: absolute; z-index: 2; width:' + iconSizeW + 'px; height:' + iconSizeH + 'px; opacity:' + iconOpactLeave + '; background:url(' + iconPath + ');}';

        stl.innerHTML += ' .img-zoom-icon:hover { opacity:' + iconOpactHover + '!important; }'

        docHEAD.appendChild(stl);

        // Select New Elements ///////////////////////
        var zoomIconsList = wrap.querySelectorAll('.img-zoom-icon');

        zoomIconsPositions();

        window.addEventListener("resize", function () {
            zoomIconsPositions();
        });

        function zoomIconsPositions() {
            zoomIconsList.forEach(function (el) {
                var image = el.nextSibling;
                var x = image.offsetLeft;
                var y = image.offsetTop;

                if (position === 'left-top') {
                    x = x + marginLeft;
                    y = y + marginTop;
                }
                else if (position === 'right-top') {
                    x = x + image.width - iconSizeW - marginLeft;
                    y = y + marginTop;
                }
                else if (position === 'left-bottom') {
                    x = x + marginLeft;
                    y = y + image.height - iconSizeH - marginTop;
                }
                else if (position === 'right-bottom') {
                    x = x + image.width - iconSizeW - marginLeft;
                    y = y + image.height - iconSizeH - marginTop;
                }
                else if (position === 'center-center') {
                    x = x + ((image.width - iconSizeW) / 2);
                    y = y + ((image.height - iconSizeH) / 2);
                }

                el.setAttribute('style', 'top:' + y + 'px; left:' + x + 'px');
            });
        }

    }

}