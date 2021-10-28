# Icon Over Image by 54ka

![Image](https://github.com/54ka/Vanilla-JS-Helpers/blob/main/Icon_Over_Image/Screenshot.jpg)

# Customize settings

```js
const ioi_Settings = {
    // Select wrap element:
    // For all images in document use 'body'
    // To select images only in a specific item select by class or ID // .wrap / #wrap
    wrapElement: 'body',

    // Icon positio
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
```

# MIT License

Copyright (c) 2021 Dimitar Hristov - 54ka, https://54ka.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.