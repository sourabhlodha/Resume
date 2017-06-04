import React from 'react';
import Button from '../../../shared/Button';

const HomePageContent = ({title}) => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Hello, world! {title}</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <p>
        <Button title="Button title" link="https://www.google.com" type="btn-lg" />
      </p>
    </div>
  </div>
);

export default HomePageContent;