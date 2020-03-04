import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import { ReturnLink } from 'components/Links';

import PerceivableHome from 'pages/perceivable/PerceivableHome';
import PerceivableTextAlt from 'pages/perceivable/1_1/PerceivableTextAlt';
import H1Example from 'pages/perceivable/1_1/1_1_1/H1Example';
import H2Example from 'pages/perceivable/1_1/1_1_1/H2Example';
import H3Example from 'pages/perceivable/1_1/1_1_1/H3Example';

const PerceivableRoutes = () => {
  return (
    <Fragment>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT_SHORT}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_TEXTALT}
          returnText="1.1 Text Alternatives"
        >
          <H1Example />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT_LONG}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_TEXTALT}
          returnText="1.1 Text Alternatives"
        >
          <H2Example />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT_CONTROLS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_TEXTALT}
          returnText="1.1 Text Alternatives"
        >
          <H3Example />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE}
          returnText="Perceivable Overview"
        >
          <PerceivableTextAlt />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE}>
        <ReturnLink href="/" returnText="Home">
          <PerceivableHome />
        </ReturnLink>
      </Route>
    </Fragment>
  );
};
export default PerceivableRoutes;
