import React, { Component } from "react";

// Components
import About from "./About";
import HomeSearch from "../components/HomeSearch";

class Home extends Component {
	render() {
		return (
			<div>
				<HomeSearch />
				<About />
			</div>
		);
	}
}

export default Home;
