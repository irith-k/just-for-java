import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Break extends React.Component{
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
	          	a <b>break</b> statement is used to exit a loop of code. 
	          	<h3>wait, so how do you make a break statement?</h3>
				here is the blueprint for making a break statement: <br/>
				<b>break;</b><br/>
				<h3>oh, that's it? lol ok</h3>
				yup! now, you might be wondering "hmm... where do we use this?" (if you're not wondering that, well, too bad, that's what we're covering next).<br/>
				first, let's take a look at a <b>simple example</b> in a for loop. in the example below, we want to use a for loop to loop through the numbers 1-10. <i>but</i>, let's say we want to stop looping through at 5. we can use a break like so:
				<div className="code">
					for(int i = 1; i &lt;= 10; i++) &#123;<br/>
						<p>System.out.println(i);<br/>
						if(i == 5) &#123; <div className="comment">//remember, we want to end the loop when i = 5</div><br/>
						<p>break;</p><br/>
						&#125;</p><br/>
					&#125;
				</div>
				the code above would print out the following:
				<div className="code">
				1<br/>
				2<br/>
				3<br/>
				4<br/>
				5
				</div>
				pretty straightforward, right? break simply <b>ends the loop that it's written in</b>. 
				<h3>but, what if we have a loop inside a loop?</h3>
				aka nesting (<b className="note">psst. need a reminder</b> on what nesting is? check out the <Link className="contentLink" to="/nesting"><b className="pageName">nesting page</b></Link>!). good question! if we have nested loops, and <b>break is written in the inner most loop</b>, it will simply <b>exit only the inner most loop</b>!
				i know that seems confusing, so let's take a look at an <b>example</b>.<br/>
				in the example below, we want to do something similar to what we previously did, <i>but</i> we wanna be fancier. you know, just step it up a notch. cuz we're cool like that.
				alright, back to the coding now. so, here we want to try and print the numbers 1-5 5 times. we can do this using a for loop inside a foor loop, like so:
				<div className = "code">
					for(int j = 1; i &lt;= 10; j++) &#123;<br/>
						<p>for(int i = 1; i &lt;= 10; i++) &#123;<br/>
							<p>System.out.print(i);<br/>
							if(i == 5) &#123;<br/>
							<p>break;</p><br/>
							&#125;</p><br/>
						&#125;</p><br/>
						<p>System.out.println();<br/>
						if(j == 5) &#123; <br/>
						<p><div className="comment">//remember, we want to print 5 times, so we want to stop after the 5th iteration</div> <br/>
						break;</p><br/>
						&#125;</p><br/>
					&#125;
				</div>
				this code would print the following:
				<div className="code">
					12345<br/>
					12345<br/>
					12345<br/>
					12345<br/>
					12345
				</div>
				makes sense, right? break exits out of the inner most loop that it is in. in this case, we saw that it exited out of the inner for loop with i only, but continued in the outer for loop until j became 5. awesome!! now, let's take a look at an interesting concept...while(true) loops.
				<h3>umm... wdym? what's while(true)?</h3>
				<b>while(true)</b> is essentially a loop that runs forever. (<b className="note">psst. need a reminder</b> on while loops? check out the <Link className="contentLink" to="/while-loops"><b className="pageName">while loop page</b></Link>!). that's why, whevenever you have a while(true) loop, you <i>need</i> a break inside.
				let's take a look at an <b>example</b>.<br/><br/> let's say we want to ask a user all of the things they have to do for the day, and once they finish listing their todos, they can type in "quit" to stop the program. but, <b>we don't know the total number of iterations we need</b>. some might have 1 thing to do (if they're on top of their todos), and some might have ten things to do (calling all procrastinators).
				either way, we won't know how many times it'll take for them to finish listing their todos. that's when we can use a <b>while(true) loop</b>! so, this is what the code would look like:
				<div className="code">
					<div className="comment">//assume we've imported the Scanner</div><br/><br/>
					Scanner in = new Scanner(System.in);<br/>
					while(true)&#123;<br/>
						<p>System.out.print("What is your todo for today? If you don't have anymore, type 'quit': ");<br/>
						String reply = in.nextLine();<br/>
						if(reply.equals("quit"))&#123;<br/>
							<p>break;</p><br/>
						&#125;</p><br/>
					&#125;<br/>
					in.close();
				</div>
				awesome! so this means that the while true loop will continue to run until the user types "quit," at which point it will end! great job!
				<h3>recap time !!</h3>
				<b>danggg!!</b> you made it to recap!<br/><br/>
				so, we learned taht a <b>break</b> statement, typed in code as <b>break;</b>, is used to exit the inner most loop that it's in. we can use this statement to exit single loops, make more complicated programs with nested loops, and more importantly, with <b>while(true)</b> loops!<br/>
				nice job!! let's do some practice now!<br/>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">how many fingers:</b><br/><br/>
					how many fingers am i holding up? your <b>goal</b> is to use a <b>while(true)</b> loop and a <b>break</b> statement to <b>write a program</b> that prompts the user to <b>guess the number of fingers being held up</b>. note that we will be assuming that the <b>computer is using one hand</b>, not two. this will require five steps:<br/>
					<ol>
						<li>first, we want to import and create the scanner that will get out user input, ask the user to guess, and create a variable to keep track of the number of fingers we want the computer to be holding up</li>
						<li>next, we want to create a while(true) loop, inside of which we will be creating a variable to hold the user's guess</li>
						<li>after that, we will need an if statement to see if the guessed number is equal to the number being held up, at which point we want to print a "nice job" statement and exit the loop</li>
						<li>since we want to make sure that the guess is a valid guess, meaning it isn't over the number of fingers on one hand or under that range, we want to prompt the user if the guess isn't a valide value and to try again</li>
						<li>lastly, if the user has simply just guessed wrong, we want to prompt the user to try again</li>
					</ol>
					<Hint
						hints={[
							"for step 3, remember, we want to end the infinite while(true) loop since there's no reason for us to continue to prompt the user to guess if they got it right. this is where you should use a break statement!!",
							"for step 4, if we want to check that the guess is valid, it should be between the numbers 1 and 5 (since that's generally how many fingers people have, that's what we will be using as our range. but, if you're cool and have more or less fingers than 5 on your hand, feel free to change the range!) so, sticking with the 1-5 range, what do we need to check to make sure that the guess isn't more than 5 or less than 1?",
							"for step 5, if the guess doesn't fit any of the other conditions, we want to prompt the user to try again. what type of statement can we use for this? well, if condition 1 and 2 and 3 aren't met, else we do this. hmm, else... interesting ;)"
						]}
						id="break-how-many-fingers"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/break-how-many-fingers?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/break-how-many-fingers-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">second a:</b><br/><br/>
					your <b>goal</b> is to use a <b>break statement</b> to make a program that can <b>find the index of the second a in a word</b>. this will require steps:<br/>
					<ol>
						<li>first, we want to create two variables: one to store the word (choose a word that contains at least two a's), and one to store the count of how many a's we encountered in our word</li>
						<li>next, we want to make a for loop that goes through the entire word</li>
						<li>after that, we want to use an if statement to check if the character we are on is an a</li>
						<li>if that is the case, we also want to check if we are on the second a in the word. </li>
						<li>if it is the second a, print a statement saying what position the second a in the word is at</li>
					</ol>
					<Hint
						hints={[
							"for step 2, if we want to go through the word, what should our upper limit for our iterator variable be? maybe something using the .length() function?",
							"for step 3, if we want to look at the character at a specific point, we need to use the .charAt() function",
							"for step 5, if we want to print out a statement that includes variables, remember we will need yo use String concatination"
						]}
						id="break-second-a"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/break-second-a?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/break-second-a-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/functions"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Break;