import React from 'react';
import './SideButton.css';
import {
  NavLink
} from "react-router-dom";

class SideButton extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<NavLink className="sideButton" exact to={"/"+this.props.myPathname} activeClassName="sideButtonSelected">
				{this.props.myDisplayName}
			</NavLink>
		)
	}
}

export default SideButton;