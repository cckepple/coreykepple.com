import React, {Component} from 'react';
import Layout from './Layout';

export default class Family extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 2
		};
	}

	render() {
		return (
			<Layout title="Page 2">
				<div>
					Family
				</div>
			</Layout>);
	}
}
