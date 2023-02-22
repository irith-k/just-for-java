import React from 'react';
import {
  Link
} from "react-router-dom";


class About extends React.Component{
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
				hi! we're irith and irika katiyar, 18 year old twins from sunny northern california who love to code! 
				we both have been coding since we were in 7th grade. 
				we have taken ap computer science and are on the silver level of the usa computing olympiad! in the future, we both plan on pursuing bioinformatics or computational biology
				to combine our interest for biology and computer science. besides java, we also know web development. (<b className="note">btw:</b> this whole website was created completely from scratch and made with love
				by both of us!)<br/><br/>
				<b>why we created just for java:</b><br/>
				coding has the stigma of being complicated, hard to learn, and only useful for computer scientists. however, we want to break that stigma. this doesn't mean that coding will be easy, but we wrote the content in just for java using relatable language so it is easy to understand and fun for you guys! (<b className="note">btw:</b> you may even see some jokes and text slang in there! *wink wink* we even have fun themes for some pages if we were feeling particularly fancy!) we provide blueprints to illustrate coding syntax and examples that we walk through so that you can master the concept. finally, coding is not only useful for computer scientists, but for everyone.
				<br/><br/>
				<b>a little more about irika:</b><br/>
				my name is irika, and i'm the older twin (by 30 seconds, every second counts!) the programming languages i know are java, html, 
				css, and javascript. other than coding, i love to play squash, do bollywood dance, play guitar, sing, bike, travel, write children's books 
				(check out <a className="externalLink" href="https://www.amazon.com/Irika-Katiyar/e/B08CLRVFXC/ref=dp_byline_cont_pop_ebooks_1" target="_blank"><b className="pageName">my books</b></a> on amazon), and make animated videos (check out <a className="externalLink" href="https://www.youtube.com/channel/UCZS-1FYH-OWMNunElTjejKw" target="_blank"><b className="pageName">2MinuteBio</b></a> on youtube). i also love watching netflix, making random videos on imovie, 
				and hanging out with friends!<br/><br/>
				<b> a little more about irith:</b><br/>
				my name is irith, and i'm the younger twin, something irika never fails to remind me about. the programming languages i know are java, html, 
				css, javascript, swift, and python. i love to make apps (check out <a className="externalLink" href="http://appchapp.com" target="_blank"><b className="pageName">appchapp.com</b></a>) and have four apps on the app store! you can also find me on juni 
				learning's blog and youtube channel. other than coding, i love to play squash, do bollywood dance, play mario kart, binge-watch netflix 
				(black mirror is my all time favorite show, followed by friends), and meet new people. <br/><br/>
				<b>special thanks to:</b><br/>
				our coding instructor, ruby, for helping us create this website!<br/>
				our amazing parents for letting us stay up till midnight working on this website!
				<br/><br/>
				<img className="irithAndIrika" src="us.jpg"/>
				<br/><b className="note">irith on left and irika on right :)</b>
			</div>
		)
	}
}

export default About;