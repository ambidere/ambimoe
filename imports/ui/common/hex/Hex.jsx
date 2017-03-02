import React, { Component, PropTypes } from 'react';

export default class Hex extends Component {
	render() {
		return (
			<li className="hex">
        		<div className="hexIn">
          			<a className="hexLink" href={this.props.link}>
            			<img src={this.props.image} alt="" />
            			<div className="hexBack"></div>
                  <h1>{this.props.title}</h1>
          			</a>
        		</div>
      		</li>
		);
	}
}