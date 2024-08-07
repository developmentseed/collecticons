[![collecticons-banner](https://cloud.githubusercontent.com/assets/1090606/8695447/fdef92fa-2adc-11e5-8979-b61bd96d24ca.png)](https://collecticons.io)

# Collecticons Library

We at [Development Seed](https://developmentseed.org/) use iconography in a lot of projects. Some of the icons were designed/built on top of libraries like [icoMoon by Keyamoon](https://github.com/Keyamoon/IcoMoon-Free) and others were made in house. This [evergrowing collection](https:collecticons.io) is a set of the icons we've been using so far and are now available for free under the [The MIT License](LICENSE) and the [Creative Commons Attribution License 4.0](https://creativecommons.org/licenses/by/4.0/).

If you feel like contributing to this library checkout the guidelines below:

## Contributing

**For development instructions, see [DEVELOPMENT.md](DEVELOPMENT.md).**

- Icons are to be placed in the `icons` directory. The build scripts will automatically generate the necessary files for the different packages.
- The icons in this package are designed on a 16px grid and look best at sizes that are multiples of that value (E.g. 16px, 32px, 48px, etc).
- Download the [template](collecticons-template.svg) file. You'll see a transparent 16px square (named `icon-bound`) being used as a wrapper. This should not be deleted and your artwork must be contained within its limits.
- The icons should look minimalist, geometric yet functional. Use a 2px stroke for general lines and 1px for details. Round corners should be avoided if their only purpose is decoration.
- It's of no use designing finely-detailed icons that don't work at lower resolutions. Do readability tests to ensure that your designs work at different sizes.
- Convert strokes to fills. Unite/combine your fills.
- Instead of using color white for making holes, subtract the foreground shape from the background shape.
- Adding a bitmap image (PNG, JPEG, etc.) to a SVG image does not make it vector. Don't use bitmap images embedded in SVGs.


### Name conventions
The name of the SVG file should follow the pattern:
```
collecticon-[object]-[classifier]-[index]--[small-modifier].svg
```
- **object**: Avoid using actions in the object part. Always go with real-world object names, except when there's no real-world counterpart or when the icon describes a specific/ubiquitous UI action, like `share` or `download`.
- **classifier**: Additional descriptor, can be simple like `open` or complex like `down-left`.
- **index**: Index for an alternative icon version.
- **small-modifier**: Alternative smaller version of an existing icon.

**Examples**:
```
collecticon-tick.svg
collecticon-lock-open.svg
collecticon-lock-open-2.svg
collecticon-chevron-down--small.svg
```

#### Groups
It is possible to group icons based on specific criteria, such as if the icon represents an existing `brand` or if it's formally contained within a `wrapper`. These should be placed before the name.

```
collecticon-[brand]-[name].svg
-- or --
collecticon-[wrapper]-[name].svg
```

- **brand**: Brand only applies when the icon represents an existing brand (E.g. Facebook, Twitter, etc).
- **wrapper**: Wrapper can be circle, disc, sign, etc.

> Note that `brand` and `wrapper` are mutually exclusive. There can't be a branded icon with a wrapper since brands follow the rules disciplined by their brand guides.

**Examples**:
```
collecticon-brand-instagram.svg
collecticon-circle-xmark.svg
```

### Optical size

Some icons are better expressed at smaller sizes, especially when they are presented alongside text. This means that their design doesn't need to occupy the whole grid. Try to use 80% or less of the grid space instead. Example: `sort`.

## Versioning
Collecticons operates similarly to [Semver](http://semver.org/) with the following version convention:

- Major: Breaking changes — removed icons, icon redesigns, name changes
- Minor: Non-breaking changes — new icons, minor icon changes
- Patch: Unnoticeable tweaks — slight visual changes, other updates

## Deployment

The deployment of a new package is done automatically by Github Actions whenever a new release is made. Nevertheless there is some manual work to be done:

- Once the packages are ready to be deployed update the versions using `yarn versionup`.
- Add an entry to the CHANGELOG.md file with a breakdown of the changes per package.
- Commit the changes and push to the repository.
- Create a new release on Github with the same version as the one in the package.json file adding the changelog entry to the description.

## Using Collecticons in your project

You can download the collecticons svgs to use directly in your project, or use one of the package versions. Check the relevant README file for more information.

- [@devseed-ui/collecticons-chakra](./packages/collecticons-chakra)
- [@devseed-ui/collecticons-react](./packages/collecticons-react)