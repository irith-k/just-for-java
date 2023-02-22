import React from 'react';
import { pages } from '../constants/pages';
import axios from 'axios';

class HomePageTable extends React.Component{
	constructor(props){
		super(props)
		var pageArr = [];
		var page;
		for(page of pages) {
			if(page.isConceptPage) {
				pageArr.push(page.displayName);
			}
		}
		this.state={
			pages: pageArr,
			data: {}
		}
	}

	componentDidMount() {
		if(this.props.user) {
			this.getAllTopicStatuses();
		}
	}

	componentDidUpdate(prevProps) {
		if(this.props.user && !prevProps.user) {
	    	this.getAllTopicStatuses();
		}
	}

	getAllTopicStatuses() {
    	axios.get("https://us-central1-just-for-java.cloudfunctions.net/app/api/get-all-topic-statuses", { 
			params: {
      			id: this.props.user.uid
    		}
		})
	      .then(res => {
	        console.log(res.data);
	        if(res.data) {
	        	this.setState({
	        		data: res.data
	        	})
	        }
	      })
	}

	render(){
		return (
			<div>
				<table className="homeTable">
					<tr>
						<th className="homeTableHeader" colspan="2">{this.props.title}</th>
					</tr>
					{this.state.pages.map((page, index) => {
						var status = "todo";
						if(this.state.data[page]){
							status = this.state.data[page];
						}
						var statusClass = "";
						if(status == "todo") {
							statusClass = "todoRow";
						} else if(status == "in progress") {
							statusClass = "inProgressRow";
						} else if(status == "complete") {
							statusClass = "completeRow";
						}
						return (
							<tr className={statusClass}>
								<td className="homeTableCell">{page}</td>
								<td className="homeTableCell">{status}</td>
							</tr>
						)
					})}
				</table>
			</div>
		)
	}
}

export default HomePageTable;