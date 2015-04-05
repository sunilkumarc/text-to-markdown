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

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: 'Yo, *Bitch* !'};
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
          <div style={markdown_container}>
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(this.state.value)
            }} style={markdown}/>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<MarkdownEditor />, document.getElementById('example'));