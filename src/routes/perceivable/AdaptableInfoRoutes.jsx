import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import { ReturnLink } from 'components/Links';

import CSSOverview from 'pages/perceivable/1_3/1_3_1/css';
import SemanticOverview from 'pages/perceivable/1_3/1_3_1/semantic';
import RegionOverview from 'pages/perceivable/1_3/1_3_1/regions';
import HeadingOverview from 'pages/perceivable/1_3/1_3_1/headings';
import ControlOverview from 'pages/perceivable/1_3/1_3_1/controls';
import TableOverview from 'pages/perceivable/1_3/1_3_1/tables';
import FormOverview from 'pages/perceivable/1_3/1_3_1/forms';
import ListOverview from 'pages/perceivable/1_3/1_3_1/lists';
import TextOverview from 'pages/perceivable/1_3/1_3_1/text';

const AdaptableInfoRoutes = () => {
  return (
    <ReturnLink
      href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
      returnText="Info and Relationships"
    >
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_SEMANTIC}>
        <SemanticOverview />
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_CSS}>
        <CSSOverview />
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_REGIONS}>
        <RegionOverview />
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_HEADINGS}>
        <HeadingOverview />
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_CONTROLS}>
        <ControlOverview />
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_TABLES}>
        <TableOverview />
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_FORMS}>
        <FormOverview />
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_LISTS}>
        <ListOverview />
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_TEXT}>
        <TextOverview />
      </Route>
    </ReturnLink>
  );
};
export default AdaptableInfoRoutes;
