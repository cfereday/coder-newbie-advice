import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types'

const   NewbieLinks = ({ description, url }) => {
  return (
    <button
      style={{background: `cornflowerblue`}}>
      <Link to={url} style={{ display: `block`, height: `100%`}}>
        {description}
      </Link>
    </button>
  )
}


NewbieLinks.propTypes = {
  LinkDescription: PropTypes.string,
  Url: PropTypes.PropTypes.string,
}

export default NewbieLinks
