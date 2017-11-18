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
                time: '2016 - Present',
                text:[
                    {
                        body:`Build Javascript integrations into our platform which execute on client sites, 
                        clients include some of the highest trafficked ecommerce and publisher websites online.`
                    },
                    {
                        body:`Develop PHP and GoLang systems  which enabled data transfer from our AWS backend to 
                        various client email service providers and analytics tools.`
                    },
                    {
                        body:`Productize and deploy features into our internal web app built on EmberJs, 
                        communicating with PHP and Node API endpoints.`
                    },
                    {
                        body:`Managed a team of 5 developers with the responsibility of task delegation, performance 
                        management, new employee onboarding and ongoing training. `
                    },
                    {
                        body:`Regularly act as a technical consultant both internally and with clients.`
                    }
                ]
            },
            {
                company: 'Parlevel Systems',
                title: 'Lead Web Developer',
                time: '2014 - 2016',
                text:[
                    {
                        body: `Developed and deployed front and backend code daily toward the improvement of our client 
                        facing web dashboard.`
                    },
                    {
                        body: `Created REST API using PHP which provided data to our mobile application and point of sale 
                        kiosk products.`,
                    },
                    {
                        body:`Built a virtual wallet web application utilizing a PHP backend and a React user interface`,
                    },
                    {
                        body:`Led a team which developed a point of sale kiosk user interface in Javascript. 
                        The kiosk had a number of hardware components integrated with the software.`,
                    },
                    {
                        body:`Quickly promoted to take on managerial tasks and planned the sprint cycles of a 6 person 
                        development team. Kept all departments in sync with software goals and deadlines.`
                    }
                ]
            },
            {
                company: 'Personal Work',
                text:[
                    {
                        title: `coreykepple.com`,
                        body:`This site, coreykepple.com, is my own personal creation.  Developed using a simple express 
                        backend and react on the client side.  It was built within a Docker containerized 
                        environment and is deployed on a Digital Ocean droplet.`,
                        github:'https://github.com/cckepple/coreykepple.com',
                    },
                    {
                        title:`scoresquares.xyz`,
                        body:`Score Squares was a personal project to recreate a common grid style gambling game, often 
                        played during football games, as a web application.  It's built with PHP, using the Laravel 
                        framework, and frontend using AngularJs.`,
                        github:'https://github.com/cckepple/score_squares',
                        demo: 'http://scoresquares.xyz'
                    }
                ]
            },
            {
                company: 'University of North Florida',
                title: 'B.A., Public Administration',
                text: [
                    {
                        body:`I graduated from UNF with the intent of pursuing a law degree. 
                            During my undergrad I consistently earned Dean's List recognition, was a published co-author 
                            of an op-ed in the Florida Times Union on the conflict in Sudan and played on the Men’s 
                            Lacrosse Club. I also participated in a semester abroad at the Otto Friedrich Universität 
                            Bamberg, Germany. While in Europe I studied Political Science and taught english as a second 
                            language courses as a University tutor.`,
                        conclusion:`Upon graduation and facing the decision of law school debt and a job market that was 
                            reportedly over supplied, I decided to pivot.  Coding had always been a passion hobby of mine
                            but I never truly saw a career in it.  About a year after college I immersed myself back into
                            the web development world and haven't looked back since.`
                    }
                ]
            }
        ];
        return (
            <div style={styleSheet.experienceText}>
                {experience.map((job, index)=>{
                    let display = selectedIndex == index ? '' : 'none';
                    return (
                        <div key={index} style={{display:display, padding:'5% 5% 5% 10%'}}>
                            <h4 style={{marginBottom:'5px',marginTop:'0px'}}>
                                <span>{job.company}</span>
                                {job.time && <span style={{position:'absolute',right:'5%'}}>{job.time}</span>}
                            </h4>
                            {job.title && <h6 style={{marginTop:'0px', marginBottom:'0px'}}>{job.title}</h6>}
                            {self.showExperienceInfo(job)}
                        </div>
                    )
                })}
            </div>
        );
    }

    showExperienceInfo(job){
        if(job.text && job.text.length){
            return (
                job.text.map((txt, index) =>{
                    let getTitle = (hasLink, title) => {
                        if(hasLink){
                            return <span><a href={hasLink}>{title}</a></span>;
                        }
                        return <span>{title}</span>;
                    }

                    return (<div key={index}>
                        {txt.title &&
                            <h5 style={{marginBottom:'5px'}}>
                                {getTitle(txt.demo, txt.title)}
                                {txt.github && <a target={'_blank'} style={{padding:'5px'}} href={txt.github}><img style={{width:'18px'}} src={'/static/images/github.svg'} /></a>}
                            </h5>}

                        <p style={{fontSize:'14px'}}>{txt.body}</p>
                        {txt.conclusion && <p style={{fontSize:'14px'}}>{txt.conclusion}</p>}
                    </div>);
                })
                
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