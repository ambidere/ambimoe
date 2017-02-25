import React, { Component, PropTypes } from 'react';

export default class Hex extends Component {
	render() {
		return (
			<li className="hex">
        		<div className="hexIn">
          			<a className="hexLink" href="{this.props.link}">
            			<img src="{this.props.image}" alt="" />
            			<h1>{this.props.title}</h1>
            			<p>{this.props.description}</p>
          			</a>
        		</div>
      		</li>
		);
	}
}