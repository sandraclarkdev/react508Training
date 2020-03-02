import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = props => {
  const { to, children } = props;
  return (
    <a href={to} target="blank" aria-describedby="openNewWindow">
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
};

export default ExternalLink;
