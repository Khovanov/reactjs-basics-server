import React, { DOM } from 'react';

import Image from './Image';
import TextBox from './TextBox';

class BlogItem extends React.Component {
  render() {
    const { src, text } = this.props;
    return (DOM.div(
        null,
        [
          React.createElement(Image, 
            { 
              src: src, 
              width: '100px', 
              height: '100px', 
              alt: 'Image' 
            } 
          ),
          React.createElement(TextBox, { text: text })
        ]
      )
    )
  } 
}

export default BlogItem;