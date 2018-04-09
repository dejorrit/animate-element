Animate-element
===

Easily transform CSS properties using requestAnimationFrame

## Installation

```
$ yarn add animate-element
```

or 

```
$ npm install animate-element
```

## Usage

```javascript
import AnimateElement from 'animate-element';
 
let myElement = document.getElementById('#myElement');
 
new AnimateElement(myElement, {
	width: 100,    // it accepts
	height: 200,   // pixels
	opacity: .75,  // and unitless values
}, {
	duration: 100, // defaults to 250
	easing: true,  // defaults to false
});
```

Note: values are absolute. That means setting the width to `100` 
means the element will be `100px` wide. Regardless of the current
width of the element.