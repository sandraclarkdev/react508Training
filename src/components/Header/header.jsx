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
      <HeaderMenuItem element={Link} to="/" role="menuitem">
        Home
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_PERCEIVABLE} role="menuitem">
        Perceivable
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_OPERABLE} role="menuitem">
        Operable
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_UNDERSTANDABLE} role="menuitem">
        Understandable
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to={URIS.URI_ROBUST} role="menuitem">
        Robust
      </HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);

export default AppHeader;
