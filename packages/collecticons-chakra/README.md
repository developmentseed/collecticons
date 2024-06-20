[![collecticons-banner](https://cloud.githubusercontent.com/assets/1090606/8695447/fdef92fa-2adc-11e5-8979-b61bd96d24ca.png)](https://collecticons.io)

# Collecticons for Chakra UI

[Showcase](https://devseed.com/collecticons-chakra/)

This modules allows you to use [collecticons](http://collecticons.io/) svg icons with the [Chakra UI Library](https://chakra-ui.com/).

```bash
yarn add @devseed-ui/collecticons-chakra
```

## Props

Chakra style prop are supported, as well as the following:

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
|title |string|undefined|Descriptive title of the svg printed inside it. Required if `meaningful` is `true`.
|meaningful|boolean|false|Defines whether the icon has semantic meaning by setting the property of aria-hidden. When an icon is meaningful, a title property should be provided.|

## Decorative vs Meaningful icons
By default the collecticons are considered to be decorative elements (using `aria-hidden="true"`), but it is possible to give them semantic meaning by passing a descriptive `title` prop and defining them as `meaningful`.

```jsx
<CollecticonBrandCollecticons title="The logo of the collecticons icon library" meaningful />
```

## Creating custom icons (advanced)

Collecticons has an extensive selection of icons, but sometimes a project needs custom icons that are not (yet) available in the library.

These custom icons should be created the in same way collecticons are to ensure the correct interoperability between the different components where they're used.
By design, Collections only have one color which is then controlled via props, so it is important that the constituents of the SVG have a fill set to `currentColor`.

A collecticon can be created using the function `createCollecticon` which should return a React Component and has the following signature:

```
createCollecticon((props) => {}, iconSvgProps);

// props = {
//  title: string;
//  width: number;
//  height: number;
//  fill: string;
//  xmlns: string;
//  role: 'img';
//  viewBox: '0 0 16 16';
//  'aria-hidden': boolean;
//}
```

The SVG wrapper is added automatically by Chakra, so only the icon path should be returned.  
For accessibility purposes, a `<title>` should be added if it exists.

If there's the need to pass additional props to the SVG, they can be passed as the second argument to `createCollecticon`. As an example, if the icon was designed with a `viewBox` different from `0 0 16 16` this prop should be passed on creation.

Example
The following SVG icon:
```xml
<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
  <rect x="2" y="2" width="12" height="12" />
</svg>
```

Would be converted to a Collecticon as:
```jsx
const CollecticonSquare = createCollecticon((props) => (
  <>
    {props.title && (<title>{props.title}</title>)}
    <rect x="2" y="2" width="12" height="12" fill='currentColor' />
  </>
));

```