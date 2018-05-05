import React, { Component } from "react";
import { Route } from "react-router-dom";

// Styles
import "./App.css";

// Containers
import LandingPage from "./containers/LandingPage";
import PropertySearchView from "./containers/PropertySearchView";
import Header from "./containers/Header";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Header /> */}
				<Route exact path="/" component={LandingPage} />
				<PropertySearchView />
			</div>
		);
	}
}

export default App;
