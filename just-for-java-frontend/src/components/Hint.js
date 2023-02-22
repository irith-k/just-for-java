import React from 'react';

class Hint extends React.Component{
	constructor(props){
		super(props)
		this.state={
			hintsShown: 0
		}
	}

	hintClicked() {
		this.setState({
	      hintsShown: this.state.hintsShown+1
	    }, () => {
	    	if(this.state.hintsShown >= this.props.hints.length) {
				document.getElementById(this.props.id).disabled = true;
				document.getElementById(this.props.id).innerHTML = "that's all the hints"
			}
	    })
	}

	render(){
		return (
			<div className="hints">
				<button 
					id={this.props.id}
					class="hintButton"
					onClick={() => this.hintClicked()}
				>
					hint please ({this.state.hintsShown}/{this.props.hints.length})
				</button>
				<ul>
				{this.props.hints.map((hint, index) => {
					if (index < this.state.hintsShown) {
						return (
							<li><b className="note">hint:</b> {hint}</li>
						)
					}
				})}
				</ul>
			</div>
		)
	}
}

export default Hint;