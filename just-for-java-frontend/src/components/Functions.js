import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Functions extends React.Component{
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
	            so far, all of the code that we've been writing has been inside this thingy called the <b>main method</b>, which <b>automatically runs when you run your code</b>:
	            <div className="code">
	            public static void main(String[] args) &#123;<br/>
	            <p><div className="comment">//this is where we've always typed our code</div></p>
	            <br/>&#125;
	            </div>
	            but what does <b>public static void(String[] args)</b> even mean? it just seems like some funky technical jargon right now. <b>well it ain't.</b> and our goal on this page is for you to <b>understand every single word in the main method header</b>. ready for something fun and fresh? let's do this bro.
	            <h3>woah bro hold your horses; what even is a method?</h3>
	            before we <b>giddy-up</b> into the details of functions, let's first understand what they are and why they are useful to us. a <b>function</b> – you can also interchangeably call this a <b>method</b> – is a block of code that <b>only runs when it is called</b>. all functions have two parts:
	            <ol>
	            	<li><b>header</b> – this defines a function and its input and output, if any</li>
	            	<li><b>body</b> – whatever is inside the function, or in between the curly braces</li>
	            </ol>
	            so the main method is simply a <b>function</b> that is automatically called when you click the run button! all the code we have been typing so far has been going into the <b>body</b> of the main method, and public static void(String[] args) is the <b>header</b> of the main method!
	            <h3>what's the point of functions anyway bro?</h3>
	            <b>functions are useful because they allow you to reuse code.</b> what this means is that if you want a particular action to be run more than once, rather than copying the code in all the places you need it, you can simply put in into a function and call the function, or tell the computer to run whatever is in the body of that function!
	            <br/>
	            <b>functions also make your code more organized.</b> you can put specific code into functions, even if you only call the function once, so that not everything is stuffed into the main method.
	            <br/>
	            <b>finally, functions can allow you to do something with some input and spit out an output.</b> as we said earlier, the input and output of a function is defined in its header. we will discuss input and output in greater depth very soon!
	            <h3>bro! what happens if you never call a function?!</h3>
	            great question bro! even if you have created a function, the code inside the body of the function will <b>never run until you call, or invoke, the function</b>. (<b className="note">btw:</b> the only code that runs automatically is the code inside the body of the main method.)
	            <h3>is it time to code now bro?</h3>
	            yessir! we are first going to focus on the different components of a function header, as that is what defines a function. let's take a look at the blueprint of a function header:
	            <br/><b>public static <i>&lt;return type&gt;</i> <i>&lt;function name&gt;</i>(<i>&lt;parameters&gt;</i>) &#123;</b><br/>
	            <b>&#125;</b>
	            <h3>bro, do i have to write "public static" in front of every function?</h3>
	            the short answer: <b>yes, for now.</b> we will discuss what the keywords <b>public</b> and <b>static</b> mean in the future, but for now, include them in every function header.
	            <h3>k thx bro. what's next?</h3>
	            function name. pretty self-explanatory. it's just the name that you give a function. and it's what you call a function by when you want to use it. (<b className="note">btw:</b> we will talk in detail about how to call a function soon!!) the convention for naming functions is the same as for naming variables. (<b className="note">psst. need a reminder</b> on the naming convention for variables and how it differs from that of constants? check out the <Link className="contentLink" to="/constants"><b className="pageName">constants page</b></Link>!)
	            <h3>ay that was a simple one bro. im guessing the next components are more complicated?</h3>
	            hehe you guessed right! but we'll break it down for you so it's easier to understand. here's the <b>big picture</b>: functions have <b>input</b> and <b>output</b>. input is what a function takes in and output is what a function spits out. now let's learn some <b>fancy function terminology</b> that we use to describe input and output:
	            <ul>
	            	<li>parameter</li>
	            	<li>return</li>
	            </ul>
	            a <b>parameter</b> is a <b>value that you pass into a function</b> – anything that your function needs as an input. a function can have no parameters, one parameter, or multiple parameters – it's up to you! you declare all of the parameters that are being passed into your function <b>inside the parentheses after the function name</b>. if you aren't passing any parameters, simply write <b>()</b>. if you are passing multiple parameters, <b>separate them by commas</b>. also, with multiple parameters, the <b>order</b> in which you list them <b>does not matter</b>. each parameter has both a <b>type</b>, such as int, double, String, etc., and a <b>name</b>, which is what you will reference the parameter by when you use it in the body of your function.
	            <br/><br/>
	        	finally, the <b>return type</b> is the <b>type of the value that your function returns</b>. just as <b>passing a parameter into a function = input</b>, <b>returning a value in your function = output</b>. the return type can be int, double, String, etc.; however, what if you don't want to return anything from your function? <b>if you aren't returning anything from your function, then the return type is void</b>. if you're return type isn't void, then you will need to return a value of the specified return type in the body of your function. it's pretty easy! here's the blueprint for using the <b>return</b> keyword to return a value in the body of your function:
	        	<br/>
	        	<b>return <i>&lt;value&gt;</i>;</b>
	        	<br/><br/>
	            we just dumped a bunch of new information about functions at you, some of which isn't the easiest to understand just by reading. (<b className="note">btw:</b> if you're still confused, that's totally okay!) hopefully the following <b>examples</b> will help illustrate how to create different functions, how to pass parameters into functions, and how to return values from functions. after we go through examples of making functions, then we will discuss how to actually use the functions we made by calling them!
	            <h3>howdy, partner! time for some examples!</h3>
	            whenever you are making a function, there are a couple questions that are helpful to think about in order to decide how to construct your function:
	            <ol>
	            	<li>will your function take in any <b>parameters</b>? in other words, does your function need any <b>input</b>?</li>
	            	<ul>
	            		<li>if so, for each parameter you need, what is its <b>type</b>?</li>
						<li>if not, just leave it as <b>()</b></li>
	            		<li>remember to separate multiple parameters using <b>commas</b></li>
	            	</ul>
	            	<li>will your function <b>return</b> a value? in other words, does your function <b>output</b> anything?</li>
	            	<ul>
	            		<li>if so, what is the <b>type</b> of the value you are returning?</li>
	            		<li>if not, then your return type is <b>void</b></li>
	            	</ul>
	            	<li>what will you do in the <b>body</b> of your function? in other words, what is your function doing?</li>
	            	<ul>
	            		<li>if you want to use <b>parameters</b> in your function, access them using their respective <b>names</b></li>
	            		<li>use the <b>return</b> keyword to return the value of the appropriate type that you specified</li>
	            	</ul>
	            </ol>
	            <b>let's create a function called printHowdyPartner that prints "howdy, partner!"</b> before coding, let's do some planning using the list of questions above:
	            <ol>
	            	<li>will your function take in any parameters? <b>nope!</b></li>
	            	<li>will your function return a value? <b>nope!</b></li>
	            	<ul>
	            		<li>our return type is <b>void</b></li>
	            	</ul>
	            	<li>what will you do in the body of your function? <b>we will simply have a print statement that prints "howdy, partner!"</b></li>
	            </ol>
	            can you figure out what our function header should be? (<b className="note">hint:</b> make sure to check out our answers to the questions above!) take a look at our <b>printHowdyPartner</b> function header below:
	            <div className="code">
	            public static void printHowdyPartner() &#123;
	            <br/>
	            &#125;
	            </div>
	            now for the <b>body</b> of our function! as stated above, we need <b>a print statement that prints "howdy, partner!"</b> and we don't need any return statement since our return type is void. have an idea on what the body of our function should look like? take a look at our completed <b>printHowdyPartner</b> function below:
	            <div className="code">
				public static void printHowdyPartner() &#123;
	            <br/>
	            <p>System.out.println("howdy, partner!");</p>
	            <br/>
	            &#125;
	            </div>
	            nice, bro!
	            <br/><br/>
	            <b>let's create a function called printHowdy that prints "howdy, <i>name</i>!", where <i>name</i> is a person's name that is passed into the function.</b> before coding, let's do some planning using the list of questions above:
	            <ol>
	            	<li>will your function take in any parameters? <b>yes!</b></li>
	            	<ul>
	            		<li>we will pass a parameter <b>String <i>name</i></b> into our function</li>
	            	</ul>
	            	<li>will your function return a value? <b>nope!</b></li>
	            	<ul>
	            		<li>our return type is <b>void</b></li>
	            	</ul>
	            	<li>what will you do in the body of your function? <b>we will have a print statement that prints "howdy, <i>name</i>!"</b></li>
	            </ol>
	            can you figure out what our function header should be? (<b className="note">hint:</b> make sure to check out our answers to the questions above!) take a look at our <b>printHowdy</b> function header below:
	            <div className="code">
	            public static void printHowdy(String name) &#123;
	            <br/>
	            &#125;
	            </div>
	            now for the <b>body</b> of our function! as stated above, we need <b>a print statement that prints "howdy, <i>name</i>!"</b> and we don't need any return statement since our return type is void. have an idea on what the body of our function should look like? take a look at our completed <b>printHowdy</b> function below:
	            <div className="code">
				public static void printHowdy(String name) &#123;
	            <br/>
	            <p>System.out.println("howdy, " + name + "!");</p>
	            <br/>
	            &#125;
	            </div>
	            (<b className="note">psst. need a reminder</b> of using the + operator in String concatenation? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!)
				<br/><br/>
	            <b>let's create a function called howdy that returns "howdy, <i>name</i>!", where <i>name</i> is a person's name that is passed into the function.</b> before coding, let's do some planning using the list of questions above:
	            <ol>
	            	<li>will your function take in any parameters? <b>yes!</b></li>
	            	<ul>
	            		<li>we will pass a parameter <b>String <i>name</i></b> into our function</li>
	            	</ul>
	            	<li>will your function return a value? <b>yes!</b></li>
	            	<ul>
	            		<li>our return type is <b>String</b></li>
	            	</ul>
	            	<li>what will you do in the body of your function? <b>we will return the String "howdy, <i>name</i>!"</b></li>
	            </ol>
	            can you figure out what our function header should be? (<b className="note">hint:</b> make sure to check out our answers to the questions above!) take a look at our <b>howdy</b> function header below:
	            <div className="code">
	            public static String howdy(String name) &#123;
	            <br/>
	            &#125;
	            </div>
	            now for the <b>body</b> of our function! as stated above, we need <b>a return statement that returns the String "howdy, <i>name</i>!"</b>. have an idea on what the body of our function should look like? take a look at our completed <b>howdy</b> function below:
	            <div className="code">
				public static String howdy(String name) &#123;
	            <br/>
	            <p>return "howdy, " + name + "!";</p>
	            <br/>
	            &#125;
	            </div>
	            awesome, bro!
	            <br/><br/>
	            <b>let's create a function called greet that returns "<i>greeting</i>, <i>name</i>!", where <i>name</i> and <i>greeting</i> are a person's name and a word, respectively, that are passed into the function.</b> before coding, let's do some planning using the list of questions above:
	            <ol>
	            	<li>will your function take in any parameters? <b>yes!</b></li>
	            	<ul>
	            		<li>we will pass the parameters <b>String <i>name</i></b> and <b>String <i>greeting</i></b> into our function</li>
	            		<li>note that the order in which we pass them does not matter</li>
	            	</ul>
	            	<li>will your function return a value? <b>yes!</b></li>
	            	<ul>
	            		<li>our return type is <b>String</b></li>
	            	</ul>
	            	<li>what will you do in the body of your function? <b>we will return the String "<i>greeting</i>, <i>name</i>!"</b></li>
	            </ol>
	            can you figure out what our function header should be? (<b className="note">hint:</b> make sure to check out our answers to the questions above!) take a look at our <b>greet</b> function header below:
	            <div className="code">
	            public static String greet(String name, String greeting) &#123;
	            <br/>
	            &#125;
	            </div>
	            now for the <b>body</b> of our function! as stated above, we need <b>a return statement that returns the String "<i>greeting</i>, <i>name</i>!"</b>. have an idea on what the body of our function should look like? take a look at our completed <b>greet</b> function below:
	            <div className="code">
				public static String greet(String name, String greeting) &#123;
	            <br/>
	            <p>return greeting + ", " + name + "!";</p>
	            <br/>
	            &#125;
	            </div>
	            ay, bro!
	            <h3>once you make a function bro, how do you call it?</h3>
	            to reiterate, <b>calling a function</b> means that you are <b>telling the computer to run whatever is in the body of that function</b>. (<b className="note">btw:</b> you can call a function in the main method, or in another function!) let's take a look at the blueprint for how to call a function:
	            <br/>
	            <b><i>&lt;function name&gt;</i>(<i>&lt;arguments&gt;</i>);</b>
	            <br/><br/>
	            if the function that you are calling is <b>returning some value</b>, then often you will want to <b>store the value returned by the function</b> in either a new or an existing <b>variable</b>. in order to do this, simply <b>set the variable equal to the function call</b>. here's the blueprint for how to create a new variable equal to the return of a function call:
	            <br/>
	        	<b><i>&lt;variable type&gt;</i> <i>&lt;variable name&gt;</i> = <i>&lt;function name&gt;</i>(<i>&lt;arguments&gt;</i>);</b>
	        	<br/><br/>
	        	now, you may be wondering what arguments are. an <b>argument</b> is <b>a value you pass into a function when you call it</b>. it can simply be the value itself, or it can be the variable name referring to the variable whose value will be passed into the function.
	        	<h3>hold up bro – isn't that what a parameter is?</h3>
	        	not quite. the difference between the two terms is subtle: <b>both parameters and arguments are what's passed into a function.</b> however, <b>parameters</b> are defined in the <b>function header</b>, where you provide a list of the types and names of each input. the <b>names</b> that you give your parameters are the names you use to <b>refer to those parameters</b> in the <b>body</b> of the function. on the other hand, <b>arguments</b> are defined in the <b>function call</b>, where you provide the values to be inputted into the function. an argument can be a value itself or a name of a variable. <b>the arguments must be listed in the same order that you list your parameters in the function header!</b> 
	            <h3>still confused by the difference between parameters and arguments? we gotchu bro</h3>
	            take a look at the code below, which consists of a function and a main method that calls the function. you can ignore what the function does in its body – we just put something arbitrary there. to help you understand the difference between the terms we've introduced, we labeled the <b>parameter</b>, the <b>argument</b>, and the <b>return value</b> for you:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            int argument = 2;
	            <br/>
	            double returnValue = function(argument);
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            public static double function(int parameter) &#123;
	            <br/>
	            <p>
	            	return 0.99 * parameter;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            <ul>
	            	<li><b>argument</b> – the value that you pass into the function when you call it</li>
	            	<ul>
	            		<li>in the code above, the argument is <b>2</b>, the value of the <i>argument</i> variable</li>
	            	</ul>
	            	<li><b>parameter</b> – the variable that is passed into the function that you can use inside the function body</li>
	            	<ul>
	            		<li>in the code above, the parameter is <b>the <i>parameter</i> variable</b>, which is used in the function body in the return statement</li>
	            	</ul>
	            	<li><b>return value</b> – the value that is returned whose type corresponds with the return type in the function header</li>
	            	<ul>
	            		<li>in the code above, the return value is <b>1.98</b>, since 0.99 * 2 = 1.98</li>
	            	</ul>
	            </ul>
	            <h3>ok bro that makes more sense, but can i see an example?</h3>
	            ofc bro! take a look at the code below, which consists of our <b>main method</b> with an <b>empty body</b>, as well as our <b>printHowdy</b> function that we wrote above:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            &#125;
	            <br/><br/>
	            public static void printHowdy(String name) &#123;
	            <br/>
	            <p>System.out.println("howdy, " + name + "!");</p>
	            <br/>
	            &#125;
	            </div>
	            as of now, the code inside our <b>printHowdy</b> function is not being executed. why you ask? <b>because printHowdy is not being called</b>. let's change that.
	            <br/>
	            inside our main method, let's create a <b>String variable</b> to store the <b>argument that we will pass into our printHowdy function call</b>. we called our variable <i>cowboy</i>:
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>String cowboy = "cowboy";</p>
	            <br/>
	            &#125;
	            </div>
	            now, let's write the code to <b>call printHowdy</b> (<b className="note">hint:</b> make sure to pass <i>cowboy</i> as an argument into the call to printHowdy):
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
				<p>
				String cowboy = "cowboy";
				<br/>
				printHowdy(cowboy);
				</p>
	            <br/>
	            &#125;
	            <br/><br/>
	            public static void printHowdy(String name) &#123;
	            <br/>
	            <p>System.out.println("howdy, " + name + "!");</p>
	            <br/>
	            &#125;
	            </div>
	            can you guess what printed out in the console? (<b className="note">hint:</b> follow the code in the main method line by line, and once you reach a function call, go inside that function and follow its code line by line, replacing any parameters with the provided arguments.) ready to check your answer? here's the console:
	            <div className="code">
	            howdy, cowboy!
	            </div>
	            <br/>
	            just to be extra hehe, we'll give you another example, this time using our <b>greet</b> function (<b className="note">btw:</b> read the comments for an explanation of why it works!):
	            <div className="code">
	            <div className="comment">//our main method is automatically run when we run our code</div>
	            <br/>
	            public static void main(String[] args) &#123;
	            <br/>
				<p>
				<div className="comment">//the following line of code creates a new String variable, myGreeting, and sets it equal to the value returned from the greet function</div>
				<br/>
				<div className="comment">//we pass two arguments into the greet function: "ahoy" and "matey"</div>
				<br/>
				<div className="comment">//the value of myGreeting is "ahoy, matey!"</div>
				<br/>
				String myGreeting = greet("ahoy", "matey");
				</p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//our greet function takes in two String parameters and returns a concatenated String</div>
	            <br/>
	            public static String greet(String name, String greeting) &#123;
	            <br/>
	            <p>
	            <div className="comment">//this is the return statement, which returns a String</div><br/>
	            return greeting + ", " + name + "!";</p>
	            <br/>
	            &#125;
	            </div>
	            <h3>wait a minute bro – functions seem familiar to me, but idk why</h3>
	            bro – what if i told you that <b>you've already been using functions</b> since the <Link className="contentLink" to="/printing"><b className="pageName">printing page</b></Link>? <br/><br/>
	            mind. 
	            <br/>
	            blown.
	            <br/><br/>
	            and yes, that means that <b>println</b> and <b>print</b> are functions. 
	            <br/>so are <b>charAt</b>, <b>indexOf</b>, and <b>substring</b> (<b className="note">psst. need a reminder</b> of what these functions do? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!). 
	            <br/>and how about <b>abs</b>, <b>pow</b>, and <b>sqrt</b>? those are also functions (<b className="note">psst. need a reminder</b> of what these functions do? check out the <Link className="contentLink" to="/math"><b className="pageName">math page</b></Link>!). 
	            <br/>don't forget about <b>nextLine</b>, <b>nextInt</b>, <b>nextDouble</b>, and <b>nextBoolean</b> (<b className="note">psst. need a reminder</b> of what these functions do? check out the <Link className="contentLink" to="/user-input"><b className="pageName">user input page</b></Link>!). every time you used one of these functions, you are <b>calling</b> that function! omg!
	            <br/><br/>we can go even deeper and analyze a function that we've already used to see if it has any parameters or if it returns any value. for example, let's take the <b>length</b> function that you learned about on the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>. check out the following program that uses the <b>length</b> function and sticks with our wild west theme for this page:
	            <div className="code">
	            String yeehaw = "yeehaw cowboy!";
	            <br/>int yeehawLength = yeehaw.length(); <div className="comment">//the value of yeehawLength is 14</div>
	            </div>
	            because there isn't anything inside the <b>parentheses</b> of length, that means that the length function <b>takes in no parameters</b>. however, the length function does <b>return an integer</b>: the number of characters in the String.
	            <h3>so bro, is it time for the big reveal? what does the main method mean?</h3>
	            here are all the parts to the <b>main method</b> explained (<b className="note">btw:</b> remember, the main method is automatically called when you run your program):
	            <ul>
	            	<li>the main method has <b>public static</b> at the start of its header</li>
	            	<li>the name of the main method is conveniently called <b>main</b></li>
	            	<li>the main method's return type is <b>void</b>, which means that it doesn't return anything</li>
	            	<li>the main method takes in one parameter, with a type of <b>String[]</b> and a name of <b>args</b></li>
	            </ul>
	            you don't know yet what String[] means, but we will learn about it thoroughly on the <Link className="contentLink" to="/array"><b className="pageName">array page</b></Link>! (<b className="note">btw:</b> you'll likely never use the parameter passed into the main method when you are coding, but now you know that it's there! we won't cover what the main method's parameter means here, but if you want to learn more, feel free to search it up online!)
	            <h3>bro, can you put an if statement in a function?</h3>
	            yuh bro! want an example? let's make a program that <b>checks if we have enough money to buy a horse</b>.
	            <br/><br/>
	            first order of business: <b>what should our function take in as parameters?</b> (<b className="note">hint:</b> if our function is checking if we have enough money to buy a horse, we need to know two things: <b>how much money we have</b>, and <b>the price of the horse we want</b>.) for our function, we need to pass <b>two parameters</b>: one will store the amount of money we have and the other will store the price of the horse. both will be <b>doubles</b>. sweet bro!
	            <br/><br/>
	            second order of business: <b>what should our function return and what type?</b> (<b className="note">hint:</b> our function will need to return some value that expresses <b>if we have enough money to buy the horse or not</b>.) for our function, its return type should be <b>boolean</b>. specifically, we will <b>return true</b> if we have enough money to buy the horse we want, and <b>return false</b> if we don't have enough money. coolio bro!
	            <br/><br/>
	            third order of business: <b>what should we name our function?</b> imma just call it <b>canPurchaseHorse</b>.
	            <br/><br/>
	            are we ready to write our function <b>header</b>? oh yes we are! let's ride that horse. (<b className="note">btw:</b> okay, idt anyone says "let's ride that horse" but i guess we're trendsetters.)
	            <div className="code">
	            public static boolean canPurchaseHorse(double myMoney, double priceOfHorse) &#123;
	            <br/>
	            &#125;
	            </div><br/>
	            now it's time for the function <b>body</b>. in the body, we need to check if <i>myMoney</i> is <b>greater than or equal to</b> <i>priceOfHorse</i>. (<b className="note">hint:</b> the operator <b>&gt;=</b> means greater than or equal to.) if so, we will return <b>true</b>; otherwise, we will return <b>false</b>. ready to make an <b>if statement</b>? (<b className="note">psst. need a reminder</b> on how to construct an if statement? check out the <Link className="contentLink" to="/if-statement"><b className="pageName">if statement page</b></Link>!) take a look at our dandy function below:
	            <div className="code">
	            public static boolean canPurchaseHorse(double myMoney, double priceOfHorse) &#123;
	            <br/>
	            <p>
	            	if(myMoney &gt;= priceOfHorse) &#123;
	            	<br/>
	            	<p className="indent1">
	            		return true;
	            	</p>
	            	<br/>
	            	&#125;<br/>
	            	return false; 
	            </p>
	            <br/>
	            &#125;
	            </div>
	            bro, you're most probably wondering, "why don't we need an <b>else statement</b> when we return false?" <b>whenever you return a value, you exit the function!</b> in the context of our canPurchaseHorse function, if <i>myMoney</i> is <b>greater than or equal to</b> <i>priceOfHorse</i>, then we will <b>return true and exit the function</b>. therefore, we do not need an else statement. (<b className="note">btw:</b> however, if you please, you can include an else statement if you like!)
	            <br/><br/>
	            what if i told you bro that you could write that whole function, including the return statement, in a <b>single line of code</b>? omg right? check out our new and improved function below:
	            <div className="code">
	            public static boolean canPurchaseHorse(double myMoney, double priceOfHorse) &#123;
	            <br/>
	            <p>
	            	return myMoney &gt;= priceOfHorse;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            the <b>condition in our if statement</b> is simply a <b>boolean</b> that evaluates to <b>true</b> or <b>false</b>. the goal for canPurchaseHorse is to return true if the condition is true and to return false if the condition is false. so, all we really need to do is to <b>return the condition as a boolean</b>!
	            <h3>how about a for loop bro? or a while loop? can those go in functions?</h3>
	            yes and yes!! any of the <b>code blocks</b> we've learned can go in the body. we'll give you a lil example. let's make a function that <b>prints out every <i>n</i>th character in a String <i>str</i></b>. based on that, can you guess what our function header is? (<b className="note">hint:</b> if our function is printing out something, then do we need to return anything?) take a look below:
	            <div className="code">
	            public static void printEveryNth(String str, int n) &#123;
	            <br/>
	            &#125;
	            </div><br/>
	            sweet bro! now for the body. can you figure out how to <b>print every nth character of a String</b>? (<b className="note">hint:</b> you may need to use a for loop where your iterator variable is the index...) let's construct a <b>for loop</b> that iterates through <b>every <i>n</i>th index</b> in <i>str</i>. to do this, the <b>iterate component</b> of our for loop should be <b>i+=n</b> because we want to advance by <i>n</i> each iteration. (<b className="note">psst. need a reminder</b> on what the iterate component and the other two components of a for loop are? check out the <Link className="contentLink" to="/for-loop"><b className="pageName">for loop page</b></Link>!) and finally, inside our for loop, we'll have a same-line print statement that prints out the character at index <i>i</i> in <i>str</i>. (<b className="note">psst. need a reminder</b> on how to access characters in a String by index? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) here's our completed function below:
	            <div className="code">
	            public static void printEveryNth(String str, int n) &#123;
	            <br/>
	            <p>
	            	for(int i = 0; i &lt; str.length; i+=n) &#123;
	            	<br/>
	            	<p className="indent1">
	            		System.out.print(str.charAt(i));
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            <br/>
	            let's <b>test out</b> our function by <b>calling it</b> in the main method (<b className="note">btw:</b> gotta stick with that wild west theme, am i right?):
	            <div className="code">
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	printEveryNth("howdy, cowboy!", 3);
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            public static void printEveryNth(String str, int n) &#123;
	            <br/>
	            <p>
	            	for(int i = 0; i &lt; str.length(); i+=n) &#123;
	            	<br/>
	            	<p className="indent1">
	            		System.out.print(str.charAt(i));
	            	</p>
	            	<br/>
	            	&#125;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            here's what shows up in the console:
	            <div className="code">
	            hd wy
	            </div>
	            (<b className="note">btw:</b> wondering how we got that output bro? we printed the characters in the String <b>"howdy, cowboy!"</b> at the following indexes: <b>0, 3, 6, 9, 12</b>. hope that helps bro!)
	            <br/><br/>
	            to conclude, really anything can go inside your function body!
	            <h3>even another function call, bro?</h3>
	            ohh yeaaa, now we're getting <b>spicy</b> bro. just like we've been calling all of our functions from the main method, <b>a function that we create can have a call to another function</b>! in the following example, we are going to call the canPurchaseHorse function that we already made:
	            <div className="code">
	            public static boolean canPurchaseHorse(double myMoney, double priceOfHorse) &#123;
	            <br/>
	            <p>
	            	return myMoney &gt;= priceOfHorse;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            <br/>
	            let's make another function that <b>asks the user</b> how much money they have and the price of the horse they want, and prints out <b>how much money they have left</b> if they can purchase the horse, or prints out a message telling them that they don't have enough money. this function will involve <b>user input</b>, so this example will be a good review of past concepts as well! (<b className="note">psst. need a reminder</b> on how to ask the user a question and store their answer? check out the <Link className="contentLink" to="/user-input"><b className="pageName">user input page</b></Link>!) finally, our main method will simply call this new function that we create. 
	            <br/><br/>think you can get on that saddle and ride this horse all by yourself? <b>you got this, cowboy.</b> (<b className="note">hint:</b> make sure to store the two pieces of input you receive from the user in two variables so that you can pass those variables into the canPurchaseHorse function as <b>arguments</b>!) take a look at our fully-coded program below with <b>comments</b> explaining the code:
	            <div className="code">
	            import java.util.Scanner; <div className="comment">//don't forget this import statement!</div>
	            <br/>
	            class Main &#123;
	            <br/>
	            <p>
	            <div className="comment">//whatever is inside the main method will automatically run when we run our code</div>
	            <br/>
	            public static void main(String[] args) &#123;
	            <br/>
	            <p>
	            	buyAHorse(); <div className="comment">//call the buyAHorse function</div>
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//the buyHorse function doesn't need any parameters and doesn't return anything</div>
	            <br/>
	            public static void buyAHorse() &#123;
	            <br/>
	            <p>
	            	Scanner in = new Scanner(System.in); <div className="comment">//create a Scanner to get user input</div>
	            	<br/>
	            	<div className="comment">//ask the user to enter the amount of money they have, and store it as a double</div>
	            	<br/>
	            	System.out.print("Howdy! How much money do you have? ");
	            	<br/>
	            	double money = in.nextDouble();
	            	<br/>
	            	<div className="comment">//ask the user to enter the price of the horse they want, and store it as a double</div>
	            	<br/>
	            	System.out.print("How much does the horse that you want to ride cost? ");
	            	<br/>
	            	double price = in.nextDouble();
	            	<br/><br/>
	            	<div className="comment">//check if the result of the call to the canPurchaseHorse function, passing in money and price as arguments, is true or false</div>
	            	<br/>
	            	if(canPurchaseHorse(money, price)) &#123;
            		<br/>
            		<p>
            			<div className="comment">//if you can purchase the horse, subtract the price of the horse from the total money you have and print out how much money you have left</div>
            			<br/>
            			money -= price;
            			<br/>
            			System.out.println("Your the official owner of your horse! You have $" + money + " left.");
            		</p>
            		<br/>
	            	&#125; else &#123;
					<br/>
            		<p>
            			<div className="comment">//if you can't purchase the horse, print a sorry message to the user</div>
            			<br/>
            			System.out.println("Sorry, you don't have enough money to purchase that horse!");
            		</p>
            		<br/>
	            	&#125;
	            </p>
	            <br/>
	            &#125;
	            <br/><br/>
	            <div className="comment">//the canPurchaseHorse function takes in myMoney and priceOfHorse and returns true if you have enough money to buy the horse and false otherwise</div>
	            <br/>
	            public static boolean canPurchaseHorse(double myMoney, double priceOfHorse) &#123;
	            <br/>
	            <p>
	            	return myMoney &gt;= priceOfHorse;
	            </p>
	            <br/>
	            &#125;
	            </p>
	            <br/>
	            &#125;
	            </div>
	            sweet!
	            <h3>public static void recap()</h3>
	            <b>howdy, bro!</b> you made it to recap!<br/><br/>
	            <b>functions</b> or <b>methods</b> are blocks of code that <b>only run when they are called</b>. the <b>main method</b> is a function that is automaticaly called when you run your program. all functions have a <b>header</b> and <b>body</b>:
	            <ol>
	            	<li><b>header</b> – defines the return type of a function and any parameters</li>
	            	<li><b>body</b> – the code that executes when the function is called</li>
	            </ol>
	            here's the blueprint of a function:
	            <br/><b>public static <i>&lt;return type&gt;</i> <i>&lt;function name&gt;</i>(<i>&lt;parameters&gt;</i>) &#123;</b><br/>
	            <b>&#125;</b>
	            <br/><br/>
	            and here's the blueprint of a function call:
	            <br/><b><i>&lt;function name&gt;</i>(<i>&lt;arguments&gt;</i>);</b>
	            <br/><br/>
	            woaaahhhh bro hold your horses cowboy. i'm still lost on what <b>parameter</b>, <b>argument</b>, and <b>return type</b> mean. 
	            <br/>dw bro we gotchu:
	            <ul>
	            	<li><b>parameter</b> – the variable that is passed into the function that you can use inside the function body</li>
	            	<li><b>argument</b> – the value that you pass into the function when you call it</li>
	            	<li><b>return type</b> – the type of the value that is returned, or outputted by the function</li>
	            </ul>
	            last but not least, functions are useful because...
	            <ul>
	            	<li>they allow you to <b>reuse</b> code</li>
	            	<li>they make your code more <b>organized</b></li>
	            	<li>they allow you to do something with some <b>input</b> and spit out an <b>output</b></li>
	            </ul>
	            yeehaw, bro!
	            <h3>pit stop</h3>
	            <div className="problem">
					<b className="note">product:</b><br/><br/>
					have you memorized your times tables? your <b>goal</b> is to use <b>functions</b> to create a program with a function that <b>finds the product of two doubles</b>.
					this will require two steps:<br/>
					<ol>
						<li>create a function that returns the product of two doubles</li>
						<ul>
							<li>you should be able to write the body of this function in a single line of code</li>
						</ul>
						<li>in the main method, print out the value that gets returned when you call your product function</li>
						<ul>
							<li>you can pass in any arguments that you would like into the function call</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 1, in order to compute the product, our function needs two numbers as input, so it will need to take in two doubles as parameters",
							"for step 1, the output of our function is the product of the two parameters, which is a double, so our return type is double",
							"for step 2, simply place the function call in between the parentheses of your print statement, and don't forget to include two doubles as arguments separated by a comma"
						]}
						id="functions-product"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/functions-product?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/functions-product-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
	            <div className="problem">
					<b className="note">spaces:</b><br/><br/>
					your <b>goal</b> is to use <b>functions</b> to create a program with a function that <b>adds a space between every character</b> in a String.
					this will require three steps:<br/>
					<ol>
						<li>create a function called spaces that takes in a String and returns a new String which has spaces in between each character</li>
						<ul>
							<li>for example, if you pass in "java", your function should return "j a v a"</li>
							<li>note that the first character does not have a space before it and the last character does not have a space after it</li>
							<li>to steer you in the right direction, you'll need to use a loop with an if statement inside it</li>
						</ul>
						<li>in the main method, call your spaces function and store the value that gets returned in a variable</li>
						<li>print the variable you created in step 2</li>
					</ol>
					<Hint
						hints={[
							"for step 1, our function is taking in a String, so pass one String parameter into your function",
							"for step 1, our function is outputting a String, so its return type is String",
							"for step 1, the first thing we should do in the body of our function is create the new String variable that we will return – just set it to an empty String",
							"for step 1, we need to create a loop that iterates through each character in the String parameter, so our iterator variable will represent the current index and our loop will keep going as long as the current index is less than the length of the String parameter",
							"for step 1, inside the loop, we can add the character at the current index to our new String variable, and, if we are not at the last index in the String, then we can add a space to our new String variable as well",
							"for step 1, don't forget to return the String variable you created",
							"for step 2, to call a function and store the result in a variable, use the following syntax: <variable type> <variable name> = <function name>(<arguments>);"
						]}
						id="functions-spaces"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/functions-spaces?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/functions-spaces-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">that's odd:</b><br/><br/>
					your <b>goal</b> is to use <b>functions</b> to create a program with a function that <b>checks if the length of a String is odd</b>.
					this will require three steps:<br/>
					<ol>
						<li>create a function that returns true if the length of a String is odd</li>
						<ul>
							<li>you can either use an if statement to do this or the single line of code shortcut we discussed earlier</li>
						</ul>
						<li>in the main method, call your function, passing a String with an odd length as an argument, and print your result</li>
						<li>in the main method, call your function, passing a String with an even length as an argument, and print your result</li>
					</ol>
					<Hint
						hints={[
							"for step 1, our function will take in the String whose length it will check as a parameter and will return a boolean",
							"for step 1, you can use str.length() to obtain the length of a String str",
							"for step 1, to write the body of your function in one line of code, you can simply return a condition as a boolean in your return statement",
							"for step 1, when you divide an odd number by 2, its remainder is always 1",
							"for step 1, you can use the % operator, called modulus, to check if the length of the String parameter divided by 2 yields a remainder of 1",
							"for steps 2 and 3, make sure to put a String in between the parentheses of your function call to pass it as an argument"
						]}
						id="functions-thats-odd"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/functions-thats-odd?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/functions-thats-odd-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
	            <ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
	            ...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/overloading"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Functions;