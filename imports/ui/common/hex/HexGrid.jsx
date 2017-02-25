import React, { Component, PropTypes } from 'react';

export default class HexGrid extends Component {
	render() {
		return (
			<ul id="hexGrid">
        {this.props.hexes}
      </ul>
		);
	}
}