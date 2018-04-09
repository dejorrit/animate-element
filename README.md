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
	width:   100, // px
	height:  200, // px
	opacity: .75,
});
```

Note: values are absolute. That means setting the width to `100` 
means the element will be `100px` wide. Regardless of the current
width of the element.