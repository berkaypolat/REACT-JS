## Mounting LifeCycle Methods
- Lifecycle methods are methods that get called at certain moments in a component’s life.
- You can write a lifecycle method that gets called right *before* a component
renders for the first time. You can write a lifecycle method that gets called
right *after* a component renders, *every time* except for the first time.
You can attach lifecycle methods to a lot of different moments in a component’s
life. This has powerful implications!
- There are 3 categories of lifecycle methods: **mounting, updating, and unmounting**.
#### Mounting Methods
- A component “mounts” when it renders for the first time. This is when
**mounting lifecycle** methods get called.
- There are three mounting lifecycle methods:
    1. componentWillMount - (When a component renders for the first time)
    2. render
    3. componentDidMount
When a component mounts, it automatically calls these three methods, in order.
- If you need to do something only the first time that a component renders,
then it’s probably a job for a mounting lifecycle method.
- If your React app uses AJAX to fetch initial data from an API,
then **componentDidMount** is the place to make that AJAX call. More generally,
componentDidMount is a good place to connect a React app to external applications,
such as web APIs or JavaScript frameworks. **componentDidMount** is also the
place to set timers using setTimeout or setInterval.
#### Updating Methods
- The first time that a component instance renders, it does not update. A
component updates every time that it renders, starting with the *second render*.
- There are five updating lifecycle methods:
    1. componentWillReceiveProps
    2. shouldComponentUpdate
    3. componentWillUpdate
    4. render
    5. componentDidUpdate
Whenever a component instance updates, it automatically calls all five of these methods, in order.
- When a component instance updates, **componentWillReceiveProps** gets called before the rendering begins.
As one might expect, componentWillReceiveProps only gets called if the component will receive props.
```javascript
// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
```
-  A common use of componentWillReceiveProps is when comparing incoming props
to current props or state, and deciding what to render based on that comparison.
- **shouldComponentUpdate** should return either true or false.
If **shouldComponentUpdate** returns true, then nothing noticeable happens.
But if shouldComponentUpdate returns false, then the component will not update.
None of the remaining lifecycle methods for that updating period will be called, including render.
- You cannot call 'this.setState' from the body of **componentWillUpdate!**.
The main purpose of componentWillUpdate is to interact with things outside of
the React architecture. If you need to do non-React setup before a component
renders, such as checking the window size or *interacting with an API*,
then componentWillUpdate is a good place to do that.
- When a component instance updates, **componentDidUpdate** gets called
after *any* rendered HTML has finished loading.
- **componentDidUpdate** is usually used for interacting with things
outside of the React environment, like the browser or APIs. It’s similar to
componentWillUpdate in that way, except that it gets called after render instead of before.

### Unmounting
- A component’s unmounting period occurs when the component is removed from the
 DOM. This could happen if the DOM is rerendered without the component, or if
 the user navigates to a different website or closes their web browser.
- **componentWillUnmount** gets called right before a component is removed
from the DOM. If a component initiates any methods that require cleanup, then
componentWillUnmount is where you should put that cleanup.
