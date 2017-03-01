import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Hex from '../common/hex/Hex.jsx'
import HexGrid from '../common/hex/HexGrid.jsx'

export default class HomeMain extends Component {
	render() {
		return (
			<main>
				<HexGrid>
					<Hex 
						title={"test"} 
						description={"test description"}
						link={"/seiyuu/yoshino_aoyama"}
						image={"/seiyuu/female/yoshino_aoyama.jpg"}
					/>
				</HexGrid>
			</main>
		);
	}
}