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
	width:   100,  
	height:  200,  
	opacity: .75,  
}, {
	duration: 250,
	easing: false,
}).then(() => console.log('Completed Animation'));

```

As you can see a promise is returned.

Note: values are absolute. So setting a width of `100`  means the element 
will animate untill it is `100px` wide, regardless of the current width of 
the element.