import React, { DOM } from 'react';

class TextBox extends React.Component {
  render() { return (DOM.span(null, this.props.text)) }
}

export default TextBox;