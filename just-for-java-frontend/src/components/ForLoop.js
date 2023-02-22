import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class ForLoop extends React.Component{
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
				a <b>loop</b> is <b>a repeating block of code</b>. here, we will focus on <b>for loops</b>, a type of loop that iterates through your block of code a <b>specific number of times</b>.
				<h3>wait, so how do you create a for loop?</h3>
				here is the blueprint for creating a for loop:<br/>
				<b>for(<i>initialize</i> ; <i>condition</i> ; <i>iterate</i>)&#123; <br/>
				<p>*code*</p> <br/>
				&#125;</b><br/><br/>
				as you can see from the blueprint above, there are three main components to creating a for loop: 
				<ul>
					<li>initialize</li>
					<li>condition</li>
					<li>iterate</li>
				</ul>
				let's walk through each of these components...
				<br/>
				<h3>what in the world is initialize?</h3>
				good question! initializing is the <b>first component</b> of your for loop. it works to <b>create the variable</b> that you will use to go through your for loop.
				for initalizing, we always use an <b>int variable</b>, often denoted by the letter <b>i</b>.  
				in the initialize section, we create i and set it equal to the <b>start value</b>. <br/>
				for example, if you want your for loop to print the numbers 1-5, you would <b>set i equal to 1</b>, because that's the number you want to print first.
				(<b className="note">psst. need a reminder</b> on how to create a variable? check out the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>!)

				<h3>and what's condition?</h3>
				the condition is the <b>second component</b>. it works to <b>determine when the loop should stop</b>. you can denote this using <b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, or <b>&gt;=</b> depending on what you want your loop to do.
				<br/>going back to our example of printing out the numbers 1-5, we can make our condition in two ways: <b>i &lt;= 5</b> or <b>i &lt; 6</b>. which one you choose is up to you.
				
				<h3>hey, wait! you still have to explain iterate!</h3>
				don't worry, we didn't forget :). the iterate portion is our <b>last component</b> and works to <b>increment your integer variable</b>. you can increment by however much you want, <b>either increasing or decreasing</b> depending on the direction you would like your loop to go in. 
				if you want your integer to be increased by a certain number, you would type <b>i += <i>&lt;number you want to increase by each time&gt;</i></b>. 
				if you want your integer to be decreased by a certain number, you would type <b>i -= <i>&lt;number you want to decrease by each time&gt;</i></b>.
				a shortcut for increasing i by 1 each time is typing <b>i++</b>, while a shortcut for decreasing i by 1 is... you guessed it: <b>i--</b>.
				you can also use multiplication (<b>i *=</b>)and division (<b>i /=</b>), but addition and subtraction are the most common.
				<br/>going back to our example of printing numbers 1-5, we would want to increase i by 1 each time. so, for our last component of the for loop, we would type <b>i++</b>.
				(<b className="note">btw:</b> don't forget the semicolons between each of the three components.)
				<h3>and for some examples...</h3>
				here is our example from above fully coded out: 
				<div className="code">
					for(int i = 1; i &lt;= 5; i++) &#123; <br/>
						<p>System.out.print(i + " ");</p> <div className = "comment">//the " " is to add a space between the numbers when printing</div><br/>
					&#125;<br/>
				</div>
				the code above prints out the following in the console:
				<div className="code">
					1 2 3 4 5
				</div>
				<h3>...and here's another example:</h3>
				in this example, we want to use a for loop to add up the powers of 2 between 1 and 100. sounds difficult, i know, but let's break down the problem.<br/>
				remember, the first thing we want to do is <b>make our integer i</b>. (<b className="note">hint:</b> think about what number we want to start at.) 
				next, we want our <b>condition</b>. (<b className="note">hint:</b> there are two ways to write this part.)
				and lastly, we will need to <b>increment our integer</b> in a way to get the <b>powers of 2</b>. i'll let you think of that one for a bit. (<b className="note">hint:</b> think back to your math class.)<br/> 
				now, inside the for loop we will need a way to add our number to a sum... hmm... might need to remember some things from the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link> for this part.
				ok, got it? let's see it coded out!
				<div className="code">
					int sum = 0; <div className = "comment">//this variable will keep track of our sum in our for loop</div><br/>
					for(int i = 1; i &lt;= 100; i*=2)&#123;<br/>
						<p>sum += i; <div className="comment">//+= is a shortcut for saying sum = sum + i.</div></p><br/>
					&#125;
				</div>
				<b>i*=2</b> works by multiplying i by 2 each time it iterates through the for loop. so, with this in mind, i would start at 1, then 2, then 4, then 8, then 16, and so on.<br/>
				<h3>...and last example, we promise:</h3>
				in the first example, we printed out <b>i</b>, and in the second example, we added <b>i</b> to a <i>sum</i> variable. in this last example, i want to show you a different way that you can use the iterator variable, <b>int i</b>. 
				what if <b>i</b> represented an <b>index</b> in a <b>String</b>? (<b className="note">psst. need a reminder</b> on what an index is and how it relates to Strings? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) let's try to use a for loop to <b>iterate through each character in a String</b>. 
				<ul>
					<li>for the first component of our for loop, <b>initialize</b>, we want to set <b>int i</b> to the starting value. what should our starting value be? (<b className="note">hint:</b> think about what number indexing start at.) because <b>indexing starts at 0</b>, our first component should be <b>int i = 0</b>.</li>
					<li>for the second component of our for loop, <b>condition</b>, we want to answer the question: when should our for loop stop? (<b className="note">hint:</b> our for loop should stop after we've looped through each index in the given String.) we learned on the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link> that indexing goes from 0, inclusive, till the length of the String, exclusive (<b className="note">btw:</b> the length of a String is equal to the number of characters in the String). that means that we want our for loop to keep going as long as <b>i is less than the length of the String</b>. (<b className="note">btw:</b> to get the length of a String <i>str</i>, use the syntax <b>str.length()</b>.) therefore, our second component should be <b>i &lt; str.length()</b>.</li>
					<li>for the third component of our for loop, <b>iterate</b>, we want to think about what should happen to <b>i</b> each time we iterate. since <b>i</b> is the index, we want <b>i</b> to increase by 1 each time since <b>we are moving to the next index each iteration</b>, so our third component should be <b>i++</b>.</li>
				</ul>
				now that we have all three components of our for loop, <b>let's code it!</b> let's have our program print out each character in String <i>str</i> on its own line. (<b className="note">psst. need a reminder</b> of how to use <b>charAt()</b> to get the character at a given index in a String? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!)
				<div className="code">
				String str = "happy birthday";
				<br/>
				<div className="comment">//loop through each character in str</div>
				<br/>
				for(int i = 0; i &lt;= str.length(); i++)&#123;<br/>
				<p>
					<div className="comment">//use charAt() to print out each character on its own line</div><br/>
					System.out.println(str.charAt(i));
				</p><br/>
				&#125;
				</div>
				the code above prints out the following in the console:
				<div className="code">
				h<br/>
				a<br/>
				p<br/>
				p<br/>
				y<br/>
				 <br/>
				b<br/>
				i<br/>
				r<br/>
				t<br/>
				h<br/>
				d<br/>
				a<br/>
				y<br/>
				</div>
				<h3>is it really time for recap? get it. for. hehe.</h3>
				<b>ayyyyyy!</b> you made it to recap!<br/><br/>
				now, i know that was a lot, so here's a lil' summary:<br/><br/>
				a <b>loop</b> is a repeating block of code. one type of loop is a <b>for loop</b>, which helps to loop through a block of code a <b>specific number of times</b>. here is the blueprint for creating a for loop:<br/>
				<b>for(<i>initialize</i> ; <i>condition</i> ; <i>iterate</i>)&#123; <br/>
				<p>*code*</p> <br/>
				&#125;</b><br/><br/>
				there are three parts to a for loop: 
				<ol>
					<li><b>initialize</b>, when you make your integer <b>i</b> and set it equal to the start number</li>
					<li><b>condition</b>, where you decide <b>how</b> and <b>when</b> your loop should stop using the different signs</li>
					<li><b>iterate</b>, where you <b>increment</b> your integer a specific amount each time it loops through your code</li>
				</ol>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">blast off:</b><br/><br/>
					your <b>goal</b> is to use <b>for loops</b> to <b>print out a count down before the blast off of a rocket ship</b>. this will require two steps:<br/>
					<ol>
						<li>construct a for loop that counts down from 5 to 1</li>
						<ul>
							<li>each number should be printed to the console on its own line</li>
						</ul>
						<li>after the for loop is over, print "blast off!" to the console</li>
					</ol>
					<Hint
						hints={[
							"for step 1, your initialize component should be int i = 5 since your countdown begins at 5",
							"for step 1, your condition component should be i >= 1 because your countdown ends at 1, so as long as i is greater than or equal to 1, the countdown should keep going",
							"for step 1, your iterate component should be i-- because you want i to decrement, or decrease by 1, each iteration, since you are counting down"
						]}
						id="for-loop-blast-off"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-loop-blast-off?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-loop-blast-off-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">nibble nibble nom nom:</b><br/><br/>
					your <b>goal</b> is to use <b>for loops</b> to print out <b>nibble</b> and <b>nom</b> multiple times; an example output may look like this: "nibble nibble nibble nom nom nom".
					this will require four steps: <br/>
					<ol>
						<li>create a variable <i>n</i> that stores how many times you want to print out nibble and nom</li>
						<li>construct a for loop that iterates <i>n</i> times</li>
						<li>inside the for loop, print out nibble</li>
						<ul>
							<li>we want our nibbles and noms to all appear on the same line when they are printed</li>
							<li>we also want a space in between each nibble and nom</li>
						</ul>
						<li>construct a second for loop that prints out nom <i>n</i> times</li>
						<ul>
							<li>this construction should be almost identical to what you did in steps 2 and 3</li>
							<li>the only difference is that you are printing nom instead of nibble</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, your initialize component should be int i = 1 and your iterate component should be i++, because you want i to increment each time you loop",
							"for step 2, since you want your for loop to iterate n times, where n is how many times you want to print out nibble and nom, your condition component should be i <= n",
							"for step 3, you can use same-line printing - System.out.print() – so that your nibbles and noms are on the same line in the console",
							"for step 3, add a space after nibble and nom when you print them out inside your for loops"
						]}
						id="for-loop-nibble-nibble-nom-nom"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-loop-nibble-nibble-nom-nom?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-loop-nibble-nibble-nom-nom-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/while-loop"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default ForLoop;