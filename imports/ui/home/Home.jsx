import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Hex from '../common/hex/Hex.jsx'
import HexGrid from '../common/hex/HexGrid.jsx'

export default class Home extends Component {
	render() {
		return (
			<main className="homeMain">
				<HexGrid>
					<Hex 
						title={"BIRTHDAY"} 
						link={"/birthday"}
						image={"/images/home/birthday.jpg"}
					/>
					<Hex 
						title={"MATCHER"} 
						link={"/matcher"}
						image={"/images/home/matcher.jpg"}
					/>
					<Hex 
						title={"LISTS"} 
						link={"/lists"}
						image={"/images/home/lists.jpg"}
					/>
				</HexGrid>
			</main>
		);
	}
}