import React from 'react';
import {
  Link
} from "react-router-dom";


class ContactUs extends React.Component{
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
				i guess we should put some contact info here...
				<br/><br/>
				have any comments or questions? have any feedback or suggestions? don't hesitate to <b>email us</b> at <a className="email" href="mailto:justforjavaco@gmail.com">justforjavaco@gmail.com</a>! or you can <b>fill out the form</b> below and we'll get to you asap!
				<br/><br/>
				<form
				  action="https://formspree.io/f/xvovbzpy"
				  method="POST"
				>
				  <label>
				    your email:
				    <input type="text" name="_replyto"/>
				  </label>
				  <br/><br/>
				  <label>
				    your message:
				    <textarea name="message"></textarea>
				  </label>
				  <br/><br/>
				  <button className="contactSubmit" type="submit">send</button>
				</form>
			</div>
		)
	}
}

export default ContactUs;