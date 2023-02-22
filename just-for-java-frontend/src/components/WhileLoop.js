import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class WhileLoop extends React.Component{
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
				a <b>while loop</b> is a <b>type of loop</b> that is used to <b>perform a block of code <i>while</i> a specific condition is met</b>. once it is not met, or is false, then the code block will stop being run and the code will move onto the next block of code outside of the while loop.
				<h3>wait, so how do you make a while loop?</h3>
				here is the blue print for a while loop:<br/>
				<b>while(&lt;<i>condition</i>&gt;)&#123;<br/>
				<p>*code*</p><br/>
				&#125;</b>
				<h3>makes sense, but what's with the condition?</h3>
				good question! just like the condition that we use in our if statements, this condition should have a value of either <b>true</b> or <b>false</b>. 
				(<b className="note">psst.</b> need a reminder on the condition from if statements? check out the <Link className="contentLink" to="/if-statement"><b className="pageName">if statement page</b></Link>!) 
				if the condition is <b>true</b>, the <b>code block will be run</b>. however, if the condition is <b>false</b>, the <b>code block won't be run</b>. unlike if statements, however, while loops will <b>continuously loop</b> through the code block <b>until the condition becomes false</b>.
				<h3>hmm... ok but can i get an example?</h3>
				yea, definitely! let's say you want to print out the numbers 1-5. here's how we can do that using a while loop:
				<div className="code">
					int count = 1; <div className="comment">//this is the variable we will use to keep track of our #</div><br/>
					while(count &lt;= 5)&#123;<br/>
					<p>System.out.print(count + " ");<br/>
					count++;</p><br/>
					&#125;
				</div>
				our program above will print the following into the console:
				<div className="code">
					1 2 3 4 5
				</div>
				ok, that might seem confusing right now, but let's <b>break down our code</b>.<br/><br/>
				<b>first</b>, we start out by making an integer <i>count</i>, which stores the number we are currently printing. pretty straightforward...<br/><br/>
				<b>next</b>, we create a <b>while loop</b> with the condition of <b>count &lt;= 5</b>. this means that, as long as our variable <i>count</i> is <b>less than or equal to 5</b>, the code within the curly braces <b>will run</b>.
				this is exactly what we want, as we wanted to print out every number starting from 1 that is less than 5! great!<br/><br/>
				<b>lastly</b>, inside our while loop, we want to <b>print out the number we are currently on</b>, and then <b>increase <i>count</i> by 1</b>. great! now time for some practice!<br/>
				<h3>hey...wait a minute, that  example looks familiar</h3>
				omg! you caught us! this example is just like the example in for loops (<b className="note">psst. need a reminder</b> on what we're referring to? check out the <Link className="contentLink" to="/for-loop"><b className="pageName">for loop page</b></Link>!) 
				as you notice from the example above, you can use while loops to do <b>similar things as what for loops do</b>. thinking back to for loops, remember there were <b>three components</b> needed. so where are those components while loops? well, let's <b>break this down:</b><br/>
				<ul>
					<li><b>initialize</b></li>
					<ul>
						<li>in while loops, we initialize when we create the varibale and define it's value</li>
						<li>in this example, we initialized our <i>count</i> varibale right before the loop with the statement <b>int count = 1;</b></li>
					</ul>
					<li><b>condition</b></li>
					<ul>
						<li>in while loops, the condition is what we put in the parentheses of the while loop</li>
						<li>in the example above, our condition was <b>count &lt;= 5</b></li>
					</ul>
					<li><b>iterate</b></li>
					<ul>
						<li>in while loops, we iterate within the while loop</li>
						<li>in the example above, we iterate our <i>count</i> variable within the while loop with the statement <b>count ++;</b></li>
					</ul>
				</ul>
				but, unlike for loops, we can also use while loops when we don't know how many times we want to iterate through the code. in other words, we don't know how many times it will take until the condition is false.
				<h3>let's take a look at an example</h3>
				let's say we want to make a program that prompts the user to answer the question "do you like chocolate?" normally, the user will either type in yes or no, but what if the user types in "idk" or "sometimes" (cuz i mean sometimes chocolate is good, and sometimes it's not so good u kno?).
				we can use a <b>while loop</b> to check if the user's answer is valid. let's break down the steps we need to go through...<br/><br/>
				to do this, we will first need to get the user input, prompting the user to answer the question "do you like chocolate?" (<b className="note">psst. need a reminder</b> on how to get user input? check out the <Link className="contentLink" to="/user-input"><b className="pageName">user input page</b></Link>!)<br/><br/>
				next, we will need to make a while loop to check if the user input isn't valid (meaning if they didn't write "yes" and they didn't write "no"). if they didn't have the correct answer, we will need ask the user the question again.<br/><br/>
				ok, got it? let's take a look at all of that in code!
				<div className="code">
					<div className="comment">//let's assume that we've already imported the Scanner</div><br/><br/>
					Scanner in = new Scanner(System.in);<br/>
					System.out.print("do you like chocolate? "); <div className="comment">//this is asking the user our question</div><br/>
					String answer = in.nextLine();<br/>
					<div className="comment">//for Strings, we need to use .equals() to check for equality</div><br/>
					while(!answer.equals("yes") && !answer.equals("no"))&#123;<br/>
						<p>System.out.println("you didn't enter yes or no.");<br/>
						System.out.print("do you like chocolate? ");<br/>
						answer = in.nextLine();</p><br/>
					&#125;<br/>
					in.close();
				</div>
				great! nice job!
				<h3>while(recap == true)&#123;</h3>
				<b>!!</b> yess recap time.<br/>
				so, to review, a <b>while loop</b> loops through a block of code as long as a specific condition is true, and is written:<br/>
				<b>while(&lt;<i>condition</i>&gt;)&#123;<br/>
				<p>*code*</p><br/>
				&#125;</b><br/><br/>
				and that's pretty much it!
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">even:</b><br/><br/>
					your <b>goal</b> is to use <b>while loops</b> to <b>print out all even numbers between 1 and 20</b>. this will require four steps<br/>
					<ol>
						<li>first, you will need to create a variable to store the value that you are currently on</li>
						<li>next, you will need to create a while loop with a condition to make sure that you are looking through the specific range of numbers of 1-20</li>
						<li>after that, you will need to print out the number</li>
						<li>and finally, you will want to increment your variable to move onto the next even number</li>
					</ol>
					<Hint
						hints={[
							"for step 2, we only want to look at 1-20; assuming our lower bound is taken care of by what we define our variable to be, what condition would we want to make sure that our variable doesn't go beyond 20? maybe something that checks if our variable is less than or equal to 20 (<= 20)!",
							"for step 4, if we want to only check even numbers, values that come in increments of two, how should we increment our variable to make sure it is only the even numbers? by 2 of course! reminder that a shortcut to use is +="
						]}
						id="while-loop-even"
					/>
					<br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/while-loop-even?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/while-loop-even-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">every other:</b><br/><br/>
					your <b>goal</b> is to use <b>while loops</b> to <b>create a new String that stores every other character of a given String</b>. this will require five steps<br/>
					<ol>
						<li>create a variable to store the original String</li>
						<li>create a variable to store what will be the String with only every other character</li>
						<ul>
							<li>just initialize this variable to an empty String for now</li>
						</ul>
						<li>create a while loop that loops through every other index in the original String</li>
						<ul>
							<li>before the while loop, first make an iterator variable that keeps track of the current index</li>
							<li>now, create the while loop with a condition that ensures that you keep iterating until you get to the end of the original String</li>
							<li>make sure that you change your iterator variable inside your while loop so that the loop iterates through every other index rather than every index</li>
						</ul>
						<li>inside the while loop, but before you change your iterator variable, concatenate the current character you are at in the original String to the new String variable</li>
						<li>after the while loop is complete, print out the new String variable</li>
					</ol>
					<Hint
						hints={[
							"for step 3, our iterator variable should be initialized to 0 since indexing begins at 0",
							"for step 3, our condition should be i < str.length(), where i is the iterator variable and str is the original String variable; this is because we want to loop through the whole String",
							"for step 3, inside our while loop, add the line i+=2, where i is the iterator variable, so that after every iteration, you advance by 2 indexes rather than just 1 if you were to do i++; by doing i+=2 at the end of the code inside your while loop, you effectively loop through every other index in the original String",
							"for step 4, remember the syntax str.charAt(i), where str is the original String and i is the iterator variable, can be used to access the character in a String at a specified index",
							"for step 4, in order to concatenate the current character to the new String variable, you can use the += operator",
						]}
						id="while-loop-every-other"
					/>
					<br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/while-loop-every-other?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/while-loop-every-other-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/nesting"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default WhileLoop;