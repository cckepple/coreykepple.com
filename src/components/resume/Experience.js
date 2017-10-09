import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const styleSheet = {
	leftPanel:{
        position: 'absolute',
        display: 'inline-block',
        width: '10%',
        height: '90.5%',
        left: '0',
        overflow: 'auto',
        minWidth: '60px'
	},
	rightPanel: {
        position: 'absolute',
        display: 'block',
        width: '80%',
        height: '90%',
        left: '12%',
        overflow: 'auto'
    },
    circle: {
        height: 50,
        width: 50,
        marginTop: '50%',
        textAlign: 'center',
        overflow:'hidden',
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor:'pointer',
    },
    experienceText: {
        padding: '5%',
        lineHeight: 1.5,
        textAlign: 'left'
    }
}



export default class Experience extends Component {

    constructor(props){
		super(props);

		this.state = {
			selectedIndex:0
    	};
    }

    displayBubbles(){
        var self = this;
        var selectedIndex = this.state.selectedIndex;
        var workBubbles = [
            {imgPath:`/static/images/bxlogo.png`, style: {width:"100%",height:"auto"}},
            {imgPath:`/static/images/plevel.png`, style: {width:"70%",height:"auto", padding:'10%'}},
            {imgPath:`/static/images/github.svg`, style: {width:"100%",height:"auto"}},
            {imgPath:`/static/images/unflogo.jpg`, style: {width:"70%",height:"auto", padding:'10%'}}
        ];
        return workBubbles.map((bubble, index) => {
                var border = selectedIndex == index ? "3px solid #9cd8f4" : "none";
                var paperStyle = Object.assign({},  styleSheet.circle, {border:border});
                var bubbleStyle = Object.assign({width: "100%",height: "auto"}, bubble.style);
                return <Paper style={paperStyle} 
                            zDepth={1} 
                            circle={true} 
                            key={index} 
                            onClick={() => self.clickBubble(index)}
                        >
                            <img src={bubble.imgPath} style={bubbleStyle}/>
                        </Paper>
            })
    }

    clickBubble(index) {
        this.setState({selectedIndex: index});
    }

    displayExperience() {
        var self = this;
        var selectedIndex = this.state.selectedIndex;
        var experience = [
            {
                company:'Bounce Exchange',
                title: 'Software Engineer I',
                time: '2016-Present',
                bullets:[
                    `Build Javascript integrations which enable our platform to run on client sites.
                     Many of our clients operate some of the highest trafficked e-commerce and publisher sites online.`,
                    `Developed several integrations using PHP and GoLang which enabled data transfer from backend systems to various client email service providers and analytics tools.`,
                    `Productized new features into our internal web app using EmberJs on the front-end, communicating with PHP and Node API endpoints.`,
                    `Managed a team of 5 developers with the responsibility of task delegation, performance management, 
                    new employee onboarding and ongoing training. `,
                    `Regularly act as a technical consultant both internally and with clients.`
                ],
                text:''
            },
            {
                company: 'Parlevel Systems',
                title: 'Lead Web Developer',
                time: '2014-2016',
                bullets:[
                    `Developed and deployed front and backend code daily toward the improvement of our client facing web dashboard.`,
                    `Created a REST API which powered data for a mobile application and point of sale kiosk using PHP.`,
                    `Built a virtual wallet web application utilizing a PHP API backend and a React user interface`,
                    `Led a team which developed a point of sale kiosk user interface in Javascript. 
                    The kiosk had a number of hardware components all connected with the software.`,
                    `Quickly promoted to take on managerial tasks and planned the sprint cycles of a 6 person 
                    development team. Kept all departments in sync with software goals and deadlines.`
                ],
                text:''
            },
            {
                company: 'Personal Work',
                title: '',
                time: '',
                bullets:[],
                text:''
            },
            {
                company: 'University of North Florida',
                title: ' B.A., Public Administration',
                time: 'Graduated Spring 2012',
                bullets:[],
                text: `I graduated with a B.A. in Public Administration with the intent of pursuing a law degree. 
                Over my undergrad I consistently earned Deans List recognition, was a published co-author of an op-ed 
                in the Florida Times Union on the conflict in Sudan and played on the Men’s Lacrosse Club. I also 
                participated in a semester abroad at the Otto Friedrich Universität Bamberg, Germany. While in Europe 
                I studied Political Science and taught english as a second language courses as a University tutor.`
            }
        ];
        return (
            <div style={styleSheet.experienceText}>
                {experience.map((job, index)=>{
                    let display = selectedIndex == index ? '' : 'none';
                    return (
                        <div key={index} style={{display:display}}>
                            <div><span>{job.company}</span><span style={{position:'absolute',right:'5%'}}>{job.time}</span></div>
                            <div>{job.title}</div>
                            {self.showExperienceInfo(job)}
                        </div>
                    )
                })}
            </div>
        );
    }

    showExperienceInfo(job){
        if(job.bullets.length){
            return (
                <ul style={{fontSize:'15px'}}>
                    {job.bullets.map((bullet, index) => {
                        return (
                            <li key={index}>{bullet}</li>
                        )
                    })}
                </ul>
            );
        }
            
        if(job.text.length){
            return (
                <p style={{fontSize:'15px', textIndent:'50px'}}>{job.text}</p>
            );
        }
        
    }

    render(){
        return (
            <div>
                <div style={styleSheet.leftPanel}>{this.displayBubbles()}</div>
                <div style={styleSheet.rightPanel}>{this.displayExperience()}</div>
            </div>
        );
    }
}