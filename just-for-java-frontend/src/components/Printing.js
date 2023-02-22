import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Printing extends React.Component{
	constructor(props){
		super(props)
		this.state={
			progress: "todo"
		}
	}

	updateProgressState(progress){
		this.setState({
			progress: progress
		});
	}

	componentDidMount() {
		window.scrollTo(0, 0);
  	}

	render(){
		return (
			<div>
				<h2>{this.props.page}:</h2><br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				<b>printing</b> is used to <b>display information in the console</b>. this is how we <b>output</b> anything to the user, and is a great way to <b>check if your code is working</b> properly.<br/>
				there are two types of printing statements:<br/>
				<ul>
					<li>same-line printing</li>
					<li>next-line printing</li>
				</ul>
				<h3>wait, so how do you print something?</h3>
				here is the blueprint for same-line printing:<br/>
				<b>System.out.print(<i>&lt;information&gt;</i>);</b>
				<br/><br/>
				and here is the blueprint for next-line printing:<br/>
				<b>System.out.println(<i>&lt;information&gt;</i>);</b>
				<br/>
				<h3>ok, but what's the difference between the two?</h3>
				<b>same-line printing</b> prints information without a line break. for example, if you were to type:
				<div className="code">
					System.out.print("I like pizza. ");<br/>
					System.out.print("What about you?");
				</div>
				it would look like this in the console:
				<div className="code">
					I like food. What about you?
				</div>
				<br/>
				meanwhile, <b>next-line printing</b> prints information with a line break. for example, if you were to type:
				<div className="code">
					System.out.println("I like pizza. ");<br/>
					System.out.println("What about you?");
				</div>
				it would look like this in the console:
				<div className="code">
					I like food. <br/>
					What about you?
				</div>
				<h3>so what else can you print?</h3>
				the sky's the limit with printing! the previous example showed you how to print <b>Strings</b>, but you can also print <b>characters</b>, <b>integers</b>, <b>doubles</b>, or <b>booleans</b>. take a look at the code below and <b>predict</b> what is outputed in the console! (<b className="note">hint:</b> notice whether the code uses same-line or next-line printing.)
				<div className="code">
				<div className="comment">//print out a character, an integer, a double, and a boolean</div>
				<br/>
				System.out.println('$');
				<br/>
				System.out.println(13);
				<br/>
				System.out.println(66.6666);
				<br/>
				System.out.println(false);
				</div>
				(<b className="note">psst. need a reminder</b> on what that first line of code is with the <b>//</b> symbol? check out the <Link className="contentLink" to="/comments"><b className="pageName">comments page</b></Link>!)
				<br/><br/>
				have a prediction in mind? awesome. it would look like this in the console:
				<div className="code">
				$
				<br/>
				13
				<br/>
				66.6666
				<br/>
				false
				</div>
				<h3>cool! anything else?</h3>
				in fact, yes! just one more thing. you can also print out <b>variables</b> by putting the <b>variable name</b> in between the parentheses of the print statement. here is the blueprint for printing a variable using both same-line and next-line printing:<br/>
				<b>System.out.print(<i>&lt;name&gt;</i>);</b> or<br/>
				<b>System.out.println(<i>&lt;name&gt;</i>);</b><br/><br/>
				let's do a <b>coding exercise</b> to practice printing variables! create a variable of any type you want and print it out. then change the value of the variable and print it out again. (<b className="note">psst. need a reminder</b> on how to initialize a variable and change its value? check out the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>!)
				<br/>
				here is some example code similar to what you may have:
				<div className="code">
				<div className="comment">//create a boolean variable, initialize it to false, and print it out using next-line printing</div>
				<br/>
				boolean understandsPrinting = false;
				<br/>
				System.out.println(understandsPrinting);
				<div className="comment">//change the value of the boolean variable to true, and print it out using next-line printing</div>
				<br/>
				understandsPrinting = true;
				<br/>
				System.out.println(understandsPrinting);
				</div>
				and it would look like this in the console:
				<div className="code">
				false
				<br/>
				true
				</div>
				awesome! as the code above says, you now understand printing!
				<h3>System.out.print("is it time for recap?");</h3>
				<b>yup!</b> you made it to recap!<br/><br/>
				remember, there are two types of printing: <b>same-line printing</b>, which is you can do by typing <b>System.out.print();</b>, 
				and <b>next-line printing</b>, which you can do by typing <b>System.out.println();</b>. 
				both of these print statements print information into the <b>console</b>. <br/>
				you can print out <b>Strings</b>, <b>characters</b>, <b>integers</b>, <b>doubles</b>, and <b>booleans</b>. finally, you can also print out <b>variables</b> by putting the variable name in between the parentheses of the print statement.
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">dream trip:</b><br/><br/>
					if you could go anywhere in the world, where would you go? your <b>goal</b> is to use <b>printing</b> to display <b>your dream trip</b>, including a description of what you would do, how many days you would be gone for, and a price estimate.
					this will require four steps:<br/>
					<ol>
						<li>print out the location of where you would go if you could go anywhere in the world</li>
						<ul>
							<li>this can be a country, a city, or a local place</li>
						</ul>
						<li>on the next line, print out a description of what you would do during your dream trip</li>
						<ul>
							<li>feel free to get creative with this one :)</li>
						</ul>
						<li>on the next line, print out the number of days you will be gone for</li>
						<li>on the next line, print out the how much you think your dream trip would cost – a price estimate</li>
					</ol>
					<Hint
						hints={[
							"for steps 1-4, you don't need to create any variables; you can just put whatever you want to print inside the parentheses of the print statement",
							"for steps 1-4, did you notice repetitions of the phrase \"on the next line\"? since you want to print each piece of information on its own line, you should use next-line printing",
							"for steps 1-2 because the location and description are both text, print out Strings", 
							"for step 3, because the number of days is an integer, print out an int",
							"for step 4, because the price estimate is a decimal, print out a double"
						]}
						id="printing-dream-trip"
					/>
					<br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/printing-dream-trip?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. 
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/printing-dream-trip-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">envelope:</b><br/><br/>
					your <b>goal</b> is to use <b>printing</b> to display <b>what would be written on an evnelope addressed to you</b> using the two printing methods we just learned.
					this will require five steps:<br/>
					<ol>
						<li>first, you will create a variable to store your first name</li>
						<li>next, you will create a variable to store your last name</li>
						<li>after that, you will create a variable to store your street address, what would be the second line on an envelope addressed to you</li>
						<li>next, you will create a variable to store the city, state / region / province, country, and zipcode what would be the third line on an envelope addressed to you</li>
						<li>now, you are going to print out all of these components to make it look as though it would be written on an envelope addressed to you</li>
						<ul>
							<li>normally, an envelope addressed to you would have your first and last name on the first line, your street address on the second, and your city, state / region / province, country, and zipcode on the third</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for steps 1-4, because these are storing text, you would want to use Strings as your variable type",
							"for step 5, if you need to print your name on one line, what type of printing would you need to use for the first line? maybe same-line? and if you need to print the other parts on separate lines, what type of printing would that be? maybe next-line? hmmm..."
						]}
						id="printing-envelope"
					/>
					<br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/printing-envelope?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. 
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/printing-envelope-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/arithmetic"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Printing;