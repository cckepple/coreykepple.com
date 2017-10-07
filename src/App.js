import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './routes/Home';
import Resume from './routes/Resume';
import Family from './routes/Family';
import NotFound from './routes/NotFound';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div id="bg">
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={Home}/>
					<Route path="/resume" component={Resume}/>
					<Route path="/family" component={Family}/>
					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		</div>);
	}
}
