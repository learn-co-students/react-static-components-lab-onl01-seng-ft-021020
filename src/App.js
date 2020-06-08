import React, { Component } from 'react';
import MouseComponent from './MouseComponent'
import Catcomponent from './CatComponent'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<Catcomponent/>
				<GraceHopperQuoteComponent />
				<MouseComponent/>
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
