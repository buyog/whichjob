import DOM from "./dom";
import "./modal.css";

function Modal(contentForm) {
	let closeButton = DOM.createElement("button", {
		className: "modal-button modal-close",
		innerHTML: "&times;"
	});
	closeButton.addEventListener("click", this.hide.bind(this));
	this.root = DOM.createElement("div", {className:"overlay hidden"}, [ closeButton ]);
	if (contentForm) this.root.appendChild(contentForm);
}
Modal.prototype = {
	show() {
		this.root.classList.remove("hidden");
	},
	hide() {
		this.root.classList.add("hidden");
	}
};

export default Modal;