import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Overloading extends React.Component{
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
	            mwahaha – we aren't done with <b>functions</b> quite yet! there's one last concept we need to address, called <b>overloading</b>.
	            <h3>overloading, as in you put too many clothes in the laundry machine?</h3>
	            not rly... but appreciate the effort. <b>overloading</b>, or more explicitly called method overloading, allows <b>multiple</b> functions to have the <b>same name</b>, as long as the <b>number of parameters</b> and/or the <b>type of parameters</b> are <b>different</b>. (<b className="note">psst. need a reminder</b> on what a parameter is? check out the <Link className="contentLink" to="/functions"><b className="pageName">functions page</b></Link>!)
	            <h3>woah that definition was overloaded with technical language</h3>
	            dw! to illustrate the concept of function overloading, let's go through <b>examples pertaining to each of the following conditions</b>:
	            <ul>
	            	<li>the <b>type</b> of parameters differ</li>
	            	<li>the <b>number</b> of parameters differ</li>
	            </ul>
	            remember, overloading means that as long as <b>at least one</b> of the conditions above is true, then two functions can have the <b>same name</b>.
	            <h3>overloading by type of parameters</h3>
	            let's say that you want to make a <b>sum function</b>. pretty simple, right? our function <b>takes in two numbers</b> and <b>returns their sum</b>. what will the parameters and the return type be? we will pass <b>two ints</b> to our function, and its return type will be <b>int</b>. check out our sum function below:
	            <div className="code">
	            <div className="comment">//this sum function returns the sum of two integers</div>
	            <br/>
	            public static int sum(int a, int b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            but how about if we wanted to calculate the sum of <b>two doubles</b>, not of two ints? well guess what?! because of <b>overloading</b>, we can write two functions, both of them called <b>sum</b>, where one takes in two <b>ints</b> and the other takes in two <b>doubles</b>. of course, this is only possible because <b>the types of the parameters differ</b>. check out our overloaded sum functions below: 
	            <div className="code">
	            <div className="comment">//this sum function returns the sum of two integers</div>
	            <br/>
	            public static int sum(int a, int b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//this sum function returns the sum of two doubles</div>
	            <br/>
	            public static double sum(double a, double b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            very fun! very fresh!
	            <h3>how do you call overloaded functions? cause rnt their names the same?</h3>
	            it is true that the names of overloaded functions are identical; however, their <b>parameters are different</b>, and that's how we can distinguish them. using our overloaded sum functions that we made earlier, let's <b>call</b> them in our main method:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//this sum function call invokes the sum function that takes in two doubles, since 1.3 and 6.4 are integers</div>
	            	<br/>
	            	double myDouble = sum(1.3, 6.4); <div className="comment">//myDouble = 7.7</div>
	            	<br/>
	            	<div className="comment">//this sum function call invokes the sum function that takes in two ints, since 1 and 6 are integers</div>
	            	<br/>
	            	int myInt = sum(1, 6); <div className="comment">//myInt = 7</div>
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//this sum function returns the sum of two integers</div>
	            <br/>
	            public static int sum(int a, int b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//this sum function returns the sum of two doubles</div>
	            <br/>
	            public static double sum(double a, double b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            sweeeet!
	            <h3>overloading by number of parameters</h3>
	            now that we've learned how to overload by changing the type of parameters, let's learn how to overload by changing the number of parameters. say we wanted to make a function that <b>returns the absolute value of the maximum number between two integers</b>. do you remember the easy way to get the absolute value of a number and the maximum number between two numbers? (<b className="note">hint:</b> it starts with an <b>"m"</b> and ends in <b>"ath"</b>.) omg wow! you guessed it! we need to use <b>Math</b>! (<b className="note">psst. need a reminder</b> on how to use the Math.max and Math.abs functions? check out the <Link className="contentLink" to="/math"><b className="pageName">math page</b></Link>!) once you have an idea on what you need to do, check out our absMax function below:
	            <div className="code">
	            <div className="comment">//this absMax function returns the absolute value of the maximum integer between two integers</div>
	            <br/>
	            public static int absMax(int a, int b) &#123;
	           	<br/>
	           	<p>
	           		return Math.abs(Math.max(a,b));
	           	</p>
	           	<br/>
	            &#125;
	            </div>
	            how about if we wanted to return the absolute value of the maximum number between <b>not just two</b>, but <b>three integers</b>? woooooo is it getting <b>hot</b> in here? cause we're getting <b>kinda spicyyy</b>. anyways, even though both absMax functions take in int parameters, our first function takes in <b>two ints</b>, while our second function will take in <b>three ints</b>. so, we can name our second method absMax as well. of course, this is only possible because <b>the number of the parameters differ</b>. check out our overloaded absMax functions below: 
	            <div className="code">
	            <div className="comment">//this absMax function returns the absolute value of the maximum integer between two integers</div>
	            <br/>
	            public static int absMax(int a, int b) &#123;
	           	<br/>
	           	<p>
	           		return Math.abs(Math.max(a,b));
	           	</p>
	           	<br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//this absMax function returns the absolute value of the maximum integer between three integers</div>
	            <br/>
	            public static int absMax(int a, int b, int c) &#123;
	           	<br/>
	           	<p>
	           		return Math.abs(Math.max(Math.max(a,b), c));
	           	</p>
	           	<br/>
	            &#125;
	            </div>
	            finally, let's <b>call</b> both of our functions in the main method (<b className="note">btw:</b> gotta love dem main method variable names):
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//this absMax function call invokes the absMax function that takes in two ints, since we provide two arguments</div>
	            	<br/>
	            	int bloop = absMax(-1, -3); <div className="comment">//bloop = 1</div>
	            	<br/>
	            	<div className="comment">//this absMax function call invokes the absMax function that takes in three ints, since we provide three arguments</div>
	            	<br/>
	            	int bloopBloop = absMax(-1, -3, 2); <div className="comment">//bloopBloop = 2</div>
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//this absMax function returns the absolute value of the maximum integer between two integers</div>
	            <br/>
	            public static int absMax(int a, int b) &#123;
	           	<br/>
	           	<p>
	           		return Math.abs(Math.max(a,b));
	           	</p>
	           	<br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//this absMax function returns the absolute value of the maximum integer between three integers</div>
	            <br/>
	            public static int absMax(int a, int b, int c) &#123;
	           	<br/>
	           	<p>
	           		return Math.abs(Math.max(Math.max(a,b), c));
	           	</p>
	           	<br/>
	            &#125;
	            </div>
	            bloop.
	            <h3>what's the point of overloading anyway?!</h3>
	            it may seem like a pointless nuance rn, but let's see what life would be like <b>without overloading</b>. check out the code below, which creates two sum methods that are called in the main method:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	double myDouble = sumWithDoubles(1.3, 6.4);
	            	<br/>
	            	int myInt = sumWithInts(1, 6);
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            public static int sumWithInts(int a, int b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            public static double sumWithDoubles(double a, double b) &#123;
	            <br/>
	            <p>
	            	return a + b;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            it's pretty irritating to have to remember what you named your two different sum functions: <b>sumWithInts</b> and <b>sumWithDoubles</b>. if you had even more sum functions, imagine having to remember the difference between <b>sum1</b>, <b>sum2</b>, <b>sum3</b>, <b>sum4</b>, <b>sum5</b>, <b>sum6</b>... hopefully you get the point by now.
	            <br/>
	            overloading allows functions that perform <b>similar or identical tasks</b> – but for whatever reason have <b>different parameters</b>, whether they differ by number or type – to have the <b>same name</b>, which not only makes your life easier and more convenient as a programmer, but also <b>improves the readability of your program</b>.
	            <h3>have you realized that you've worked with overloaded functions before?</h3>
	            just like we revealed to you on the <Link className="contentLink" to="/functions"><b className="pageName">functions page</b></Link> that you've been working with functions all along, turns out that <b>you've already worked with overloaded functions before!!!</b> now the question becomes: which ones?!?! can you guess? (<b className="note">hint:</b> which functions that we've worked with can take in a different parameters, by number and/or type?) 
	            <br/>here's a couple: <b>substring</b> is overloaded by a different <b>number</b> of parameters. (<b className="note">psst. need a reminder</b> on what substring does? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) substring can take in one int parameter r– the start index – or two int parameters – the start index and end index. on the other hand, <b>printing functions</b> are overloaded by different <b>types</b> of parameters. just take a look at the code snippet below illustrating how print and println are overloaded:
	            <div className="code">
	            System.out.println(2); <div className="comment">//one int argument</div>
	            <br/>
	            System.out.println(1.99); <div className="comment">//one double argument</div>
	            <br/>
	            System.out.println('+'); <div className="comment">//one char argument</div>
	            <br/>
	            System.out.println("we love functions"); <div className="comment">//one String argument</div>
	            <br/>
	            System.out.println(false); <div className="comment">//one boolean argument</div>
	            </div>
	            the best overloaded function imo is <b>indexOf</b>, since it has <b>four different sets of parameters</b>: 1 char, 1 String, 1 char and 1 int, and 1 String and 1 int. pretty fancy, eh? (<b className="note">psst. need a reminder</b> on what indexOf does? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!)
	            <h3>feelin' overloaded with info? time to recap!!</h3>
	            <b>dang!</b> you made it to recap!
				<br/><br/>
				<b>overloading</b> allows multiple functions to have the <b>same name</b> as long as one or both of the following conditions are true:
				<ul>
					<li>the <b>type of parameters</b> differ between the functions</li>
	            	<li>the <b>number of parameters</b> differ between the functions</li>
				</ul>
				when you <b>call</b> a function that is overloaded, the computer knows which function to pick, despite them having the same name, because of the <b>number and/or type of the arguments</b> you provide in your function call. the <b>benefit</b> of overloading is that functions that perform the <b>same tasks</b> but take in <b>different parameters</b> can still have the <b>same name</b>. overloading is convenient and makes your program more <b>readable</b>.
				<br/><br/>
				hopefully you don't feel overloaded anymore :)
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">triangles:</b><br/><br/>
					can you calculate the area of a triangle? your <b>goal</b> is to use <b>overloading</b> to <b>create overloaded functions that calculate the area of a triangle for both int and double parameters</b>. this will require three steps:<br/>
					<ol>
						<li>create a function that calculates the area of a triangle using the appropriate integer parameters</li>
						<ul>
							<li>the formula for the area of a triangle is A = base * height / 2</li>
						</ul>
						<li>create an overloaded function that calculates the area of a triangle using the appropriate double parameters</li>
						<ul>
							<li>this function should have the same name as the function you created in step 1 since it's overloaded</li>
						</ul>
						<li>call both of your overloaded functions and print the areas</li>
					</ol>
					<Hint
						hints={[
							"for step 1, your function should take in two integer parameters: the base of the triangle and the height",
							"for step 1, your function should return the area of a triangle as an integer",
							"for step 2, your function should take in two double parameters: the base of the triangle and the height",
							"for step 2, your function should return the area of a triangle as a double"
						]}
						id="overloading-triangles"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/overloading-triangles?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/overloading-triangles-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">pets galore:</b><br/><br/>
					do you have pets? your <b>goal</b> is to use <b>overloading</b> to <b>create three overloaded functions that print what type of pet you have and its name</b>. this will require four steps:<br/>
					<ol>
						<li>create a function that takes in the type of pet – dog, cat, etc. – and its name</li>
						<ul>
							<li>the function should print out something like "i have a dog named fuzzles", if "dog" is the type and "fuzzles" is the name</li>
						</ul>
						<li>create an overloaded function that takes in only the name of your pet</li>
						<ul>
							<li>the function should print out something like "i have a pet named fuzzles", if "fuzzles" is the name</li>
						</ul>
						<li>create an overloaded function that takes in no inputs</li>
						<ul>
							<li>the function should print out something like "i don't have any pets"</li>
						</ul>
						<li>use these functions to print out the pets that you have, or simply play around with all four</li>
					</ol>
					<Hint
						hints={[
							"for step 1, your function should take in two String parameters: type and name",
							"for step 2, your function should take in one String parameter: name",
							"for steps 1-2, use String concatenation in your print statement; in other words, use the + operator to add the parameter variables to the String that you are printing out to make that nice sentence we provided in the steps",
							"for steps 1-3, because all of your overloaded functions are simply printing something out, they don't return anything",
							"for steps 1-3, because none of your overloaded functions return anything, their return types are void"
						]}
						id="overloading-pets-galore"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/overloading-pets-galore?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/overloading-pets-galore-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
	            <ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
	            ...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/array"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Overloading;