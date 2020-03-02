import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

const GlobalNavButton = props => {
  const { navItem } = props;
  const { title, id, subNav } = navItem;

  const { buttonProps, itemProps, isOpen } = useDropdownMenu(subNav.length);

  const SubNavLink = subNavProps => {
    const { item, index } = subNavProps;
    const subNavItemProps = itemProps[`${index}`];
    return (
      <Link {...subNavItemProps} key={`Link-${item.id}`} to={item.link}>
        {item.title}
      </Link>
    );
  };

  return (
    <Fragment>
      <li>
        {subNav && (
          <Fragment>
            <button
              {...buttonProps}
              type="button"
              id={`menu-button-${id}`}
              className="global-nav-menu nav-link btn btn-link"
            >
              <span>{title}</span>
            </button>
            <div
              role="menu"
              id={`menu-${id}`}
              className={classnames('menu', {
                visible: isOpen,
              })}
            >
              <ul>
                {subNav.map((item, index) => (
                  <li key={item.id}>
                    <SubNavLink item={item} index={index} />
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        )}
      </li>
    </Fragment>
  );
};

GlobalNavButton.propTypes = {
  navItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    subNav: PropTypes.shape({
      length: PropTypes.number.isRequired,
      map: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};
GlobalNavButton.defaultProps = {};
export default GlobalNavButton;
