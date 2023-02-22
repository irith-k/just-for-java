import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class BooleanLogic extends React.Component{
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
				welcome to <b>boolean logic</b>! our goal for this page is for you to understand what <b>2B||!2B</b> means! 
				<br/>
				we are going to learn how to make our <b>if statements</b> more complex so that we can check multiple things at once (<b className="note">psst. need a reminder</b> on what in the world if statements are? check out the <Link className="contentLink" to="/if-statement"><b className="pageName">if statement page</b></Link>!). and of course, as the name suggests, we are going to work with <b>booleans</b>! (<b className="note">btw:</b> a <b>boolean</b> is a variable type that has only two possible values: <b>true</b> or <b>false</b>.)
				<br/>
				are you ready for a bunch of fun symbols like <b>!</b>, <b>&&</b>, <b>||</b>, and <b>()</b>? are you ready for tons of tables filled with <b>true</b> and <b>false</b>? cool. let's do this.
				<br/>
				<h3>! = not this</h3>
				whenever you see <b>!</b>, think <b>"the opposite of this"</b>.
				<br/><br/>
				<table>
					<tr>
						<td><b>!</b></td>
						<td>true</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td><b>!</b></td>
						<td>false</td>
						<td>=</td>
						<td>true</td>
					</tr>
				</table>
				<h3>! understanding this quite yet? maybe an example will help</h3>
				here's an example: let's make a program that checks if a password that the user enters is not empty. (<b className="note">psst. need a reminder</b> on how in the world you can get and store user input? check out the <Link className="contentLink" to="/user-input"><b className="pageName">user input page</b></Link>!) (<b className="note">psst. need a reminder</b> on how to check if a String is empty or not? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!)
				<br/><br/>
				ready for the <b>big reveal</b>? the first thing you need to do is import the <b>Scanner</b> class to help you get user input. at the <b>top of your program</b>, you should have the following line of code:
				<div className="code">
				import java.util.Scanner;
				</div>
				and you should have something like the following in your main method:
				<div className="code">
				<div className="comment">//create a Scanner variable</div>
				<br/>
				Scanner in = new Scanner(System.in);
				<br/>
				<div className="comment">//ask the user for their password; make sure to use System.out.print so that the user can answer on the same line as the prompt; also make sure to add a space after the prompt</div>
				<br/>
				System.out.print("Password: ");
				<br/>
				<div className="comment">//store the user input in a String variable called password</div>
				<br/>
				String password = in.nextLine();
				<br/>
				<div className="comment">//use isEmpty() and ! to check if the password the user entered is not empty</div>
				<br/>
				if(!password.isEmpty()) &#123;
				<br/>
				<p>
					<div className="comment">//insert some code here</div>
				</p>
				<br/>
				&#125;
				<br/>
				<div className="comment">//since we are done getting user input, we can close the Scanner</div>
				<br/>
				in.close();
				</div>
				<h3>&& = this and this</h3>
				whenever you see <b>&&</b>, think <b>"only true if both this and this are true"</b>.
				<br/><br/>
				<table>
					<tr>
						<td>true</td>
						<td><b>&&</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>&&</b></td>
						<td>true</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td>true</td>
						<td><b>&&</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>&&</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
				</table>
				<h3>i'm confused && i might need an example</h3>
				of course! let's make a program that creates two boolean variables: <i>isSunny</i> and <i>beachOpen</i>. if it's sunny and the beach is open, then print out a message saying "it's a great day to go to the beach!" (<b className="note">psst. need a reminder</b> on how to print a message to the console? check out the <Link className="contentLink" to="/printing"><b className="pageName">printing page</b></Link>!)
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your main method:
				<div className="code">
				<div className="comment">//create your two boolean variables and set them to whatever values you want</div>
				<br/>
				boolean isSunny = false;
				<br/>
				boolean beachOpen = true;
				<br/><br/>
				<div className="comment">//check if it is sunny and if the beach is open using &&</div>
				<br/>
				if(isSunny && beachOpen) &#123;
				<br/>
				<p>
					<div className="comment">//print a message for the user telling them to go to the beach</div>
					<br/>
					System.out.println("it's a great day to go to the beach!");
				</p>
				<br/>
				&#125;
				</div>
				you can set your variables to any values you like, but for our code above, <b>nothing</b> is printed out in the console.
				<h3>|| = this or this</h3>
				whenever you see <b>||</b>, think <b>"only true if either this or this are true"</b>.
				<br/><br/>
				<table>
					<tr>
						<td>true</td>
						<td><b>||</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>||</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>true</td>
						<td><b>||</b></td>
						<td>false</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>||</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
				</table>
				<h3>can you elaborate? || can you give me an example?</h3>
				sure! let's make a program that checks if your favorite number is divisible by either 3 or 5 (<b className="note">psst. need a reminder</b> on how you can check divisiblity using the <b>%</b> operator? check out the <Link className="contentLink" to="/arithmetic"><b className="pageName">arithmetic page</b></Link>!)
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your main method: 
				<div className="code">
				<div className="comment">//create an integer variable that stores your favorite number</div>
				<br/>
				int favoriteNumber = 101;
				<br/>
				<div className="comment">//check if favoriteNumber is divisible by 3 or by 5 using % and ||</div>
				<br/>
				<div className="comment">//remember, int a is divisible by int b if the remainder when you divide a by b is equal to 0, so a % b == 0</div>
				<br/>
				if(favoriteNumber % 3 == 0 || favoriteNumber % 5 == 0) &#123;
				<br/>
				<p>
					<div className="comment">//insert some code here</div>
				</p>
				<br/>
				&#125;
				</div>
				<h3>() = do this first</h3>
				whenever you see <b>()</b>, think <b>"hey! do this first!"</b>.
				<br/>
				if we combine <b>!</b>, <b>&&</b>, <b>||</b>, and <b>()</b> in a giant if statement, then there is a precedence on what happens first, just like how <b>*</b>, <b>/</b>, and <b>%</b> happen before <b>+</b> and <b>-</b>. (<b className="note">psst. need a reminder</b> on the order of operations? check out the <Link className="contentLink" to="/arithmetic"><b className="pageName">arithmetic page</b></Link>!) let's take a look at <b>logical precedence</b>:
				<ol>
					<li>()</li>
					<li>!</li>
					<li>&&</li>
					<li>||</li>
				</ol>
				just like with arithmetic, <b>parentheses</b> are used to signify what needs to happen first. between <b>!</b>, <b>&&</b>, and <b>||</b>, you always do <b>!</b> first, then <b>&&</b>, and finally <b>||</b>. 
				<h3>i'm ! really getting logical precedence && (an example sounds good || i really need an example)</h3>
				that's okay! logical precedence isn't the easiest of topics. here's an example: let's say that you want to buy a <b>super cute t-shirt</b>. you're looking to buy it either <b>in the store</b> or <b>online</b>. you also have a <b>budget</b> – the maximum price that you are willing to pay for this super cute t-shirt. let's create a program that models this scenario and prints out a message saying whether or not you can buy this t-shirt!
				<br/>
				the very first thing we need to do is to think: <b>under what condition can we buy this t-shirt?</b>
				<ul>
					<li>first, the t-shirt needs to be available either in the store or online</li>
					<li>second, the price of the t-shirt needs to be less than or equal to our budget</li>
				</ul>
				it's important to note that <b>both of the conditions above need to be true</b> in order for you to be able to buy this t-shirt.
				<br/><br/>
				now, all we need to do is translate what we just stated into code! first up, what <b>variables</b> are we going to need?
				<ul>
					<li><i>budget</i>, which stores the maximum price that we are willing to pay for this t-shirt</li>
					<li><i>price</i>, which stores how much money this t-shirt costs</li>
					<li><i>availableInStore</i>, which stores whether or not this t-shirt is available in the store</li>
					<li><i>availableOnline</i>, which stores whether or not this t-shirt is available online</li>
				</ul>
				<i>budget</i> and <i>price</i> will be <b>doubles</b>, while <i>availableInStore</i> and <i>availableOnline</i> will be <b>booleans</b>. awesome!
				<br/><br/>
				secondly, let's translate each condition that we brainstormed earlier into some <b>boolean logic</b>.
				<br/>
				the first condition is that the t-shirt needs to be available either in the store or online. did you spot the <b>or</b> in there? in terms of boolean logic, the first condition is equivalent to <i>availableInStore</i> <b>||</b> <i>availableOnline</i>. onto the second condition!
				<br/>
				the second condition is that the price of the t-shirt needs to be less than or equal to our budget. did you spot the <b>less than or equal to</b> in there? the second condition is simply <i>price</i> <b>&lt;=</b> <i>budget</i>! (<b className="note">psst. need a reminder</b> on the comparison operators, such as <b>&lt;=</b>? check out the <Link className="contentLink" to="/if-statement"><b className="pageName">if statement page</b></Link>!)
				<br/>
				the last thing we need to do is combine the two conditions together. remember that both the first condition and the second condition must be true in order for you to be able to buy this t-shirt. did you spot the <b>and</b> in there? in terms of boolean logic, this is equivalent to first condition <b>&&</b> second condition. by substituting "first condition" and "second condition" with what we wrote earlier, we get (<i>availableInStore</i> <b>||</b> <i>availableOnline</i>) <b>&&</b> <i>price</i> <b>&lt;=</b> <i>budget</i>. we put <b>()</b> around the first condition because we want the first condition to be individually evaluated first.
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your main method:
				<div className="code">
				double budget = 20.00;<br/>
				double price = 13.99;<br/>
				boolean availableInStore = false;<br/>
				boolean availableOnline = true;<br/>
				if((availableInStore || availableOnline) && price &lt;= budget)&#123;<br/>
				<p>
					System.out.println("yay! you can buy this super cute t-shirt!");
				</p>
				<br/>
				&#125;<br/>
				else&#123;<br/>
				<p>
					System.out.println("aww, you can't buy this super cute t-shirt...");
				</p>
				<br/>
				&#125;
				</div>
				you can set your variables to any values you like, but for our code above, here's what prints out in the console:
				<div className="code">
				yay! you can buy this super cute t-shirt!
				</div><br/>
				phew that was a lot of coding – awesome work bro! time for a <b>bad joke</b> to brighten up your day: <b>!false</b>. it's funny because it's <b>true</b>. haha.
				<h3>!(!recap)</h3>
				<b>awesome!</b> you made it to recap!
				<br/><br/>
				we can use <b>!</b>, <b>&&</b>, <b>||</b>, and <b>()</b> to make our <b>if statements</b> more complex, allowing us to check multiple things in a single if statement. here is the <b>logical precedence</b>, meaning <b>which funky symbol you should perform first</b>:
				<br/> 
				<ol>
					<li><b>()</b> = do this first</li>
					<li><b>!</b> = not this</li>
					<li><b>&&</b> = this and this</li>
					<li><b>||</b> = this or this</li>
				</ol>
				and here are the <b>true false tables</b> that you haven't seen enough of!<br/><br/>
				<table>
					<tr>
						<td><b>!</b></td>
						<td>true</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td><b>!</b></td>
						<td>false</td>
						<td>=</td>
						<td>true</td>
					</tr>
				</table><br/>
				<table>
					<tr>
						<td>true</td>
						<td><b>&&</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>&&</b></td>
						<td>true</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td>true</td>
						<td><b>&&</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>&&</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
				</table><br/>
				<table>
					<tr>
						<td>true</td>
						<td><b>||</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>||</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>true</td>
						<td><b>||</b></td>
						<td>false</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>||</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
				</table><br/>
				to end with, hamlet once said, <b>2B||!2B</b>, that is the question... i guess shakespeare did have a knack for coding!
				<br/>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">unexcused absence:</b><br/><br/>
					your <b>goal</b> is to use <b>boolean logic</b> to <b>check if a student has an unexcused absence</b>, meaning that the student is not sick or does not have an appointment but is still absent. this will require two steps:<br/>
					<ol>
						<li>create three boolean variables: isAbsent, isSick, and hasAppointment</li>
						<li>if the student has an unexcused absence, then print a message screaming "detention for you when you get back!"</li>
						<ul>
							<li>a student has an unexcused absence if they are absent, if they are not sick, and if they do not have an appointment</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, you can use ! to check if the student is not sick or does not have an appointment",
							"for step 2, you can use && to check if all three conditions are true in a single if statement"
						]}
						id="boolean-logic-unexcused-absence"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/boolean-logic-unexcused-absence?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/boolean-logic-unexcused-absence-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">chocolate lava cake:</b><br/><br/>
					which store has the best deal on chocolate lava cakes? your <b>goal</b> is to use <b>boolean logic</b> to decide where you should buy chocolate lava cake from between two grocery stores based on <b>if chocolate lava cake is in stock and which chocolate lava cake is cheaper</b>. this will require three steps:<br/>
					<ol>
						<li>create all of your variables</li>
						<ul>
							<li>create two variables to store whether chocolate lava cake is in stock at store 1 and in stock at store 2</li>
							<li>create two variables to store the price of chocolate lava cake at store 1 and at store 2</li>
						</ul>
						<li>check in which store(s), if any, chocolate lava cake is in stock</li>
						<ul>
							<li>if chocolate lava cake is not in stock at either store, then print out "chocolate lava cakes aren't in stock"</li>
							<li>if chocolate lava cake is in stock at store 1 but not in stock at store 2, then print out "chocolate lava cakes are only at store 1"</li>
							<li>if chocolate lava cake is in stock at store 2 but not in stock at store 1, then print out "chocolate lava cakes are only at store 2"</li>
							<li>we will deal with the case when chocolate lava cake is in stock at both stores in the next step</li>
						</ul>
						<li>if chocolate lava cake is in stock at both stores, then pick the store that has the best deal on chocolate lava cakes</li>
						<ul>
							<li>if the price of chocolate lava cake is cheaper at store 1, then print out "best deal for chocolate lava cakes at store 1"</li>
							<li>if the price of chocolate lava cake is cheaper at store 2, then print out "best deal for chocolate lava cakes at store 2"</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, you can use ! to check if chocolate lava cakes are not in stock at a store",
							"for step 2, you can use && to check if both in stock conditions are true in a single if statement",
							"for step 2, you might need to use else if and else statements too",
							"for step 3, you will need to make the if statement and else statement that compares the chocolate lava cake prices inside the if statement checking if chocolate lava cakes are in stock at both stores"
						]}
						id="boolean-logic-chocolate-lava-cake"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/boolean-logic-chocolate-lava-cake?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/boolean-logic-chocolate-lava-cake-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">initials:</b><br/><br/>
					your <b>goal</b> is to use <b>boolean logic</b> to <b>check if two people have the same initials given their names</b>. this will require two steps:<br/>
					<ol>
						<li>create two variables to store the names of two people</li>
						<ul>
							<li>each variable should hold both the first and last name of the person; for example, "John Doe"</li>
						</ul>
						<li>check if the two names have the same initials, meaning the first letters of both the first and last names are the same</li>
						<ul>
							<li>short version: check if the first initial of the first person equals the first initial of the second person and if the last initial of the first person equals the last initial of the second person</li>
							<li>long version: check if the first letter of the first name of the first person is equal to the first letter of the first name of the second person and if the first letter of the last name of the first person is equal to the first letter of the last name of the second person – phew! that was a lot</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, it's a good idea to review indexing, charAt, and indexOf, but the rest of the hints will walk through what you need to do with Strings",
							"for step 2, the first letter of the first name is the first character in the String, which is at index 0, since indexing starts at 0",
							"for step 2, you can use charAt to get a character in a String at a given index in the String",
							"for step 2, the first letter of the last name is the character right after the space in the String",
							"for step 2, you can use indexOf to get the index of the first occurrence of a given character in a String",
							"for step 2, the index of the first letter of the last name is equal to the index of the first space + 1"
						]}
						id="boolean-logic-initials"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/boolean-logic-initials?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/boolean-logic-initials-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default BooleanLogic;