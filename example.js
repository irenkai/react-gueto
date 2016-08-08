require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Gueto = require('react-gueto');

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				Gueto,
				{ url: "http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer&format=json&jsoncallback=", jsonp: "jsonpcallback" },
				function (data) {
					return React.createElement(
						'div',
						null,
						data.items.map(function (i, k) {
							return React.createElement(
								'div',
								{ className: 'card', key: 'is' + k },
								React.createElement(
									'h4',
									null,
									i.title
								),
								React.createElement('img', { src: i.media.m, style: { width: '100%' } })
							);
						})
					);
				}
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-gueto":undefined}]},{},[1]);
