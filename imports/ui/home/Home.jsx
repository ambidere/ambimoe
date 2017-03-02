import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { Meteor } from 'meteor/meteor';

import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import HomeMain from './HomeMain.jsx';

export default class Home extends Component {
	render() {
		return (
			<div id="appContainer">
				<Header/>
				<HomeMain/>
				<Footer/>
			</div>
		);
	}
}