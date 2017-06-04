import React from 'react';

const Button = ({title, link, type}) => (
  <button className={`btn btn-primary ${type}`}  href={link} role="button">{title}</button>
);

export default Button;