import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


class GettingStarted extends React.Component{
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
				welcome to <b className="note">just for java</b>! if you want to learn how to code but have no idea where to start, <b>you're in the right place!</b> and if you're cramming for your ap computer science exam tmrw, <b>we gotchu</b>.
				<h3>r u ready to learn java?</h3>
				the first thing you need to do is create your very own <b>just for java account</b>! (<b className="note">btw:</b> it's super easy. only takes 13 seconds.) here are the steps:
				<ol>
					<li>see that button in the top right corner that says sign in with google? click it!</li>
					<li>bet you can't guess what this step is... sign in with google!</li>
				</ol>
				with your just for java account, you can now <b>track and save your progress</b>! pretty cool, eh? (<b className="note">btw:</b> it took us super long to write the code to save your progress, so please use it a lot hehe.) want to start tracking your progress <b>right now</b>? change the <b>progress dropdown menu</b> above from todo to in progress. now, go to the <Link className="contentLink" to="/home"><b className="pageName">home page</b></Link> and take a look at your progress table! you should see in progress next to getting started. oooooh fancy!! :) <b>progress dropdown menus</b> are located at both the <b>top</b> and <b>bottom</b> of every concept page.
				<h3>bro when can i start coding?</h3>
				<b>soon bro.</b> briefly, we just wanted to say <b>why we created just for java</b>. coding has the stigma of being complicated, hard to learn, and only useful for computer scientists. however, <b>we want to break that stigma.</b> this doesn't mean that coding will be easy, but we wrote the content in just for java using <b>relatable language</b> so it is easy to understand and <b>fun</b> for you guys! (<b className="note">btw:</b> you may even see some jokes and text slang in there! *wink wink* we even have fun themes for some pages if we were feeling particularly fancy!) we provide <b>blueprints</b> to illustrate coding syntax and <b>examples</b> that we walk through so that you can master the concept. finally, coding is not only useful for computer scientists, but for <b>everyone</b>. oh, before we forget:
				<div className="code">
				all the code we write during our examples will go in a box like this one! ;)
				</div>
				<h3>omg! it do be time for our first terrible coding joke!</h3>
				coding is:
				<ul>
					<li>10% coding</li>
					<li>35% debugging</li>
					<li>15% copy-and-pasted solutions</li>
					<li>40% staring at the screen</li>
				</ul>
				heheh. ok sry for killing one of ur brain cells...
				<h3>recap</h3>
				<b>yo guess what?!</b> you made it to recap! in <b>recap</b>, we give you a <b>sparknotes version</b> of what you learned – just a <b>lil summary</b> to help reinforce the coding concept. 
				if you're ever still bamboozled about the concept – which is completely okay – don't hestiate to <b>email us</b>! (<b className="note">psst. need a reminder</b> on what our email address is? check out the <Link className="contentLink" to="/contact-us"><b className="pageName">contact us page</b></Link>!)
				<h3>pit stop</h3>
				in <b>pit stops</b>, we provide the <b>problems</b>, and you get a chance to <b>practice</b> your coding skills. <b>no stress</b> if you have no idea what to do in these problems, because we always have <b>hints</b> that steer you in the right direction. in addition, we provide <b>our solution</b>, which you can reference if you ever need extra help or if you want to check your code with ours. now let's do our first pit stop together!<br/><br/>
				<div className="problem">
					<b className="note">your first repl:</b><br/><br/>
					so we've talked about coding in java, but where exactly do you type your code? your <b>goal</b> is to <b>create your first repl</b> using <a className="externalLink" href="https://repl.it/" target="_blank"><b className="pageName">repl.it</b></a>, a website where you can type and run your code (<b className="note">btw:</b> the fancy name for this is a browser based IDE)! a <b>repl</b> is simply a <b>coding project</b>, so by the end of this pit stop problem, you would've created your first coding project!
					this will require ten steps: <br/>
					<ol>
						<li>navigate to the website repl.it</li>
						<li>create a repl.it account</li>
						<ul>
							<li>click the sign up button; you can create an account with google</li>
							<li>if you already happen to have a repl.it account, click the log in button</li>
						</ul>
						<li>navigate to the "my repls" tab, which is where you can see all of your repls</li>
						<ul>
							<li>once you create repls – which we will do in the next step – you can star your favorite ones</li>
							<li>you can organize your repls into folders if you're obsessed with organization like we are ;)</li>
						</ul>
						<li>click the + button to create a new repl, which is a new coding project</li>
						<ul>
							<li>you will be prompted to select the language that you want to code in and to name your project</li>
							<li>feel free to name your project whatever you want :)</li>
							<li>after this step you should be inside your new repl</li>
							<li>ooooh look! there's a hint button below! try clicking it hehe</li>
						</ul>
						<li>guess what? you will never have to create a repl when you are on just for java because we're so nice that we've embedded all of the repls where you will type code for pit stops on our website</li>
						<ul>
							<li>confused by what we mean? take a look at the embedded repl below</li>
							<li>embedded repls may take a bit to fully load</li>
						</ul>
						<li>the first thing we want is for you to get situated with the repl coding environment; there are three parts to a repl: the editor, console, and sidebar</li>
						<ul>
							<li>the editor is where you type your code; for now, you will type all of your code inside what we call the main method: public static void main(String[] args); your code will be in between the curly braces of the main method, where the code System.out.println("Hello world!"); is written in the repl below; all you need to know about the main method for now is that it's the start of your program</li>
							<li>the console is where any input and output is displayed – for example, a print statement like the one written in the repl below, or an error message when your code doesn't work or has a bug</li>
							<li>the sidebar is something you don't really need to worry about right now; in the future, you may be adding more files to your project, which is done in the sidebar, but you really won't need to use it for a while</li>
						</ul>
						<li>just some other tidbits about repl</li>
						<ul>
							<li>note that there are line numbers next to each line of code that you write in the editor; line numbers help you locate specific pieces of code</li>
							<li>if you want to rename your repl, click the name at the top left and type your new name in the given text box; you can also add a description for your repl</li>
							<li>if you want to delete your repl, click the name at the top left and click the delete repl button – make sure not to accidentally click this :o</li>
							<li>if you want to copy your repl, click the name at the top left and click the fork button, which will duplicate your project</li>
							<li>if you want to share your repl with your family and friends, click the share button on the top right and copy the repl link</li>
						</ul>
						<li>when you are ready to run the code that you wrote in the editor, click the run button</li>
						<ul>
							<li>if you click run on the repl below, you should see Hello world! appear in the console – neat, right?</li>
							<li>totally lost as to why that worked? that's completely okay! we'll cover it soon in the following concept pages</li>
						</ul>
						<li>now, we said earlier that you will never need to create a repl since we embed all the repls that you will code in on just for java, but what does that really mean?</li>
						<ul>
							<li>in the embedded repl below, instead of Hello world! try typing your name inside the quotes - emphasis on inside the quotes</li>
							<li>dw you will find out why you need to type your name inside the quotes soon, but after you do so, smash that run button and see what happens</li>
							<li>is your name in the console? woooooaaaaaaah! #outofthisworld</li>
							<li>ready for another shocker? go to the my repls page and see what repl shows up</li>
							<li>you should see a repl called "getting stared: your first repl", and if you click it open, you should see the code that you typed below</li>
						</ul>
						<li>to summarize, as long as you are logged into your repl account, whenever you change the code inside one of the embedded repls on just for java, it will automatically save onto your repl.it and you can access it through repl.it</li>
						<ul>
							<li>beware! if you refresh this page, the code that you typed will disappear – but do not fear! your code is saved into my repls</li>
							<li>note that if you log out of your repl account and then try typing code in one of our embedded repls, then your code will not save</li>
						</ul>
					</ol>
					<Hint
						hints={[
							"for step 4, given that you are on a website called just for java, maybe you should choose java as your programming language",
							"for steps 1-10, if you think that any of these steps have changed because the website repl.it has updated its look or some other reason, please contact us so that we can update these steps!"
						]}
						id="getting-started-your-first-repl"
					/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/getting-started-your-first-repl?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
					<b className="note">our solution:</b><br/><br/>
					below is <b>our solution</b> for the problem above. we replaced "Hello world!" with "just for java". hopefully your code looks similar to ours <b>:)</b><br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/getting-started-your-first-repl-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				ayy! sry for all that housekeeping work, but the good news is that since you are <b>officially finished with the getting started page</b>, go ahead and mark your progress as completed using the progress dropdown menu below!
				<br/><br/>
				<ProgressUpdater
	              page={this.props.page} 
	              user={this.props.user}
	              progress={this.state.progress}
	              update={(progress)=>this.updateProgressState(progress)}
	            />
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <Link className="contentLink" to="/variables"><b className="pageName">get started coding!</b></Link>
			</div>
		)
	}
}

export default GettingStarted;