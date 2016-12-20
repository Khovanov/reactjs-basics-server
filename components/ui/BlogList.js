import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  render() {
    const { list } = this.props;
    return (DOM.ul(
        {style: { listStyleType: 'none'} },
        _.map(
          list,
          (item, key) => (
            DOM.li(
              { key }, 
              React.createElement(BlogItem, { src: item.src, text: item.text })
            )
          )
        )
      )
    )
  }
}

export default BlogList;