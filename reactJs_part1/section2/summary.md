## REACT JS - PART 1 (continued)
### this.props!!
- Information that gets passed from one component to another is known as “props.”
- Every component has something called props. A component’s props is an **object**. It holds information about that component.
- **props** is the name of the object that stores passed-in information. 'this.props' refers to that storage object. At the same time, each piece of passed-in information is called a 'prop'.
- You can pass information to a React component such as:
```javascript
<MyComponent foo="bar" />
<Example message="This is some top secret info." />
<Greeting myInfo={["top", "secret", "lol"]} />
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
```
The jsx file *props_displayer.jsx* shows a good example.

- So how do we pass props From Component To Component. This behavior can be
observed in greeting.jsx and display.jsx.

### Putting an Event Handler in a Component Class
- Usually we would like to pass functions as props such as event handlers.
One way you can achieve this is shown in button.jsx and talker.jsx.
    - If you notice in talker.jsx, <Button /> has an attribute named onClick, but it doesn’t do anything special. The name onClick does not create an event listener when used on <Button /> - it’s just an arbitrary attribute name.
    The reason for this is that <Button /> is not an HTML-like JSX element; it’s a **component instance**.
### this.props.children
- this.props.children will return everything in between a component’s opening and closing JSX tags. (Example in List.jsx, and ListDisplay.jsx)

### State
- Besides props and state, every value used in a component should always stay exactly the same. *SimpleState.jsx* shows how to set a component's initial state.
- The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. **.makeSomeFog()** is an example:
```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}
```
- You can’t call this.setState() from inside of the .render() method! this.setState() automatically calls .render(). If .render() calls this.setState(), then an infinite loop is created.
