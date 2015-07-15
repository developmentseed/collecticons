[![collecticons-banner](https://cloud.githubusercontent.com/assets/1090606/8695447/fdef92fa-2adc-11e5-8979-b61bd96d24ca.png)](http://collecticons.io)

# Collecticons

This repo contains the source code for the [Collecticons icon library website](http://collecticons.io).
If your looking for the actual icon library check [here](https://github.com/developmentseed/collecticons-lib). There's also a webfont generation util for advanced users which is available [here](https://github.com/developmentseed/collecticons-processor).


## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Gulp ( $ npm install -g gulp )

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```

### Getting started
```
$ gulp collecticons
```
Builds the icon font. Only needed when there are changes to the icon library.

```
$ gulp serve
```
Compiles the website and launches the server making it available at `http://localhost:3000/`

## Contributing
You are free to contribute to the project. If you find a bug and/or have a nice idea about a feature feel free to open an issue or submit your own solution. We'll be more than happy to hear your suggestions. :)

## License
Collecticons is licensed under **The MIT License (MIT)**, see the [LICENSE](LICENSE) file for more details.
