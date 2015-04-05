var converter = new Showdown.converter();

var textArea = {
  width: '50%',
  height: '595px',
  float: 'left',
  border: '1px solid'
}

var markdown = {
  border: '1px solid',
  height: '600px',
}

var container = {
  padding: '10px'
}

var heading = {
  fontWeight: 'bold',
  marginBottom: '20px'
}

var heading1 = {
  paddingLeft: '20%'
}

var heading2 = {
  paddingLeft: '48%'
}

var contentArea = {
  border: '2px solid'
}

var MarkdownEditor = React.createClass({displayName: "MarkdownEditor",
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: React.findDOMNode(this.refs.textarea).value});
  },
  render: function() {
    return (
      React.createElement("div", {style: container}, 
        React.createElement("div", {style: heading}, 
          React.createElement("span", {style: heading1}, "Text"), 
          React.createElement("span", {style: heading2}, "Markdown")
        ), 
        React.createElement("div", {style: contentArea}, 
          React.createElement("textarea", {
            onChange: this.handleChange, 
            ref: "textarea", 
            defaultValue: this.state.value, style: textArea}), 
          React.createElement("div", {
            className: "content", 
            dangerouslySetInnerHTML: {
              __html: converter.makeHtml(this.state.value)
            }, style: markdown})
        )
      )
    );
  }
});

React.render(React.createElement(MarkdownEditor, null), document.getElementById('example'));