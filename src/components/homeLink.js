import React from 'react';
import { Link } from 'gatsby';

const  HomeLink = ({}) => {
  return (
    <button
      style={{background: `Lavender`}}>
      <Link to="/" style={{ display: `block`, height: `100%`}}>
        Go back to the homepage
      </Link>
    </button>
  )
}

export default HomeLink
