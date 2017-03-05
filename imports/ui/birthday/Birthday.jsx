import React, {Component} from 'react';
import Countdown from '../common/countdown/Countdown.jsx';

export default class Birthday extends Component {
	render() {
		return (
			<main>
				<Countdown date='2017-05-25'/> 
			</main>
		);
	}
}