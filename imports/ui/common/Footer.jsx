import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Container, Grid, Segment, Divider, Header } from 'semantic-ui-react';


export default class Footer extends Component {
	render() {
		return (
			<footer>
				<Grid>
					<Grid.Column width={14}>
					</Grid.Column>
					<Grid.Column floated='right' width={2}>
						<Segment basic>
							<a className="socialIcons" href="https://github.com/ambidere" target="_blank">
								<FontAwesome name='github' size='2x'/>
							</a>
							<a className="socialIcons" href="https://twitter.com/ambidere" target="_blank">
								<FontAwesome name='twitter' size='2x'/>
							</a>
						</Segment>
					</Grid.Column>
				</Grid>
			</footer>
		);
	}
}