import React, {Component} from 'react';
const styleSheet = {
	container:{
		padding:'0px 10% 0px 10%',
		height: '80%',
		minWidth: '200px',
		overflow: 'auto',
		lineHeight: 1.5,
		textAlign: 'left',
	},
	tech: {
		fontWeight: 'normal',
		fontSize:'14px',
	},
	summary:{
		fontSize:'14px',
	}
}

const summaryTextOne = `I love to solve problems.  As a web developer we're often given the opportunity to do just that.
The abundance of those opportunities and the ability to learn new things has enabled me to become 
extremely passionate about my work.  That passion then drives my work ethic and in the end it leads to a 
daily happiness I attain just by clocking in.`;

const summaryTextTwo = `I've been told I'm pretty easy to work with and am the type of person that knows how to get
things done.  If you have problems which could be helped by a person like me, then let's talk!`

const techs = `Javascript, PHP, GoLang, Python, CSS3, HTML5,  MySql, MongoDB,
Vagrant, Docker, Apache, Nginx, Node, NPM, Yarn, Composer, Git,
Webpack, Babel, Laravel, Express, Sails, Ember, Angular, React, Redux, jQuery`;

export default class Summary extends Component {

	render(){
		return (<div style={styleSheet.container}>
					<h4 style={{marginBottom:'15px', fontWeight:'bold'}}>About me:</h4>
					<div style={styleSheet.summary}>{summaryTextOne}</div>
					<br />
					<div style={styleSheet.summary}>{summaryTextTwo}</div>
					<h4 style={{marginBottom:'5px', fontWeight:'bold'}}>Some tech I've worked with:</h4>
					<div style={styleSheet.tech}>
						{techs}
					</div>
				</div>);
	}
}
