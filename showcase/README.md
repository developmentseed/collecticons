[![collecticons-banner](https://cloud.githubusercontent.com/assets/1090606/8695447/fdef92fa-2adc-11e5-8979-b61bd96d24ca.png)](https://collecticons.io)

# Showcase website for Collecticons

## Installation and Usage
See root readme for installation instructions.

## Usage

### Starting the app

```
yarn serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:9000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

# Deployment
To prepare the app for deployment run:

```
yarn build
```
This will package the app and place all the contents in the `public` directory.
The app can then be run by any web server.

**When building the site for deployment provide the base url trough the `PUBLIC_URL` environment variable. Omit the leading slash. (E.g. https://example.com)**
