import React, { Component } from 'react';
import { Container, Grid, Segment, Divider, Header } from 'semantic-ui-react';


export default class Footer extends Component {
	render() {
		return (
			<footer>
				<Grid columns={2}>
					<Grid.Column color={'black'}>
						<Segment basic>
							<Header as='h4' inverted>About</Header>
						</Segment>
					</Grid.Column>
					<Divider vertical inverted></Divider>
					<Grid.Column color={'black'}>
						<Segment basic>
							<Header as='h4' inverted>Contact</Header>
						</Segment>
					</Grid.Column>
				</Grid>
			</footer>
		);
	}
}