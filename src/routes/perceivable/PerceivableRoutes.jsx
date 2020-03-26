import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import { ReturnLink } from 'components/Links';

import PerceivableHome from 'pages/perceivable/PerceivableHome';
import AltText from 'pages/perceivable/1_1/AltText';
import NonText from 'pages/perceivable/1_1/1_1_1/NonText';
import AdaptableOverview from 'pages/perceivable/1_3/AdaptableOverview';
import InfoRelationships from 'pages/perceivable/1_3/1_3_1/InfoRelationships';
import MeaningfulSequence from 'pages/perceivable/1_3/1_3_2/MeaningfulSequence';
import { AdaptableInfoRoutes } from 'routes';

const PerceivableRoutes = () => {
  return (
    <Fragment>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT_NONTEXT}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_TEXTALT}
          returnText="1.1 Text Alternatives"
        >
          <NonText />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE}
          returnText="Perceivable Overview"
        >
          <AltText />
        </ReturnLink>
      </Route>
      <AdaptableInfoRoutes />
      <Route exact path={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE}
          returnText="Adaptable Overview"
        >
          <InfoRelationships />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_ADAPTABLE_MEANINGFUL}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE}
          returnText="Adaptable Overview"
        >
          <MeaningfulSequence />
        </ReturnLink>
      </Route>

      <Route exact path={URIS.URI_PERCEIVABLE_ADAPTABLE}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE}
          returnText="Perceivable Overview"
        >
          <AdaptableOverview />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE}>
        <PerceivableHome />
      </Route>
    </Fragment>
  );
};
export default PerceivableRoutes;
