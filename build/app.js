var converter = new Showdown.converter();

var textArea = {
  width: '50%',
  height: '650px',
  float: 'left',
  borderRight: '2px solid',
  fontFamily: 'Roboto',
  fontSize: '1.1em',
  paddingLeft: '0.5%',
  paddingTop: '0.5%',
  borderBottom: '2px solid',
  borderTop: '0px'
}

var markdown = {
  height: '650px',
  fontFamily: 'Roboto',
  fontSize: '1.1em',
  paddingLeft: '1%',
  marginTop: '-1%'
}

var container = {

}

var heading = {
  fontWeight: 'bold',
  fontSize: '1.2em',
  backgroundColor: '#fff',
  border: '2px solid',
  borderBottom: '0px',
  padding: '10px'
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

var markdown_container = {
  overflow: 'auto',
  backgroundColor: '#fff'
}

var MarkdownEditor = React.createClass({displayName: "MarkdownEditor",
  getInitialState: function() {
    return {value: 'Yo, *Bitch* !'};
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
          React.createElement("div", {style: markdown_container}, 
          React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: converter.makeHtml(this.state.value)
            }, style: markdown})
          )
        )
      )
    );
  }
});

React.render(React.createElement(MarkdownEditor, null), document.getElementById('example'));