import React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink } from 'components/Links';

const AnchorLinks = props => {
  const { pageAnchors } = props;

  return (
    <nav>
      <ul id="top-of-content">
        {pageAnchors.map(item => {
          return (
            <li key={item.href}>
              <AnchorLink href={item.href}>{item.title}</AnchorLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

AnchorLinks.propTypes = {
  pageAnchors: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

AnchorLinks.defaultProps = {
  pageAnchors: [
    {
      href: '#overview',
      title: 'Overview',
    },
    { href: '#techniques', title: 'Techniques' },
    { href: '#general', title: 'General and HTML Techniques' },
    { href: '#aria', title: 'Aria Techniques' },
  ],
};
export default AnchorLinks;
