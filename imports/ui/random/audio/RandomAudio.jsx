import React, { Component } from 'react'

import ButtonTriggeredAudio from './ButtonTriggeredAudio.jsx'

export default class RandomAudio extends Component {
	render() {
		return (
			<div>
				<ButtonTriggeredAudio name="yousoro" source="audio/yousoro.mp3"/>
			</div>
		);
	}
}