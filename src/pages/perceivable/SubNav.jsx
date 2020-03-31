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
      <SideNavItems role="menu">
        <SideNavItem>Perceivable</SideNavItem>
        <SideNavLink href={URIS.URI_PERCEIVABLE}>Overview</SideNavLink>
        <SideNavMenu title="1.1 Text Alternatives" defaultExpanded isActive>
          <SideNavMenuItem
            href={URIS.URI_PERCEIVABLE_TEXTALT}
            title="Understanding Text Alternatives"
          >
            Understanding Text Alternatives
          </SideNavMenuItem>
          <SideNavMenuItem
            href={URIS.URI_PERCEIVABLE_TEXTALT_NONTEXT}
            title="Non Text Content"
          >
            1.1.1 Non-Text Content (A)
          </SideNavMenuItem>
        </SideNavMenu>

        {/* <SideNavMenu title="1.2 Time Based Media (TBD)">
          <SideNavMenuItem href="javascript:void(0)">
            Understanding Time Based Media (TBD)
          </SideNavMenuItem>
        </SideNavMenu> */}
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
        {/* <SideNavMenu title="1.4 Distinguishable (TBD)">
          <SideNavMenuItem href="javascript:void(0)">
            Understanding Distinguishable
          </SideNavMenuItem>
        </SideNavMenu> */}
      </SideNavItems>
    </SideNav>
  );
};

//           <Link to=
//           </Link>
//         </li>
//         <li className="section-header">
//           <Link to={URIs.URI_PERCEIVABLE_ADAPTABLE}>1.3 Adaptable</Link>
//           <ul>
//             <li>
//               <Link>1.3.1 Info and Relationships (A)</Link>
//             </li>
//             <li>
//               <Link>1.3.2 Meaningful Sequence (A)</Link>
//             </li>
//             <li>
//               <Link>1.3.3 Sensory Characteristics</Link>
//             </li>
//           </ul>
//         </li>
//         <li className="section-header">
//           <Link to={URIs.URI_PERCEIVABLE_DISTINGUISHABLE}>
//             1.4 Distinguishable{' '}
//           </Link>
//           <ul>
//             <li>
//               <Link>1.4.1 Use of Color (A)</Link>
//             </li>
//             <li>
//               <Link>1.4.2 Audio Control (A)</Link>
//             </li>
//             <li>
//               <Link>1.4.3 Contrast (Minimum) (AA)</Link>
//             </li>
//             <li>
//               <Link>1.4.4 Resize Text (AA)</Link>
//             </li>
//             <li>
//               <Link>1.4.5 Images of TExt (AA)</Link>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default PerceivableSubNav;
