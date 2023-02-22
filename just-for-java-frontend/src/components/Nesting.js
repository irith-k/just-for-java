import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Nesting extends React.Component{
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
				in programming, <b>nesting</b> simply means <b>putting code blocks inside each other</b>, such as <b>if statements</b>, <b>for loops</b>, and <b>while loops</b>. (<b className="note">psst. need a reminder</b> on how these three code blocks work? check out the <Link className="contentLink" to="/if-statement"><b className="pageName">if statement page</b></Link>, the <Link className="contentLink" to="/for-loop"><b className="pageName">for loop page</b></Link>, and the <Link className="contentLink" to="/while-loop"><b className="pageName">while loop page</b></Link>!) now, you might be thinking, what's the point of putting an if statement inside a while loop inside a for loop? nesting allows our programs to become <b>more complex in their functionality</b>!
				<h3>let's get funky</h3>
				let's take a look at the <b>classic example</b> we used to demonstrate how for loops and while loops work: <b>print the numbers 1-5</b>. just to refresh you, here is the classic example coded out using a for loop:
				<div className="code">
				for(int i = 1; i &lt;= 5; i++) &#123; <br/>
					<p>System.out.print(i + " ");</p><br/>
				&#125;<br/>
				</div>
				and using a while loop:
				<div className="code">
				int count = 1;<br/>
				while(count &lt;= 5)&#123;<br/>
				<p>System.out.print(count + " ");<br/>
				count++;</p><br/>
				&#125;
				</div>
				<br/>
				now, let's change things up a bit. say we wanted to <b>print the numbers 1-5, except for the number 4</b>. how can we do this? well, we already have the code to print the numbers 1-5, so all we need to do is not print the number if it is equal to 4! (<b className="note">btw:</b> did you notice the word "if" in that sentence?). let's add an <b>if statement inside our loop</b> that checks if the number is not equal to 4, and if so, prints the number. (<b className="note">hint:</b> you can use <b>!=</b> to check if the number is not equal 4.) take a look at the code below!
				<div className="code">
				for(int i = 1; i &lt;= 5; i++) &#123; <br/>
					<p>if(i != 4) &#123; <div className="comment">//if i does not equal 4, print i</div><br/>
						<p className="indent1">System.out.print(i + " ");</p><br/>
					&#125;</p><br/>
				&#125;<br/>
				</div>
				wow! that's a lot of <b>curly braces</b>! when you are nesting, it's super important to keep track of which curly brace defines what code block. for the code above, the opening curly brace at the very top and the closing curly brace at the very bottom define our <b>for loop</b>, whereas the opening and closing curly braces inside the for loop curly braces define our <b>if statement</b>.
				<br/>
				before we move on, let's quickly see what our example would look like with a <b>while loop</b> instead of a for loop:
				<div className="code">
				int count = 1;<br/>
				while(count &lt;= 5)&#123;<br/>
				<p>if(i != 4) &#123; <div className="comment">//if i does not equal 4, print i</div><br/>
						<p className="indent1">System.out.print(i + " ");</p><br/>
					&#125;<br/>
					count++;
					</p><br/>
				&#125;
				</div>
				finally, let's take a look at what got printed in the console:
				<div className="code">
				1 2 3 5
				</div>
				sweet!
				<h3>hmu with another example</h3>
				for sure! let's use nesting to <b>print out a diagonal line of a certain character in the console of size <i>n</i></b>. the first thing we need to do is create some variables and constants (<b className="note">btw:</b> a constant is a variable whose value cannot be changed once it has been initialized):
				<ul>
					<li>create a variable <i>n</i> that stores how long we want our diagonal line to be</li>
					<li>create a constant <i>myChar</i> that stores any character you want (<b className="note">psst. need a reminder</b> on how to create a constant? check out the <Link className="contentLink" to="/constants"><b className="pageName">constants page</b></Link>!)</li>
				</ul>
				next up: a for loop... or maybe two. hehehehe.
				<br/>
				remember that when we print our diagonal line, we aren't just printing <i>myChar</i>. we are also printing the <b>spaces</b> before the character. in order to visualize what exactly we are printing out better, take a look at the following console, where we have represented spaces with a dash instead for visual purposes. (<b className="note">btw:</b> the following would get printed out if <i>n</i> was equal to 5 and <i>myChar</i> was equal to 'X'.)
				<div className="code">
				X<br/>
				-X<br/>
				--X<br/>
				---X<br/>
				----X<br/>
				</div>
				notice that 5 lines were printed out in the console above. in a more general statement, <b><i>n</i> lines were printed out</b>. this means that our <b>outer for loop will iterate <i>n</i> times to loop through each line</b>.
				<br/>
				also notice how the number of characters we print out for each line is different:
				<ul>
					<li>for the <b>first</b> line, we print out <i>myChar</i>, which is <b>1</b> character in total</li>
					<li>for the <b>second</b> line, we print out one space and then <i>myChar</i>, which is <b>2</b> characters in total</li>
					<li>for the <b>third</b> line, we print out two spaces and then <i>myChar</i>, which is <b>3</b> characters in total</li>
					<li>for the <b>fourth</b> line, we print out three spaces and then <i>myChar</i>, which is <b>4</b> characters in total</li>
					<li>for the <b>fifth</b> line, we print out four spaces and then <i>myChar</i>, which is <b>5</b> characters in total</li>
				</ul>
				do you see a pattern? (<b className="note">hint:</b> look at what we wrote in <b>pink</b>...) if <i>i</i> represents the line number, each line has <i>i</i> characters in it, where the last character of each line is <i>myChar</i>. therefore, our <b>inner for loop will iterate <i>i</i> times, and inside our inner for loop, if we have reached the last character in the current line, we will print out <i>myChar</i>; otherwise, we will print out a space</b>.
				<br/>
				now, you might be thinking, where does this magical line number <i>i</i> variable come from? (<b className="note">hint:</b> what does our <b>outer for loop</b> do?) what if we told you that <i>i</i> is the <b>iterator variable of the outer for loop</b>? gasp! it's all coming together! here's a summary:
				<ul>
					<li>outer for loop = iterates through each line</li>
					<ul>
						<li>iterator variable = line number = <i>i</i></li>
						<li><i>i</i> starts at 1 and keeps incrementing as long as <i>i</i> &lt;= <i>n</i>, the total number of lines</li>
					</ul>
					<li>inner for loop = iterates through each character in line <i>i</i></li>
					<ul>
						<li>iterator variable = character number = <i>j</i></li>
						<li><i>j</i> starts at 1 and keeps incrementing as long as <i>j</i> &lt;= <i>i</i>, the line number and also the total number of characters on the line</li>
					</ul>
					<li>inside the inner for loop, if <i>j</i> equals <i>i</i>, meaning that we have reached the last character in the line, then we print out <i>myChar</i> using System.out.print(); else, we print out a space using System.out.print()</li>
					<li>right outside the inner for loop but still inside the outer for loop, print a new line by typing System.out.println() so that the next line starts below the previous line</li>
				</ul>
				ready to see this coded out? take a look below:
				<div className="code">
				int n = 13;<br/>
			    final char myChar = 'I';<br/>
			    for(int i = 1; i &lt;= n; i++) &#123;<br/>
			      <p>
			      for(int j = 1; j &lt;= i; j++) &#123;<br/>
			        <p className="indent1">
			        if(j == i) &#123;<br/>
			          <p className="indent2">
			          System.out.print(myChar);<br/>
			          </p><br/>
			        &#125; else &#123;<br/>
			          <p className="indent2">
			          System.out.print(' ');<br/>
			          </p><br/>
			        &#125;<br/>
			        </p><br/>
			      &#125;<br/>
			      System.out.println();<br/>
			      </p><br/>
			    &#125;
				</div>
				awesome! hope you didn't get confuzzled by all of those curly braces!
				<h3>&#123; &#123; &#123; recap &#125; &#125; &#125;</h3>
				<b>yo!</b> you made it to recap!
				<br/><br/>
				because you created super long and complex programs here using nesting, we'll keep this recap <b>short and sweet</b>.
				<br/>
				once again, <b>nesting</b> simply means putting code blocks inside each other, whether that's if statements, for loops, or while loops. and nesting involves a lot of curly braces, so it's <b>super duper important keep track of which curly brace defines what code block</b>.
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">loopity loopity loop:</b><br/><br/>
					your <b>goal</b> is to use <b>nesting</b> to <b>make a for loop that keeps printing "loopity" until the last iteration, when you print "loop"</b>; for example, if your for loop iterates 3 times, then you should print "loopity loopity loop". this will require three steps:<br/>
					<ol>
						<li>create a variable that stores how many times you want your for loop to iterate</li>
						<li>construct a for loop that iterates the correct number of times</li>
						<li>inside your for loop, check if you have reached the last iteration or not</li>
						<ul>
							<li>if you have reached the last iteration, then print out "loop"</li>
							<li>otherwise, then print out "loopity "</li>
							<li>note that there's a space at the end of loopity so that there is space between the words</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, your initialize component should be int i = 1, your condition component should be i <= num, where num is the variable you created in step 1, and your iterate component should be i++",
							"for step 3, you will need an if statement as well as an else statement",
							"for step 3, you know that you have reached the last iteration if your iterator variable i is equal to num, where num is the variable you created in step 1",
							"for step 3, make sure you use System.out.print() so that all the words are printed on the same line"
						]}
						id="nesting-loopity-loopity-loop"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/nesting-loopity-loopity-loop?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/nesting-loopity-loopity-loop-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">hll wrld:</b><br/><br/>
					your <b>goal</b> is to use <b>nesting</b> to <b>remove the vowels from a String</b>; for example, if the original String is "hello world", the new String would be "hll wrld". this will require five steps:<br/>
					<ol>
						<li>create two String variables, one that stores the original String and one that will store the vowels-removed String</li>
						<ul>
							<li>you can set the original String variable to any text you want</li>
							<li>the vowels-removed String variable can be initialized to an empty String ""</li>
						</ul>
						<li>use a for loop to iterate through each character in the String using indexing</li>
						<ul>
							<li>think about what the three components – initialze, condition, and iterate – of your for loop are going to be</li>
						</ul>
						<li>get the current character that you are on in the String using its index</li>
						<li>if the current character is not a vowel, then concatenate it to the vowels-removed String</li>
						<ul>
							<li>remember that vowels can be lowercase or uppercase</li>
							<li>there are numerous ways to do this step: one uses boolean logic and one creates a String of all the vowels</li>
						</ul>
						<li>print out the vowels-removed String variable</li>
						<ul>
							<li>this step should be performed after the for loop is done</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, your initialize component should be int i = 0 because indexing starts at 0",
							"for step 2, your condition component should be i < str.length() the last index in the String is at the length of the String - 1",
							"for step 2, your iterate component should be i++ since each time we loop, we want to go to the next index in the String",
							"for step 3, you will need to use <String>.charAt(<index>) to get the character at a specified index in the String",
							"for step 4, if you want to use boolean logic, make one giant if statement that checks if the character doesn't equal any of the vowels, both uppercase and lowercase; remember, ! = not, && = and, || = or, () = do this first",
							"for step 4, you can also create a String of all the vowels \"AEIOUaeiou\" – notice that it includes both uppercase and lowercase vowels – and check if the index of the current character in the vowels String is equal to -1, meaning that the current character does not appear in the vowels String, meaing that it isn't a vowel",
							"for step 4, if the current character is not a vowel, then you can use += to concatenate, or add, that character to the end of the vowels-removed String"
						]}
						id="nesting-hll-wrld"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/nesting-hll-wrld?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/nesting-hll-wrld-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">divisibility:</b><br/><br/>
					your <b>goal</b> is to use <b>nesting</b> to make a <b>while loop</b> that <b>prints out all numbers</b> from <b>1-50</b> that meet the requirement of being <b>divisible by 4 and 7</b>; in addition, you will need to <b>print out</b> the <b>total number of values</b> that meet the requirement. this will require six steps<br/>
					<ol>
						<li>first, you will need to create a variable to store the number that you are currently on and the total number of values that meet the requirement</li>
						<li>next, you will need to create a while loop with a condition to make sure that you are looking through the specific range of numbers of 1-50</li>
						<li>after that, you will need to check if the number is divisible by 4 and 7</li>
						<li>if the above is true, then you will print out the number (with your choice of printing mechanism) and also update your total</li>
						<li>then, you will need to increment your number so that it can move onto the next</li>
						<li>lastly, you will want to print out the total number at the end, making sure to label it so it is clear that the user knows the total is being printed at the bottom</li>
					</ol>
					<Hint
						hints={[
							"for step 2, what would our condition need to be if we wanted the numbers to be from 1-50? we are going to be starting at 1 with our variable, so we don't need to worry about the lower bound. but the upper bound... we want our values to be less than or equal to 50...so what should that condition be so that the code block will only run if it's less than or equal to 50? maybe something that checks if our current value variable is less than or equal to 50!",
							"for step 3, to check if our number is divisible by both 4 and 7, we will need to use an if statement, because we want some code (which we write in step 4) to only be run if this requirement is met. now, to actually check, what type of arithmetic can help us check if a value is divisible by a specific number? ohh... of course! % (modulus) does that!",
							"for step 5, we will want to increment outside of our if statement, as we want to do that no matter if the value we are currently on is divisible by 4 and 7. to increment, remember a shortcut is just doing ++",
							"for step 6, if we want to do this at the end, once we have reached the total number, we would want to print out total outside of our for loop! also, if we want to label that this is the total, we will want to combine a string, maybe something like \"total: \", and our total number variable"
						]}
						id="nesting-divisibility"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/nesting-divisibility?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/nesting-divisibility-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/break"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Nesting;