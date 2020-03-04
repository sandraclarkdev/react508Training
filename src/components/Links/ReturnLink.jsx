import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const ReturnLink = props => {
  const { children, href, returnText } = props;

  return (
    <span className="return-link">
      <Link to={href}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
        {` Return to ${returnText}`}
      </Link>
      <div>{children}</div>
    </span>
  );
};

ReturnLink.propTypes = {
  children: PropTypes.shape({}).isRequired,
  href: PropTypes.string.isRequired,
  returnText: PropTypes.string.isRequired,
};
export default ReturnLink;
