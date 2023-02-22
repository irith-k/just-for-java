import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";

class Array extends React.Component{
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
	            today's the day we're gonna learn how to store a <b>list of values in a variable</b>, called an <b>array</b>. oooh getting kinda <b>spicy</b> over here! 
	            <h3>wait, so how do you make this spicy array?</h3>
	            here is the blueprint when creating an array:
	            <br/>
	            <b>
	            <i>&lt;type of values in array&gt;</i>[] <i>&lt;name&gt;</i> = new <i>&lt;type of values inside array&gt;</i>[<i>&lt;number of values in array&gt;</i>];
	            </b>
	            <br/><br/>
	            we know it looks super hairy and complicated right now, so <b>let's break it down for you, eh?</b> to do so, we will focus on the three parts of a variable initialization: <b>type</b>, <b>name</b>, and <b>value</b>.
	            <ul>
	            	<li><b>type</b> – the type of an array includes two things: first, the <b><i>&lt;type of values in array&gt;</i></b>, which can be int, String, etc.; second, we need to include square brackets <b>[]</b>, which mean that our variable is an <b>array</b>, or list, of the type of value we specified earlier</li>
	            	<li><b>name</b> – right after we declare the type of our array, we declare its <b><i>&lt;name&gt;</i></b>, just like with any other variable</li>
	            	<li><b>value</b> – this component is the most complicated and different from what we've normally seen; right after the =, type the keyword <b>new</b>, which you may recognize from when we created a Scanner variable; next, we include the whole type of our variable again; however, this time, inside the square brackets, we need to put an integer that specifies the <b><i>&lt;number of values in array&gt;</i></b></li>
	            </ul>
	            it's important to note that after initializing an array, you <b>cannot change the number of values inside the array, nor the type of the values inside the array</b>. you can't add or remove values from an array, and you cannot have an array with mixed types of values.
	            <br/><br/>
	            time to try this blueprint out in code! let's make an array that will store 5 doubles. (<b className="note">hint:</b> what is the type of the values in our array? how many values are we storing in our array?) check out the code below that initializes this array:
	            <div className="code">
	            <div className="comment">//we create an array of 5 doubles called dubs</div>
	            <br/>
	            double[] dubs = new double[5];
	            </div>
	            wanna try one more? let's make an array that will store 2 booleans. (<b className="note">hint:</b> what is the type of the values in our array? how many values are we storing in our array?) check out the code below that initializes this array:
	            <div className="code">
	            <div className="comment">//we create an array of 2 booleans called boolBool</div>
	            <br/>
	            boolean[] boolBool = new boolean[2];
	            </div>
	            <h3>how can you change and get the values in an array?</h3>
	            great question!! each element in an array has an <b>index</b>! you've heard of indexes before when we discussed Strings, so hopefully the concept of indexing is something you're already comfortable with. (<b className="note">psst. need a reminder</b> on what in the world indexing is? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) we can <b>change elements in an array</b> and <b>access them</b> through their <b>index</b>. (<b className="note">btw:</b> don't forget that indexing always starts at 0!)
	            <br/><br/>
	            here is the blueprint for changing an element in an array through its index:
	            <br/>
	            <b>
	            <i>&lt;name&gt;</i>[<i>&lt;index&gt;</i>] = <i>&lt;new value&gt;</i>;
	            </b>
	            <br/><br/>
	            and here is the blueprint for accessing an element in an array through its index:
	            <br/>
	            <b>
	            <i>&lt;name&gt;</i>[<i>&lt;index&gt;</i>]
	            </b>
	            <br/><br/>
	            (<b className="note">btw:</b> when you access an element from an array, you can store the value in a variable, or print it out.)
	            <br/><br/>
	            time to try these blueprints out in code! let's make an array that holds three Strings in this order: "just", "for", "java". after creating the array, create a variable that stores the third element in the array. (<b className="note">hint:</b> at what indexes are "just", "for", and "java" located in our array? and at what index is the third element located?) check out the code below that makes this program:
	            <div className="code">
	            <div className="comment">//we create an array of 3 Strings called jfj</div>
	            <br/>
	            String[] jfj = new String[3];
	            <br/><br/>
	            <div className="comment">//we set the value at index 0 to "just", the value at index 1 to "for", and the value at index 2 to "java"</div>
	            <br/>
	            jfj[0] = "just";
	            <br/>
	            jfj[1] = "for";
	            <br/>
	            jfj[2] = "java";
	            <br/><br/>
	            <div className="comment">//we create a variable to store the third element, which is at the second index, in our array</div>
	            <br/>
	            String java = jfj[2];
	            </div><br/>
	            for a more <b>visual explanation</b> of the code above, check out the table below that maps each value in our jfj array to its appropriate index. the <b>highlighted index and value</b> represent the third element in the array, which is stored in the <i>java</i> variable we initialized above.
	            <br/><br/>
	            <table>
	        		<tr>
	        			<td>String</td>
	        			<td>"just"</td>
	        			<td>"for"</td>
	        			<td><b>"java"</b></td>
	        		</tr>
	        		<tr>
	        			<td>index</td>
	        			<td>0</td>
	        			<td>1</td>
	        			<td><b>2</b></td>
	        		</tr>
	        	</table>
	            <h3>is it just me or is it really tedious to fill your array like we did above?</h3>
	            you're right; it's very tedious. however, instead of having to fill each of the slots in our array with the values we want after we initialize our array, <b>we can fill our array right when we initialize it</b>! here is the blueprint for filling your array with values right when you initialize your array:
	            <br/>
	            <b>
	            <i>&lt;type of values in array&gt;</i>[] <i>&lt;name&gt;</i> = &#123;<i>&lt;list of values&gt;</i>&#125;;
	            </b>
	            <br/><br/>
	            though we don't specify the number of values inside our array, it is <b>implicitly defined by the number of values in between our curly braces</b> – and the length of the array once again <b>cannot change</b>.
	            <h3>speaking of the length of the array, is there a way to get that value?</h3>
	            you bet! here is the blueprint on getting the length of an array:
	            <br/>
	            <b>
	            <i>&lt;name&gt;</i>.length
	            </b>
	            <br/><br/>
	            <b>beware, young jedi!</b> to get the length of a String, you use <b>str.length()</b> with parentheses. to get the length of an array, you use <b>arr.length</b> with no parentheses.
	            <br/><br/>
	            time to try these blueprints out in code! since we are <b>huge star wars fans</b> (<b className="note">btw:</b> if you haven't seen star wars, watch it. right now. we'll wait), let's create an array that stores all the star wars movies in the original series. then, let's print out the length of the array. (<b className="note">hint:</b> there are 9 movies in the original star wars series.) check out the code below that creates this array and prints out its length:
	            <div className="code">
	            <div className="comment">//we create a String array called starWars using the shortcut method we talked about earlier; the different String values are separated by commas</div>
	            <br/>
	            String[] starWars = &#123;"The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"&#125;;
	            <br/><br/>
	            <div className="comment">//we print out the length of starWars, which is 9; we also use String concatenation here just to be extra fancy hehe</div>
	            <br/>
	            System.out.print("star wars has " + starWars.length + " episodes");
	            </div>
	            check out the console:
	            <div className="code">
	            star wars has 9 episodes
	            </div>
	            <h3>instead of printing the length of the array, can i print the array itself?</h3>
	            oof. we wish we could... we rly wish we could... but instead, we have to <b>print out each element in the array individually</b> cause <b>arrays be cool like that</b>.
	            <br/><br/>
	            the first thing we need to do is to create a <b>loop</b> to iterate through each index in the array. (<b className="note">btw:</b> this is exactly like we created loops to iterate through each index in Strings.) personally, we like to use <b>for loops</b> to iterate through indexes, so let's walk through what each of our for loop <b>components</b> should be (<b className="note">btw:</b> assume that the array we want to print is called <i>arr</i>):
	            <ul>
	            	<li><b>initialize</b> – because indexing starts at 0, this component should be <b>int i = 0</b></li>
	            	<li><b>condition</b> – we want to keep looping as long as our index is less than the length of <i>arr</i>, so this component should be <b>i &lt; arr.length</b></li>
	            	<li><b>iterate</b> – we want to increment our index by 1 after each loop, so this component should be <b>i++</b></li>
	            </ul>
	            the second thing we need to do is – inside our for loop – we should <b>print the value at the current index in the array</b>. we can do this simply by putting <b>arr[i]</b> inside our print statement.
	            <br/><br/>
	            check out our completed for loop below, which prints out <i>arr</i>:
	            <div className="code">
	            <div className="comment">//we created an array called arr that is filled with some Star Wars characters</div>
	            <br/>
	            String[] arr = &#123;"Luke Skywalker", "Princess Leia", "Darth Vader", "Han Solo", "Yoda", "Rey", "Kylo Ren"&#125;;
	            <br/><br/>
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
	            </div>
	            check out the console:
	            <div className="code">
	            Luke Skywalker
	            <br/>
	            Princess Leia
	            <br/>
	            Darth Vader
	            <br/>
	            Han Solo
	            <br/>
	            Yoda
	            <br/>
	            Rey
	            <br/>
	            Kylo Ren
	            </div>
	            <h3>but what would happen if you just printed the array like a normal person?</h3>
	            ah, i see we have a <b>curious jedi</b> over here. let's say we ran the following code, which prints out an array called <i>starWarsRatings</i>:
	            <div className="code">
	            int[] starWarsRatings = new int[9];
	            <br/>
	            System.out.println(starWarsRatings);
	            </div>
	            the console would look something like this:
	            <div className="code">
	            [I@2a139a55
	            </div>
	            what in the world is that?!?!? it's the <b>memory address</b> of the array, which is pretty useless to us as of now. and that's why we need to construct a for loop and print each individual value in the array rather than the whole array itself.
	            <h3>wanna turn spicy into spicier?</h3>
	            let's use arrays in our own <b>functions</b>! (<b className="note">psst. need a reminder</b> on what functions are and why they are useful? check out the <Link className="contentLink" to="/functions"><b className="pageName">functions page</b></Link>!)
	            <br/><br/>
	            let's first create a function that <b>prints out an inputted array of characters</b>. we already wrote the code to print an array using a for loop above, so all we really need to do is to <b>put the code inside a function</b>. (<b className="note">hint:</b> what should our function take in as a parameter? what should its return type be?) since we are just printing every element of an array, we won't return anything, so our <b>return type is void</b>. however, our function does need to take in the <b>char[]</b> that it will print out. check out the code below that creates our printArray function:
	            <div className="code">
	            <div className="comment">//printArray prints out each character in the array on its own line</div>
	            <br/>
	            public static void printArray(char[] arr) &#123;
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
	            <br/>
	            next, let's create a function that turns a <b>String into an array</b>, where <b>each character</b> in the String is an <b>element in the array</b>. this also means that the <b>length of the array will equal the length of the String</b>.
	            <br/><br/>
	            the first thing we need to do is figure out the function's parameters and return type. (<b className="note">hint:</b> what does our function need to take in as input, and what will it output?) our function will take in <b>one String parameter</b> and will return a <b>char[]</b> because the goal of our function is to <b>convert a String into an array of characters</b>.
	            <br/><br/>
	            now for the function's body. how can we convert a String into an array of its characters? (<b className="note">hint:</b> a for loop may be involved... *wink wink*) after creating an <b>array</b> variable that is the <b>same length as the String</b> parameter, we need to <b>loop</b> through each index in the String and <b>change the value in the array at the current index to the character in the String at the current index</b>. and don't forget to <b>return</b> the array at the end of the function. phew! that was a mouthful! wanna try it yourself? or you can check out the code below:
	            <div className="code">
	            <div className="comment">//stringToArr converts a String to an array of its characters</div>
	            <br/>
	            public static char[] stringToArr(String str) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//create char array of same length as str</div>
	            	<br/>
	            	char[] arr = new char[str.length()];
	            	<br/>
	            	<div className="comment">//loop through the indexes in str</div>
	            	<br/>
	            	for(int i = 0; i &lt; str.length(); i++) &#123;
	            	<br/>
	            	<p className="indent1">
	            		<div className="comment">//set the element at index i in arr to the character at index i in str</div>
	            		<br/>
	            		arr[i] = str.charAt(i);
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            <div className="comment">//return the filled char array</div>
	            <br/>
	            return arr;
	            <br/>
	            &#125;
	            </div>
	            (<b className="note">psst. need a reminder on</b> what the charAt method does? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!)
	            <br/><br/>
	            now it's time to <b>mash. things. up.</b> literally. let's create a program that includes both our printArray function and our stringToArr function. in the main method, <b>let's call the printArray function on the char array returned from the stringToArr function</b>. sounds complicated? dw! we'll break it down. first, we want to call stringToArr, passing any String we want. stringToArr returns a char[], and the next thing we want to do is to print this array. we can do this by passing the char[] returned from stringToArr into our printArray function, which doesn't return anything. and guess what? it's all <b>one line of code</b>. check it out below (<b className="note">btw:</b> r2-d2 is another star wars character lolol):
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	printArray(stringToArr("R2-D2"));
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//printArray prints out each character in the array on its own line</div>
	            <br/>
	            public static void printArray(char[] arr) &#123;
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
	            <br/><br/>
	            <div className="comment">//stringToArr converts a String to an array of its characters</div>
	            <br/>
	            public static char[] stringToArr(String str) &#123;
	            <br/>
	            <p>
	            	<div className="comment">//create char array of same length as str</div>
	            	<br/>
	            	char[] arr = new char[str.length()];
	            	<br/>
	            	<div className="comment">//loop through the indexes in str</div>
	            	<br/>
	            	for(int i = 0; i &lt; str.length(); i++) &#123;
	            	<br/>
	            	<p className="indent1">
	            		<div className="comment">//set the element at index i in arr to the character at index i in str</div>
	            		<br/>
	            		arr[i] = str.charAt(i);
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            <div className="comment">//return the filled char array</div>
	            <br/>
	            return arr;
	            <br/>
	            &#125;
	            </div>
	            check out the console:
	            <div className="code">
	            R<br/>
	            2<br/>
	            -<br/>
	            D<br/>
	            2
	            </div>
	            <h3>["hip", "hip"] it's recap!</h3>
	            <b>hip hip array!</b> you made it to recap!
	            <br/><br/>
	            if you didn't get the <b>pun</b>, hip hip array sounds like hip hip hooray ahahaha *laughs at own joke*.
	            <br/><br/>
	            an <b>array</b> is a variable that stores a list of values. you can initialize an array using one of two methods, depending on whether or not you already know what will be inside your array. here is the blueprint for the first method:
	            <br/>
	            <b><i>&lt;type of values in array&gt;</i>[] <i>&lt;name&gt;</i> = new <i>&lt;type of values inside array&gt;</i>[<i>&lt;number of values in array&gt;</i>];</b>
	            <br/><br/>
	            and here is the blueprint for the second method:
	            <br/>
	            <b><i>&lt;type of values in array&gt;</i>[] <i>&lt;name&gt;</i> = &#123;<i>&lt;list of values&gt;</i>&#125;;</b>
	            <br/><br/>
	            each value has an <b>index</b>, which you can use to both <b>access</b> and <b>change</b> values in an array. here is the blueprint for accessing elements in an array:
	            <br/>
	            <b><i>&lt;name&gt;</i>[<i>&lt;index&gt;</i>]</b>
	            <br/><br/>
	            and here is the blueprint for changing elements in an array:
	            <br/>
	            <b><i>&lt;name&gt;</i>[<i>&lt;index&gt;</i>] = <i>&lt;new value&gt;</i>;</b>
	            <br/><br/>
	            the length of an array stays constant, so you can't add or remove elements. here is the blueprint to get the length of an array:
	            <br/>
	            <b><i>&lt;name&gt;</i>.length</b>
	            <br/><br/>
	            if you print out an array variable, its memory address will display in the console. instead, you need to <b>print out each element in the array individually</b> using a <b>for loop that iterates through each index in the array</b>.
	            <br/><br/>
	            you are now a <b>jedi master</b> at arrays!
	            <h3>pit stop</h3>
	            <div className="problem">
					<b className="note">groceries:</b><br/><br/>
					do you keep a grocery list? your <b>goal</b> is to use <b>arrays</b> to create a <b>grocery list that stores what you need to buy on your next trip to the store</b>. this will require two steps:<br/>
					<ol>
						<li>create an array that represents your grocery list</li>
						<ul>
							<li>you can put whatever and however many groceries you need</li>
						</ul>
						<li>print your grocery list</li>
					</ol>
					<Hint
						hints={[
							"for step 1, the variable type for your grocery list should be String[], since your groceries are all Strings",
							"for step 1, you can use the shortcut method with curly braces to initialize your grocery list array",
							"for step 1, make sure to separate each String grocery using commas",
							"for step 2, remember that you can't simply print an array in one print statement – you have to print out each element of the array individually",
							"for step 2, to print your array, you will need to use a for loop to iterate through each index, and print the value at each index in the array"
						]}
						id="array-groceries"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/array-groceries?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/array-groceries-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
	            <div className="problem">
					<b className="note">one up:</b><br/><br/>
					your <b>goal</b> is to use <b>arrays</b> to create a <b>function</b> that takes in an int array and <b>returns a new array where every value is incremented, or one up</b>. this will require six steps:<br/>
					<ol>
						<li>create a function header that takes in an int array and returns an int array</li>
						<li>inside this function, initialize a new array that is the same length as the original array</li>
						<li>next, fill this new array with every element in the original array incremented, or one up</li>
						<ul>
							<li>to steer you in the right direction, you'll need to make a for loop</li>
						</ul>
						<li>finally, return the new array</li>
						<li>in the main method, create an int array and call this function by passing this array as an argument</li>
						<ul>
							<li>set your array variable equal to the value that is returned from the function call</li>
							<li>thus, your array variable is essentially updated to the one up array returned from your function</li>
						</ul>
						<li>print your array after the function call</li>
					</ol>
					<Hint
						hints={[
							"for step 1, your function's return type is int[] and your function takes in one parameter, which has an int[] type as well",
							"for step 2, when you create your new array, define it's length to be the length of the array parameter",
							"for step 3, use a for loop to iterate through every index in the array; it doesn't matter which array's length you use in the condition component of the for loop because both of them are the same length",
							"for step 3, inside your for loop, change the value at the current index, the iterator variable in your for loop, in the new array to be equal to the value at the current index in the original array + 1",
							"for step 5, you can use the shortcut method with curly braces to create the array in the main method",
							"for step 5, set the array you just created equal to your function call, and also put the array you just created in the parentheses of the function call to pass it as an argument to the function",
							"for step 6, remember that you can't simply print an array in one print statement – you have to print out each element of the array individually",
							"for step 6, to print your array, you will need to use a for loop to iterate through each index, and print the value at each index in the array"
						]}
						id="array-one-up"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/array-one-up?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/array-one-up-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
	            <ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
	            ...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/for-each-loop"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Array;