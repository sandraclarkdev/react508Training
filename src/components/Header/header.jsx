import React from 'react';

import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

import URIS from 'libraries/constants/uri-constants';

const AppHeader = () => (
  <Header aria-label="508 React Training" id="virtual-cursor-top">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IQies">
      508 React Training
    </HeaderName>
    <HeaderNavigation aria-label="Main Navigation">
      <HeaderMenuItem element={Link} to="/">
        Home
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_PERCEIVABLE}>
        Perceivable
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_OPERABLE}>
        Operable
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_UNDERSTANDABLE}>
        Understandable
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_ROBUST}>
        Robust
      </HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);

export default AppHeader;
