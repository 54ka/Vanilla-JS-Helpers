# Clock SVG by 54ka

![Image](https://github.com/54ka/Vanilla-JS-Helpers/blob/main/Clock_SVG/Screenshot.jpg)

# Featured

* Bubbles count - Fixed or Responsive count
* Random colors or Fixed color
* Color brightness settings - minimal and maximal values

# Customize settings optiion 1

```js

const ffkaScatterBubbles = {

    // Wrapper Class or ID name
    Wrapper: '.scatter-bubbles',
    
    // Fixed bubbles count
    BubblesCount: 20,

    // true - random colors 
    // false - static color (default is red)
    RandomColor: true,

    // Minimal and Maximal values
    // Minimal value is 1
    ColorBrightness: [1, 3]
    
};

ffkaScatterBubles(ffkaScatterBubbles);

```

# Customize settings optiion 2 (Responsive)

```js

const ffkaScatterBubbles = {
    Wrapper: '.scatter-bubbles',

    // Responsive settings
    // The object key is maximum resolution
    // The value is the number of bubbles for this resolution
    // You can add as many resolutions as you like, those shown here are for example only
    BubblesCount: {
        '400': 8,
        '800': 12,
        '1000': 16,
        '1200': 24
    },

    RandomColor: true,
    ColorBrightness: [1, 3]
};

ffkaScatterBubles(ffkaScatterBubbles);

```


# Complete html example

```html

<!DOCTYPE html>
<html lang="en">
<head>

    <link rel="stylesheet" href="./scatter-bubbles.css">

</head>
<body>


    <div class="scatter-bubbles">
        <div>
            Scatter bubbles vanilla JS!
        </div>
    </div>


    <script src="./scatter-bubbles.js"></script>

    <script>

        const ffkaScatterBubbles = {
            Wrapper: '.scatter-bubbles',
            BubblesCount: {
                '400': 8,
                '800': 12,
                '1000': 16,
                '1200': 24
            },
            RandomColor: true,
            ColorBrightness: [1, 3]
        };

        ffkaScatterBubles(ffkaScatterBubbles);

    </script>

</body>
</html>

```

# MIT License

Copyright (c) 2023 Dimitar Hristov - 54ka, https://54ka.org

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