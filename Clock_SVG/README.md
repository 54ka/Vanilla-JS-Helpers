# Clock SVG by 54ka

![Image](https://github.com/54ka/Vanilla-JS-Helpers/blob/main/Clock_SVG/Screenshot.jpg)

# Featured

* Customize color
* Multiple usage in one page
* Time Zone Settings

For convenience, please see the list of time zones located in the file timeZonesList.txt

# Customize settings

svgClock("Wrap element ID", "Inactive color", "Active color", "Time Zone");

# Example

```js

<div id="clockNewYork"></div>

<script src="clockSVG.js"></script>
<script>
    svgClock("clockNewYork", "132328", "00a084", "America/New_York");
</script>

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