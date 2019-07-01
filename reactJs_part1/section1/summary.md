# REACT JS - PART 1
- React applications are made out of components. A component is a small,
reusable chunk of code that is responsible for one job. That job is often to
render some HTML. Example:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
    - The 'React' variable above is an object called **React Library**. This allows
certain methods available to us from the library itself. In fact, we need this
variable before our code can compile JSX at all, due to compiling happening with
the *React.createElement()* method.
    - The 'ReactDom' also import javascript object which contains React-related
    methods. These methods from 'react-dom' are meant for interacting with the
    DOM.Methods imported from **'react'** don't deal with the DOM, there are
    only for pure react purposes.
- **React.Component** is a JavaScript class. To create your own component class,
 you must subclass React.Component. You can do this by using the syntax:
```javascript
 class YourComponentNameGoesHere extends React.Component {};
 ```
 Some useful resource for classes and subclasses: [1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [2](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/), [3](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/),[4](https://exploringjs.com/es6/ch_classes.html)

- The **"render()"** property has to be in the body of component class.
- JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two. For instance, to use a component
instance inside ReactDOM.render():
```javascript
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
```
where MyComponentClass is a component class name.
- Whenever you make a component, that component inherits all of the methods of its component class. MyComponentClass has one method: **MyComponentClass.render()**. Therefore, <MyComponentClass /> also has a method named render.

## Components And Advanced JSX
- **this** usually refers to an instance of the component class. It refers to the object on which *this*‘s enclosing method is called.
- *getter* methods don't need parentheses when being called.
- In React, you can define event handlers as methods on a component class.

## Component to Component Interaction
- Render methods can also return another kind of JSX: component instances. For example:
```javascript
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```
- When importing a variable from a file that is not the current file, then an import statement isn’t quite enough. Need an export statement, written in the other file, exporting the variable that you hope to grab. For example:
```javascript
// Manifestos.js:
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile: 'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
export const alsoRan = 'TimeCube';
```
Then, in another file:
```javascript
// App.js:

// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
```
