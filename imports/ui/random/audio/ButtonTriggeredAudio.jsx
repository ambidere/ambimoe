import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

export default class ButtonTriggeredAudio extends Component {
	render() {
		return (
			<div id={this.props.name} className="audioContainer">
				<Button color='blue' className="audioButton">
				{this.props.name}
				</Button>
				<audio ref={(audio) => { this.btnAudio = audio; }} preload="auto" style={styles}>
					<source src={this.props.source} type="audio/mpeg"/>
				</audio>
			</div>
		);
	}
}

const styles = {
	display : 'none'
};