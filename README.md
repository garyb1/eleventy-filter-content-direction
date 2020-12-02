# Content Direction 11ty Filter

Hi! This is a simple filter that will change the content direction by appending the dir attribute to your content. This is useful when you quickly just want to test how your content looks without changing the root dir.

## Installation and Usage

`npm install eleventy-filter-content-direction`

By default, the content direction is ltr. By setting the direction as **_rtl_**, content will change it's direction accordingly.

```
// set direction to rtl
{{ "something" | direction: 'rtl' }}
// or set it back to ltr you can just remove it
{{ "something" | direction }} or {{ "something" }}
```
