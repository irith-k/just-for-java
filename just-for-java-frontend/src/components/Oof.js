import React from 'react';


class Oof extends React.Component{
	constructor(props){
		super(props)
	}

	componentDidMount() {
		window.scrollTo(0, 0);
  	}

	render(){
		return (
			<div>
				<h2>{this.props.page}:</h2><br/>
				<b>404 page not found :(</b>
			</div>
		)
	}
}

export default Oof;