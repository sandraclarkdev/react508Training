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
    <Fragment>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_SEMANTIC}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <SemanticOverview />
        </ReturnLink>
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_CSS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <CSSOverview />
        </ReturnLink>
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_REGIONS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <RegionOverview />
        </ReturnLink>
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_HEADINGS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <HeadingOverview />
        </ReturnLink>
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_CONTROLS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <ControlOverview />
        </ReturnLink>
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_TABLES}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <TableOverview />
        </ReturnLink>
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_FORMS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <FormOverview />
        </ReturnLink>
      </Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_LISTS}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <ListOverview />
        </ReturnLink>
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_TEXT}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}
          returnText="Info and Relationships"
        >
          <TextOverview />
        </ReturnLink>
      </Route>
    </Fragment>
  );
};
export default AdaptableInfoRoutes;
