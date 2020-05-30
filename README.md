# normal.css

> A modern alternative to CSS resets

**NPM**

```sh
npm install --save @aman-atg/normal.css
```

**CDN**

- https://unpkg.com/@aman-atg/normal.css
- https://cdn.jsdelivr.net/npm/@aman-atg/normal.css

**Download**

# Usage

**In HTML**

```sh
  <link
    rel="stylesheet"
    href="https://unpkg.com/@aman-atg/normal.css"
  />
```

_OR_

```sh
  <link
    rel="stylesheet"
    href="path/to/local/normal.min.css"
  />
```

**In CSS/SCSS**

```sh
@import url("https://unpkg.com/@aman-atg/normal.css");
```

**In JS**

```sh
import "@aman-atg/normal.css";
```

_OR_

```sh
require("@aman-atg/normal.css');
```

_OR_

```sh
require("path/to/local/normal.min.css");
```

**Note:- First two will work if You have the npm package.**

## What does it do?

- Preserves useful defaults, unlike many CSS resets.
- Normalizes styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- Improves usability with subtle modifications.
- Explains what code does using detailed comments.

## What I did

- Removed Unnecessary Code

## Normalize.css Vs Normal.css

- Use this one only if you are looking for a basic css reset and don't want too much code.
- This version doesn't contain extra code for elements like :- sub,sup,small,fieldset,legend,progress,details,summary,template
- NO CODE FOR SOLVING ISSUES WITH INTERNET EXPLORER

## Browser support

- Chrome
- Edge
- Firefox ESR+
- Safari 8+
- Opera
