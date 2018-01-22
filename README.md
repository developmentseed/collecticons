[![collecticons-banner](https://cloud.githubusercontent.com/assets/1090606/8695447/fdef92fa-2adc-11e5-8979-b61bd96d24ca.png)](https://collecticons.io)

# Collecticons

This repo contains the source code for the [Collecticons icon library website](https://collecticons.io).
If your looking for the actual icon library check [here](https://github.com/developmentseed/collecticons-lib). There's also a webfont generation util for advanced users which is available [here](https://github.com/developmentseed/collecticons-processor).

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v8 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules:

```
yarn install
```

### Getting started
```
$ yarn collecticons
```
Builds the icon font. Only needed when there are changes to the icon library.

```
$ yarn serve
```
Compiles the website and launches the server making it available at `http://localhost:3000/`

## Contributing
You are free to contribute to the project. If you find a bug and/or have a nice idea about a feature feel free to open an issue or submit your own solution. We'll be more than happy to hear your suggestions. :)

## License
Collecticons is licensed under **The MIT License (MIT)**, see the [LICENSE](LICENSE) file for more details.
