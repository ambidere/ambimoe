import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

export default class MainLayout extends Component {
	render() {
		return (
			<div id="appContainer">
				<Header/>
				{this.props.content}
				<Footer/>
			</div>
		);
	}
}