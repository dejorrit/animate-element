export default class AnimateElement {

	constructor(element, properties, options = {}) {
		this.element     = element;
		this.properties  = properties;
		this.duration    = options.duration || 250;
		this.easing      = options.easing || false;
		this.easing      = false;
		this.starttime   = null;
		this.startStyles = Object.assign({}, window.getComputedStyle(element));

		return new Promise(resolve => {
			this.resolve = resolve;

			return requestAnimationFrame(timestamp => {
				this.starttime = timestamp || new Date().getTime();
				return this.animate(timestamp);
			});
		});
	}

	animate(timestamp) {
		timestamp = timestamp || new Date().getTime();

		let runtime = timestamp - this.starttime;
		let progress = Math.min(runtime / this.duration, 1);

		Object.entries(this.properties).forEach(property => {
			let key  = property[0];
			let val  = property[1];
			let unit = this.startStyles[key].indexOf('px') !== -1 ? 'px' : '';

			let startValue = parseFloat(this.startStyles[key]);
			let newValue   = startValue + ((val - startValue) * (this.easing ? ease(progress) : progress));

			this.element.style[key] = newValue + unit;
		});

		if (runtime < this.duration) {
			return requestAnimationFrame(timestamp => {
				return this.animate(timestamp);
			});
		} else {
			this.resolve();
		}
	}

}

function ease(n) {
	return (--t)*t*t+1;
}