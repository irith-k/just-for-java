import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Arithmetic extends React.Component{
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
				we learned on the <b className="pageName">variables page</b> how to create <b>integers</b> and <b>doubles</b>. on this page, we are going to use these two variable types in <b>arithmetic operations</b>. oooh, fancy right? not really. <b>arithmetic</b> is just a cool-sounding word for the study of numbers and operations on them, such as addition, subtraction, multiplication, and division. here are the <b>five operations</b> and their corresponding <b>operator symbols</b> that java provides:
				<ul>
					<li><b>addition</b>, denoted using <b>+</b></li>
					<li><b>subtraction</b>, denoted using <b>-</b></li>
					<li><b>multiplication</b>, denoted using <b>*</b></li>
					<li><b>division</b>, denoted using <b>/</b></li>
					<li><b>modulus</b>, denoted using <b>%</b></li>
				</ul>
				you can apply any of the arithmetic operations listed above between:
				<ul>
					<li><b>two integers</b></li>
					<ul>
						<li>if you perform an operation between two integers, then the resulting value is an <b>integer</b></li>
					</ul>
					<li><b>two doubles</b></li>  
					<ul>
						<li>if you perform an operation between two doubles, then the resulting value is an <b>double</b></li>
					</ul>
					<li><b>an integer and a double</b></li>
					<ul>
						<li>if you perform an operation between an integer and a double, no matter the order, then the resulting value is an <b>double</b></li>
					</ul>
				</ul>
				note how the <b>type of the result</b> after the operation changes depending on <b>what types the operation is in between</b>.
				<br/><br/>
				one last nuance... <b>order of operations</b>. in the order of operations in java, anything in <b>()</b> happens first, then <b>*</b>, <b>/</b>, and <b>%</b> happen from left to right, and finally <b>+</b> and <b>-</b> happen from left to right. here is a visual representation of the order of operations:
				<ol>
					<li>()</li>
					<li>* / %</li>
					<li>+ -</li>
				</ol>
				awesome! now let's discuss each arithmetic operation in greater detail!
				<h3>+ addition +</h3>
				<b>addition</b> is denoted using <b>+</b> in java. here are some examples of addition between two integers, two doubles, and an integer and a double:
				<ul>
					<li>1 + 1 = 2</li>
					<li>3.5 + 5.73 = 9.23</li>
					<li>7 + 1.0 = 8.0</li>
					<li>9.9 + 2 = 11.9</li>
				</ul>
				here is the blueprint of the <b>standard notation</b> of adding another variable <i>i</i> to a variable <i>sum</i> (<b className="note">btw:</b> we can assume that <i>sum</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>sum</i> = <i>sum</i> + <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//add the tip to the price variable</div>
				<br/>
				double price = 13.99;
				<br/>
				double tip = 2.50;
				<br/>
				price = price + tip;
				</div>
				<br/>
				the <b>shorthand notation</b> for addition uses <b>+=</b>. here is the blueprint of the <b>shorthand notation</b> of adding another variable <i>i</i> to a variable <i>sum</i> (<b className="note">btw:</b> we can assume that <i>sum</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>sum</i> += <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//add the tip to the price variable</div>
				<br/>
				double price = 13.99;
				<br/>
				double tip = 2.50;
				<br/>
				price += tip;
				</div>
				<br/>
				if you want to <b>increment</b> a variable, there is actually a <b>shorthand of the shorthand notation</b> that we can use that automatically adds 1 to a variable using <b>++</b>. here is the blueprint of the <b>shorthand of the shorthand notation</b> of incrementing, or adding 1 to, a variable <i>sum</i> (<b className="note">btw:</b> we can assume that <i>sum</i> has already been initialized):
				<br/>
				<b><i>sum</i>++;</b>
				<br/><br/>
				now let's compare the standard notation, shorthand notation, and shorthand of the shorthand notation in code! take a look below:
				<div className="code">
				<div className="comment">//increment the variable num using the standard notation</div>
				<br/>
				int num = 0;
				<br/>
				num = num + 1;
				</div>
				<div className="code">
				<div className="comment">//increment the variable num using the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num += 1;
				</div>
				<div className="code">
				<div className="comment">//increment the variable num using the shorthand of the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num++;
				</div>
				<h3>- subtraction -</h3>
				<b>subtraction</b> is denoted using <b>-</b> in java. here are some examples of subtraction between two integers, two doubles, and an integer and a double:
				<ul>
					<li>1 - 4 = -3</li>
					<li>8.4 - 3.1 = 5.3</li>
					<li>22 - 0.001 = 21.999</li>
					<li>7.7 - 7 = 0.7</li>
				</ul>
				here is the blueprint of the <b>standard notation</b> of subtracting another variable <i>i</i> from a variable <i>difference</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>difference</i> = <i>difference</i> - <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//subtract the discount from the price variable</div>
				<br/>
				double price = 22.84;
				<br/>
				double discount = 5.00;
				<br/>
				price = price - discount;
				</div>
				<br/>
				the <b>shorthand notation</b> for subtraction uses <b>-=</b>. here is the blueprint of the <b>shorthand notation</b> of subtracting another variable <i>i</i> from a variable <i>difference</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>difference</i> -= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//subtract the discount from the price variable</div>
				<br/>
				double price = 22.84;
				<br/>
				double discount = 5.00;
				<br/>
				price -= discount;
				</div>
				<br/>
				if you want to <b>decrement</b> a variable, there is actually a <b>shorthand of the shorthand notation</b> that we can use that automatically subtracts 1 from a variable using <b>--</b>. here is the blueprint of the <b>shorthand of the shorthand notation</b> of decrementing, or subtracting 1 from, a variable <i>difference</i> (<b className="note">btw:</b> we can assume that <i>difference</i> has already been initialized):
				<br/>
				<b><i>difference</i>++;</b>
				<br/><br/>
				now let's compare the standard notation, shorthand notation, and shorthand of the shorthand notation in code! take a look below:
				<div className="code">
				<div className="comment">//decrement the variable num using the standard notation</div>
				<br/>
				int num = 0;
				<br/>
				num = num - 1;
				</div>
				<div className="code">
				<div className="comment">//decrement the variable num using the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num -= 1;
				</div>
				<div className="code">
				<div className="comment">//decrement the variable num using the shorthand of the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num--;
				</div>
				<h3>* multiplication *</h3>
				<b>multiplication</b> is denoted using <b>*</b> in java. here are some examples of multiplication between two integers, two doubles, and an integer and a double:
				<ul>
					<li>3 * 3 = 9</li>
					<li>1.5 * 0.7 = 1.05</li>
					<li>2 * 4.4 = 8.8</li>
					<li>9.1 * 6 = 54.6</li>
				</ul>
				here is the blueprint of the <b>standard notation</b> of multiplying a variable <i>product</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>product</i> = <i>product</i> * <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//multiply the price per cookie by the number of cookies to get the total</div>
				<br/>
				double price = 4.99;
				<br/>
				int cookies = 5;
				<br/>
				price = price * cookies;
				</div>
				<br/>
				the <b>shorthand notation</b> for multiplication uses <b>*=</b>. here is the blueprint of the <b>shorthand notation</b> of multiplying a variable <i>product</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>product</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>product</i> *= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//multiply the price per cookie by the number of cookies to get the total</div>
				<br/>
				double price = 4.99;
				<br/>
				int cookies = 5;
				<br/>
				price *= cookies;
				</div>
				<h3>/ division /</h3>
				<b>division</b> is denoted using <b>/</b> in java. division in java is <b>slightly different</b> from division in real life because, as we saw earlier, the result of an arithmetic operation between two integers is an integer itself. this means that <b>dividing two integers will result in an integer</b>. you most probably are thinking, "okay. what's so bad about that?" well, for example, what would <b>3 / 2</b> be equal to? in real life, we would say that <b>3 / 2 = 1.5</b>, but 1.5 is a <b>double</b>, and we need it to be an <b>int</b>. therefore, in java, <b>3 / 2 = 1</b> because 1.5 gets <b>rounded down</b> to 1. the quotient when you divide by two integers <b>always get rounded down to the nearest integer</b>. you can also think about it as <b>the decimal portion of the quotient gets truncated</b>. on the other hand, if you're performing division between two doubles or an integer and a double, as we said earlier the result should be a <b>double</b>, so the <b>decimal portion remains</b> in the quotient. here are some examples of division between two integers, two doubles, and an integer and a double:
				<ul>
					<li>9 / 4 = 2</li>
					<li>9.0 / 4.0 = 2.25</li>
					<li>9.0 / 4 = 2.25</li>
					<li>9 / 4.0 = 2.25</li>
				</ul>
				here is the blueprint of the <b>standard notation</b> of dividing a variable <i>quotient</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>quotient</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>quotient</i> = <i>quotient</i> / <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//divide the total price by the number of people to split the price</div>
				<br/>
				double price = 84.99;
				<br/>
				int people = 10;
				<br/>
				price = price / people;
				</div>
				<br/>
				the <b>shorthand notation</b> for division uses <b>/=</b>. here is the blueprint of the <b>shorthand notation</b> of dividing a variable <i>quotient</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>quotient</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>quotient</i> /= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//divide the total price by the number of people to split the price</div>
				<br/>
				double price = 84.99;
				<br/>
				int people = 10;
				<br/>
				price /= people;
				</div>
				<h3>% modulus %</h3>
				<b>modulus</b> is a funky word which means <b>the remainder after you divide two numbers</b> and is denoted using <b>%</b>. modulus is most commonly used <b>between integers</b>, since integer division as we just learned rounds down to the nearest integer, leaving a remainder behind. let's revisit the example we had when discussing integer division: <b>3 / 2</b>. we already know that <b>3 / 2 = 1</b>, but what about <b>3 % 2</b>? (<b className="note">btw:</b> 3 % 2 is pronounced <b>"three mod two"</b>.) if you guessed <b>1</b>, you're correct! <b>3 % 2 = 1</b> because 3 / 2 is 1 <b>with a remainder of 1</b>. here are some more examples using modulus between integers:
				<ul>
					<li>22 % 4 = 2 because 22 / 4 is 5 with a remainder of 2</li>
					<li>3 % 5 = 3 because 3 / 5 is 0 with a remainder of 3</li>
					<li>14 % 7 = 0 because 14 / 7 is 2 with a remainder of 0</li>
				</ul>
				here is the blueprint of the <b>standard notation</b> of getting the remainder after dividing a variable <i>remainder</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>remainder</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>remainder</i> = <i>remainder</i> % <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//get the leftover apples after dividing apples between friends</div>
				<br/>
				int apples = 8;
				<br/>
				int friends = 5;
				<br/>
				apples = apples % friends;
				</div>
				<br/>
				the <b>shorthand notation</b> for modulus uses <b>%=</b>. here is the blueprint of the <b>shorthand notation</b> of getting the remainder after dividing a variable <i>remainder</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>remainder</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>remainder</i> %= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//get the leftover apples after dividing apples between friends</div>
				<br/>
				int apples = 8;
				<br/>
				int friends = 5;
				<br/>
				apples %= friends;
				</div>
				<br/>
				modulus is often used to figure out if a certain integer is <b>divisible</b> by another integer. you might be wondering, <b>"how can modulus be used in divisibility?"</b> great question! let's dive into it!
				<br/>
				as we stated earlier, modulus represents the <b>remainder after dividing two integers</b>; in other words, modulus is the <b>leftover</b>. now for divisibility: if a number <i>x</i> is <b>divisible</b> by a number <i>y</i>, that means that <i>x</i><b>/</b><i>y</i> is an <b>integer</b>. in other words, the <b>remainder</b> when you divide <i>x</i> by <i>y</i> should be equal to <b>0</b>. have you connected the dots? <b>a number <i>x</i> is divisible by another number <i>y</i> when x % y = 0.</b> now let's translate this into lines of code:
				<div className="code">
				<div className="comment">//if an integer % 2 = 0, then the integer is even; otherwise, the integer is odd</div>
				<br/>
				int x = 8;
				<br/>
				int y = 2;
				<br/>
				System.out.println(x % y);
				</div>
				because 8 is an even number, <b>0</b> should be printed to the console. let's take a look:
				<div className="code">
				0
				</div>
				<h3>:) recap :)</h3>
				<b>gr8!</b> you made it to recap!
				<br/><br/>
				here are the five arithmetic operations we learned about on this page along with their operators:
				<ul>
					<li><b>addition</b>, denoted using <b>+</b></li>
					<li><b>subtraction</b>, denoted using <b>-</b></li>
					<li><b>multiplication</b>, denoted using <b>*</b></li>
					<li><b>division</b>, denoted using <b>/</b></li>
					<li><b>modulus</b>, denoted using <b>%</b></li>
				</ul>
				here is the blueprint for how the resulting variable type changes based on whether you are performing an operation between <b>two integers</b>, <b>two doubles</b>, or <b>an integer and a double</b>:
				<br/>
				<b>
				<i>&lt;integer&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;integer&gt;</i> = <i>&lt;integer&gt;</i>
				<br/>
				<i>&lt;double&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;double&gt;</i> = <i>&lt;double&gt;</i>
				<br/>
				<i>&lt;integer&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;double&gt;</i> = <i>&lt;double&gt;</i>
				<br/>
				<i>&lt;double&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;integer&gt;</i> = <i>&lt;double&gt;</i>
				</b>
				<br/><br/>
				here is the blueprint for both the <b>standard notation</b> and the <b>shorthand notation</b> for performing an arithmetic operation on between <i>variable_1</i> and <i>variable_2</i>, where <i>variable_1</i> stores the result of the operation and <i>operator</i> can be <b>+</b>, <b>-</b>, <b>*</b>, <b>/</b>, or <b>%</b>:
				<br/>
				<b><i>&lt;variable_1&gt;</i> = <i>&lt;variable_1&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;variable_2&gt;</i>;</b>
				<br/>
				<b><i>&lt;variable_1&gt;</i> <i>&lt;operator&gt;</i>= <i>&lt;variable_2&gt;</i>;</b>
				<br/><br/>
				and finally, if you want to increment or decrement a variable, you can use <b>++</b> and <b>--</b>, respectively.
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">delivery package:</b><br/><br/>
					your <b>goal</b> is to use <b>arithmetic</b> to <b>calculate the volume of a delivery package</b> given its <b>length</b>, <b>width</b>, and <b>height</b>. this will require three steps:<br/>
					<ol>
						<li>create three variables to store the length, width, and height of the delivery package</li>
						<li>calculate the volume of the delivery package</li>
						<ul>
							<li>to calculate the volume of a box, use the following formula: volume = length * width * height</li>
							<li>don't forget to store the volume in a new variable</li>
						</ul>
						<li>print out the length, width, height, and volume of the delivery package</li>
					</ol>
					<Hint
						hints={[
							"for step 2, to calculate the volume, plug in the appropriate variables into the volume formula we gave above",
							"for step 3, to print out a variable, put the name of your variable in between the parentheses of your print statement"
						]}
						id="arithmetic-delivery-package"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/arithmetic-delivery-package?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/arithmetic-slope?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">slope:</b><br/><br/>
					throwback to math class... the slope of a line connecting two points (x1, y1) and (x2, y2) is (y2-y1)/(x2-x1). your <b>goal</b> is to use <b>arithmetic</b> to <b>calculate the slope given the two points (x1, y1) and (x2, y2)</b>. this will require three steps:<br/>
					<ol>
						<li>store the two points (x1, y1) and (x2, y2) in variables</li>
						<ul>
							<li>to store a point in our program, we will create two variables: one for the x-coordinate and one for the y-coordinate</li>
							<li>that means that, in total, there should be four variables: x1, y1, x2, and y2</li>
							<li>each of these variables will be a double, since they can store a decimal</li>
						</ul>
						<li>calculate the slope of the line connecting (x1, y1) and (x2, y2)</li>
						<ul>
							<li>here's the formula: slope = (y2-y1)/(x2-x1)</li>
							<li>store the slope in a double variable</li>
						</ul>
						<li>print out the slope variable</li>
					</ol>
					<Hint
						hints={[
							"for step 2, to calculate the slope, plug in the appropriate variables into the slope formula we gave above",
							"for step 3, to print out the slope variable, put the name of your slope variable in between the parentheses of your print statement"
						]}
						id="arithmetic-slope"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/arithmetic-slope?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/arithmetic-slope-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">handy dandy temp convertor:</b><br/><br/>
					how do you convert between Celsius and Fahrenheit? your <b>goal</b> is to use <b>arithmetic</b> to <b>convert a temperature from °C to °F</b> and to <b>convert a temperature from °F to °C</b>. this will require four steps:<br/>
					<ol>
						<li>create a double variable to store a temperature in Celsius</li>
						<li>print out what the temperature is in Fahrenheit, using next-line printing</li>
						<ul>
							<li>inside the print statement, you will need to convert the temperature variable from Celsius to Fahrenheit</li>
							<li>here's the handy dandy formula: °F = °C * 9/5 + 32</li>
						</ul>
						<li>create a double variable to store a temperature in Fahrenheit</li>
						<li>print out what the temperature is in Celsius, using next-line printing</li>
						<ul>
							<li>inside the print statement, you will need to convert the temperature variable from Fahrenheit to Celsius</li>
							<li>here's the handy dandy formula: °C = (°F - 32) * 5/9</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for steps 2 and 4, use System.out.println() for next-line printing",
							"for steps 2 and 4, whatever arithmetic you do can go inside the print statement, and the arithmetic will get performed first, and then the result will get printed out"
						]}
						id="arithmetic-handy-dandy-temp-convertor"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/arithmetic-handy-dandy-temp-convertor?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/arithmetic-handy-dandy-temp-convertor-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/strings"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Arithmetic;