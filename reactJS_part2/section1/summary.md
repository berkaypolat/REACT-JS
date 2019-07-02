### Stateless Components From Stateful Components
- For detailed implementation, take a look at 'Parent.jsx' and 'Child.jsx'. It
is important to note that rendering is the only way for a component to pass
props to another component.
- Don't Update props!! A component should never update 'this.props'.
    - **A React component should use props to store information that can be
    changed, but can only be changed by a different component.**
    - **A React component should use state to store information that the
    component itself can change.**
### Child Components Updating Their Parent's State
- A stateless, child component can also update the state of the parent component.
A great example with a tricky event object using event handler can be studied
on *Main.jsx*, and *SubChild.jsx*.
        + A common problem when passing down an event handler in React is forgetting
        that all event handlers pass an *event object* as an argument.
        + In our particular example, we defined a new function that extracted the
        desired parameter from the '<select>' tag.

### Child Components Updating Sibling Components
- One of the common React coding patterns make use of changing the parent's
component state by a child component and display that changed state in another
sibling's component. Check out the *sibling_update* directory for a good example!. 
