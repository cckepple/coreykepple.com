import React, {Component} from 'react';
import {Link} from 'react-router';
import Layout from './Layout';
import Paper from 'material-ui/Paper';
const styleSheet = {
	circleImg:{
	  height: '300px',
	  width: '300px',
	  overflow:'hidden',
	  display: 'inline-block',
	  verticalAlign: 'middle',
	  cursor:'pointer'
	},
};

// var shuffle = require('shuffle-array')

export default class IndexPage extends Component {
	images = 
	// shuffle(
		[
		{path:'/images/plvl.jpg',  title:'a developer.', selected: 'show'},
		{path:'/images/mex.jpg',  title:'a dad.', selected: 'none'},
		{path:'/images/derp.jpg',  title:'a thinker.', selected: 'none'},
		{path:'/images/shark.jpg',  title:'a fisherman.', selected: 'none'},
		{path:'/images/run.jpg',  title:'an athlete.', selected: 'none'},
		{path:'/images/teddymex2.jpg',  title:'a father.', selected: 'none'},
		{path:'/images/wed.jpg',  title:'a husband.', selected: 'none'},
		{path:'/images/cry.jpg',  title: 'a caregiver.', selected: 'none'},
		{path:'/images/famm.jpg',  title: 'a relative.', selected: 'none'},
		{path:'/images/skydive.jpg',  title: 'an adventurer.', selected: 'none'},

	]
// );
	animIntervals = [];
	imageLoops = 0;
	imageTimer;
	timeout;

	constructor(props){
		super(props);

		this.state = {
			selectedIndex:0,
			title: ''
    	};
	}

	componentDidMount(){
		this.runImageLoop(1000);
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
		for (var i = this.animIntervals.length - 1; i >= 0; i--) {
			clearInterval(this.animIntervals[i]);
		};
	}

	runImageLoop(timeout){
		if(this.imageLoops === 0){
			this.timeout = setTimeout(this.manageTimer.bind(this), timeout);
		}
	}

	setTimer(speed){
		var int = setInterval(this.changeImage.bind(this), speed);
		this.animIntervals.push(int);
		return int;
	}

	manageTimer(){
		this.imageLoops += 1

		var intSpeed = this.imageLoops === 1 ? 250 : false,
			intBreaks = [5,10,15],
			breakIndex = intBreaks.indexOf(this.imageLoops);

		if(breakIndex > -1){
			clearInterval(this.imageTimer);
			if(intBreaks[breakIndex] === 5){
				intSpeed = 150;
			}

			if(intBreaks[breakIndex] === 10){
				intSpeed = 60;
			}

			if(intBreaks[breakIndex] === 15){
				this.imageLoops = 0;
			}
		}

		if(intSpeed){
			this.imageTimer = this.setTimer(intSpeed);
		}
	}

	changeImage(nextIndex){
		var nextIndex = this.state.selectedIndex+1;
		if(nextIndex >= this.images.length){
			nextIndex = 0;
		}
		this.setState({selectedIndex:nextIndex, title: this.images[nextIndex].title});
		this.manageTimer();
	}

	render() {
		var selectedIndex = this.state.selectedIndex;
		return (
			<Layout title="Home">
				<div id="page-index" style={{marginTop:"25px", textAlign: "center"}}>
					<Paper style={styleSheet.circleImg} zDepth={3} circle={true} onClick={() => this.runImageLoop(0)}>
					{
						this.images.map(function(image, index){
							var showImg = selectedIndex == index ? "" : "none";
							return <img key={index}
										src={image.path}
										style={{width:"100%",
											 height:"auto",
											 display:showImg,
											}}/>
					})}
					</Paper>
					<h1> Hi, I'm Corey </h1>
					<h4> I am {this.state.title} </h4>
				</div>
			</Layout>);
	}
}
