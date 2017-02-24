import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import HeaderSearch from './input/HeaderSearch.jsx';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = { activeItem: 'about' };
	}

	handleItemClick(e, { name }) {
		this.setState({ activeItem: name });
	}

	render() {
		const { activeItem, searchState } = this.state;

		return (
	      <Menu inverted>
	        <Menu.Item>
	        	<Image className='ui' src='logo.png'/>
	        </Menu.Item>
	        <Menu.Item 
	        	name='about'
	        	link
	        	active={activeItem === 'about'}
	        	onClick={this.handleItemClick.bind(this)}
	        />
	        <Menu.Item 
	        	name='blog'
	        	link
	        	active={activeItem === 'blog'}
	        	onClick={this.handleItemClick.bind(this)}
	        />
	        <Menu.Menu position='right'>
		        <HeaderSearch />
		    </Menu.Menu>
	      </Menu>
	    )
	}
}