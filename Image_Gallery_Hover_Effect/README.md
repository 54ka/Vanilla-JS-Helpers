# Image Gallery Hover Effect by 54ka

![Image](https://github.com/54ka/Vanilla-JS-Helpers/blob/main/Read_More_JS/Screenshot.gif)

# Featured

* Custom transition effect
* Custom filter effect
* Custom ID selector

# Description

When you hover the mouse over the photo on all other photos that are in the packaging element will be applied effect.

# Customize CSS and JS settings

1. Customize CSS

```css

#myGallery img {
    transition: 400ms ease 100ms;
}

.effect {
    filter: blur(3px) grayscale(1);
}

```

2. Customize JS

```js

// Wrap element ID
var wrapEl = 'myGallery';

// The name of the CSS class with the effect
var cssEffect = 'effect';

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