import React, {Component} from 'react';
// import Layout from './Layout';
import Paper from 'material-ui/Paper';
import ResumeSummary from '../components/resume/Summary';
import ResumeExperience from '../components/resume/Experience';


const styleSheet = {
	resumeBox:{
		textAlign: 'center',
		height: '65vh',
		width: '95%',
		maxWidth: '800px',
		overflow:'hidden',
		display: 'inline-block',
		verticalAlign: 'middle',
		marginTop:'50px',
		opacity:'.65',
		position:'relative'
	},
	tabTitle:{
		position:'relative',
		top:'10px',
		left:'5px'
	},
	tabRow:{
		height:"40px",
		borderTop:"1px solid grey",
		cursor:"pointer",
		position:"absolute",
		bottom:"0px",
		width:"100%"
	}
};
export default class Resume extends Component {
	tabs = ['Summary','Experience','Contact'];
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
	}

	select(index){
		this.setState({selectedIndex:index});
	}

	setPage(index){
		if(index === 0){
			return <ResumeSummary/>;
		}else if(index === 1){
			// Experience
			return <ResumeExperience/>;
		}else{
			// Contact
		}
	}

	render() {
		var clickTab = this.select.bind(this),
			selectedTab = this.state.selectedIndex,
			selectedTabStyle = "linear-gradient(-45deg, #8bd1f1,#fff)";

		return (
				<div style={{textAlign:"center"}}>
					<Paper zDepth={3} style={styleSheet.resumeBox}>
						{this.setPage(selectedTab)}

						<div style={styleSheet.tabRow}>
							{this.tabs.map(function(tab, index){
								return	<div key={index}
											 onClick={ () => { clickTab(index) } }
											 style={{background: selectedTab == index ? selectedTabStyle : ""}}
											 className="resumeTabBtn">
											<span style={styleSheet.tabTitle}>{tab}</span>
										</div>
							})}
						</div>
					</Paper>
				</div>
			);
	}
}

