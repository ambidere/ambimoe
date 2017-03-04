import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SocialIcon from './icon/SocialIcon.jsx'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<Grid>
					<Grid.Column width={12}>
					</Grid.Column>
					<Grid.Column floated='right' width={4}>
						<Segment basic>
							<SocialIcon 
								name={'github'}
								link={'https://github.com/ambidere'}
								size={'2x'}
							/>
							<SocialIcon 
								name={'twitter'}
								link={'https://twitter.com/ambidere'}
								size={'2x'}
							/>
						</Segment>
					</Grid.Column>
				</Grid>
			</footer>
		);
	}
}