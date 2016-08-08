# Gueto

__COMPONENT DESCRIPTION GOES HERE__


## Demo & Examples

Live demo: [irenkai.github.io/react-gueto](http://irenkai.github.io/react-gueto/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-gueto is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-gueto.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-gueto --save
```


## Usage

Gueto is a wrapper over **superagent** and **superagent-jsonp** that has the sole function of passing the returned json to it's children

```
var Gueto = require('react-gueto');

<Gueto url={"http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json&jsoncallback="} jsonp={"jsonpcallback"} >
{(data) =>
    <div>
      {
        data.items.map(function(i,k){
          return (<div className="card" key={'is'+k}>
                    <h4>{i.title}</h4>
                    <img src={i.media.m} style={{width: '100%'}} />
                  </div>
          )
        })
      }

    </div>

  }
</Gueto>
```

### Properties

* **url** the url to point gueto to
  **jsonp** if its a jsonp include the callback, gueto will do the rest

### Notes

  Yeah, this is most definetly against React philosophy but it keeps beign usefull for async calling of content.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

__PUT LICENSE HERE__

Copyright (c) 2016 Diego Browne [Chorrillana Estudio](http://chorrillana.cl/).
