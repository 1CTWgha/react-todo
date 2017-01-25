const myApp = React.Class({
  render: function() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
});


const ListItem = React.createClass({
  render: function() {
    return <li> Item </li>;
  }
});

const ToDoList = React.createClass({
  render: function() {
    return (
      <ul>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </ul>
    );
  }
});

const MyApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1>React ToDo List</h1>
      </div>
    );
  }
});

export default ToDoList;
