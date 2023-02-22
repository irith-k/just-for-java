import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Mathematics extends React.Component{
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
				we've already discussed <b>+</b>, <b>-</b>, <b>*</b>, <b>/</b>, and <b>%</b> (<b className="note">psst. need a reminder</b> on what these operators mean? check out the <Link className="contentLink" to="/arithmetic"><b className="pageName">arithmetic page</b></Link>!). but what if we want to do more <b>complex math operations</b>, such as raising a number to a power, or getting the absolute value of a number? luckily for us, the <b>Math</b> library provides us with a variety of math constants and complex functions. let's take a look at all of the brand new and super cool functionality the <b>Math</b> library gives us! 
				<br/>
				(<b className="note">btw:</b> if you don't understand some of the mathematical concepts discussed below, that is <b>completely okay</b>. knowing every single aspect of the Math library isn't essential to your programming journey. the goal of talking about the Math library is simply to <b>add more tools into your programming toolbox</b>. you may never use some of the functionality, but you may use other functionality frequently.)
				<br/>
				<h3>i'm hungry, is there any leftover pie?</h3>
				no, sorry! but we do have two mathematical constants – <b>pi</b> and <b>e</b> – that the Math library gives us access to. (<b className="note">btw:</b> just some quick technical definitions – pi is the circumference of a circle divided by its diameter, and e is the base of the natural logarithm.) here is the blueprint for <b>retrieving the double value of pi or e</b>:
				<br/>
				<b>
				Math.PI
				<br/>
				Math.E
				</b>
				<br/><br/>
				now let's try to use this blueprint in code! create a program that creates a <b>double</b> variable to store the <b>radius</b> of a circle. then your program should create another <b>double</b> variable to store the <b>circumference</b> of the circle. (<b className="note">hint:</b> the formula for the circumference of a circle is 2*pi*<i>r</i>, where <i>r</i> is its radius.)
				<br/>
				your program should look something like this:
				<div className="code">
				double radius = 3.0; <div className="comment">//can be any value you want</div>
				<br/>
				double circumference = 2 * Math.PI * radius;
				</div>
				<h3>which one is greater? which one is smaller?</h3>
				let's learn how to get the <b>maximum value</b> and the <b>minimum value</b> between two numbers using the Math library. the two numbers you are comparing can either both be <b>integers</b> or both be <b>doubles</b> (<b className="note">psst. need a reminder</b> on what the difference is between an <b>int</b> and a <b>double</b>? check out the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>!). here is the blueprint for getting the max and min between two numbers:
				<br/>
				<b>
				Math.max(<i>&lt;first int or double&gt;</i>, <i>&lt;second int or double&gt;</i>)
				<br/>
				Math.min(<i>&lt;first int or double&gt;</i>, <i>&lt;second int or double&gt;</i>)
				</b>
				<br/><br/>
				here's a basic example of some code using <b>Math.min()</b> that prints out the younger age between two variables: <i>myAge</i> and <i>yourAge</i> (<b className="note">psst. need a reminder</b> on why there's a <b>+</b> sign after the String in the print statement at the bottom of the code? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!). try to predict what will be printed out to the console!
				<div className="code">
				int myAge = 18;
				<br/>
				int yourAge = 16;
				<br/>
				System.out.print("the younger age is " + Math.min(myAge, yourAge));
				</div>
				got your prediction of what will get printed out? let's take a look at the console and see if you were right:
				<div className="code">
				the younger age is 16
				</div>
				<br/>
				now let's do an advanced example – <b>try to find the max integer between three integers.</b> you might be thinking, doesn't <b>Math.max()</b> only take in <b>two</b> integers? you're right... and that's where the challenge comes in. (<b className="note">hint:</b> you may need to use Math.max() more than once...) think you have an answer? let's take a look at the code below:
				<div className="code">
				int maxedOut = Math.max(5, Math.max(-1, 13)); <div className="comment">//maxedOut will store 13</div>
				</div>
				the variable <i>maxedOut</i> will store the max integer between <b>5</b> and <b>Math.max(-1, 13)</b>. and <b>Math.max(-1, 13)</b> is equivalent to <b>13</b>. so now we know that <i>maxedOut</i> will store <b>Math.max(5, 13)</b>, which is equivalent to <b>13</b>. and there you have it! you're a max/min master!
				<h3>boom! pow! time for some exponents</h3>
				how can we <b>raise a number to a power</b>? (<b className="note">btw:</b> raising a number, <i>base</i>, to a power, <i>exponent</i>, can be denoted as <i>base^exponent</i>. which means that we are multiplying <i>base</i> by itself <i>exponent</i> times.) we can use <b>Math.pow()</b>! here is the blueprint for raising a number, <i>base</i>, to a power, <i>exponent</i>:
				<br/><b>Math.pow(<i>&lt;base&gt;</i>, <i>&lt;exponent&gt;</i>)</b>
				<br/><br/>
				ready to try it out in code? let's go:
				<div className="code">
				System.out.println(Math.pow(5, 2));
				<br/>
				System.out.println(Math.pow(2, 3));
				</div>
				what prints out in the console?
				<div className="code">
				25.0
				<br/>
				8.0
				</div>
				<h3>you're halfway through! i'm rooting for you!</h3>
				let's learn how to <b>square root</b> and <b>cube root</b> a number using <b>Math.sqrt()</b> and <b>Math.cbrt()</b>, respectively. (<b className="note">btw:</b> square rooting a number is the exact opposite of raising a number to the power of 2; cube rooting a number is the exact opposite of raising a number to the power of 3.) here is the blueprint for calculating the square root and cube root of a number, <i>num</i>:
				<br/>
				<b>
				Math.sqrt(<i>&lt;num&gt;</i>)
				<br/>
				Math.cbrt(<i>&lt;num&gt;</i>)
				</b>
				<br/><br/>
				ready to try it out in code? let's go:
				<div className="code">
				System.out.println(Math.sqrt(25));
				<br/>
				System.out.println(Math.cbrt(8));
				</div>
				what prints out in the console?
				<div className="code">
				5.0
				<br/>
				2.0
				</div>
				<h3>six packs, more like absolute value (abs, get it?)</h3>
				i wish i had a six pack, but instead i get to talk about <b>absolute value</b> with you! (<b className="note">btw:</b> the absolute value of a number is its magnitude; in other words, the absolute value of a number is the number without its sign, so the number is always positive.) you can use <b>Math.abs()</b> to get the absolute value of either an <b>integer</b> or a <b>double</b>. here is the blueprint for getting absolute value using the Math library:
				<br/>
				<b>Math.abs(<i>&lt;int or double&gt;</i>)</b>
				<br/><br/>
				pretty simple, right? let's see <b>abs in action</b>!
				<div className="code">
				int numberOfAbsIHave = Math.abs(-6); <div className="comment">//Math.abs(-6) = 6</div>
				</div>
				<h3>trigonometry haters can skip this section</h3>
				but if you aren't a trig hater, then let's get into <b>SOHCAHTOA</b> (<b className="note">btw:</b> sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent)! here is the blueprint for calculating <b>sine</b>, <b>cosine</b>, and <b>tangent</b> of an angle, in radians:
				<br/>
				<b>
				Math.sin(<i>&lt;angle_in_radians&gt;</i>)
				<br/>
				Math.cos(<i>&lt;angle_in_radians&gt;</i>)
				<br/>
				Math.tan(<i>&lt;angle_in_radians&gt;</i>)
				</b>
				<br/><br/>
				and here's some sample code using all three of these trigonometric functions – and using Math.PI:
				<div className="code">
				double soh = Math.sin(Math.PI/2); <div className="comment">//soh = 1.0</div>
				<br/>
				double cah = Math.cos(Math.PI/3); <div className="comment">//cah = 0.5</div>
				<br/>
				double toa = Math.tan(Math.PI); <div className="comment">//toa = 0.0</div>
				</div>
				<h3>from floor to ceiling</h3>
				to end our discussion of the Math library, we are going to mention the concepts of <b>flooring</b> a double, or <b>rounding it down</b>, and <b>ceiling</b> a double, or <b>rounding it up</b>. (<b className="note">btw:</b> the floor is below you, or down, so you round down when you floor, while the ceiling is above you, or up, so you round up when you ceil.) here is the blueprint for <b>flooring and ceiling a double</b>:
				<br/>
				<b>
				Math.floor(<i>&lt;double&gt;</i>)
				<br/>
				Math.ceil(<i>&lt;double&gt;</i>)
				</b>
				<br/><br/>
				it's important to note that when flooring or ceiling a double, <b>you round the double either up or down to the nearest integer, but the type is still a double</b>. if you're super confused right now, don't worry!! an example coded out will definitely help you understand what i mean. take a look at the following code, which prints the result of flooring and ceiling the double, <i>decimal</i>:
				<div className="code">
				double decimal = 9.8;
				<br/>
				System.out.println(Math.floor(decimal));
				<br/>
				System.out.println(Math.ceil(decimal));
				</div>
				what do you think will get printed out into the console? let's take a look:
				<div className="code">
				9.0
				<br/>
				10.0
				</div>
				we expected that <b>flooring 9.8 would get 9</b>, and <b>ceiling 9.8 would get 10</b>, but do you notice something peculiar? 9 wasn't printed; rather, <b>9.0</b> was printed. similarly, 10 wasn't printed; rather, <b>10.0</b> was printed. what's the difference? 9 and 10 are both <b>integers</b> while 9.0 and 10.0 are both <b>doubles</b>.
				this means that the double we pass into <b>Math.floor()</b> or <b>Math.ceil()</b> will get rounded down or up, respectively, but will <b>still stay as a double</b>. it won't be rounded into an int. this also means that when we store the result of <b>Math.floor()</b> and <b>Math.ceil()</b> in a variable, we will store it in a <b>double</b>, not an <b>int</b>. here's a short example illustrating this:
				<div className="code">
				double decimal = 9.8;
				<br/>
				<div className="comment">//flooringDecimal = 9.0 and ceilingDecimal = 10.0</div>
				<br/>
				double flooringDecimal = Math.floor(decimal);
				<br/>
				double ceilingDecimal = Math.ceil(decimal);
				</div>
				<h3>and that's it! for now...</h3>
				there is so much more cool and complex math functions you can utilize with the Math library! (<b className="note">btw:</b> if you love trigonometry, the Math library has even more trig functions that you can play with.) unfortunately, we didn't have room to talk about everything in the Math library on this page, but <b>if you want to learn more about the Math library, simply search online</b>!
				<br/>
				there is one more topic in the Math library – generating random numbers – which is so important that we have dedicated a whole separate page just for that topic. it's a bit more <b>advanced</b> than everything we've talked about so far, so you'll see it later down the road. <b>exciting times ahead!</b>
				<h3>Math.recap()</h3>
				<b>woohoo!</b> you made it to recap!
				<br/><br/>
				you know what? after learning about all that <b>Math</b> i bet you're feeling <b>lazy like me</b> (<b className="note">btw:</b> i guess that's why i don't have a six pack...), so i'll keep this recap short.
				<br/><br/>
				imma just leave a table of all the constants and functions from the <b>Math library</b> we learned about today. and don't even bother reading through it; it's simply there for <b>reference</b>. with that, we're done with recap! pretty short, eh?
				<br/><br/>
				<table>
					<tr>
						<td>Math.PI</td>
						<td>the double value of the mathematical constant pi</td>
					</tr>
					<tr>
						<td>Math.E</td>
						<td>the double value of the mathematical constant e</td>
					</tr>
					<tr>
						<td>Math.max(<i>&lt;first int or double&gt;</i>, <i>&lt;second int or double&gt;</i>)</td>
						<td>returns the greater value between <i>&lt;first int or double&gt;</i> and <i>&lt;second int or double&gt;</i></td>
					</tr>
					<tr>
						<td>Math.min(<i>&lt;first int or double&gt;</i>, <i>&lt;second int or double&gt;</i>)</td>
						<td>returns the smaller value between <i>&lt;first int or double&gt;</i> and <i>&lt;second int or double&gt;</i></td>
					</tr>
					<tr>
						<td>Math.pow(<i>&lt;base&gt;</i>, <i>&lt;exponent&gt;</i>)</td>
						<td>returns <i>&lt;base&gt;</i> raised to the power of <i>&lt;exponent&gt;</i></td>
					</tr>
					<tr>
						<td>Math.sqrt(<i>&lt;num&gt;</i>)</td>
						<td>returns the square root of <i>&lt;num&gt;</i></td>
					</tr>
					<tr>
						<td>Math.cbrt(<i>&lt;num&gt;</i>)</td>
						<td>returns the cube root of <i>&lt;num&gt;</i></td>
					</tr>
					<tr>
						<td>Math.abs(<i>&lt;int or double&gt;</i>)</td>
						<td>returns the absolute value of <i>&lt;int or double&gt;</i></td>
					</tr>
					<tr>
						<td>Math.sin(<i>&lt;angle_in_radians&gt;</i>)</td>
						<td>returns the sine of <i>&lt;angle_in_radians&gt;</i></td>
					</tr>
					<tr>
						<td>Math.cos(<i>&lt;angle_in_radians&gt;</i>)</td>
						<td>returns the cosine of <i>&lt;angle_in_radians&gt;</i></td>
					</tr>
					<tr>
						<td>Math.tan(<i>&lt;angle_in_radians&gt;</i>)</td>
						<td>returns the tangent of <i>&lt;angle_in_radians&gt;</i></td>
					</tr>
					<tr>
						<td>Math.floor(<i>&lt;double&gt;</i>)</td>
						<td>returns a double that holds <i>&lt;double&gt;</i> rounded down to the nearest integer</td>
					</tr>
					<tr>
						<td>Math.ceil(<i>&lt;double&gt;</i>)</td>
						<td>returns a double that holds <i>&lt;double&gt;</i> rounded up to the nearest integer</td>
					</tr>
				</table>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">leftover pie:</b><br/><br/>
					if you're still hungry, we discovered a whole pie leftover! your <b>goal</b> is to use <b>Math</b> to find the <b>area of the leftover pie using pi and some other Math functions</b>. this will require two steps:<br/>
					<ol>
						<li>create a variable to store the radius of the leftover pie</li>
						<li>calculate the area of the leftover pie and store it in a new variable</li>
						<ul>
							<li>here's the formula for calculating the area of a circle: A = π * r ^ 2</li>
							<li>print out the area variable after creating it</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, you can retrieve the value of pi by using Math.PI",
							"for step 2, you can square the radius by using Math.pow(radius, 2), where radius is the base and 2 is the exponent"
						]}
						id="Math-leftover-pie"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Math-leftover-pie?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Math-leftover-pie-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">rounding your grade:</b><br/><br/>
					your <b>goal</b> is to use <b>Math</b> to <b>round your last test grade both up and down</b>. this will require three steps:<br/>
					<ol>
						<li>create a variable to store your last test grade</li>
						<li>create a variable to store your test grade rounded up</li>
						<ul>
							<li>after initializing the variable, print it out</li>
						</ul>
						<li>create a variable to store your test grade rounded down</li>
						<ul>
							<li>after initializing the variable, print it out</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, remember the the floor is below you, meaning that Math.floor(grade) rounds your grade down",
							"for step 3, remember that the ceiling is above you, meaning that Math.ceil(grade) rounds your grade up"
						]}
						id="Math-rounding-your-grade"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Math-rounding-your-grade?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Math-rounding-your-grade-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/if-statement"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Mathematics;