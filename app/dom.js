
function el(tagName, props={}, children=[]) {
	let node = document.createElement(tagName);
	Object.keys(props).forEach(k => node[k] = props[k]);
	children.forEach(nd => node.appendChild(nd));
	return node;
}

let DOM = {
	createElement: el
};

export default DOM;