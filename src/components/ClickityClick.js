import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }


  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
        <button onClick={() => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  }}>Click Me</button>
      </div>
    );
  }
}

export default ClickityClick;