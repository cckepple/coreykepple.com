import React, {Component} from 'react';
const styleSheet = {
	container:{
		padding:'25px 10% 0px 10%',
		height: '80%',
		minWidth: '200px',
		overflow: 'auto'
	},
	summary: {
		textAlign: 'left',
		fontWeight: 'bold'
	},
	tech: {
		fontWeight: 'normal',

	}
}
export default class Summary extends Component {

	render(){
		return (<div style={styleSheet.container}>
					<p style={styleSheet.summary}>
							This is one of the highest compliments that I’ve been given and it’s something I take a great deal of pride in.
						I truly find joy in solving the problems that web development as a profession provides.  I live for the opportunity to learn new technologies and
						build high quality applications that can handle modern web traffic.
						I hope we can talk about the problems you’re trying to solve and see if I might be able to help.
					</p>
					<p style={styleSheet.summary}>
						Some of the tech I've worked with:<br/>
							<span style={styleSheet.tech}>
								Javascript, PHP, GoLang, Python, CSS3, HTML5,  MySql, MongoDB
								Vagrant, Docker, Apache, Nginx, Node, NPM, Yarn, Composer, Git
								Webpack, Babel, Laravel, Express, Sails, Ember, Angular, React, Redux, jQuery
							</span>
					</p>
				</div>);
	}
}
