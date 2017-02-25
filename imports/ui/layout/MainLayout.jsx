import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Meteor } from 'meteor/meteor';

import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

export default class MainLayout extends Component {
	render() {
		return (
			<div>
				<Header/>
				{this.props.content}
				<Footer/>
			</div>
		);
	}
}