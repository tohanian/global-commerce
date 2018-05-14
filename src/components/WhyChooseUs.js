import React, { Component } from "react";

// Resources
import checkIcon from "../img/landing-page/icons/icon-check.svg";
import refreshIcon from "../img/landing-page/icons/icon-refresh.svg";
import clipboardIcon from "../img/landing-page/icons/icon-clipboard.svg";
import tagIcon from "../img/landing-page/icons/icon-tag.svg";
import singleUserIcon from "../img/landing-page/icons/icon-one-user.svg";
import thumbsUpIcon from "../img/landing-page/icons/icon-thumbs-up.svg";

class WhyChooseUs extends Component {
	render() {
		return (
			<div className="why-choose-us landing-page-component">
				<h3>How It Works</h3>
				<div className="heading-underline" />
				<ul>
					<li>
						<div className="why-choose-us-icon">
							<img src={checkIcon} alt="Check icon" width="45%" />
						</div>
						<div className="why-choose-us-content">
							<h4>Quick</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="why-choose-us-icon">
							<img src={refreshIcon} alt="Refresh icon" width="45%" />
						</div>
						<div className="why-choose-us-content">
							<h4>Easy</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="why-choose-us-icon">
							<img src={clipboardIcon} alt="Clipboard icon" width="45%" />
						</div>
						<div className="why-choose-us-content">
							<h4>Comprehensive</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="why-choose-us-icon">
							<img src={tagIcon} alt="Tag icon" width="45%" />
						</div>
						<div className="why-choose-us-content">
							<h4>Free</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="why-choose-us-icon">
							<img src={singleUserIcon} alt="User icon" width="45%" />
						</div>
						<div className="why-choose-us-content">
							<h4>Independent</h4>
							<p>
								Et quasi architecto beatae vitae dicta sunt, explicabo nemo enim
								ipsam voluptatem
							</p>
						</div>
					</li>
					<li>
						<div className="why-choose-us-icon">
							<img src={thumbsUpIcon} alt="Thumbs up icon" width="45%" />
						</div>
						<div className="why-choose-us-content">
							<h4>Awesome</h4>
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

export default WhyChooseUs;
