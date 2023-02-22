import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class IfStatement extends React.Component{
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
				an <b>if statement</b> is used to determine if a specific block of code <b>should or should not be run</b>. 
				<br/>
				<h3>wait, how do you make an if statement?</h3>
				here is the blueprint on how to make an if statement:<br/>
				<b>if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;</b>
				<h3>wdym condition?</h3>
				the <b>condition</b> is anything that can <b>equate to a value</b> of either <b>true</b> or <b>false</b>. 
				if the <b>condition is true</b>, the code block <b>will be run</b>. 
				meanwhile, if the <b>condition is false</b>, the code block <b>won't be run</b>, and will go to whatever is after the end curly bracket.
				when writing conditions, often times you will be comparing values, whether it's integers, Strings, or any other variable types. 
				(<b className="note">psst. need a reminder</b> of what variable types there are? check out the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>!)
				to make these conditions, there are four types of comparison operators:<br/>
				<ul>
					<li>==</li>
					<li>!=</li>
					<li>&lt;</li>
					<li>&gt;</li>
				</ul>
				<h3>ok, that just looks like math</h3>
				it might right now, but let's go through each of them...<br/><br/>
				<b>==</b> is used to check equality between <b>primitive types</b> (<b className="note">psst. need a reminder</b> of what in the world a primitive type is? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!)
				let's check out an example:
				<div className="code">
					int cookies = 0; <div className="comment">//this will keep track of how many cookies are in our "jar"</div><br/>
					<div className="comment">//if the number of cookies in the jar is equal to 0, we will print something out in the console</div><br/>
					if(cookies == 0)&#123;<br/>
						<p>System.out.println("you ran our of cookies!")</p><br/>
					&#125;
				</div>
				because our integer <i>cookies</i> is equal to 0, the code block would print the folloiwng into the console:
				<div className="code">
					you ran our of cookies!
				</div><br/>
				
				<b>!=</b> is used to check inequality between <b>primitive types</b>. let's take a look at how this is used in an example:
				<div className="code">
					int cookies = 3;<br/>
					<div className="comment">//if the number of cookies in the jar is not equal to 0, we will print how many cookies are left after we take one</div><br/>
					if(cookies != 0)&#123;<br/>
						<p>cookies -= 1; <div className="comment">//this represents us taking a cookie out of the jar</div><br/>
						System.out.println("there are " + cookies + " left!");</p><br/>
					&#125;
				</div>
				our program above would print the following into the console:
				<div className="code">
					there are 2 cookes left!
				</div>
				this makes sense. since our integer <i>cookies</i> was not equal to 0, we would subtract 1 to give us a final value of 2.
				<h3>but what's with the pac man lookin symbols?</h3>
				<b>&lt;</b> is used to check if one value is less than another value. likewise, <b>&lt;=</b> is used to check if a value is less than or equal to another value. let's check out an example:
				<div className="code">
					int cookies = 3;<br/>
					int cookiesWanted = 4; <div className="comment">//this represents the number of cookies we want...we hungry</div><br/>
					boolean enoughCookies = true;<br/>
					<div className="comment">//if the number of cookies is less than the amount of cookies wanted, we will let the user know there aren't enough</div><br/>
					if(cookies &lt; cookiesWanted)&#123;<br/>
						<p>enoughCookies = false;<br/>
						System.out.println("there aren't enough cookies");</p><br/>
					&#125;
				</div>
				because the number of cookies we have in the jar is less than what we want, our program will print the following into the console:
				<div className="code">
					there aren't enough cookies
				</div><br/>
				
				<b>&gt;</b> is used to check if one value is greater than another value. likewise, <b>&gt;=</b> is used to check if a value is greater than or equal to another value. let's take a look at an example:<br/>
				<div className="code">
					int budget = 15; <div className="comment">//this is the amt of money (in US Dollars) you can spend</div><br/>
					int pricePerCookie = 2;<br/>
					<div className="comment">//this next line of code will use division to determine how many cookies we can buy with the money we have</div>
					int numCookiesBought = budget / pricePerCookie; <br/>
					<div className="comment">//if the number of cookies we bought is greater than 0, we will print out the number of cookies we bought</div><br/>
					if(numCookiesBought &gt; 0)&#123;<br/>
						<p>System.out.println("we can buy " + numCookiesBought + " cookies with $" + budget +".");</p><br/>
					&#125;
				</div>
				our program above would print the following in the console:
				<div className="code">
					we can buy 7 cookies with $15.
				</div>

				<h3>hey...this is all for primitives but what about Strings??</h3>
				<b>.equals()</b> is the method that we use to compare equality between <b>Strings</b>. this type of comparison is <b>case sensitive</b>.
				if you wanted to check if two String weren't equal to one another, then you would put the .equals() statement in parentheses and put an <b>!</b> in front of it. let's look at an example:
				<div className="code">
					String word = "Hello";<br/>
					boolean isHello = false;<br/>
					<div className="comment">//this if loop checks if <i>word</i> is equal to the String "Hello".</div><br/>
					if(word.equals("Hello"))&#123;<br/>
						<p>isHello = true;</p><br/>
					&#125;
				</div>
				the code above would change <i>isHello</i> to true, since the String <i>word</i> is the same as "Hello." However, lets take a look at what would happen if we were to change our String <i>word</i>...
				<div className="code">
					String word = "hello";<br/>
					boolean isHello = false;<br/>
					<div className="comment">//this if loop checks if <i>word</i> is equal to the String "Hello".</div><br/>
					if(word.equals("Hello"))&#123;<br/>
						<p>isHello = true;</p><br/>
					&#125;
				</div>
				the code above would not change <i>isHello</i>. Though both our variable <i>word</i> and "Hello" are the same word, they are not the same in terms of their case. 
				remember, the <b>.equals() method</b> is case sensitive! because our <i>word</i> variable is not capitalized, our boolean <i>isHello</i> would stay false.
				<h3>alright, but can i get an example?</h3>
				yessir! in this example, let's say we wanted to make a program to see if you are over speed limit.
				in this case, we are going to need one variable that keeps track of our speed.  
				if we are going over the speed limit, we are going to print "slow down!" into the console. 
				(<b className="note">psst. need a reminder</b> on how to print? check out the <Link className="contentLink" to="/printing"><b className="pageName">printing page</b></Link>!)
				<div className="code">
					int yourSpeed = 32;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;
				</div>
				the code above wouldn't print anything into the console since your speed of 32 is not greater than 35. 
				but, what if we were over the speed limit. let's take a look at the following code...
				<div className="code">
					int yourSpeed = 37;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;
				</div>
				because we are going faster than the speed limit, the code would print the following into the console:
				<div className="code">
					slow down!
				</div>
				that's great! but, let's say we wanted to make our program more like the electronic signs you sometimes 
				see on the road that tell you your speed and tell you to slow down if you are speeding.<br/> in this case, we would want to add an <b>else statement</b>, a statement that is used to <b>run a block of code</b> if the original <b>condition is false</b>.
				<h3>wait, so how do you make an else statement?</h3>
				here is the blueprint on how to make an else statement:<br/>
				<b>if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;<br/>
				else&#123;<br/>
					<p>*code block*</p><br/>
				&#125;</b><br/><br/>
				(<b className="note">btw:</b> else statements don't have a condition since they will run if the original condition is false)<br/>
				<h3>can i see it with the example</h3>
				yea!! so going back to our example of the electronic road sign, we would want to have an else statement that prints out our 
				speed limit if we are not speeding. so our entire program would look something like this:
				<div className="code">
					int yourSpeed = 32;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;<br/>
					<div className="comment">//THIS NEXT STATEMENT IS THE NEW CODE</div><br/>
					else&#123;<br/>
						<p>System.out.print(yourSpeed)</p><br/>
					&#125;
				</div>
				in this case, since we are going below the speed limit, our program would print the following into the console:
				<div className="code">
					32
				</div>
				<br/>
				yay! but, to make this even more interesting, what if we wanted to have our program let us know if we were going at speed limit. 
				if our speed was equal to the speed limit, we would want to print out "you're at speed limit" to do this, we would want to use an <b>else if</b> statement.
				<h3>wait, how do you make an else if statement?</h3>
				here is the blueprint on how to make an else if statement: <br/>
				<b>if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;<br/>
				else if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;</b><br/><br/>
				(<b className="note">btw:</b> you can have multiple else if statements as long as there's an if statement before them!)
				<h3>ok, so how does it work with our example</h3>
				going back to our example of the speed sign, we want our program to print "you're at speed limit" in the console if we are going at speed limit. 
				so, our entire program, with the if and else from before, will look like this:
				<div className="code">
					int yourSpeed = 32;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;<br/>
					<div className="comment">//THIS NEXT STATEMENT IS THE NEW CODE</div><br/>
					else if(yourSpeed == 35)&#123;<br/>
						<p>System.out.print("you're at speed limit");</p><br/>
					&#125;<br/>
					else&#123;<br/>
						<p>System.out.print(yourSpeed)</p><br/>
					&#125;
				</div>
				in this case, since we are going at speed limit, our program would print out the following into the console:
				<div className="code">
					you're at speed limit
				</div>
				yay! nice work!
				<h3>there are two types of people in this world</h3>
				<div className="code">
				if(<div className="comment">/*condition*/</div>)&#123;
				<br/>
				<p><div className="comment">//insert some code here</div></p>
				<br/>
				&#125;
				</div>
				<div className="code">
				if(<div className="comment">/*condition*/</div>)
				<br/>
				&#123;
				<br/>
				<p><div className="comment">//insert some code here</div></p>
				<br/>
				&#125;
				</div>
				hahahaha <b>*laughs at own joke*</b>
				<h3>if(recap == true)&#123;</h3>
				<b>oooooo!</b> you made it to recap!<br/><br/>
				remember, the blueprint of an <b>if statement</b> with <b>else if</b> as well as <b>else</b> is<br/>
				<b>if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;<br/>
				else if(<i>&lt;other condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;<br/>
				else&#123;<br/>
					<p>*code block*</p><br/>
				&#125;</b><br/><br/>
				remeber that the <b>condition</b> can be any statement that equates to a value of <b>true</b> or <b>false</b>. 
				this can be done using any of the four <b>comparison operators</b> (<b>==</b>, <b>!=</b>, <b>&lt;</b>, <b>&gt;</b>) or <b>.equals()</b> for comparing <b>Strings</b>.
				and that's all of it! great job, you're now a master of if statements!!
				<h3>&#125;</h3>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">traffic lights:</b><br/><br/>
					your <b>goal</b> is to use <b>if statements</b> to <b>print out a command</b> into the console depending on what <b>color our traffic light</b> is. this will require two steps:<br/>
					<ol>
						<li>create a variable to keep track of the color of the light (red, yellow, green)</li>
						<li>use an if statement to print out a specific command depending on the color of the traffic light</li>
						<ul>
							<li>if it's red, print out "stop"</li>
							<li>if it's yellow, print out "slow"</li>
							<li>if it's green, print out "go"</li>
							<li>if it doesn't match any of the above colors, then print out "not a valid color"</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, you might need to use else if and else statements too, not just if *wink, wink*",
							"for step 2, remember to use str1.equals(str2) to compare equality between two Strings str1 and str2"
						]}
						id="if-statement-traffic-lights"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/if-statement-traffic-lights?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/if-statement-traffic-lights-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">positive vibes only:</b><br/><br/>
					sorry, we don't accept negative energy – only positive vibes here. your <b>goal</b> is to use <b>if statements</b> to <b>check if a number is positive or not</b>. this will require two steps:<br/>
					<ol>
						<li>create a variable to store any integer of your choice</li>
						<li>use an if statement to check if your integer is positive</li>
						<ul>
							<li>just to clarify, a positive number is any number above 0</li>
							<li>if your integer is positive, then print out a positive message</li>
							<li>here's an example of a positive message for y'all: "positive vibes only yasss qweens"</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, zero is not – we repeat, not – a positive number",
							"for step 2, your condition should be num > 0, where num is your integer variable",
						]}
						id="if-statement-positive-vibes-only"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/if-statement-positive-vibes-only?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/if-statement-positive-vibes-only-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/boolean-logic"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default IfStatement;