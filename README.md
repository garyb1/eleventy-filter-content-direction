# Content Direction 11ty Filter

Hi! This is a simple filter that will change the content direction by appending the dir attribute to your content. This is useful when you quickly just want to test how your content looks without changing the root dir.

## Installation and Usage

`npm install eleventy-filter-content-direction`

By default, the content direction is ltr. By setting the direction as **_rtl_** or **\_ltr\_\_**, content will change it's direction accordingly.

Firstly, you need to add the filter to your eleventy config

```
const directionFilter = require("eleventy-filter-content-direction");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("direction", directionFilter);
};

```

Then you need to add the filter in your markup. It's default value is `auto`

```
// set direction to rtl
{{ "something" | direction: 'rtl' }}
// or set it  to ltr
{{ "something" | direction: 'ltr' }}
// if unsure, it will default to auto which lets the user agent decide.
{{ "something" | direction }}
```
