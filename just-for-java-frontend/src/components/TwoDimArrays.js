import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class TwoDimArrays extends React.Component{
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
	            on the <Link className="contentLink" to="/array"><b className="pageName">array page</b></Link>, we learned that an <b>array</b> is a list of values, where each value is assigned an index. arrays can store any variable type: integers, doubles, booleans, chars, Strings... <b>even arrays</b>. yep. you heard that right. today we are going to be making <b>arrays of arrays</b>, called a <b>two-dimensional array</b>, or <b>2d array</b> for short. we know it sounds daunting, but if you have a solid understanding of what a <b>one-dimensional array</b> is (<b className="note">btw:</b> a one-dimensional array is simply just the normal arrays that we've been discussing so far), you're good to go!
	            <h3>how do you make an array of arrays?</h3>
	            the construction of a 2d array looks similar to that of a 1d array, with some minor changes. here's the blueprint of a 2d array:
	            <br/>
	            <b>
	            <i>&lt;type&gt;</i>[][] <i>&lt;name&gt;</i> = new <i>&lt;type&gt;</i>[<i>&lt;number of rows&gt;</i>][<i>&lt;number of columns&gt;</i>];
	            </b>
	            <br/><br/>
	            we already know that <b>type</b> is the variable type of the values inside our array, and <b>name</b> is the name of our array variable, but what are <b>number of rows</b> and <b>number of columns</b>? to understand this, it helps to <b>visualize</b> what happens when you initialize an array.
	            <h3>taking a step back to visualize</h3>
	            let's first create a one-dimensional int array of length 3:
	            <div className="code">
	            int[] arr = new int[3];
	            </div>
	            <i>arr</i> looks like this:<br/><br/>
	            <table>
	            	<tr>
	            		<td>arr[0]</td>
	            		<td>arr[1]</td>
	            		<td>arr[2]</td>
	            	</tr>
	            </table>
	            <br/>
	            makes sense, right? this array stores <b>three int values</b>. in addition, indexing starts at <b>0</b> and ends at <b>2</b>. we can visualize that this array has <b>one dimension</b>.
	            <br/><br/>
	            now let's create a two-dimensional int array with 3 rows and 5 columns:
	            <div className="code">
	            int[][] arr = new int[3][5];
	            </div>
	            <i>arr</i> looks like this:<br/><br/>
	            <table>
	            	<tr>
	            		<td>arr[0][0]</td>
	            		<td>arr[0][1]</td>
	            		<td>arr[0][2]</td>
	            		<td>arr[0][3]</td>
	            		<td>arr[0][4]</td>
	            	</tr>
	            	<tr>
	            		<td>arr[1][0]</td>
	            		<td>arr[1][1]</td>
	            		<td>arr[1][2]</td>
	            		<td>arr[1][3]</td>
	            		<td>arr[1][4]</td>
	            	</tr>
	            	<tr>
	            		<td>arr[2][0]</td>
	            		<td>arr[2][1]</td>
	            		<td>arr[2][2]</td>
	            		<td>arr[2][3]</td>
	            		<td>arr[2][4]</td>
	            	</tr>
	            </table>
	            <br/>
	            this array stores <b>15 int values</b> in a tabular fashion with <b>3 rows</b> and <b>5 columns</b>. in addition, there are two index values in the form <b>[row][col]</b>, starting at <b>[0][0]</b> and ending at <b>[2][4]</b>. we can visualize that this array has <b>two dimensions</b>.
	            <br/><br/>
	            now that we know what a 2d array looks like and how its indexing works, let's talk about the length of a 2d array and how to loop through one up next.
	            <h3>the length(s) of a 2d array</h3>
	            that's right matey! a 2d array has <b>two lengths</b>: the <b>number of rows</b> and the <b>number of columns</b>. (<b className="note">btw:</b> remember that these are the two values you initialze a 2d array with!) the big question is: <b>how can we retrieve these two values?</b>
	            <br/><br/>
	            here's the blueprint to get the <b>number of rows in a 2d array</b> (<b className="note">btw:</b> assume that <i>arr</i> is a 2d array that we already initialized):
	            <br/>
	            <b>
	            <i>arr</i>.length
	            </b>
	            <br/><br/>
	            and here's the blueprint to get the <b>number of columns in a 2d array</b> (<b className="note">btw:</b> assume that <i>arr</i> is a 2d array that we already initialized):
	            <br/>
	            <b>
	            <i>arr[i]</i>.length
	            </b>
	            <br/><br/>
	            instead of having to memorize these two blueprints, let's <b>conceptually understand</b> them... remember that a 2d array is an array where the values themselves are also arrays. so, if we want to find the <b>number of rows</b>, we need to find the number of arrays, or values, inside the big array. to do this, we can simply use <b>arr.length</b>. (<b className="note">psst. need a reminder</b> on what the length of an array means? check out the <Link className="contentLink" to="/array"><b className="pageName">array page</b></Link>!) now, if we want to find the <b>number of columns</b>, we need to find the number of values inside the arrays inside the big array, or the nested arrays. to do this, we need to find the length of the value, which is an array, at an <b>arbitrary index <i>i</i></b> of the 2d array. thus, we can use <b>arr[i].length</b> to get the number of columns. note that it doesn't matter what value <i>i</i> is because the dimensions are constant.
	            <br/><br/>
	            before we move on, let's apply what we've learned so far and see if you can figure out what the following code block will print in the console:
	            <div className="code">
	            <div className="comment">//initialize our 2d array</div><br/>
	            String[][] myArr = new String[2][3];
	            <br/>
	            <div className="comment">//fill our 2d array with some values</div><br/>
	            myArr[0][0] = "just";<br/>
	            myArr[0][1] = "for";<br/>
	            myArr[0][2] = "java";<br/>
	            myArr[1][0] = "is";<br/>
	            myArr[1][1] = "the";<br/>
	            myArr[1][2] = "worst";<br/>
	            myArr[1][2] = "best";<br/>
	            <div className="comment">//print some stuff out... which you have to guess!</div><br/>
	            System.out.println(myArr[0][0]);<br/>
	            System.out.println(myArr[1][1]);<br/>
	            System.out.println(myArr[1][2]);<br/>
	            System.out.println(myArr.length);<br/>
	            System.out.println(myArr[0].length);<br/>
	            System.out.println(myArr[1].length);
	            </div>
	            can you guess what prints out in the console? (<b className="note">hint:</b> remember the visualization of a 2d array with its indexing system. and don't forget the distinction between the number of rows and the number of columns. you got this!) before we see the console, let's quickly <b>visualize</b> this array:
	            <br/><br/><table>
	            	<tr>
	            		<td>arr[0][0] = "just"</td>
	            		<td>arr[0][1] = "for"</td>
	            		<td>arr[0][2] = "java"</td>
	            	</tr>
	            	<tr>
	            		<td>arr[1][0] = "is"</td>
	            		<td>arr[1][1] = "the"</td>
	            		<td>arr[1][2] = "best"</td>
	            	</tr>
	            </table><br/>
	            once you have a guess on what the console looks like, check it out below:
	            <div className="code">
	            just<br/>
	            the<br/>
	            best<br/>
	            2<br/>
	            3<br/>
	            3
	            </div>
	            <h3>how in the world do you loop through a 2d array?!</h3>
	            in order to loop through a 2d array, we need to have <b>two for loops</b>: an <b>outer</b> for loop and an <b>inner</b> for loop. as we learned about earlier, this is called <b>nesting</b>. (<b className="note">psst. need a reminder</b> on what in the world nesting is? check out the <Link className="contentLink" to="/nesting"><b className="pageName">nesting page</b></Link>!) our <b>outer for loop will iterate through each row</b>, while our <b>inner for loop will iterate through each column</b>. let's take a look at how nested for loops can iterate through a 2d array with some code:
	            <div className="code">
	            <div className="comment">//create a 2d array of integers that we will iterate through and print out</div><br/>
	            int[][] arr = new int[4][6];
	            <br/><br/>
	            <div className="comment">//our outer for loop iterates through each row, where i is the row index</div><br/>
	            for(int i = 0; i &lt; arr.length; i++)&#123;
	            <br/>
	        	<p>
	        		<div className="comment">//our inner for loop iterates through each column, where j is the column index</div><br/>
	        		for(int j = 0; j &lt; arr[i].length; j++)&#123;
	        		<p className="indent1">
	        			<div className="comment">//print out each value in row i on the same line</div><br/>
	        			System.out.print(arr[i][j]);
	        		</p>
	        		<br/>
	        		&#125;
	        		<br/>
	        		<div className="comment">//print out each row in arr on different lines</div><br/>
	        		System.out.println();
	        	</p>
	        	<br/>
	            &#125;
	            </div>
	            check out the console below:
	            <div className="code">
	            000000<br/>
	            000000<br/>
	            000000<br/>
	            000000
	            </div>
	            <h3>let's be fun and fresh and use a for-each loop !!</h3>
	            yassss we love ur thinking! (<b className="note">psst. need a reminder</b> on how to construct a for-each loop and how it is different from a normal for loop? check out the <Link className="contentLink" to="/for-each-loop"><b className="pageName">for-each loop page</b></Link>!) let's take a look at how nested for-each loops can iterate through a 2d array with some code (<b className="note">btw:</b> we named our variables so that hopefully our code is more readable and easier to comprehend):
	            <div className="code">
	            <div className="comment">//create a 2d array of integers that we will iterate through and print out</div><br/>
	            int[][] arr = new int[4][6];
	            <br/><br/>
	            <div className="comment">//our outer for-each loop iterates through each row in arr</div><br/>
	            for(int[] row : arr) &#123;
	            <br/>
	        	<p>
	        		<div className="comment">//our inner for-each loop iterates through each value in each row</div><br/>
	        		for(int value : row) &#123;
	            	<br/>
	        		<p>
	        			<div className="comment">//print out each value in row on the same line</div><br/>
	        			System.out.print(value);
	        		</p>
	        		<br/>
	        		<div className="comment">//print out each row in arr on different lines</div><br/>
	        		System.out.println();
	        	</p>
	        	<br/>
	        	&#125;
	            </div>
	            the <b>nested for-each loops</b> above are equivalent to the <b>nested standard for loops</b> we created earlier, and both print out the same thing to the console.
	            <h3>just a lil' recap</h3>
	            <b>awesome!</b> you made it to recap!
				<br/><br/>
				a <b>2d array</b> is an array of values, where each value itself is an array. in order to initialize a 2d array, you need to specify the <b>dimensions</b> of the array: the <b>number of rows</b> and <b>number of columns</b> in the array. here's the blueprint for constructing a 2d array:
				<br/>
	            <b>
	            <i>&lt;type&gt;</i>[][] <i>&lt;name&gt;</i> = new <i>&lt;type&gt;</i>[<i>&lt;number of rows&gt;</i>][<i>&lt;number of columns&gt;</i>];
	            </b>
	            <br/><br/>
	            it's super important that when accessing or changing a value in a 2d array by index, you need to keep track of <b>both the row and column indexes</b>. 
	            <br/>
	            a <b>visualization</b> of the indexing in a 2d array is provided below:
	            <br/><br/><table>
	            	<tr>
	            		<td>arr[0][0]</td>
	            		<td>arr[0][1]</td>
	            		<td>arr[0][2]</td>
	            		<td>...</td>
	            	</tr>
	            	<tr>
	            		<td>arr[1][0]</td>
	            		<td>arr[1][1]</td>
	            		<td>arr[1][2]</td>
	            		<td>...</td>
	            	</tr>
	            	<tr>
	            		<td>arr[2][0]</td>
	            		<td>arr[2][1]</td>
	            		<td>arr[2][2]</td>
	            		<td>...</td>
	            	</tr>
	            	<tr>
	            		<td>...</td>
	            		<td>...</td>
	            		<td>...</td>
	            		<td>...</td>
	            	</tr>
	            </table><br/>
	            here's the blueprint to get the <b>number of rows</b> in a 2d array:
	            <br/>
	            <b>
	            <i>arr</i>.length
	            </b>
	            <br/><br/>
	            here's the blueprint to get the <b>number of columns</b> in a 2d array:
	            <br/>
	            <b>
	            <i>arr[i]</i>.length
	            </b>
	            <br/><br/>
	            last but not least, when looping through a 2d array, use <b>nested loops</b>, where the <b>outer loop iterates through each row</b> and the <b>inner loop iterates through each column</b>.
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">square array:</b><br/><br/>
					your <b>goal</b> is to use <b>2d arrays</b> to create a function that returns <b>true</b> if <b>the given 2d array is a square</b> and <b>false</b> otherwise.
					this will require three steps:<br/>
					<ol>
						<li>create a function that returns true if the given 2d array is a square and false otherwise</li>
						<ul>
							<li>a 2d array is a square if the number of rows and number of columns in the 2d array are equal to each other</li>
						</ul>
						<li>in the main method, print out the value that gets returned when you call your function with a square 2d array</li>
						<li>in the main method, print out the value that gets returned when you call your function with a non-square 2d array</li>
					</ol>
					<Hint
						hints={[
							"for step 1, the number of rows in a 2d array can be retrieved by typing arr.length, where arr is your 2d array",
							"for step 1, the number of columns in a 2d array can be retrieved by typing arr[i].length, where arr is your 2d array and i is an arbitrary row index"
						]}
						id="2d-array-square-array"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/2d-array-square-array?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/2d-array-square-array-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">rolling dice:</b><br/><br/>
					your <b>goal</b> is to use <b>2d arrays</b> to <b>store the sum of two six-sided dice rolls in a tabular data structure</b>.
					this will require two steps:<br/>
					<ol>
						<li>create a 2d int array to store the sum of the dice rolls</li>
						<ul>
							<li>the value at row 0, column 0 represents when you roll 1 and 1, so your array should store 2 at that position</li>
							<li>the value at row 0, column 1 represents when you roll 1 and 2, so your array should store 3 at that position</li>
							<li>the value at row 1, column 0 represents when you roll 2 and 1, so your array should store 3 at that position</li>
							<li>continue this pattern until you roll 6 and 6, which is the greatest sum since the dice are six-sided</li>
						</ul>
						<li>fill your 2d array with the appropriate sums</li>
						<ul>
							<li>don't hard-code 36 lines of setting each position in your 2d array to the proper int value</li>
							<li>instead, use one of the code blocks we discussed above to fill your 2d array</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 1, because your dice are six-sided, the number of rows – representing your first die –  in your 2d array is 6, and the number of columns – representing your second die – is also 6",
							"for step 2, you need to use nested for loops in order to fill your array: your outer for loop represents your first die roll / rows and your inner for loop represents your second die roll / columns",
							"for step 2, the row and column indexes in your for loops represent the number on your first and second dice rolls, resepctively... just make sure you add 1 to the index because indexing starts at 0"
						]}
						id="2d-array-rolling-dice"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/2d-array-rolling-dice?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/2d-array-rolling-dice-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
	            ...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/arraylist"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default TwoDimArrays;