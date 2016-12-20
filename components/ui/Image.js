import React, { DOM } from 'react';

class Image extends React.Component {
  render() {
    const { src, width, height, alt } = this.props;
    return DOM.img(
      { 
        src: src, 
        width: width, 
        height: height, 
        alt: alt 
      }
    )
  }
}

export default Image;