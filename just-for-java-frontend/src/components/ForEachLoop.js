import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class ForEachLoop extends React.Component{
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
	            remember when we talked about <b>good ol' for loops</b>? (<b className="note">psst. need a reminder</b> on what these good ol' for loops are? check out the <Link className="contentLink" to="/for-loop"><b className="pageName">for loop page</b></Link>!) well there's actually another type of for loop that we haven't talked about yet. (<b className="note">btw:</b> sry for hiding secrets from you... do you forgive us?) it's called a <b>for-each loop</b>!
	            <h3>a for-each loop? ngl that sounds kinda lame</h3>
	            well it isn't.
	            <div className="code">
	            System.out.print("haters. back. off.");
	            </div>
	            <h3>only positive vibes allowed beyond this point</h3>
	            for-each loops are used to <b>iterate through arrays and other collections that we will talk about later</b>. (<b className="note">psst. need a reminder</b> on what an array is? check out the <Link className="contentLink" to="/array"><b className="pageName">array page</b></Link>!) burning to know how to make one yourself? here is the blueprint for constructing a for-each loop:
	            <br/>
	            <b>
	            for(<i>&lt;type&gt;</i> <i>&lt;item&gt;</i> : <i>&lt;array&gt;</i>)&#123;
	            <br/>
	        	<p>
	        		*code*
	        	</p>
	            <br/>
	            &#125;
	            </b>
	            <br/>
	            <br/>
	            let's walk through each of these components – but in a <b>backwards order</b> because that makes it the easiest to understand:
	            <ul>
	            	<li><b>array</b> – the array or collection you want to iterate through</li>
	            	<li><b>item</b> – each value in the array or collection is stored in this variable each iteration</li>
	            	<li><b>type</b> – the type of the values in the array or collection</li>
	            </ul>
	            here's a common example of the use of a for-each loop: <b>print the elements of an array</b>. let's say the array we want to print out is the <i>rainbow</i> array:
	            <div className="code">
	            String[] rainbow = &#123;"red", "orange", "yellow", "green", "blue", "indigo", "violet"&#125;;
	            </div>
	            what should our for-each loop look like? (<b className="note">hint:</b> what would each of the components be?) let's walk through what each of the components should be:
	            <ul>
	            	<li><b>array</b> – the array we want to iterate through is <b><i>rainbow</i></b></li>
	            	<li><b>item</b> – we can call this variable whatever we want; we can call it <b><i>color</i></b>, since it stores each value in our array</li>
	            	<li><b>type</b> – our array holds String values, so the type is <b>String</b></li>
	            </ul>
	            inside our loop, we can simply <b>print out <i>color</i></b>. check out the code below with our completed for-each loop:
	            <div className="code">
	            <div className="comment">//loop through each String color in rainbow</div>
	            <br/>
	            for(String color : rainbow) &#123;
				<br/>
				<p>
					<div className="comment">//print out color</div>
	            	<br/>
					System.out.println(color);
				</p>
				<br/>
				&#125;
	            </div>
	            can you guess what shows up in the console? (<b className="note">hint:</b> what is <i>color</i> storing? an index or the actual value?) take a look at the console below, which <b>displays each value in our <i>rainbow</i> array</b>:
	            <div className="code">
	            red<br/>
	            orange<br/>
	            yellow<br/>
	            green<br/>
	            blue<br/>
	            indigo<br/>
	            violet
	            </div>
	            <h3>woah! printing arrays are so much easier with a for-each loop!</h3>
	            ikr?! here is the function we coded on the <Link className="contentLink" to="/array"><b className="pageName">array page</b></Link> that <b>prints out an array using a standard for loop</b>:
	            <div className="code">
	            <div className="comment">//this function prints a char array using a for loop</div>
	            <br/>
	            public static void printArray1(char[] arr) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//loop through the indexes in arr</div>
	            	<br/>
	            	for(int i = 0; i &lt; arr.length; i++) &#123;
	            	<br/>
	            	<p className="indent1">
	            		<div className="comment">//print out the element at index i in arr</div>
	            		<br/>
	            		System.out.println(arr[i]);
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            and here is the function that <b>prints out an array using a for-each loop</b> (<b className="note">btw:</b> the parameter and return type for both functions are the same):
	            <div className="code">
	            <div className="comment">//this function prints a char array using a for-each loop</div>
	            <br/>
	            public static void printArray2(char[] arr) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//loop through each char c in arr</div>
	            	<br/>
	            	for(char c : arr) &#123;
	            	<br/>
	            	<p className="indent1">
	            		<div className="comment">//print out c</div>
	            		<br/>
	            		System.out.println(c);
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            the function using a <b>for-each loop</b> is much more <b>concise</b> than the function using a standard <b>for loop</b>. let's test both of these functions in our main method and see if they yield the same result:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//we made our char array spell out unicorn cause unicorns do be radiating positive vibes</div>
	            	<br/>
	            	char[] unicorn = &#123;'u', 'n', 'i', 'c', 'o', 'r', 'n'&#125;;
	            	<br/>
	            	printArray1(unicorn); <div className="comment">//prints unicorn array using for loop</div>
	            	<br/>
	            	System.out.println(); <div className="comment">//this print statement simply enters for white space</div>
	            	<br/>
	            	printArray2(unicorn); <div className="comment">//prints unicorn array using for-each loop</div>
	            </p>
	            <br/>
	            &#125;
	            </div>
	            can you guess what prints in the console? (<b className="note">hint:</b> if you're unsure, review what the functions printArray1 and printArray2 do.) check out the console below:
	            <div className="code">
	            u<br/>n<br/>i<br/>c<br/>o<br/>r<br/>n<br/><br/>u<br/>n<br/>i<br/>c<br/>o<br/>r<br/>n
	            </div>
	            <h3>why do you even need for loops anyway when you have for-each loops?</h3>
	            though for-each loops are great if your program just needs the <b>values of each element in the array</b>, such as for tasks like printing an array, they do have <b>three limitations</b> that you should be aware of:
	            <ol>
	            	<li>for-each loops <b>don't keep track of the index</b></li>
	            	<ul>
	            		<li>if you need to use the index in your program, use a for loop</li>
	            	</ul>
	            	<li>for-each loops <b>can't be used to modify an array</b></li>
	            	<ul>
	            		<li>on the other hand, for loops can be used to modiify an array</li>
	            	</ul>
	            	<li>for-each loops only loop in <b>one fixed way</b>: through every value in the whole array from start to end</li>
	            	<ul>
	            		<li>for loops however provide flexibility so that you can loop backwards, through only a part of the array, or through every other element</li>
	            	</ul>
	            </ol>
	            however, if none of these conditions apply to the program that you want to make, using a for-each loop can make your code more <b>concise</b> and <b>readable</b>. let's look through <b>three scenarios</b> to practice when we should implement a for loop versus a for-each loop. (<b className="note">btw:</b> just to go with that <b>rainbow unicorn positivity theme</b> we got going here, we'll use the <i>rainbow</i> and <i>unicorn</i> arrays we created above.)
	            <h3>scenario 1: reverse rainbow</h3>
				using our <i>rainbow</i> array, let's print out each color – <b>but in reverse order</b>. thus, we need to make a for loop that prints out the following in the console:
				<div className="code">
				violet<br/>
				indigo<br/>
				blue<br/>
				green<br/>
				yellow<br/>
				orange<br/>
				red
				</div>
				do we use a <b>for-each loop</b> or a <b>standard for loop</b>? (<b className="note">hint:</b> in what order would we need to loop through our <i>rainbow</i> array?) because we need to <b>iterate our array backwards</b>, we <b>cannot use a for-each loop</b> since it only allows you to iterate forwrads. therefore, we need to use a normal <b>for loop</b> that loops through our array in reverse. our initialize component will be <b>int i = rainbow.length-1</b> since the last index in our array is the length of the arrary - 1, our condition component will be <b>i &gt;= 0</b> since 0 is the first index in our array, and our iterate component will be <b>i--</b> since we are looping backwards. now that we have a clear idea on what our for loop should look like, check out the completed program below:
				<div className="code">
				String[] rainbow = &#123;"red", "orange", "yellow", "green", "blue", "indigo", "violet"&#125;;
				<br/>
				<div className="comment">//loop through rainbow backwards and print out each color</div>
				<br/>
				for(int i = rainbow.length-1; i &gt;= 0; i--) &#123;
				<br/>
				<p>
					System.out.println(rainbow[i]);
				</p>
				<br/>
				&#125;
				</div>
	            <h3>scenario 2: unicorn, more like uni</h3>
	            let's create a <b>function</b> that takes in a <b>start index</b>, an <b>end index</b>, and an <b>array of characters</b> and <b>prints out only the characters in the array from the start to the end index</b>, including the character at the start index but excluding the character at the end index. (<b className="note">btw:</b> in essence, this function is basically like the substring function except for an array.)
	            <br/><br/>
	            let's first make our <b>function header</b>. (<b className="note">hint:</b> what should the parameters and return type be?) our function will take in <b>two ints</b> – <i>startIndex</i> and <i>endIndex</i> – and <b>one char[]</b> – <i>charArr</i>. our function will have a return type of <b>void</b> since it is just printing out characters. check out our printSubarray function header:
	            <div className="code">
	            public static void printSubarray(char[] charArr) &#123;
	            <br/>
	            <p>
	            	*code*
	            </p>
	            <br/>
	            &#125;
	            </div>
	            now, in the body of our function we need a for loop to iterate through only the specific characters we want to print. <b>can we use a for-each loop in this scenario?</b> (<b className="note">hint:</b> do we need to access the indexes in the array, or just the char values?) because <b>we need to access the indexes</b> in the array since we only want to print a <b>subset of the characters</b> in the array, where the subset is defined by the <i>startIndex</i> and <i>endIndex</i> parameters, <b>we cannot use a for-each loop</b>. using a standard for loop, our initialize component should be <b>int i = startIndex</b> since we want to include the character at <i>startIndex</i>, our condition component should be <b>i &lt; endIndex</b> since we don't want to include the character at <i>endIndex</i>, and our iterate component should be <b>i++</b>. now that we have a clear idea on what our for loop should look like, check out the completed printSubarray function below and its function call in the main method:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//let's use our unicorn char array again</div>
	            	<br/>
	            	char[] unicorn = &#123;'u', 'n', 'i', 'c', 'o', 'r', 'n'&#125;;
	            	<br/>
	            	printSubarray(unicorn, 0, 3);
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            public static void printSubarray(char[] charArr, int startIndex, int endIndex) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//print out each character from startIndex (inclusive) to endIndex (exclusive) in charArr</div>
	            	<br/>
	            	for(int i = startIndex, i &lt; endIndex; i++) &#123;
	            	<br/>
	            	<p>
	            		System.out.print(charArr[i]);
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            can you guess what prints in the console? take a look:
	            <div className="code">
	            uni
	            </div>
				<h3>scenario 3: roygbiv</h3>
				let's create a program that <b>prints out the first letter of each color in the <i>rainbow</i> array</b> using the <b>substring</b> method. (<b className="note">psst. need a reminder</b> on what the substring method is? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) the console should display as follows:
				<div className="code">
				roygbiv
				</div>
				should we use a for loop or a for-each loop? (<b className="note">hint:</b> are we modifying our array? do we need the index? are we looping in a specific way?) because the answer to all the questions in the hint is <b>no</b>, we can use a <b>for-each loop</b>. take a look:
				<div className="code">
				String[] rainbow = &#123;"red", "orange", "yellow", "green", "blue", "indigo", "violet"&#125;;
				<br/><br/>
				<div className="comment">//for each String color in the rainbow array, print out its first letter</div>
				<br/>
				for(String color : rainbow)
				<br/>
				<p>
					<div className="comment">//in order to retrieve the first letter, our start index should be 0 and end index 1</div>
					<br/>
					System.out.print(color.substring(0, 1));
				</p>
				<br/>
				&#125;
				</div>
				<br/>
				let's change things up a bit, shall we? now we don't want to print the first letter of each color, but instead we want to <b>store the first letter of each color back in the rainbow array</b>. should we use a for loop or a for-each loop? (<b className="note">hint:</b> are we modifying our array? do we need the index? are we looping in a specific way?) because we are <b>modifying the <i>rainbow</i> array</b>, we need to use a <b>standard for loop</b>. take a look:
				<div className="code">
				String[] rainbow = &#123;"red", "orange", "yellow", "green", "blue", "indigo", "violet"&#125;;
				<br/><br/>
				<div className="comment">//for each color, store its first letter at its corresponding index in rainbow so that the array becomes ["r", "o", "y", "g", "b", "i", "v"]</div>
				<br/>
				for(int i = 0; i &lt; rainbow.length; i++) &#123;
				<br/>
				<p>
					<div className="comment">//change the value at index i in rainbow to the first letter of the value at index i in rainbow</div>
					<br/>
					rainbow[i] = rainbow[i].substring(0, 1);
				</p>
				<br/>
				&#125;
				</div>
				<h3>ay bro, you're getting the hang of this!</h3>
				now that you know the difference between a for loop and a for-each loop and are familiar with situations in which to use one over the other, let's consider a <b>practical real-world application</b> of for loops. our goal is to make a function that can <b>compute the average of your test grades</b>, which will be stored in an <b>array</b>. are you ready? you got this.
				<br/><br/>
				first, let's make our function header. what should the return type and the parameters be? (<b className="note">hint:</b> our test grades will all be <b>doubles</b>.) we want to take in an array of test grades and return the average grade; therefore, our return type and parameters should be as follows:
				<ul>
					<li><b>return type</b> – double</li>
					<li><b>parameters</b> – double[] testGrades</li>
				</ul>
				here is our function header in code:
				<div className="code">
				public static double getAverageTestGrade(double[] testGrades) &#123;
				<br/>
				<p>
					*code*
				</p>
				<br/>
				&#125;
				</div>
				now let's conquer the body of our getAverageTestGrade function. in order to find the <b>average of a set of numbers</b>, we need to <b>compute their sum</b> and <b>divide the sum by the total number of values</b>. thus, in order to calculate the average test grade in our function, we need to know two things:
				<ol>
					<li>the <b>sum</b> of all the test grades</li>
					<li>the <b>total</b> number of test grades</li>
				</ol>
				have any idea on how we can get these numbers? (<b className="note">hint:</b> you may need to use a for loop!) here's how we can get these two numbers:
				<ol>
					<li><b>sum</b> – use a for loop to iterate through each test grade in the array and keep track of a running sum of the test grades</li>
					<li><b>total</b> – the length of the array of test grades</li>
				</ol>
				after finding the sum and total, all we would need to do is compute the <b>average</b>, which – as we stated earlier – equals <b>sum / total</b>. awesome!
				<br/><br/>
				finding the total is pretty simple – just type <b>testGrades.length</b>! however, finding the sum has a bit more to it. we know that we'll need to use a for loop, but do we have to use a <b>standard for loop</b> or can we implement a <b>for-each loop</b> in this case? (<b className="note">hint:</b> if we need to access the index, modify the array, or iterate in a specific order, then we need to use a for loop; otherwise, if we only need to access the values in the array, we can use a for-each loop.) <b>because we only need to access each test grade in the <i>testGrades</i> array, we can use a for-each loop!</b> we don't need to access the indexes, modify the array, or loop in a specific order. 
				<br/><br/>
				before we get to the code, let's quickly summarize what our function body will look like:
				<ul>
					<li>first we will create a <b><i>sum</i> variable</b></li>
					<li>next, we will construct a <b>for-each loop</b> that iterates through each double <i>testGrade</i> in <i>testGrades</i></li>
					<li>inside our for-each loop, we will <b>add <i>testGrade</i> to <i>sum</i></b></li>
					<li>finally, outside our for-each loop, we will create a <b><i>total</i> variable</b> to store the length of <i>testGrades</i>, and we will <b>return the average test grade = <i>sum</i>/<i>total</i></b></li>
				</ul>
				awesome! now are we ready to finish implementing our getAverageTestGrade function? check it out:
				<div className="code">
				public static double getAverageTestGrade(double[] testGrades) &#123;
				<br/>
				double sum = 0;
				<br/>
				<p>
					for(double testGrade : testGrades) &#123;
					<br/>
					<p>
						sum += testGrade;
					</p>
					<br/>
					&#125;
				</p>
				<br/>
				int total = testGrades.length;
				<br/>
				return sum/total;
				<br/>
				&#125;
				</div>
				in the main method, let's test getAverageTestGrade by creating an array of test grades and printing out what gets returned from a call to getAverageTestGrade (<b className="note">btw:</b> keeping up our positive vibes on this page, we made <i>myTestGrades</i> hold some pretty stellar grades):
				<div className="code">
				public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//created a double array to store my test grades</div>
	            	<br/>
	            	double[] myTestGrades = &#123;99.5, 98, 99, 98.5, 100&#125;;
	            	<br/>
	            	<div className="comment">//printed out the average test grade using String concatenation</div>
	            	<br/>
	            	System.out.print("your average test grade is a " + getAverageTestGrade(myTestGrades) + "%");
	            </p>
	            <br/>
	            &#125;
				</div>
				check out what prints in the console:
				<div className="code">
				your average test grade is a 99.0%
				</div>
				<h3>*rides on a unicorn over the rainbow to recap*</h3>
				<b>yass qween!</b> you made it to recap!
				<br/><br/>
				here is the blueprint for constructing a <b>for-each loop</b>, a type of for loop used to iterate through collections such as arrays:
				<br/>
	            <b>
	            for(<i>&lt;type&gt;</i> <i>&lt;item&gt;</i> : <i>&lt;array&gt;</i>)&#123;
	            <br/>
	        	<p>
	        		*code*
	        	</p>
	            <br/>
	            &#125;
	            </b>
	            <br/>
	            <br/>
	            need a refresher on what each of these components mean? we gotchu:
	            <ul>
	            	<li><b>array</b> – the array or collection you want to iterate through</li>
	            	<li><b>item</b> – each value in the array or collection is stored in this variable each iteration</li>
	            	<li><b>type</b> – the type of the values in the array or collection</li>
	            </ul>
	            <b>for-each loops are great</b> if your program just needs the <b>values</b> of each element in the array. however, if you need to access the <b>indexes</b> of the array, or if you need to <b>modify the array</b>, or if you want to iterate through the array in a <b>specific order or fashion</b>, then you should use your <b>standard for loop</b>.
	            <h3>pit stop</h3>
	            <div className="problem">
					<b className="note">roll call:</b><br/><br/>
					your <b>goal</b> is to use <b>for-each loops</b> to print out a <b>roll call</b> with an <b>array of names</b>. this will require two steps:<br/>
					<ol>
						<li>create an array of names that you will call out</li>
						<li>create a for-each loop that iterates through each name in the array</li>
						<ul>
							<li>inside the loop, print out the name</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, the array component of your for-each loop should be the name of the roll call array you made in the previous step",
							"for step 2, the type component of your for-each loop should be String and the item component can be whatever variable name you think is appropriate – for example, name"
						]}
						id="for-each-loop-roll-call"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-each-loop-roll-call?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-each-loop-roll-call-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">double trouble:</b><br/><br/>
					your <b>goal</b> is to use <b>for loops</b> to <b>double every double in an array of doubles</b> – phew! that was a mouthful of doubles! this will require three steps:<br/>
					<ol>
						<li>create an array of doubles</li>
						<li>use either a standard for loop or a for-each loop to iterate through your array of doubles</li>
						<ul>
							<li>it's up to you to decide which type of for loop is the best *wink wink*</li>
						</ul>
						<li>inside your loop, change each value in your array to be equal to itself doubled</li>
						<ul>
							<li>in other words, double every double in your array of doubles :)</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, because you will need to modify the array, you need to use a standard for loop; you cannot use a for-each loop to change the values in an array",
							"for step 2, your standard for loop should still iterate through every value in the array",
							"for step 3, to change the value in an array by index, use the syntax arr[i] = value, where arr is your array and i is the index",
							"for step 3, the new value for each index in your array should be arr[i] * 2 because you are doubling whatever the current value in the array is"
						]}
						id="for-each-loop-double-trouble"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-each-loop-double-trouble?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/for-each-loop-double-trouble-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
	            <ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
	            ...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/2d-array"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default ForEachLoop;