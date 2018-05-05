import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<nav>
				<Link to="/">
					<h1>Global Commerce</h1>
				</Link>
				<ul>
					<li>Property Search</li>
					<li>About</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
