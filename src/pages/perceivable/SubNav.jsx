import React from 'react';
import {
  SideNavMenu,
  SideNavMenuItem,
  SideNavItems,
  SideNavItem,
  SideNavLink,
  SideNav,
} from 'carbon-components-react';

import URIS from 'libraries/constants/uri-constants';

const PerceivableSubNav = () => {
  return (
    <SideNav
      defaultExpanded
      isChildOfHeader={false}
      large
      aria-label="Perceivable Side"
    >
      <SideNavItems>
        <SideNavItem>Perceivable</SideNavItem>
        <SideNavLink href={URIS.URI_PERCEIVABLE}>Overview</SideNavLink>
        <SideNavMenu title="1.1 Text Alternatives">
          <SideNavMenuItem
            href={URIS.URI_PERCEIVABLE_TEXTALT}
            title="Understanding Text Alternatives"
          >
            Understanding Text Alternatives
          </SideNavMenuItem>
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_TEXTALT_NONTEXT}>
            1.1.1 Non-Text Content (A)
          </SideNavMenuItem>
        </SideNavMenu>

        <SideNavMenu title="1.3 Adaptable" role="menu">
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_ADAPTABLE}>
            Understanding Adaptable
          </SideNavMenuItem>
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}>
            1.3.1 Info and Relationships (A)
          </SideNavMenuItem>
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_ADAPTABLE_MEANINGFUL}>
            1.3.2 Meaningful Sequence (A)
          </SideNavMenuItem>
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_ADAPTABLE_SENSORY}>
            1.3.3 Sensory Characteristics (A)
          </SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu title="1.4 Distinguishable">
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}>
            Understanding Distinguishable
          </SideNavMenuItem>
          {/* <SideNavMenuItem href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_COLOR}>
            1.4.1 Use of Color (A)
          </SideNavMenuItem>
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_CONTRAST}>
            1.4.3 Contrast (Minimum) (AA)
          </SideNavMenuItem>
          <SideNavMenuItem href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_RESIZE}>
            1.4.4 Resize Text (AA)
          </SideNavMenuItem>
          <SideNavMenuItem
            href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_TEXTIMAGES}
          >
            1.4.5 Images of Text (AA)
          </SideNavMenuItem> */}
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  );
};

export default PerceivableSubNav;
