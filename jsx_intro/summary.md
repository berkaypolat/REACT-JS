# JSX BASICS
- JSX is not valid JavaScript. Web browsers can’t read it!
- If a JavaScript file contains JSX code, then that file will have to be
**compiled**. That means that before the file reaches a web browser, a JSX compiler
will translate any JSX into regular JavaScript.
- JSX elements are treated as JavaScript expressions. They can go anywhere that
JavaScript expressions can go.
- JSX element can be saved in a variable, passed to a function, stored in an
object or array. For example:
```javascript
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
```
- If a JSX expression takes up more than one line, it must be wrapped the in
parentheses. For example:
```javascript
const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
 ```
 - A JSX expression must have exactly one outermost element!
 For example below is an invalid expression:
```javascript
 const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);
```
But this example is a valid expression:
```javascript
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```
- One special thing about ReactDOM.render() is that it only updates DOM
elements that have changed. React accomplishes this thanks to something called
the virtual DOM. [Link to Virtual DOM!](https://www.codecademy.com/articles/react-virtual-dom)

## Advanced JSX
- In JSX, you can’t use the word class for attribute. You have to use className
instead since JSX gets translated into JS and 'class' is a reserved word.
- In JSX, you have to include the slash for a self-closing tag. For example:
```javascript
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br>
      JENKINS IS MY NAME
      </br>
      THANKS HA LOT
    </article>
  </div>
);
```
- How to use curly braces in JSX:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<h1>{2 + 3}</h1>,
  document.getElementById('app')
);
```
The curly braces themselves won’t be treated as JSX nor as JavaScript. They are
**markers** that signal the beginning and end of a JavaScript injection into
JSX, similar to the quotation marks that signal the boundaries of a string.
- When writing JSX, it’s common to use variables to set attributes.
```javascript
const sideLength = "200px";
const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);
```
- Even listeners value should be a function and names are written in camelCase,
such as *onClick* or *onMouseOver*. Take a look at *event_listener.jsx* for a
goo understanding of it. All of the React supported events can be
found [HERE](https://reactjs.org/docs/events.html#supported-events)
- You can’t inject an if statement into JSX! But there are several ways to
go around it. The files *if_statement_v1.jsx* *if_statement_v2.jsx* and  
*if_statement_v3.jsx* show good examples.

- The array method .map() comes very hand in React. <li> items can be put into
an array and injected as JSX! Observe the behavior in *map_example.jsx*.
    - When you make a list in JSX, sometimes your list will need to include      something called keys. React uses them internally to keep track of lists.
    Not all lists need to have keys.
    - A list needs keys if either of the following are true:
        1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
        2. A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
- You can also write React code without using JSX at all by using
*React.createElement()*. The documentation can be found [here](https://reactjs.org/docs/react-api.html#react.createelement).
