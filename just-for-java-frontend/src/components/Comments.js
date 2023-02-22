import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class Comments extends React.Component{
	constructor(props){
		super(props)
		this.state={
			progress: "todo"
		}
	}

	componentDidMount() {
		window.scrollTo(0, 0);
  	}

	updateProgressState(progress){
		this.setState({
			progress: progress
		});
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
				<b>comments</b> are used to <b>write notes</b> next to your code <b>that aren't executed when you run your code</b>. 
				if, on the <Link className="contentLink" to="/variables"><b className="pageName">variables page</b></Link>, you saw notes denoted with two forward slashes, those were comments!
				<br/><br/>
				there are two types of comments you can make:
				<ul>
					<li>single-line comments</li>
					<li>multi-line comments</li>
				</ul>
				<h3>wait, so how do you make a comment?</h3>
				here's the blueprint on how to make a single-line comment:<br/>
				<b>//<i>&lt;your note here&gt;</i></b><br/><br/>
				and here's the blueprint on how to make a multi-line comment:<br/>
				<b>/*<br/>
				<p><i>&lt;your note here&gt;</i></p><br/>
				*/</b><br/>
				<h3>ok, but what's the point of that?</h3>
				commenting your code is a <b>really good habit</b> that you should start right now. like seriously. go. i'm waiting... still here. waiting. or shall i say, //waiting. <br/>
				in all seriousness, it's really helpful for you and others who might be reading your code to <b>understand what certain lines of code do</b>, improving your code's <b>readability</b>.
				<h3>here's an example</h3>
				<div className="code">
					boolean understandComments = false; <div className="comment">//starts out not understanding comments</div>
					<div className="comment">
						/*<br/>
						<p>because you've read the information above, you now understand comments and how important they are. so, we can set understandComments to true!</p><br/>
						*/
					</div><br/>
					understandComments = true;
				</div>
				in the code above, you can see both single-line and multi-line comments being used.
				<h3>//is it already time for recap?</h3>
				<b>yayyyy!</b> you made it to recap!<br/><br/>
				so, just to sum up, the two types of comments are <b>single-line comments</b>, denoted by <b>//</b>, and <b>multi-line comments</b>, denoted by <b>/* ... */</b>. <br/><br/>
				comments are <b>really important</b> because they help increase your code's <b>readability</b>. now, going forward, be sure to comment on your code! :)
				<h3>pit stop</h3>
				<div className="problem">
					<b className="note">birthday partayy:</b><br/><br/>
					your <b>goal</b> is to use <b>comments</b> to create variables that can store various things for planning your party, with <b>comments in your code to increase readability</b>. this will require five steps:<br/>
					<ol>
						<li>first, you are going to want to make a comment to explain what the program is doing; this comment will be two sentences just describing what the intent is of your program</li>
						<li>you need to next make a variable that stores what present you want for your birthday, and don't forget to comment!</li>
						<li>now, make a variable that stores the number of people you want to invite to your party with comments ofc</li>
						<li>next, make a variable to store how old you are turning on your birthday, with a comment to show what the variable is</li>
						<li>oh no! somebody you invited got sick and can't make it! change your variable that stored the number of people to reflect what happened, and don't forget to comment why you are doing so</li>
					</ol>
					<Hint
						hints={[
							"for step 1, because this comment is multiple sentences, it's best to use a multi-line comment",
							"for steps 2-4, because you are making the comments about the variables, which would be short, it might be best to use the comment that is shorter (aka the single-line comment)",
							"for step 5, since you are explaining what happened to cause you to change the variable, this comment might be a little longer... emphasis on longer"
						]}
						id="comments-birthday-partayy"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/comments-birthday-partayy?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. in this case, because part of the code is comments, we've added comments that say <i>code starts here</i> and <i>code ends here</i> as dividers for the code and the explanation.
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/comments-brithday-partayy-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="problem">
					<b className="note">shopping spree:</b><br/><br/>
					let's go to the mall! your <b>goal</b> is to use <b>comments</b> to create variables that store the number of items and the total price of your shopping spree at the mall, with <b>comments in your code to increase readability</b>. this will require two steps:<br/>
					<ol>
						<li>create a variable to store the number of items you bought during your shopping spree</li>
						<ul>
							<li>don't forget to use a comment to explain what this variable is storing</li>
						</ul>
						<li>create a variable to store the total price of all the items you bought</li>
						<ul>
							<li>don't forget to use a comment to explain what this variable is storing</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 1, what variable type can we use to store the number of items you bought? an int!",
							"for step 2, what variable type can we use to store the number of items you bought? a double!",
							"for steps 1-2, both type of comments will work in this scenario, so try using the one that you need more practice with"
						]}
						id="comments-shopping-spree"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/comments-shopping-spree?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. in this case, because part of the code is comments, we've added comments that say <i>code starts here</i> and <i>code ends here</i> as dividers for the code and the explanation.
					hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/comments-shopping-spree-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/printing"><b className="pageName">keep coding!</b></Link>
			</div>
		)
	}
}

export default Comments;