import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class EscapeSequences extends React.Component{
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
	            believe it or not, we're gonna spend a whole page talking about a <b>backslash</b>: <b>\</b>. if you're like me and don't know the difference between a forward slash and a backslash, here ya go:
	            <ul>
	            	<li><b>/</b> = forward slash</li>
	            	<li><b>\</b> = backslash</li>
	            </ul>
	            a \ is basically a flag that tells the compiler, <b>"yo! hey! something real special's bout to come up next."</b>
	            <h3>what comes next?! you left me in suspense bro!</h3>
	            a <b>\ followed by another character</b> is called an <b>escape sequence</b>, or an <b>escape character</b>. here is the blueprint to write an esacpe sequence, or escape character:
	            <br/>
	            <b>
	            \<i>&lt;char&gt;</i>
	            </b>
	            <br/><br/>
	            depending on what <i>char</i> follows the \, escape sequences have <b>different meanings</b> to the compiler. here is a list of <b>commonly used escape sequences</b>:
	            <br/><br/>
	            <table>
	            	<tr>
	            		<td><b>\n</b></td>
	            		<td>inserts a new line</td>
	            	</tr>
	            	<tr>
	            		<td><b>\t</b></td>
	            		<td>inserts a tab</td>
	            	</tr>
	            	<tr>
	            		<td><b>\'</b></td>
	            		<td>inserts a single quote</td>
	            	</tr>
	            	<tr>
	            		<td><b>\"</b></td>
	            		<td>inserts a double quote</td>
	            	</tr>
	            	<tr>
	            		<td><b>\\</b></td>
	            		<td>inserts a backslash</td>
	            	</tr>
	            </table>
	            <br/>
	            it's important to note that <b>escape sequences are characters themselves</b> – that's why another name for an escape sequence is an <b>escape character</b>. check out the code below, where we store each escape character in a char variable:
	            <div className="code">
	            char newLine = '\n';<br/>
	            char tab = '\t';<br/>
	            char singleQuote = '\'';<br/>
	            char doubleQuote = '\"';<br/>
	            char backslash = '\\';
	            </div>
	            <br/>
	            in java, there are other escape sequences; however, we won't discuss them here because their function differs between different compilers. (<b className="note">btw:</b> also, you'll likely never need to use those escape sequences anyway hahaha so you aren't missing out on much.)
	            <br/><br/>
	            now, are you ready for some <b>fun examples with escape sequences</b>? let's get right to it...
				<h3>e   m   p   h   a   s   i   s</h3>
				let's print out <b>"emphasis"</b>, except after each character there is a <b>tab</b>. (<b className="note">psst. need a reminder</b> on how to print a String? check out the <Link className="contentLink" to="/printing"><b className="pageName">printing page</b></Link>!) which escape sequence can we use? if you guessed <b>\t</b>, you're absolutely right! check out the code below:
				<div className="code">
				System.out.println("e\tm\tp\th\ta\ts\ti\ts");
				</div>
				now, this may look kinda <b>suss</b>. will something scary like <b>"etmtpthtatstits"</b> print out in the console? the answer – luckily – is <b>no</b>.<br/><br/>
				to help you feel more comfortable working with escape sequences, think of <b>\t</b> as a <b>single character</b> that means <b>tab</b>. with this thought process in mind, now take a look at what actually prints out in the console:
				<div className="code">
				e   m   p   h   a   s   i   s
				</div><br/>
				ready for another example with a different escape sequence? let's do this.
				<h3>"real programmers count from 0"</h3>
				let's create a String variable called <i>quoteForCoders</i> to store one of our favorite quotes: <b>"real programmers count from 0"</b>. (<b className="note">psst. need a reminder</b> on why real programmers count from 0? check out the <Link className="contentLink" to="/strings"><b className="pageName">strings page</b></Link>!) however, not only do we want to store the quote, but we also want to store the <b>quotation marks</b> at the start and end of the quote. which escape sequence can we use? if you guessed <b>\"</b>, you're absolutely right! check out the code below:
				<div className="code">
				String quoteForCoders = "\"real programmers count from 0\"";
				</div>
				now, this also may look kinda <b>suss</b>. why in the world are there <b>four quotation marks</b> bro?!?!? dw bro, it's okay. let's walk through all the quotation marks. the <b>very first and very last quotation marks</b> signify that the <b>value is a String</b>, so you can ignore those. we are now left with only two quotation marks, each one preceded by a \: <b>\"real programmers count from 0\"</b>. remember, <b>\"</b> simply translates to <b>"</b>. therefore, the String <i>quotesForCoders</i> holds the value <b>"real programmers count from 0"</b>, where the quotes are <b>included</b>.
				<br/><br/>
				two down, one more to go...
				<h3>bro we took dem dubs today</h3>
				for a funky challenge, let's use escape sequences to print out these <b>two sick w's</b> the following to the console in <b>a single line of code</b>:
				<div className="code">
				\/\/<br/>
				\/\/
				</div>
				bro, u ready to get that dub?
				<br/><br/>
				if ur stuck bro, no problemo (<b className="note">btw:</b> heyy that rhymed). which escape sequence can we use? if you guessed <b>\\</b>, you're absolutely right! if you guessed <b>\n</b>, you're also absolutely right! that's because we need to use <b>both of them</b>! omg! we need to use <b>\\</b> to insert backslashes and we need to use <b>\n</b> to get a new line in between the two w's. check out the code below:
				<div className="code">
				System.out.print("\\/\\/\n\\/\\/");
				</div>
				oof that's a lot of slashes. let's break it down: whenever you see <b>\\</b>, think <b>\</b>. whenever you see <b>\n</b>, think <b>enter</b>. and <b>/</b> is just <b>/</b> – nothing special here. 
				<br/><br/>and that's how we get two dubs – <b>one for you bro and one for me</b>. (<b className="note">btw:</b> cmon u gotta admit that was kinda wholesome.)
				<h3>\recap</h3>
				<b>dang bro!</b> you made it to recap!<br/><br/>
				an <b>escape sequence</b>, or <b>escape character</b>, is a character preceded by a backslash. here is the blueprint for an escape sequence:
				<br/><b>
				\<i>&lt;char&gt;</i>
				</b><br/><br/>
				escape sequences can be treated as single characters – hence why they can be called escape characters – and have <b>special meanings</b> to the compiler depending on what <i>char</i> is. to finish off this recap, here is the list of <b>common escape sequences</b> you can use in your Strings:<br/><br/>
				<table>
	            	<tr>
	            		<td><b>\n</b></td>
	            		<td>inserts a new line</td>
	            	</tr>
	            	<tr>
	            		<td><b>\t</b></td>
	            		<td>inserts a tab</td>
	            	</tr>
	            	<tr>
	            		<td><b>\'</b></td>
	            		<td>inserts a single quote</td>
	            	</tr>
	            	<tr>
	            		<td><b>\"</b></td>
	            		<td>inserts a double quote</td>
	            	</tr>
	            	<tr>
	            		<td><b>\\</b></td>
	            		<td>inserts a backslash</td>
	            	</tr>
	            </table>
	            <h3>pit stop</h3>
	            <div className="problem">
					<b className="note">quote of the day:</b><br/><br/>
					what's your favorite quote? your <b>goal</b> is to use <b>escape sequences</b> to print out <b>the quote of the day</b> and its <b>speaker</b>. this will require three steps:<br/>
					<ol>
						<li>create a variable to hold the quote of the day</li>
						<ul>
							<li>use an escape sequence to add quotation marks to the start and end of the quote</li>
						</ul>
						<li>create another variable to hold the person who said that quote</li>
						<li>print out the quote of the day and its speaker using String concatenation in the form "quote" -speaker</li>
						<ul>
							<li>for example, if our quote of the day was "real programmers count from 0" and the person who said that was "anonymous", then your program should print out ""real programmers count from 0" -anonymous"</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 1, the escape sequence you will need to use to insert double quotation marks is \\\"",
							"for step 1, you will need four quotation marks: the outer two to signify that your value is a String, and your inner two preceded by a \\ to signify a \" in your String",
							"for step 3, you can use the + operator to concatenate, or add, Strings together",
							"for step 3, you will need to add the quote variable you made in step 1 to the speaker variable you made in step 2 with a space and a dash \" -\" in the middle"
						]}
						id="escape-sequences-quote-of-the-day"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/escape-sequences-quote-of-the-day?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/escape-sequences-quote-of-the-day-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">slash frenzy:</b><br/><br/>
					hope you know the difference between forward slashes and backslashes by now! your <b>goal</b> is to use <b>escape sequences</b> to <b>print out 6 forward slashes and 6 backslashes</b>. this will require two steps:<br/>
					<ol>
						<li>use next-line printing to print out 6 forward slashes</li>
						<ul>
							<li>in case you forgot, a forward slash is /</li>
						</ul>
						<li>use next-line printing to print out 6 backslashes</li>
						<ul>
							<li>in case you forgot, a backslash is \</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 1, you can print out a forward slash normally – no escape character required; simply type 6 forward slashes in your print statement",
							"for step 2, in order to print out a back slash, you need to use an escapse sequence... do you remember which one?",
							"for step 2, the escape sequence you need to use is \\\\, where two backslashes in your print statement = 1 backslash in the console",
							"for step 2, all in all, you will need not 6, but 6*2 = 12 backslashes in your print statement, which will display 6 backslashes in the console"
						]}
						id="escape-sequences-slash-frenzy"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/escape-sequences-slash-frenzy?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/escape-sequences-slash-frenzy-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
	            ...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/user-input"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default EscapeSequences;