import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Strings extends React.Component{
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
				as we learned on the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>, <b>Strings</b> are used to store text and are denoted using double quotation marks. Strings are different from the other variable types that we have learned about so far – integers, doubles, characters, booleans. (<b className="note">btw:</b> the difference you may have noticed is that <b>String</b> has a capital first letter whereas <b>int</b>, <b>double</b>, <b>char</b>, and <b>boolean</b> are all lowercase.) Strings are special, and that's why we've dedicated a whole page to them!
				<h3>"hello world"</h3>
				why can Strings have a whole page dedicated to them? what makes them so special from the other variable types?<br/> 
				<b>int</b>, <b>double</b>, <b>char</b>, and <b>boolean</b> are examples of <b>primitive types</b>. a primitive type is <b>already defined in, or built into, java</b> and have one job: <b>contain a simple value</b>.<br/> 
				on the other hand, <b>String</b> is an example of an <b>object</b>, or a <b>non-primitive type</b>. for now, just know that an object is much more <b>complex</b> than a primitive type, with <b>a lot more functionality</b>. because of this increased functionality, and the fact that Strings are used so often by programmers like you, the rest of this page will introduce various String-related topics.
				<h3>h e l l o w o r l d</h3>
				let's redefine what a String is: <b>a String is just a bunch of characters</b>. this means that we can extract specific characters in a String.
				<br/>
				we can access characters in a String through their <b>indexes</b>. indexing is a <b>numbering system that starts at 0</b>. not at 1. at 0. we cannot emphasize that enough. each character in a String has an <b>index</b>, or a <b>number describing its position in the String</b>. 
				<br/>
				here are the indexes of each character in the classic String "hello world":
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>'h'</td>
				    <td>'e'</td>
				    <td>'l'</td>
				    <td>'l'</td>
				    <td>'o'</td>
				    <td>' '</td>
				    <td>'w'</td>
				    <td>'o'</td>
				    <td>'r'</td>
				    <td>'l'</td>
				    <td>'d'</td>
				  </tr>
				  <tr>
				    <td>0</td>
				    <td>1</td>
				    <td>2</td>
				    <td>3</td>
				    <td>4</td>
				    <td>5</td>
				    <td>6</td>
				    <td>7</td>
				    <td>8</td>
				    <td>9</td>
				    <td>10</td>
				  </tr>
				</table>
				<br />
				the index of 'h' is 0, the index of 'e' is 1, the index of the first 'l' is 2, the index of the second 'l' is 3, and so on... (<b className="note">btw:</b> characters have single quotes around them while Strings have double quotes around them.)
				<h3>h</h3>
				now that you understand <b>indexing</b> – a fundamental concept that will become important again in later topics – let's take a look at the blueprint explaining how to access characters in a String using their indexes (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will extract a character):
				<br/>
				<b>str.charAt(<i>&lt;index&gt;</i>)</b>
				<br/><br/>
				let's see <b>charAt()</b> in action!
				<div className="code"> 
				String bestWebsite = "just for java";
				<br/>
				char u = bestWebsite.charAt(1);
				<br/>
				char t = bestWebsite.charAt(3);
				<br/>
				char r = bestWebsite.charAt(7);
				<br/>
				char v = bestWebsite.charAt(11);
				</div>
				still confused? don't worry! let's take a look at the indexes of each character in "just for java":
				<br/><br/>
				<table>
				  <tr>
				    <td>'j'</td>
				    <td>'u'</td>
				    <td>'s'</td>
				    <td>'t'</td>
				    <td>' '</td>
				    <td>'f'</td>
				    <td>'o'</td>
				    <td>'r'</td>
				    <td>' '</td>
				    <td>'j'</td>
				    <td>'a'</td>
				    <td>'v'</td>
				    <td>'a'</td>
				  </tr>
				  <tr>
				    <td>0</td>
				    <td>1</td>
				    <td>2</td>
				    <td>3</td>
				    <td>4</td>
				    <td>5</td>
				    <td>6</td>
				    <td>7</td>
				    <td>8</td>
				    <td>9</td>
				    <td>10</td>
				    <td>11</td>
				    <td>12</td>
				  </tr>
				</table>
				<br/>
				the index of 'u' is 1, the index of 't' is 3, the index of 'r' is 7, and the index of 'v' is 11. by putting the proper index between the parentheses in <b>charAt()</b>, we can extract the character in "just for java" at that index. 
				<br/><br/>
				<b>pretty cool, eh?</b> but things get cooler when you can extract more than just a character from a String... <b>onward!</b>
				<h3>hello wo</h3>
				what if we want to not simply get a single character from a String, but a whole portion of the String? for example, let's say we wanted to get "hello" from the String "hello world". we can do this using <b>substring()</b>, which will retrieve a <b>substring</b>, or a smaller portion of a String, based on the start and end indexes of that substring. let's hop over to the blueprint (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will extract a substring):
				<br/>
				<b>str.substring(<i>&lt;start_index&gt;</i>, <i>&lt;end_index&gt;</i>)</b>
				<br/><br/>
				the <i>start_index</i> is the index where the substring begins, and is <b>inclusive</b>, meaning that the character at the <i>start_index</i> is included in the substring. the <i>end_index</i> is the index where the substring ends, and is <b>exclusive</b>, meaning that the character at the <i>end_index</i> is excluded from the substring. it is crucial to remember that the <i>start_index</i> is <b>inclusive</b> whereas the <i>end_index</i> is <b>exclusive</b>.
				<br/><br/>
				there is also another way to get a substring, where you only provide the <i>start_index</i> and the substring from the <i>start_index</i> till the end of the String is retrieved. let's hop over to the blueprint (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will extract a substring):
				<br/>
				<b>str.substring(<i>&lt;start_index&gt;</i>)</b>
				<br/><br/>
				once again, the <i>start_index</i> is <b>inclusive</b>. the substring includes the character at the <i>start_index</i> and includes the rest of the String, since no <i>end_index</i> is given here.
				<br/><br/>
				below, we have some in-depth examples illustrating both ways to get a substring:
				<ol>
					<li>using a <i>start_index</i> and an <i>end_index</i></li>
					<li>using just a <i>start_index</i></li>
				</ol>
				<b>example 1:</b> our goal is to try to retrieve the String "hello" from "hello world".
				<br/>
				first, let's take a look at the indexes of each character in "hello world" (<b className="note">btw:</b> the substring we want to retrieve is highlighted):
				<br/>
				<br/>
				<table>
				  <tr>
				    <td><b>'h'</b></td>
				    <td><b>'e'</b></td>
				    <td><b>'l'</b></td>
				    <td><b>'l'</b></td>
				    <td><b>'o'</b></td>
				    <td>' '</td>
				    <td>'w'</td>
				    <td>'o'</td>
				    <td>'r'</td>
				    <td>'l'</td>
				    <td>'d'</td>
				  </tr>
				  <tr>
				    <td><b>0</b></td>
				    <td><b>1</b></td>
				    <td><b>2</b></td>
				    <td><b>3</b></td>
				    <td><b>4</b></td>
				    <td>5</td>
				    <td>6</td>
				    <td>7</td>
				    <td>8</td>
				    <td>9</td>
				    <td>10</td>
				  </tr>
				</table>
				<br/>
				in order to get the substring, we need a <i>start_index</i> and an <i>end_index</i>. (<b className="note">hint:</b> what index does our substring start at? what index does our substring end at? remember that the <i>start_index</i> is <b>included</b> in the substring whereas the <i>end_index</i> is <b>excluded</b>.)
				<br/>
				our <i>start_index</i> is <b>0</b> because our substring starts at 'h', which is at index 0. since the <i>start_index</i> is <b>inclusive</b>, that means that the 'h' will be included in the substring, which is exactly what we want. so our <i>start_index</i> is 0.
				<br/>
				our <i>end_index</i> is <b>5</b> because our substring ends at 'o', which is at index 4. since the <i>end_index</i> is <b>exclusive</b>, that means that the 'o' will be excluded from the substring, which is not what we want. we want 'o' to be included, not excluded, so our <i>end_index</i> has to be one greater than the index of the last character of our substring, so that the character after 'o' is excluded while 'o' is included. so our <i>end_index</i> is 4 + 1, or 5.
				<br/>
				<b>ready to code?</b> let's go!
				<div className="code">
				String str = "hello world";
				<br/>
				String hello = str.substring(0, 5);
				</div>
				<br/>
				<b>example 2:</b> our goal is to try to retrieve the String "world" from "hello world". 
				<br/>
				first, let's take a look at the indexes of each character in "hello world" (<b className="note">btw:</b> the substring we want to retrieve is highlighted):
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>'h'</td>
				    <td>'e'</td>
				    <td>'l'</td>
				    <td>'l'</td>
				    <td>'o'</td>
				    <td>' '</td>
				    <td><b>'w'</b></td>
				    <td><b>'o'</b></td>
				    <td><b>'r'</b></td>
				    <td><b>'l'</b></td>
				    <td><b>'d'</b></td>
				  </tr>
				  <tr>
				    <td>0</td>
				    <td>1</td>
				    <td>2</td>
				    <td>3</td>
				    <td>4</td>
				    <td>5</td>
				    <td><b>6</b></td>
				    <td><b>7</b></td>
				    <td><b>8</b></td>
				    <td><b>9</b></td>
				    <td><b>10</b></td>
				  </tr>
				</table>
				<br/>
				in order to get the substring, we need just a <i>start_index</i>. (<b className="note">hint:</b> what index does our substring start at? remember that the <i>start_index</i> is <b>included</b> in the substring and that our substring includes the rest of the String since there is no <i>end_index</i>.)
				<br/>
				our <i>start_index</i> is <b>6</b> because our substring starts at 'w', which is at index 6. since the <i>start_index</i> is <b>inclusive</b>, that means that the 'w' will be included in the substring, which is exactly what we want. so our <i>start_index</i> is 6.
				<br/>
				<b>ready to code?</b> let's go!
				<div className="code">
				String str = "hello world";
				<br/>
				String world = str.substring(6);
				</div>
				<br/>
				that was a <b>huge info dump</b>: you learned about indexing, accessing a character by index, and extracting a substring. but... erm... there may still be another load of information to be dumped... <b>oof. good luck.</b>
				<h3>0 1 2 3 4 5 6 7 8 9 10</h3>
				we just learned how we can get a <b>character</b> or a <b>substring</b> from a String using <b>charAt()</b> and <b>substring()</b>, respectively. how about if we want to do the <b>reverse</b>? is there a way we can get the index of a character or a substring in a String? indeed.<br/>
				<b>indexOf()</b> will give you the <b>starting index</b> of the <b>first occurence</b> of a <b>specified character or substring</b>. let's head over to the blueprint to see the four ways we can construct <b>indexOf()</b> (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will get the index of either a character or a substring):
				<br/>
				<b>str.indexOf(<i>&lt;character&gt;</i>)</b><br/>
				<b>str.indexOf(<i>&lt;substring&gt;</i>)</b><br/>
				<b>str.indexOf(<i>&lt;character&gt;</i>, <i>&lt;from_index&gt;</i>)</b><br/>
				<b>str.indexOf(<i>&lt;substring&gt;</i>, <i>&lt;from_index&gt;</i>)</b><br/><br/>
				as we can see, there are three different components to <b>indexOf()</b>. let's go over each one:
				<ul>
					<li><b><i>character</i></b>: the single char you are looking for in <i>str</i></li>
					<li><b><i>substring</i></b>: the substring you are looking for in <i>str</i> </li>
					<li><b><i>from_index</i></b>: the index in <i>str</i> from which you should start looking</li>
				</ul>
				for the first two blueprints, where no <i>from_index</i> is provided, you search the <b>whole String</b> for the character or substring you provided.<br/> 
				for the second two blueprints, where <i>from_index</i> is provided, you search the String <b>starting at <i>from_index</i> till the end of the String</b>.<br/><br/>
				you may be wondering, what if the character or substring we specify is not actually in <i>str</i>? say we want to get the index of the first occurence of "cat" in the String "doggo". there is no "cat" in "doggo", so what will happen? <b>if the character or substring specified is not found in <i>str</i>, then indexOf() will return -1.</b>
				<br/><br/>now let's see examples of each of these blueprints being used in code! for each example, try to do the following:
				<ul>
					<li>type the code necessary to solve the problem, storing the value of whichever <b>indexOf()</b> blueprint you use in an <b>int</b></li>
					<li>predict the value of the <b>int</b> variable you created before looking at the answer we have provided</li>
				</ul>
				what is the index of the first occurence of 'l' in "hello"?
				<div className="code">
				String hello = "hello";
				<br/>
				int i = hello.indexOf('l'); <div className="comment">//i = 2</div>
				</div>
				<br/>
				what is the index of the first occurence of "cat" in "doggo"?
				<div className="code">
				String doggo = "doggo";
				<br/>
				int i = doggo.indexOf("cat"); <div className="comment">//i = -1</div>
				</div>
				<br/>
				what is the index of the first occurence of 'j' in "just for java" from index 1? 
				<div className="code">
				String justForJava = "just for java";
				<br/>
				int i = justForJava.indexOf('j'); <div className="comment">//i = 9</div>
				</div>
				<br/>
				what is the index of the first occurence of "oompa" in "oompa loompa" from index 6? 
				<div className="code">
				String oompaLoompa = "oompa loompa";
				<br/>
				int i = oompaLoompa.indexOf("oompa"); <div className="comment">//i = 7</div>
				</div>
				<br/>one <b>last</b> thing... if you want to get the <b>last</b> occurence rather than the first occurence of a character or substring in a String, all you need to do is replace indexOf() with <b>lastIndexOf()</b>. you can use any of the four blueprints that we had for indexOf() with lastIndexOf(). here's a quick example:
				<br/><br/>
				what is the index of the last occurence of 'e' in "awesome"?
				<div className="code">
				String awesome = "awesome";
				<br/>
				int i = awesome.lastIndexOf('e'); <div className="comment">//i = 6</div>
				</div>
				<h3>11</h3>
				all Strings have <b>length</b>, which is an integer, and their length is equal to the <b>number of characters</b> in the String. for example, "hello world" has a length of 11 (<b className="note">btw:</b> spaces count as characters). an empty String – <b>""</b> – has a length of 0. but rather than counting how many characters are in a String, we can just use the following syntax to get the length of a String:
				<div className="code">
				String funFact = "did you know that squash is a sport?";
				<br/>
				<div className="comment">//get the length of the fun fact using length()</div>
				<br/>
				int funFactLength = funFact.length(); <div className="comment">//funFactLength is initialized to 36</div>
				</div>
				not too bad, right? now you know how to get the length of a String using <b>length()</b>! but you might be wondering, why would you even want to get the length of a String in the first place? 
				<br/>say you want to get the <b>last character</b> in a String. how can you make this program work for <b>any String, no matter its length</b>? before we can actually get the last character, we need its <b>index</b>. what is the last index in a String? (<b className="note">hint:</b> remember that indexing starts at <b>0</b>, so the first character is at index 0, second at index 1, third at index 2, and so on.) if you said that the last index of String <i>str</i> is <b>str.length() - 1</b>, that's absolutely correct! now we can get the last character of String <i>str</i> using the following code (<b className="note">btw:</b> if you don't understand the code below, you may want to review <b>charAt()</b>):
				<div className="code">
				String str = "Strings rule";
				<br/>
				<div className="comment">//to get the last character in str, get the character at the index length of str - 1, since indexing starts at 0</div>
				<br/>
				char last = str.charAt(str.length() - 1); <div className="comment">//last = 'e'</div>
				</div>
				<h3>HELLO world</h3>
				next, let's learn how to make "heLlO woRlD" into "hello world" or "HELLO WORLD". in other words, let's learn how to make a String all <b>lowercase</b> or all <b>UPPERCASE</b>.
				<br/>
				You can use <b>toLowerCase()</b> and <b>toUpperCase()</b> to make a String all lowercase or all UPPERCASE, respectively:
				<div className="code">
				String myStr = "we LOVE Strings!";
				<br/>
				String myLowerCaseStr = myStr.toLowerCase(); <div className="comment">//make myStr all lowercase</div>
				<br/>
				String myUpperCaseStr = myStr.toUpperCase(); <div className="comment">//make myStr all uppercase</div>
				<br/>
				<div className="comment">//print out the lowercase and uppercase versions of myStr</div>
				<br/>
				System.out.println(myLowerCaseStr);
				<br/>
				System.out.println(myUpperCaseStr);
				</div>
				the code above prints out the following in the console (<b className="note">psst. need a reminder</b> on why <b>System.out.println()</b> outputs something to the console? check out the <Link className="contentLink" to="/printing"><b className="pageName">printing page</b></Link>!):
				<div className="code">
				we love strings!
				<br/>
				WE LOVE STRINGS!
				</div>
				awesome! (<b className="note">btw:</b> numbers and symbols, like the exclamation mark above, do not get affected by <b>toLowerCase()</b> and <b>toUpperCase()</b>.)
				<h3>""</h3>
				you can also check if a String is <b>empty</b>, meaning that it doesn't contain any text (<b className="note">btw:</b> to make an empty string, set a String variable equal to <b>""</b>). another way you can think about an empty String is that it is a String with a <b>length of 0</b>. let's take a look at the following sample code to see how we can utilize <b>isEmpty()</b>:
				<div className="code">
				String feelinEmpty = ""; <div className="comment">//create an empty String</div>
				<br/>
				System.out.println(feelinEmpty.isEmpty());
				<br/>
				String wowzers = "WOW! :o"; <div className="comment">//create a String that isn't empty</div>
				<br/>
				System.out.println(wowzers.isEmpty());
				</div>
				now let's see what prints in the console:
				<div className="code">
				true
				<br/>
				false
				</div>
				if a String <i>str</i> is empty, then <b><i>str</i>.isEmpty()</b> will be <b>true</b>. if a String <i>str</i> is not empty, then <b><i>str</i>.isEmpty()</b> will be <b>false</b>.
				<h3>hello + world</h3>
				we saw how the <b>+</b> operator was used between integers and doubles in addition. (<b className="note">psst. need a reminder</b> on how you can do addition, as well as other arithmetic operations, in java? check out the <Link className="contentLink" to="/arithmetic"><b className="pageName">arithmetic page</b></Link>!) but how about the <b>+</b> being used between <b>Strings</b>? when we have a <b>+</b> between two Strings, we <b>concatenate</b>, which is a fancy word for add, the two Strings together. what does this look like? if we have "hello" + "world", the resulting String would be "helloworld". see how "world" was <b>concatenated</b> to the end of "hello"?
				<br/><br/>
				woah, hold your horses! we aren't done yet! String concatenation can be more powerful that just adding Strings together. you can add <b>integers</b>, <b>doubles</b>, and <b>characters</b> to Strings as well! exciting, right?
				<br/><br/>
				<b>the pricey jeans example:</b> "my favorite jeans cost $" + 99.99 becomes "my favorite jeans cost $99.99" (<b className="note">btw:</b> those jeans rly do be expensive $$$$ cha ching). getting the hang of this, eh? let's look at some more complicated examples.
				<br/><br/>
				<b>the prankster example:</b> what do you think "hey" + 1 + 2 would be equal to? (<b className="note">hint:</b> it isn't "hey3".) if you guessed "hey12", you're correct! yay! it isn't equal to "hey3" because first the 1 gets concatenated to "hey", so now we have "hey1" + 2, which becomes "hey12". this is fun! let's do some more.
				<br/><br/>
				<b>the trickster example:</b> what if we have "hey" + (1 + 2)? what is that equal to? (<b className="note">hint:</b> notice that 1 + 2 is in parentheses now.) if you guessed "hey3", you're correct! yay! because 1 + 2 is in parentheses, they get summed together first before getting concatenated to "hey", so "hey" + (1 + 2) becomes "hey" + 3 which becomes "hey3".
				<h3>hEllO WoRLd</h3>
				to end with, here is some code combining all the String-related topics we learned about. <b>can you guess what gets printed to the console?</b> (<b className="note">hint:</b> get stuck? review each of the String-related topics above to help you.)
				<div className="code">
				String folks = "that's it folks";
				<br/>
				String myString = folks.substring(0, 6);
				<br/>
				String learningLesson = "Strings are special!";
				<br/>
				String bestLanguage = "java";
				<br/>
				char mysteryChar = bestLanguage.charAt(learningLesson.indexOf('i'));
				<br/>
				String wrap = "wRaP";
				<br/>
				char anotherMysteryChar = learningLesson.charAt(learningLesson.length() - 1);
				<br/>
				System.out.println(myString + " " + mysteryChar + " " + wrap.toLowerCase() + anotherMysteryChar);
				</div>
				let's see if your guess on what prints to the console is correct:
				<div className="code">
				that's a wrap!
				</div>
				<h3>hello world... more like hello recap</h3>
				<b>YASSS!</b> you made it to recap!
				<br/><br/>
				int, double, char, and boolean are <b>primitive types</b>, whereas String is an <b>object</b>, which has more functionality.
				<br/>
				a String is made up of <b>characters</b>, and each character in a String is given an <b>index</b>, which describes <b>its position in the String</b>. indexing starts at <b>0</b>.
				<br/>
				here is table full of all the String-related topics you learned about:
				<br/><br/>
				<table>
				 <tr>
				 </tr>
				 	<tr>
					  	<td>str.charAt(<i>&lt;index&gt;</i>)</td>
					  	<td>get the character in <i>&lt;str</i> at <i>&lt;index&gt;</i></td>
					</tr>
					<tr>
						<td>str.substring(<i>&lt;start_index&gt;, &lt;end_index&gt;</i>)</td>	
						<td>get the substring of <i>&lt;str&gt;</i> from <i>&lt;start_index&gt;</i>, inclusive, to <i>&lt;end_index&gt;</i>, exclusive</td>
					</tr>
					<tr>
						<td>str.substring(<i>&lt;start_index&gt;</i>)</td>
						<td>get the substring of the first occurence of <i>&lt;str&gt;</i> from <i>&lt;start_index&gt;</i>, inclusive, till the end of <i>&lt;str&gt;</i></td>
					</tr>
					<tr>
						<td>str.indexOf(<i>&lt;char&gt;</i>)</td>
						<td>get the index of the first occurence of <i>&lt;char&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;char&gt;</i> isn't in <i>&lt;str&gt;</i></td>
					</tr>
					<tr>
						<td>str.indexOf(<i>&lt;substring&gt;</i>)</td>
						<td>get the starting index of the first occurence of <i>&lt;substring&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;substring&gt;</i> isn't in <i>&lt;str&gt;</i></td>
					</tr>
					<tr>
						<td>str.indexOf(<i>&lt;char&gt;, &lt;from_index&gt;</i>)</td>
						<td>get the index of <i>&lt;char</i> in <i>&lt;str</i>, or -1 if <i>&lt;char</i> isn't in <i>&lt;str&gt;</i>, and start the search at <i>&lt;from_index&gt;</i></td>
					</tr>
					<tr>
						<td>str.indexOf(<i>&lt;substring&gt;, &lt;from_index&gt;</i>)</td>
						<td>get the starting index of the first occurence of <i>&lt;substring&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;substring&gt;</i> isn't in <i>&lt;str&gt;</i>, and start the search at <i>&lt;from_index&gt;</i></td>
					</tr>
					<tr>
						<td>str.lastIndexOf(<i>&lt;char&gt;</i>)</td>
						<td>get the index of the last occurence of <i>&lt;char&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;char&gt;</i> isn't in <i>&lt;str&gt;</i></td>
					</tr>
					<tr>
						<td>str.lastIndexOf(<i>&lt;substring&gt;</i>)</td>
						<td>get the starting index of <i>&lt;substring&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;substring&gt;</i> isn't in <i>&lt;str&gt;</i></td>
					</tr>
					<tr>
						<td>str.lastIndexOf(<i>&lt;char&gt;, &lt;from_index&gt;</i>)</td>
						<td>get the index of the last occurence of <i>&lt;char&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;char&gt;</i> isn't in <i>&lt;str&gt;</i>, and start the search at <i>&lt;from_index&gt;</i></td>
					</tr>
					<tr>
						<td>str.lastIndexOf(<i>&lt;substring&gt;, &lt;from_index&gt;</i>)</td>
						<td>get the starting index of the last occurence of <i>&lt;substring&gt;</i> in <i>&lt;str&gt;</i>, or -1 if <i>&lt;substring&gt;</i> isn't in <i>&lt;str&gt;</i>, and start the search at <i>&lt;from_index&gt;</i></td>
					</tr>
					<tr>
						<td>str.length()</td>
						<td>get an integer representing how many characters are in <i>&lt;str&gt;</i></td>
					</tr>
					<tr>
						<td>str.toUpperCase()</td>
						<td>get <i>&lt;str&gt;</i> with all of its characters in uppercase</td>
					</tr>
					<tr>
						<td>str.toLowerCase()</td>
						<td>get <i>&lt;str&gt;</i> with all of its characters in lowercase</td>
					</tr>
					<tr>
						<td>str.isEmpty()</td>
						<td>get true if <i>&lt;str&gt;</i> is empty (its length is 0), and false otherwise</td>
				  	</tr>
				</table>
				<br/>
				finally, here is the blueprint for <b>String concatenation</b>:
				<br/>
				<b>"<i>&lt;String&gt;</i>" + <i>&lt;variable&gt;</i> = "<i>&lt;String&gt;&lt;variable&gt;</i>"</b><br/>
				<b><i>&lt;variable&gt;</i> + "<i>&lt;String&gt;</i>" = "<i>&lt;variable&gt;&lt;String&gt;</i>"</b><br/>
				<b>"<i>&lt;String&gt;</i>" + <i>&lt;variable&gt;</i> + <i>&lt;variable&gt;</i> = "<i>&lt;String&gt;&lt;variable&gt;&lt;variable&gt;</i>"</b><br/>
				remember that operations occur from <b>left to right</b>; also, if there are <b>parentheses</b>, then whatever is in the parentheses happens first.
				<br/><br/>
				i know that was a lot of String things you just went through, but in fact there are lots of more cool things you can do with Strings that we didn't have room to mention here. <b>if you want to learn even more about Strings, simply search online!</b>
				<br/>
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">my jam:</b><br/><br/>
					what do you jam to on the radio? your <b>goal</b> is to use <b>String concatenation</b> to print out <b>your favorite song, its artist, and what album it's in</b> into the console. this will require two steps:<br/>
					<ol>
						<li>create three variables to store your favorite song, its artist, and what album it's in</li>
						<li>in a print statement, use String concatenation to print out the song name, artist, and album</li>
						<ul>
							<li>for example, my favorite song is Brother, its artist is Matt Corby, and the album it's in is called Into The Flame</li>
							<li>my program should print out "my favorite song is Brother by Matt Corby in his album Into The Flame"</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 2, remember that a + between two String variables will add the second variable to the end of the first"
						]}
						id="Strings-my-jam"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Strings-my-jam?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Strings-my-jam-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">fun and fresh formatting:</b><br/><br/>
					your <b>goal</b> is to use <b>Strings</b> to <b>format your name into the proper capitalization</b>, meaning that the first letter is capitalized while the rest is lowercased. this will require five steps:<br/>
					<ol>
						<li>create a variable to store your name (in any random casing that you want) and print it out</li>
						<li>create another variable to store your name after it's been formatted</li>
						<ul>
							<li>for now you can simply initialize it to an empty String, since we will change this variable later</li>
						</ul>
						<li>uppercase the first letter of your name and concatenate it to the formatted name variable</li>
						<ul>
							<li>you can use substring to get the first character and then uppercase the substring</li>
						</ul>
						<li>lowercase the rest of your name and concatenate it to the formatted name variable</li>
						<ul>
							<li>you can use substring to get the rest of your name and then lowercase the substring</li>
						</ul>
						<li>print out your name with its fun and fresh formatting</li>
					</ol>
					<Hint
						hints={[
							"for step 2, an empty String is denoted using \"\"",
							"for step 3, which index does the first letter start at, inclusively? which index does the first letter end at, exclusively? if you said 0 and 1 (respectively) you may be correct hehe",
							"for step 4, which index does the rest of your name start at, inclusively? which index does the rest of your name end at, exclusively? if you said 1 and the length of your name (respectively) you may be correct hehe",
							"for steps 3 and 4, you can use += to concatenate the properly cased substring to the formatted name variable"
						]}
						id="Strings-fun-and-fresh-formatting"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Strings-fun-and-fresh-formatting?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/Strings-fun-and-fresh-formatting-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/escape-sequences"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Strings;