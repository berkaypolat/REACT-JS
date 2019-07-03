## STYLE
### Advanced React Techniques
This section will focus on how to make a *stateless functional component*, make a *propType*,
how to write a form, and how to use styles.
It will also focus on a second programming pattern: dividing components into
*presentational components* and *container components*.

#### Inline Styles
- An inline style is a style that’s written as an attribute, like this:
```html
<h1 style={{ color: 'red' }}>Hello world</h1>
```
- The outer curly braces inject JavaScript into JSX. The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:
'{ color: 'red' }'. If you inject an object literal into JSX, and your entire injection is only that object literal.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);
```
- An alternative that’s often nicer is to store a style object in a variable, and then inject that variable into JSX.
Using the same example above:
```javascript
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: '100px',
  fontSize: '50px'
};
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;
ReactDOM.render(
	styleMe,
	document.getElementById('app')
);
```
- No longer need to use double curly braces since not injecting an object literal anymore.
Also notice that names are instead written in camelCase, unlike regular JS.
- In React, if you write a style value as a number, then the unit "px" is assumed.
[Here is a list of styles that don’t assume “px”.](https://reactjs.org/docs/dom-elements.html)

### Container Components From Presentational Components
- Taking a look at GuineaPigs.jsx, but it might seem like it does too much stuff.
How can you tell when a component has too many responsibilities?
*Separating container components from presentational components* helps to answer that question.
- The directory 'container_and_presentational_example' does a good job showing this pattern.
- **BASIC IDEA BEHIND THIS PATTERN:**
    - If a component has to have state, make calculations based on props, or
    manage any other complex logic, then that component shouldn’t also have to
    render HTML-like JSX.
    - Instead of rendering HTML-like JSX, the component should render another
    component. It should be that component’s job to render HTML-like JSX.
    - A presentational component will always get rendered by a container component.
- There are really good articles about this pattern, one of them can be found
if you follow [this link](https://medium.com/@learnreact/container-components-c0e67432e005)

### Stateless Functional Components
