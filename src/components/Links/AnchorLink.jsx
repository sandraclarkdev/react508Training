import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const AnchorLink = props => {
  const { href, classnames, children } = props;
  const scrollToId = () => {
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView(true);
      el.current.focus();
    }
  };

  if (classnames) {
    return (
      <div className={classnames}>
        {' '}
        <HashLink to={href} scroll={scrollToId(href)}>
          {children}
        </HashLink>
      </div>
    );
  }
  return (
    <HashLink to={href} scroll={scrollToId(href)}>
      {children}
    </HashLink>
  );
};

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
  classnames: PropTypes.string,
};

AnchorLink.defaultProps = {
  classnames: null,
};
export default AnchorLink;
