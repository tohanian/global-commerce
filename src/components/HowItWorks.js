import React, { Component } from "react";

// Resources
import idIcon from "../img/landing-page/icons/icon-business-card.svg";
import pencilIcon from "../img/landing-page/icons/icon-pencil.svg";
import usersIcon from "../img/landing-page/icons/icon-users.svg";

class HowItWorks extends Component {
	render() {
		return (
			<div className="how-it-works landing-page-component">
				<h3>How It Works</h3>
				<div className="heading-underline" />
				<ul>
					<li>
						<div className="list-number">1</div>
						<div className="how-it-works-icon">
							<img src={idIcon} alt="ID icon" width="30%" />
						</div>
						<div className="how-it-works-content">
							<h4>Compare</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="list-number">2</div>
						<div className="how-it-works-icon">
							<img src={pencilIcon} alt="Pencil icon" width="30%" />
						</div>
						<div className="how-it-works-content">
							<h4>Receive Proposals</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="list-number">3</div>
						<div className="how-it-works-icon">
							<img src={usersIcon} alt="People icon" width="30%" />
						</div>
						<div className="how-it-works-content">
							<h4>Sell With the Best</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default HowItWorks;
