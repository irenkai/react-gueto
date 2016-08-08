var React = require('react');
var request = require('superagent');
var jsonp = require('superagent-jsonp');

var Gueto = React.createClass({
	getInitialState () {
					 return {
						 loaded: false,
						 content: null
					 };
	},
	componentWillUnmount(){
    if(this.state.req != undefined){
      this.state.req.abort();
    }
  },
	componentDidMount(){
    var este = this;
		var req;
		if(this.props.jsonp){
			req = request.get(este.props.url + este.props.jsonp).use(jsonp({
      timeout: 3000,
      callbackName: este.props.jsonp
      })).end((err, response) => {

				este.setState({loaded:true, data: response.body})
        // response => {}
        // err => new Error('404 NotFound')
      })
		} else {
			req = request.get(este.props.url).accept('json').end(function(err,res){
				este.setState({loaded:true, data: res.body})
	    })
		}

    this.setState({req: req});

  },
	render () {
		var este = this;
    if(this.state.loaded){
      if(este.state.data != null){
        return <span>{este.props.children(este.state.data)}</span>
      } else {
        return (<h5>Couldn't fetch data</h5>)
      }
    } else {
      return (<span></span>)
    }
	}
});

export default Gueto;
