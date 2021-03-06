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

  return (
    <div className={classnames}>
      <HashLink to={href} scroll={scrollToId(href)}>
        {children}
      </HashLink>
    </div>
  );
};

AnchorLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  classnames: PropTypes.string,
};

AnchorLink.defaultProps = {
  classnames: null,
  children: null,
};
export default AnchorLink;
