import React, { Component } from "react";
import { Route } from "react-router-dom";

// Containers
import LandingPage from "./containers/Home";
import PropertySearchView from "./containers/PropertySearchView";
import Header from "./containers/Header";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Route exact path="/" component={LandingPage} />
				<PropertySearchView />
			</div>
		);
	}
}

export default App;
