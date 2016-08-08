'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');
var request = require('superagent');
var jsonp = require('superagent-jsonp');

var Gueto = React.createClass({
  displayName: 'Gueto',

  getInitialState: function getInitialState() {
    return {
      loaded: false,
      content: null
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.state.req != undefined) {
      this.state.req.abort();
    }
  },
  componentDidMount: function componentDidMount() {
    var este = this;
    var req;
    if (this.props.jsonp) {
      req = request.get(este.props.url + este.props.jsonp).use(jsonp({
        timeout: 3000,
        callbackName: este.props.jsonp
      })).end(function (err, response) {

        este.setState({ loaded: true, data: response.body });
        // response => {}
        // err => new Error('404 NotFound')
      });
    } else {
        req = request.get(este.props.url).accept('json').end(function (err, res) {
          este.setState({ loaded: true, data: res.body });
        });
      }

    this.setState({ req: req });
  },
  render: function render() {
    var este = this;
    if (this.state.loaded) {
      if (este.state.data != null) {
        return React.createElement(
          'span',
          null,
          este.props.children(este.state.data)
        );
      } else {
        return React.createElement(
          'h5',
          null,
          'Couldn\'t fetch data'
        );
      }
    } else {
      return React.createElement('span', null);
    }
  }
});

exports['default'] = Gueto;
module.exports = exports['default'];