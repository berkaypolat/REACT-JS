import React from 'react';
import ReactDOM from 'react-dom';

class DefaultProps extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

DefaultProps.defaultProps = {text: 'I am a button'}

ReactDOM.render(
  <DefaultProps />,
  document.getElementById('app')
);
