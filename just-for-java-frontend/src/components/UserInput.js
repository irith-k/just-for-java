import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class UserInput extends React.Component{
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
				sometimes in our program we want to get information from the user, such as their name. you will learn how to get <b>user input from the console</b>, which will allow you to create super cool programs that can actually interact with the user!
				<h3>awesome! can i create one of these super cool programs rn?</h3>
				in fact, yes! we are going to create a program that <b>asks the user to type their name and says hello to them</b>! in order to get user input, there are 6 steps we have to follow:
				<ol>
					<li><b>import</b> the <b>Scanner</b> class to help us</li>
					<li>create a <b>Scanner variable</b> in our main method, which we will use to get user input</li>
					<li><b>print</b> out a prompt for the user to answer to</li>
					<li>get the <b>user input</b> and store it in a <b>variable</b></li>
					<li>do something with the user input in your program</li>
					<li><b>close</b> your Scanner</li>
				</ol>
				let's walk through each of these steps...
				<h3>step 1: import the Scanner class</h3>
				we need to <b>import the Scanner class</b> to help us get user input. to do this, type the following line of code at the very <b>top</b> of your program:
				<br/>
				<div className="code">import java.util.Scanner;</div>
				once we import the Scanner class, then we can create a Scanner variable (<b className="note">btw:</b> make sure to capitalize the S in Scanner).
				<h3>step 2: create a Scanner variable</h3>
				creating a Scanner variable is slightly different than the other variables we have created so far, since it uses a different construction. type the following line of code in your main method to <b>create a Scanner variable</b>:
				<br/>
				<div className="code">Scanner in = new Scanner(System.in);</div>
				this means that we can now get user input from the console (<b className="note">btw:</b> the console is where you see anything printed out, and that is also where the user will enter their input).
				<h3>step 3: print out a prompt</h3>
				whenever we <b>print out a prompt</b> for the user to answer to, we usually want the user to answer on the <b>same line</b> as the prompt. this means that we will have to use <b>System.out.print()</b> when we are printing a prompt for the user to answer to (<b className="note">btw:</b> remember that <b>System.out.print()</b> prints whatever is in between the parentheses without creating a new line, or entering, after).
				<br/>
				since we are printing the prompt on the same line as where the user will answer, we want a <b>space</b> between the prompt and the user input, so make sure to add a space at the end of the prompt.
				<br/>
				<div className="code">System.out.print("What is your name? ");</div>
				<h3>step 4: get and store the user input</h3>
				in order to get and store user input, we use our Scanner variable <i>in</i> that we created in step 2. we can use <b>in.nextLine()</b> to retrieve what the user enters. finally, we can store the user input in a String variable.
				<br/>
				below is code that gets user input and stores it in a variable called <i>name</i>:
				<br/>
				<div className="code">String name = in.nextLine();</div>
				<h3>step 5: do something with their input</h3>
				this step will vary depending on what your program is supposed to do. 
				<br/>
				for our program, we want to say hello to the user. now that we have the user's name stored in the variable <i>name</i>, we can print out a greeting to the user saying "hello <i>name</i>". to do this, we can use <b>String concatenation</b>. (<b className="note">psst. need a reminder</b> of what in the world String concatenation is? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) to add our variable <i>name</i> to "hello ". (<b className="note">btw:</b> make sure you add a space after hello so that there is a space between hello and the user's name.)
				<div className="code">System.out.println("hello " + name);</div>
				awesome! we now have a fully functional program that asks the user for their name and prints out "hello <i>name</i>".
				<h3>step 6: aw it's time to close</h3>
				once you finish getting user input in the program, it is always <b>good practice to close your Scanner</b> by typing the following line of code:
				<div className="code">in.close();</div>
				<br/>
				<b>sweet!</b> now you know all 6 steps to get user input!
				<h3>how about getting the user's age?</h3>
				sometimes we want to get user input not as a <b>String</b>, but as another variable type. for example, what if we wanted to ask the user for their age instead of their name? age is an integer whereas name is text, so we will need to get the user input as an <b>int</b> instead of as a <b>String</b>. it's actually a very simple fix! all we need to do is change <b>nextLine()</b> to <b>nextInt()</b> and make our variable an <b>int</b> instead of a <b>String</b>.
				<br/>
				now let's combine everything we learned to type code that asks the user for their age and prints it out! (<b className="note">hint:</b> follow the 6 steps we did to ask the user for their name, and don't forget to use <b>in.nextInt()</b> since we are storing the user input as an integer.) your code may look something like this:
				<div className="code">
				<div className="comment">//we will assume that we have imported java.util.Scanner already</div>
				<br/>
				Scanner in = new Scanner(System.in);
				<br/>
				<div className="comment">//make sure to use print instead of println so that the user answers on the same line as the prompt</div>
				<br/>
				System.out.print("Enter your age: ");
				<br/>
				<div className="comment">//note that we changed nextLine() to nextInt() and made our variable an int instead of a String</div>
				<br/>
				int age = in.nextInt();
				<br/>
				<div className="comment">//print out the age of the user using String concatenation</div>
				<br/>
				System.out.println("You're " + age + " years old!");
				<br/>
				<div className="comment">//it's always good practice to close your Scanner after you finish using it</div>
				<br/>
				in.close();
				</div>
				nice work! (<b className="note">psst. need a reminder</b> on why you see a bunch of <b>//</b> in the sample code above? check out the <Link className="contentLink" to="/comments"><b className="pageName">comments page</b></Link>!)
				<h3>incoming! user input code dump</h3>
				we can get a <b>String</b>, <b>int</b>, <b>double</b> or <b>boolean</b> (<b className="note">psst. need a reminder</b> of what all of these variable types are? check out the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>!) as user input:
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>String</td>
				    <td>in.nextLine()</td>
				  </tr>
				  <tr>
				    <td>int</td>
				    <td>in.nextInt()</td>
				  </tr>
				  <tr>
				    <td>double</td>
				    <td>in.nextDouble()</td>
				  </tr>
				  <tr>
				    <td>boolean</td>
				    <td>in.nextBoolean()</td>
				  </tr>
				</table>
				<h3>it do be time for recap</h3>
				<b>congrats!</b> you made it to recap!
				<br/>
				<br/>
				there are 6 steps that you need to do to get <b>user input</b>:
				<ol>
					<li>import the Scanner class</li>
					<li>create a Scanner variable</li>
					<li>print out a prompt</li>
					<li>get and store the user input</li>
					<li>do something with their input</li>
					<li>close your Scanner</li>
				</ol>
				depending on what <b>variable type</b> you are trying to get, the code you write will look slightly different:
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>String</td>
				    <td>in.nextLine()</td>
				  </tr>
				  <tr>
				    <td>int</td>
				    <td>in.nextInt()</td>
				  </tr>
				  <tr>
				    <td>double</td>
				    <td>in.nextDouble()</td>
				  </tr>
				  <tr>
				    <td>boolean</td>
				    <td>in.nextBoolean()</td>
				  </tr>
				</table>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">my favorite things:</b><br/><br/>
					your <b>goal</b> is to use <b>user input</b> to <b>ask the user and store their favorite things</b>. this will require three steps:<br/>
					<ol>
						<li>just some setting up you have to do to get user input</li>
						<ul>
							<li>import the Scanner class and create a Scanner variable</li>
						</ul>
						<li>ask the user three of their favorite things and store their answers in variables</li>
						<ul>
							<li>you can ask them their favorite color, animal, movie, tv show, sport, musical instrument, hobby, celebrity, holiday, song, artist, drink, food, restaurant, actor, place, clothing brand, you name it – just pick three!</li>
							<li>for each favorite thing, print out a question for the user and store their answer in a variable of the appropriate type</li>
						</ul>
						<li>close the Scanner for good practice</li>
					</ol>
					<Hint
						hints={[
							"for step 2, make sure to have a print statement asking the user their question, and a variable initialization using one of the user input methods we learned, for each one of the three favorite things you ask your user",
							"for step 2, make sure to use System.out.print() when you ask the user the question, and add a space after the ? so that there is a space between the question and the user's answer",
							"for step 2, all of the user's answers will be Strings, so use nextLine() to get the user input"
						]}
						id="user-input-my-favorite-things"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/my-favorite-things?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/my-favorite-things-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/user-input-tip-tip-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">tip tip:</b><br/><br/>
					how much do you want to tip? your <b>goal</b> is to use <b>user input</b> to <b>ask the user how much they want to tip</b> and add the tip to the price. this will require five steps:<br/>
					<ol>
						<li>just some setting up you have to do to get user input</li>
						<ul>
							<li>import the Scanner class and create a Scanner variable</li>
						</ul>
						<li>make a variable that stores any price you want</li>
						<li>ask the user how much they want to tip</li>
						<ul>
							<li>here, use same-line printing to print out the question</li>
						</ul>
						<li>add the tip that the user enters to the price</li>
						<ul>
							<li>you can do this in just one line of code :o</li>
						</ul>
						<li>print out the grand total and close the Scanner for good practice</li>
						<ul>
							<li>here, use next-line printing to print out the total price</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 4, we want to get the user input as a double, so use in.nextDouble()",
							"for step 4, to add the user input to the price variable, you can use the += shorthand"
						]}
						id="user-input-tip-tip"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/user-input-tip-tip?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/user-input-tip-tip-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/user-input-tip-tip-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/math"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default UserInput;