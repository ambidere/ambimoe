import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Meteor } from 'meteor/meteor';

import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Footer/>
			</div>
		);
	}
}