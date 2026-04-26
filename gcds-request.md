# Adding GCDS Tokens & styling to MapML

This guide walks you through installing and applying GC Design System (GCDS) tokens, fonts, and styles to the `@maps4html/mapml` project.


## Step 1 - Install dependencies



1. Install GCDS Tokens

From the root of your `@maps4html/mapml` project, run:

Then import the tokens at the **top** of your <code>[mapml.css](https://github.com/Maps4HTML/MapML.js/blob/main/src/mapml.css)</code> file:

```css
/* -- GC Design System Tokens -- */
@import '../node_modules/@gcds-core/tokens/build/web/css/tokens.css';
```

2. Install GCDS Fonts & Icons

From the root of your `@maps4html/mapml` project, run:

```shell
npm install @gcds-core/fonts
```
Add the following directly **after the tokens import** in <code>[mapml.css](https://github.com/Maps4HTML/MapML.js/blob/main/src/mapml.css)</code>:

Lato (headings)
```css
/* -- GC Design System Fonts - Lato -- */
@font-face {
  font-family: 'Lato';
  src: url('../node_modules/@gcds-core/fonts/fonts/lato/gcds-lato.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/lato/gcds-lato.woff')
      format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('../node_modules/@gcds-core/fonts/fonts/lato/gcds-lato-italic.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/lato/gcds-lato-italic.woff')
      format('woff');
  font-weight: 700;
  font-style: italic;
}
```

Noto Sans (body text)
```css
/* -- GC Design System Fonts - Noto Sans -- */
@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-light.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-light.woff')
      format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-light-italic.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-light-italic.woff')
      format('woff');
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-regular.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-regular.woff')
      format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-regular-italic.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-regular-italic.woff')
      format('woff');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-medium.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-medium.woff')
      format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-medium-italic.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-medium-italic.woff')
      format('woff');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-semibold.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-semibold.woff')
      format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-semibold-italic.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-semibold-italic.woff')
      format('woff');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-bold.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-bold.woff')
      format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Noto Sans';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-bold-italic.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans/gcds-noto-sans-bold-italic.woff')
      format('woff');
  font-weight: 700;
  font-style: italic;
}
```

Noto Sans Mono (Code)
```css
/* -- GC Design System Fonts - Noto Sans Mono -- */
@font-face {
  font-family: 'Noto Sans Mono';
  src: url('../node_modules/@gcds-core/fonts/fonts/noto-sans-mono/gcds-noto-sans-mono.woff2')
      format('woff2'),
    url('../node_modules/@gcds-core/fonts/fonts/noto-sans-mono/gcds-noto-sans-mono.woff')
      format('woff');
  font-weight: 400;
  font-style: normal;
}
```

Icons
```css
/* -- GC Design System Fonts - Icons -- */
@font-face {
  font-family: 'gcds-icons';
  src: url('../node_modules/@gcds-core/fonts/fonts/icons/gcds-icons.eot');
  src: url('../node_modules/@gcds-core/fonts/fonts/icons/gcds-icons.eot');
  src: url('../node_modules/@gcds-core/fonts/fonts/icons/gcds-icons.eot#iefix')
      format('embedded-opentype'),
    url('../node_modules/@gcds-core/fonts/fonts/icons/gcds-icons.ttf')
      format('truetype'),
    url('../node_modules/@gcds-core/fonts/fonts/icons/gcds-icons.woff')
      format('woff'),
    url('../node_modules/@gcds-core/fonts/fonts/icons/gcds-icons.svg')
      format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^='gcds-icon-'],
[class*=' gcds-icon-'] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'gcds-icons' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gcds-icon-checkmark-circle:before {
  content: '\e908';
}

.gcds-icon-chevron-down:before {
  content: '\e900';
}

.gcds-icon-chevron-left:before {
  content: '\e901';
}

.gcds-icon-chevron-right:before {
  content: '\e902';
}

.gcds-icon-chevron-up:before {
  content: '\e903';
}

.gcds-icon-close:before {
  content: '\e90b';
}

.gcds-icon-download:before {
  content: '\e906';
}

.gcds-icon-email:before {
  content: '\e905';
}

.gcds-icon-exclamation-circle:before {
  content: '\e909';
}

.gcds-icon-external:before {
  content: '\e904';
}

.gcds-icon-info-circle:before {
  content: '\e90a';
}

.gcds-icon-phone:before {
  content: '\e90c';
}

.gcds-icon-search:before {
  content: '\e907';
}

.gcds-icon-warning-triangle:before {
  content: '\e90d';
}
```

## Step 2 - Apply GCDS Tokens & styles

Once the GCDS tokens are installed and loaded, begin replacing hardcoded values across your CSS.

What to Replace



* **Colours →** [GCDS colour tokens](https://design-system.canada.ca/en/styles/colour/)
* **Font families, font sizes, etc. →** [GCDS typography tokens](https://design-system.canada.ca/en/styles/typography/)
* **Spacing →** [GCDS spacing tokens](https://design-system.canada.ca/en/styles/spacing/)
* **Directional properties →** Logical properties (for accessibility and internationalization)

Following these steps will ensure consistency with the GC Design System. Using logical properties improves support for different writing modes (e.g., right-to-left languages) and enhances overall accessibility.


### Example 1 (Link styling)

Before: 
```css
.leaflet-control-attribution a {
  color: revert;
  text-decoration: revert;
}
```

After:
```css
.leaflet-control-attribution a {
  color: var(--gcds-link-default);
  text-decoration: revert;

  @media (hover: hover) {
    &:hover {
      text-decoration-thickness: var(--gcds-link-hover-decoration-thickness);
      color: var(--gcds-link-hover);
    }
  }

  &:visited:not(:focus) {
    color: var(--gcds-link-visited);
  }

  &:focus {
    background-color: var(--gcds-link-focus-background);
    color: var(--gcds-link-focus-text);
    border-radius: var(--gcds-link-focus-border-radius);
    box-shadow: var(--gcds-link-focus-box-shadow);
    outline: var(--gcds-link-focus-outline-width) solid
      var(--gcds-link-focus-background);
    outline-offset: var(--gcds-link-focus-outline-offset);
    text-decoration: none;
  }
}
```


### Example 2 (Container styling)

Before: 
.leaflet-container .leaflet-control-attribution {
  background-color: #fff;
  border-radius: 1.5em;
  color: currentColor;
  margin: 5px;
  min-height: 30px;
  min-width: 30px;
  padding: 0;
}


After: 
.leaflet-container .leaflet-control-attribution {
  background-color: var(--gcds-bg-white);
  border-radius: 1.5em;
  color: currentColor;
  margin: var(--gcds-spacing-50);
  min-height: var(--gcds-spacing-350);
  min-width: var(--gcds-spacing-350);
  padding: 0;
}



## Use Logical Properties Instead of Directional Ones

Avoid physical/directional properties such as:



* `border-top`, `border-bottom`, `margin-left`, `padding-right`, etc.

Instead, use **logical properties**, which adapt automatically based on language and writing direction:



* `border-block-start`, `border-block-end`
* `margin-inline-start`, `padding-inline-end`, etc.


### Example 3 (Border + colours)

Before:
.mapml-contextmenu button.mapml-contextmenu-item.over {
  background-color: #f4f4f4;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

After:
.mapml-contextmenu button.mapml-contextmenu-item.over {
  background-color: var(--gcds-bg-light);
  border-block-start: var(--gcds-border-width-sm) solid var(--gcds-color-grayscale-100);
  border-block-end: var(--gcds-border-width-sm) solid var(--gcds-color-grayscale-100);
}

## Summary

* Install **tokens** and **fonts.**
* Import them at the top of your CSS.
* Replace hardcoded values with GCDS tokens:
* Colours → colour tokens
* Typography → font/size tokens
* Spacing → spacing tokens
* Use **CSS logical properties** (e.g., `border-block-start`, `margin-inline-start`) instead of directional properties (`border-top`, `margin-left`) to improve accessibility and support for different writing modes