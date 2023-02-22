import React from 'react';
import { pages } from '../constants/pages';
import SideButton from './SideButton';

class SideBar extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div className = "sidebar">
              {pages.map((page, i) =>
                <div key={i}>
                  <SideButton currentPathname={window.location.pathname} myPathname={page.name} myDisplayName={page.displayName} />
                </div>
              )}
            </div>
		)
	}
}

export default SideBar;