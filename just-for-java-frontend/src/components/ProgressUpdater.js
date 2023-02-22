import React from 'react';
import axios from 'axios';
import Select from 'react-select';

const options = [
  { label: "todo", value: "todo" },
  { label: "in progress", value: "in progress" },
  { label: "complete", value: "complete" }
];

class ProgressUpdater extends React.Component{
	constructor(props){
		super(props)
	}

	componentDidMount() {
		if(this.props.user) {
			this.getTopicStatus();
		}
	}

	componentDidUpdate(prevProps) {
		if(this.props.user && !prevProps.user) {
	    	this.getTopicStatus();
		}
	}

	handleChange = selectedOption => {
		this.props.update(selectedOption.value);
    	axios.post("https://us-central1-just-for-java.cloudfunctions.net/app/api/update-topic-status", { 
			id: this.props.user.uid,
			topic: this.props.page,
			status: selectedOption.value
		})
	      .then(res => {
	        console.log(res.data);
	      })
	};

	getTopicStatus() {
    	axios.get("https://us-central1-just-for-java.cloudfunctions.net/app/api/get-topic-status", { 
			params: {
      			id: this.props.user.uid,
				topic: this.props.page
    		}
		})
	      .then(res => {
	        console.log(res.data);
	        if(!res.data.status) {
	        	this.props.update("todo");
	        } else {
	        	this.props.update(res.data.status);
	        }
	      })
	}

	render(){
		const selectedOption = { label: this.props.progress, value: this.props.progress }
		const customStyles = {
		  option: (provided, state) => ({
		    ...provided,
		    backgroundColor: state.value == "todo" ? '#6B9080' : state.value == "in progress" ? '#A4C3B2' : '#cce3de',
		    color: '#172A3A',
		  }),
		  control: (provided, state) => ({
		  	...provided,
		  	backgroundColor: this.props.progress == "todo" ? '#6B9080' : this.props.progress == "in progress" ? '#A4C3B2' : '#cce3de',
		    border: this.props.progress == "todo" ? '#6B9080' : this.props.progress == "in progress" ? '#A4C3B2' : '#cce3de',
		  }),
		  singleValue: (provided, state) => ({
		  	color: '#172A3A',
		  }),
		}
		return (
			<div className="progress">
				{this.props.user ? 
					<div>
						<Select
							styles={customStyles}
					      	value={selectedOption}
					      	onChange={this.handleChange}
					      	options={options}
					      	isSearchable={false}
					      	theme={theme => ({
						      ...theme,
						      borderRadius: 8,
						      colors: {
						        ...theme.colors,
						        primary: '#FFA69E',
						        primary50: '#FFA69E',
						        neutral20: '#172A3A',
								neutral60: '#FFA69E',
						        neutral90: '#172A3A',
						      },
						    })}
					    />
					</div>
					: <b className="pageName">sign in to save your progress! it just takes 13 seconds :)</b>
				}
			</div>
		)
	}

}

export default ProgressUpdater;