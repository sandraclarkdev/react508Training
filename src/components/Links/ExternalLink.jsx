import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ExternalLink = props => {
  const { to, children } = props;
  return (
    <a href={to} target="blank" aria-describedby="openNewWindow">
      {children}{' '}
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </a>
  );
};

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    .isRequired,
};

export default ExternalLink;
