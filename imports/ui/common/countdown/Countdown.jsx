import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Moment from 'moment-timezone';

export default class Countdown extends Component {
	constructor(props) {
		super(props);
		var target = Moment.tz(this.props.date, "Asia/Tokyo");
		this.state = {
			target : target
		};
	}

	componentDidMount() {
		const { target } = this.state;

		setInterval(() => {
			var current = Moment().tz("Asia/Tokyo");
			var totalSecs = Math.round(Moment.duration(target.diff(current)).asSeconds());

			var sec = totalSecs % 60;
			var totalMin = ( totalSecs - sec ) / 60;

			var min = totalMin % 60;
			var totalHour = ( totalMin - min ) / 60;

			var hour = totalHour % 24;
			var totalDays = ( totalHour - hour ) / 24;

			var d = totalDays % 7;
			var weeks = ( totalDays - d ) / 7;

			this.setState({
				week : weeks,
				day : d,
				hour:  hour,
				minute : min, 
				second : sec,
				target : target
			});
		}, 1000)
	}

	render() {
		const { week, day, hour, minute, second } = this.state;
		return (
			<div className="countdown">
				<h2>W: {week}</h2>
				<h2>D: {day}</h2>
				<h2>H: {hour}</h2>
				<h2>M: {minute}</h2>
				<h2>S: {second}</h2>
			</div>
		);
	}
}