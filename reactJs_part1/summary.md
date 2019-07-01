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
