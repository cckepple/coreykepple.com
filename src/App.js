import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './routes/Home';
import Resume from './routes/Resume';
import Family from './routes/Family';
import NotFound from './routes/NotFound';
import BottomNav from './components/BottomNav'

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div id="bg">
			<Router>
				<div className="page">
					<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
						<div>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/resume" component={Resume}/>
								<Route path="/family" component={Family}/>
								<Route component={NotFound}/>
							</Switch>
							<BottomNav />
						</div>
					</MuiThemeProvider>	
				</div>
			</Router>
		</div>);
	}
}
