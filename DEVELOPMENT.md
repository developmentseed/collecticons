[![collecticons-banner](https://cloud.githubusercontent.com/assets/1090606/8695447/fdef92fa-2adc-11e5-8979-b61bd96d24ca.png)](https://collecticons.io)

## Installation and Usage
The steps below will walk you through setting up your own instance of the project.

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v20 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

You'll also need to use the correct `yarn` version. Enable with
```
corepack enable
```

Install Node modules:

```
yarn install
```

## Usage

The project uses `yarn workspaces` and `lerna` to manage the monorepo structure.  
There are three main packages in this project:
- [`@deveed-ui/collecticons-react](./packages/collecticons-react)` - The Collecticons library for React
- [`@deveed-ui/collecticons-chakra](./packages/collecticons-chakra)` - The Collecticons library specifically for Chakra UI
- [`@deveed-ui/collecticons-showcase](./showcase)` - A private package that contains the showcase website for Collecticons

The first thing to do is generate the JSX icons from the SVG files, both for the React and Chakra UI packages.

Run
```bash
yarn icons
```
The generated icons will be placed in the `lib/icons` directory of each package. This is gitignored so you don't need to worry about them.

Now you can work on each package individually following the respective README.md instructions.
