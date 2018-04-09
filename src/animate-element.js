export default class AnimateElement {

	constructor(element, properties, options = {}) {
		this.element     = element;
		this.properties  = properties;
		this.duration    = options.duration || 250;
		this.easing      = options.easing || false;
		this.starttime   = null;
		this.startStyles = window.getComputedStyle(element);

		requestAnimationFrame(timestamp => {
			this.starttime = timestamp || new Date().getTime();
			this.animate(timestamp);
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

			let startValue = parseInt(this.startStyles[key], 10);
			let newValue   = startValue + ((val - startValue) * (this.easing ? ease(progress) : progress));

			this.element.style[key] = newValue + unit;
		});

		if (runtime < this.duration) {
			requestAnimationFrame(timestamp => {
				this.animate(timestamp);
			});
		}
	}

}

function ease(n) {
	return .5 * (1 - Math.cos(Math.PI * n));
}