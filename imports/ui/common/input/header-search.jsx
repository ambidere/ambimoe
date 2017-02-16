import _ from 'lodash';
import { Meteor } from 'meteor/meteor';

import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Menu, Search } from 'semantic-ui-react';

import { Seiyuu } from '/imports/api/seiyuu.js';

export class HeaderSearch extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: false };
		console.log(props)
	}

	componentWillMount() {
		this.resetComponent();
	}

	resetComponent() {
		this.setState({ isLoading: false, results: [], value: '' });
	}

	handleResultSelect(e, result) {
		console.log(result);
	}

	handleSearchChange(e, value) {
		this.setState({ isLoading: true, value });
		console.log(value);
		setTimeout(() => {
	    	if (!_.isEmpty(this.state.value)) {
				this.setState({ isLoading: false });
			}
			else {
				this.resetComponent();
			}
	    }, 1000);
	}

	render() {
		const { isLoading, results, value } = this.state;

		return (
			<Menu.Item>
	    		<Search
	    			loading={isLoading}
	    			placeholder='Search...'
	    			onResultSelect={this.handleResultSelect.bind(this)}
	    			onSearchChange={this.handleSearchChange.bind(this)}
	    			results={results}
	    			value={value}
	    		/>
	    	</Menu.Item>
		);
	}

}

HeaderSearch.proptypes = {
	seiyuu: PropTypes.array.isRequired,
}

export default createContainer(() => {
	Meteor.subscribe('seiyuu');

	return {
		seiyuu: Seiyuu.find().fetch(),
	}
}, HeaderSearch);
