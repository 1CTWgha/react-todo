import React, from 'react';
import './App.css';

class list extends componemt {
  constructor(props) {
    super(props);

      this.state = {

      };
  }
}

const ToDoList = React.createClass({
  render: function() {
    const todoItems = this.props.items.map(item => {
      return <ListItem item={item}></ListItem>
    });

    return (
      <ul>{todoItems}</ul>
    );
  }
});
