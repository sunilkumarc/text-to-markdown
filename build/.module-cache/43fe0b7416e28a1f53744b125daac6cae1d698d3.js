var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name)
    document.getElementById('example');
  }
});

React.render(React.createElement(HelloMessage, {name: "John"}), mountNode);