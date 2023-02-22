import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Variables extends React.Component{
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
				<b>variables</b> are used to store information. 
				<h3>wait, so how do you create a variable?</h3>
				here is the blueprint when creating a variable: <br/>
				<b><i>&lt;type&gt; &lt;name&gt; = &lt;value&gt;;</i></b> <br/>
				(<b className="note">btw:</b> don't forget the semicolon!)
				<br/><br/>
				there are multiple <b>types</b> of information that variables can store:
				<ul>
					<li>integer</li>
					<li>double</li>
					<li>string</li>
					<li>character</li>
					<li>boolean</li>
				</ul>
				<h3>hey, i've heard of integers!</h3>
				you probably recognize integers from your math class. in java, <b>integers</b> are used to store any whole number, such as 0, 1, 2, 3, etc. (and even negative numbers!). 
				to make an integer variable, you need to type <b>int</b> as the type. 
				below is an example of an integer variable with the name <i>number</i> being used to store the value 5.<br/>
				<div className = "code">
					int number = 5;
				</div> 
				<h3>wait, what are doubles?</h3>
				<b>doubles</b> are used to store any number with a decimal, such as 0.1 or 123.45. to make a double variable, you need to type <b> double</b> as they type.
				below is an example of a double variable with the name <i>number</i> being used to store the value 3.5.<br/>
				<div className = "code">
					double number = 3.5;
				</div>
				<h3>strings? you mean what you use to make bracelets?</h3>
				nope. in java, <b>strings</b> are used to store text. they're denoted using double quotation marks. (<b className="note">btw:</b> if you set a string variable equal to <b>""</b>, that's an empty string, meaning it doesn't contain any text yet.)
				to make a string variable, you need to type <b>String</b> as the type. strings are a lot cooler than the other variable types. if you want to learn why that is, check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!
				below is an example of a string variable with the name <i>word</i> being used to store the value "hello world".<br/>
				<div className = "code">
					String word = "hello world"; <div className = "comment">//note that the value is surrounded by double quotation marks</div>
				</div>
				<h3>my favorite character is harry potter. wbu?</h3>
				well... that's not quite what a character is in java. <b>characters</b> are used to store a single letter, digit, or symbol, and is denoted using single quotation marks. 
				to make a character variable, you need to write <b>char</b> as the type.
				below is an example of a character variable with the name <i>letter</i> being used to store the value 'a'.<br/>
				<div className = "code">
					char letter = 'a'; <div className = "comment">//note that the value is surrounded by single quotation marks</div>
				</div>
				<h3>what's a boolean? never heard of that before</h3>
				<b>booleans</b> store either a value of <b>true</b> or <b>false</b>. to make a boolean variable, you need to type <b> boolean</b> as the type.
				below is an example of a boolean variable with the name <i>isFun</i> being used to store the value true.<br/>
				<div className = "code">
					boolean isFun = true;
				</div>
				<h3>umm so what happens after you create a variable?</h3>
				great question! after you create a variable, you can either <b>change the value of it</b> or <b>use it in your program</b>!
				<br/>
				after you create a variable of a certain type, <b>you can change the value of the variable</b>, but <b>you cannot change its type</b>. here's an example to help you understand this concept:
				<br/>
				let's say you have the following code that creates a <b>double</b> variable called <i>price</i> that stores the value 9.99.
				<div className="code">
				double price = 9.99;
				</div>
				now let's say we wanted to lower the price by a dollar, making it 8.99 instead of 9.99. we can use the following code to change the value of <i>price</i>:
				<div className="code">
				price = 8.99;
				</div>
				but what we cannot do is change <i>price</i> to make it an <b>int</b> or a <b>char</b>, etc. once you create <i>price</i> as a <b>double</b>, it will always stay as a <b>double</b>.
				<br/><br/>
				here is the blueprint when changing a variable:
				<br/>
				<b><i> &lt;name&gt; = &lt;new_value&gt;;</i></b>
				<br/><br/>
				let's do one more example! this time create a <b>String</b> variable called <i>hello</i> and initialize it to "hello". then change the value of <i>hello</i> to "goodbye".
				<div className="code">
				String hello = "hello";
				<br/>
				hello = "goodbye";
				</div>
				<br/>
				since all we have learned so far is variables, we don't quite have the knowledge yet to actually use our variables in our program... <b>but don't worry!</b> you will learn this <b>very soon</b>!! for now, simply make sure you are comfortable with <b>creating a variable</b> and <b>changing a variable</b>.
				<h3>boolean timeForRecap = true;</h3>
				<b>you did it!</b> you made it to recap!
				<br/><br/>
				a <b>variable</b> is used to store information. here is the blueprint when creating a variable: <br/>
				<b><i> &lt;type&gt; &lt;name&gt; = &lt;value&gt;;</i></b> <br/><br/>
				there are multiple <b>types</b> of information that variables can store:
				<ul>
					<li><b>integer</b></li>
					<ul>
						<li>integers store <b>whole numbers</b>, including negative numbers</li>
						<li>to make an integer, type <b>int</b> as the type</li>
					</ul>
					<li><b>double</b></li>
					<ul>
						<li>doubles store <b>decimals</b>, like 1.5 and 0.923</li>
						<li>to make a double, type <b>double</b> as the type</li>
					</ul>
					<li><b>string</b></li>
					<ul>
						<li>strings store <b>text</b>, enclosed in double quotes</li>
						<li>to make a string, type <b>String</b> as the type</li>
					</ul>
					<li><b>character</b></li>
					<ul>
						<li>characters store a <b>single letter/digit/symbol</b>, enclosed in single quotes</li>
						<li>to make a character, type <b>char</b> as the type</li>
					</ul>
					<li><b>boolean</b></li>
					<ul>
						<li>booleans store either <b>true</b> or <b>false</b></li>
						<li>to make a boolean, type <b>boolean</b> as the type</li>
					</ul>
				</ul>
				after you create a variable of a certain type, <b>you can change the value but not the type</b> of the variable. here is the blueprint when changing the value of a variable: <br/>
				<b><i> &lt;name&gt; = &lt;new_value&gt;;</i></b> <br/><br/>
				congrats! you finished learning about variables. keep up the good work!
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">savvy school scheduling:</b><br/><br/>
					your <b>goal</b> is to use <b>variables</b> to store your favorite class, if you like school, the number of classes you have, and your letter grade in your favorite class.
					this will require four steps: <br/>
					<ol>
						<li>create a variable to store your favorite class</li>
						<li>create a variable to store your answer to the question <i>do you like school or not?</i></li>
						<li>create a variable to store the number of classes you have</li>
						<li>create a variable to store your letter grade (A, B, C, D, or F) in your favorite class</li>
					</ol>
					<Hint
						hints={[
							"for step 1, you might want to use String as the type for your variable",
							"for step 2, think of what you could use to store either a yes or no answer... maybe a boolean",
							"for step 3, what type of variable can be used to store a number?", 
							"for step 4, if we want to store a letter – emphasis on letter – what can we use? well, what's another word for letter... that's right! a character!"
						]}
						id="variables-savvy-school-scheduling"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/variables-savvy-school-scheduling?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. (<b className="note">psst.</b> confused about what a comment is? don't worry about it for now because we're gonna talk about that next on the <Link className="contentLink" to="/comments"><b className="pageName">comments page</b></Link>!) 
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/variables-savvy-school-scheduling-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">sunny:</b><br/><br/>
					is it sunny outside? your <b>goal</b> is to use <b>variables</b> to store whether or not it is sunny and to change its value.
					this will require two steps: <br/>
					<ol>
						<li>create a variable called <i>isSunny</i> that stores whether or not it is sunny</li>
						<ul>
							<li>set it to the appropriate value so that it is not sunny</li>
						</ul>
						<li>change the value of your variable so that it is sunny now</li>
					</ol>
					<Hint
						hints={[
							"for step 1, your variable can only have two possible values: it is sunny, or it isn't sunny – using a boolean sounds like a good idea",
							"for step 1, if it is not sunny, then the initial value of your variable should be false",
							"for step 2, if it is sunny now, then the new value of your variable should be true"
						]}
						id="variables-sunny"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/variables-i-scream-ice-cream?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. (<b className="note">psst.</b> confused about what a comment is? don't worry about it for now because we're gonna talk about that next on the <Link className="contentLink" to="/comments"><b className="pageName">comments page</b></Link>!) 
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/variables-sunny-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">i scream ice cream:</b><br/><br/>
					your <b>goal</b> is to use <b>variables</b> to store the name of your favorite ice cream shop, your favorite flavor, how many scoops you want, and the price of your ice cream. 
					this will require four steps: <br/>
					<ol>
						<li>create a variable to store the name of your favorite ice cream shop</li>
						<li>create a variable to store your favorite ice cream flavor</li>
						<li>create a variable to store how many scoops of ice cream you would like</li>
						<li>create a variable to store the price of your ice cream</li>
					</ol>
					<Hint
						hints={[
							"for step 1, the name of your favorite ice cream shop is text, so create a String",
							"for step 2, your favorite ice cream flavor is also text, so create a String",
							"for step 3, what type of variable can be used to store a number?", 
							"for step 4, a price is not a whole number necessarily; it can be a decimal too! what variable type stores a decimal?"
						]}
						id="variables-i-scream-ice-cream"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/variables-i-scream-ice-cream?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. (<b className="note">psst.</b> confused about what a comment is? don't worry about it for now because we're gonna talk about that next on the <Link className="contentLink" to="/comments"><b className="pageName">comments page</b></Link>!) 
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/variables-i-scream-ice-cream-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater 
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/comments"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Variables;