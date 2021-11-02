# Merge DIVs Calendar by 54ka

![Image](https://github.com/54ka/Vanilla-JS-Helpers/blob/main/Merge_DIVs_Calendar/Screenshot.jpg)

# Featured

* Reusable on the same page
* Customize settings
* Automatically creates CSS and adds it to HEAD

# Description

Allows easy merging of DIV elements. Can be used repeatedly on one page with different style settings.
If you are updating the calendar, all you need to do is call the merge_DIVs(); function to apply the settings again.

# Customize settings

```js

var mergeDIVsSettings = [
    {
        wrap_element: '.merge_Wrap',
        active_class: 'mrg',

        rows_columns_size: '50px',
        margin: '5px',
        border_radius: '10px',
        font_size: '16px',
        line_height: '39px',

        inactive_border: '1px solid #ccc',
        inactive_background: '#ebebeb',
        inactive_text_color: '#bcbcbc',

        active_background: 'orangered',
        active_text_color: '#ffffff',
    }
];

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