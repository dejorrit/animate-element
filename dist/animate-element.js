'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimateElement = function () {
	function AnimateElement(element, properties) {
		var _this = this;

		var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		_classCallCheck(this, AnimateElement);

		this.element = element;
		this.properties = properties;
		this.duration = options.duration || 250;
		this.easing = options.easing || false;
		this.easing = false;
		this.starttime = null;
		this.startStyles = Object.assign({}, window.getComputedStyle(element));

		return new Promise(function (resolve) {
			_this.resolve = resolve;

			return requestAnimationFrame(function (timestamp) {
				_this.starttime = timestamp || new Date().getTime();
				return _this.animate(timestamp);
			});
		});
	}

	_createClass(AnimateElement, [{
		key: 'animate',
		value: function animate(timestamp) {
			var _this2 = this;

			timestamp = timestamp || new Date().getTime();

			var runtime = timestamp - this.starttime;
			var progress = Math.min(runtime / this.duration, 1);

			Object.entries(this.properties).forEach(function (property) {
				var key = property[0];
				var val = property[1];
				var unit = _this2.startStyles[key].indexOf('px') !== -1 ? 'px' : '';

				var startValue = parseFloat(_this2.startStyles[key]);
				var newValue = startValue + (val - startValue) * (_this2.easing ? ease(progress) : progress);

				_this2.element.style[key] = newValue + unit;
			});

			if (runtime < this.duration) {
				return requestAnimationFrame(function (timestamp) {
					return _this2.animate(timestamp);
				});
			} else {
				this.resolve();
			}
		}
	}]);

	return AnimateElement;
}();

exports.default = AnimateElement;


function ease(n) {
	return --t * t * t + 1;
}
