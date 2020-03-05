import React from 'react';
import { Link } from 'react-router-dom';
import URIS from 'libraries/constants/uri-constants';

import GlobalNavButton from 'components/nav/GlobalNavButton';

const perceivableNav = [
  {
    title: 'Perceivable Overview',
    id: '1.0',
    link: URIS.URI_PERCEIVABLE,
  },
  {
    title: '1.1 Text Alternatives',
    id: '1.1',
    link: URIS.URI_PERCEIVABLE_TEXTALT,
  },
  {
    title: '1.2 Time Based Media',
    id: '1.2',
    link: URIS.URI_PERCEIVABLE_TIMEBASE,
  },
  { title: '1.3 Adaptable', id: '1.3', link: URIS.URI_PERCEIVABLE_ADAPTABLE },
  {
    title: '1.4 Distinguishable',
    id: '1.4',
    link: URIS.URI_PERCEIVABLE_DISTINGUISHABLE,
  },
];

const operableNav = [
  {
    title: 'Operable Overview',
    id: '2.0',
    link: URIS.URI_OPERABLE,
  },
  {
    title: '2.1 Keyboard',
    id: '2.1',
    link: URIS.URI_OPERABLE_KEYBOARD,
  },
  { title: '2.2 Enough Time', id: '2.2', link: URIS.URI_OPERABLE_TIME },
  { title: '2.3 Seizures', id: '2.3', link: URIS.URI_OPERABLE_SEIZURE },
  {
    title: '2.4 Navigable',
    id: '2.4',
    link: URIS.URI_PERCEIVABLE_DISTINGUISHABLE,
  },
];

const understandableNav = [
  {
    title: 'Understandable Overview',
    id: '3.0',
    link: URIS.URI_UNDERSTANDABLE,
  },
  {
    title: '3.1 Readable',
    id: '3.1',
    link: URIS.URI_UNDERSTANDABLE_READABLE,
  },
  {
    title: '3.2 Predictable',
    id: '3.2',
    link: URIS.URI_UNDERSTANDABLE_PREDICTABLE,
  },
  {
    title: '3.3 Input Assistance',
    id: '3.3',
    link: URIS.URI_UNDERSTANDABLE_INPUT,
  },
];

const robustNav = [
  {
    title: 'Robust Overview',
    id: '4.0',
    link: URIS.URI_ROBUST,
  },
  { title: '4.1 Compatible', id: '4.1', link: URIS.URI_ROBUST_COMPATIBLE },
];
const navArray = [
  {
    title: '1-Perceivable',
    id: '1',
    subNav: perceivableNav,
    link: URIS.URI_PERCEIVABLE,
  },
  {
    title: '2-Operable',
    id: '2',
    subNav: operableNav,
    link: URIS.URI_OPERABLE,
  },
  {
    title: '3-Understandable',
    id: '3',
    subNav: understandableNav,
    link: URIS.URI_UNDERSTANDABLE,
  },
  { title: '4-Robust', subNav: robustNav, link: URIS.URI_UNDERSTANDABLE },
];

const MainNav = () => {
  return (
    <nav  id="virtual-cursor-top" tabIndex="-1" className="global col-12">
      <ul>
        <li>
          <Link className="global-nav-menu nav-link btn btn-link" to="/">
            Home
          </Link>
        </li>
        {navArray.map(item => (
          <GlobalNavButton key={item.id} navItem={item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
