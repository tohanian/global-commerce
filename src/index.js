import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";

WebFont.load({
	google: {
		families: ["Roboto", "Lato", "sans-serif"]
	}
});

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
