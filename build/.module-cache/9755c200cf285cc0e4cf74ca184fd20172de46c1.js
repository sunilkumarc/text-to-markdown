var converter = new Showdown.converter();

var textArea = {
  color: 'blue',
  display: 'inline'
};

var MarkdownEditor = React.createClass({displayName: "MarkdownEditor",
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  
  handleChange: function() {
    this.setState({value: React.findDOMNode(this.refs.textarea).value});
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "Input"), 
        React.createElement("textarea", {
          onChange: this.handleChange, 
          ref: "textarea", 
          defaultValue: this.state.value, style: textArea}), 
        
        React.createElement("h3", null, "Output"), 
        React.createElement("div", {
          className: "content", 
          dangerouslySetInnerHTML: {
            __html: converter.makeHtml(this.state.value)
          }}
        )
      )
    );
  }
});

React.render(React.createElement(MarkdownEditor, null), document.getElementById('example'));