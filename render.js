// const testStr = 'Hello!';

// console.log(testStr);
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// import PhonesContainer from './components/containers/PhonesContainer';
import PhonesContainer from './components/containers/BlogPage';

// const result = ReactDOMServer.renderToString(
//   React.createElement(PhonesContainer)
// );

const result = ReactDOMServer.renderToStaticMarkup(
  React.createElement(PhonesContainer)
);

// console.log(result);

export default result;