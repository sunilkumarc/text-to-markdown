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

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: React.findDOMNode(this.refs.textarea).value});
  },
  render: function() {
    return (
      <div style={container}>
        <div style={heading}>
          <span style={heading1}>Text</span>
          <span style={heading2}>Markdown</span>
        </div>
        <div style={contentArea}>
          <textarea
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value} style={textArea}/>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(this.state.value)
            }} style={markdown}/>
        </div>
      </div>
    );
  }
});

React.render(<MarkdownEditor />, document.getElementById('example'));