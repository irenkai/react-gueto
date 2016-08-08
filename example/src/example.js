var React = require('react');
var ReactDOM = require('react-dom');
var Gueto = require('react-gueto');

var App = React.createClass({
	render () {
		return (
			<div>
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
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
