import "./main.css";

import Modal from "./modal";
import DOM from "./dom";

(function() {
	let userSettings = new Modal();

	function header() {
		let root = DOM.createElement('header', {'id': 'main-head'}, [
			DOM.createElement('h2', {innerText: "Which Job?"}),
			DOM.createElement('a', {className: 'material-icons settings-link', 'href': '#', innerText: 'settings'})
		]);
		root.querySelector(".settings-link").addEventListener("click", (evt) => {
			evt.preventDefault();
			console.debug("TODO: show user settings modal");
			userSettings.show();
		})
		return root;
	}

	function main() {
		return DOM.createElement('section', {id: "main"});
	}

	function footer() {
		return DOM.createElement('footer', {'id': 'main-foot'}, [
			DOM.createElement('em', {innerHTML: 'Made with &nbsp;'}),
			DOM.createElement('i', {className: "material-icons md-18 icon-red", title: "love", innerText: "favorite"}),
			DOM.createElement('em', {innerHTML: '&nbsp; by Rylee Corradini'})
		]);
	}

	let body = document.querySelector("body");
	body.appendChild(header());
	body.appendChild(main());
	body.appendChild(footer());

	body.appendChild(userSettings.root);
})();
