import React from 'react';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';
import BlogItem from '../ui/BlogItem';
import BlogList from '../ui/BlogList';

const list = [
  {
    src: 'http://lorempixel.com/100/100/',
    text: 'Lorem ipsum dolor sit amet'
  },
  {
    src: 'http://lorempixel.com/100/100/',
    text: 'Consectetur adipisicing elit'
  },
  {
    src: 'http://lorempixel.com/100/100/',
    text: 'Sed do eiusmod tempor incididunt'
  } 
]

const DOM = React.DOM

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list }
  }  
  render() {
    const { list } = this.state
    return React.createElement(BlogList, { list })
  }   
}

export default BlogPage;