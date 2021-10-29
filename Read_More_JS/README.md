# Read More JS by 54ka

![Image](https://github.com/54ka/Vanilla-JS-Helpers/blob/main/Read_More_JS/Screenshot.gif)

# Featured

* Number of letters
* Custom "Read more" text
* Custom class name selector

# Description

The script counts letters! In order not to cut words, check the words that can be collected in this number of letters. The rest of the text is closed in a SPAN element with class "read_more". On each item with class "column" is placed a listener for a click. When clicked, it adds or removes the "read_more" class of the SPAN element.

# Customize settings

```js

// Number of letters
var max = 30;

// You can change this text "..."  or add "false"
var dots = '...';

// Class name selector
var selector = '.column';

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