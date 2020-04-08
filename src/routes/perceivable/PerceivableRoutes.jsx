import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import { ReturnLink } from 'components/Links';

import PerceivableHome from 'pages/perceivable/PerceivableHome';
import AltText from 'pages/perceivable/1_1/AltText';
import NonTextOverview from 'pages/perceivable/1_1/1_1_1/NonTextOverview';

import AdaptableOverview from 'pages/perceivable/1_3/AdaptableOverview';
import InfoRelationships from 'pages/perceivable/1_3/1_3_1/InfoRelationships';
import MeaningfulSequence from 'pages/perceivable/1_3/1_3_2/MeaningfulSequence';
import SensoryOverview from 'pages/perceivable/1_3/1_3_3/SensoryOverview';
import { AdaptableInfoRoutes } from 'routes';

import DistinguishableOverview from 'pages/perceivable/1_4/DistinguishableOverview';
import UseOfColor from 'pages/perceivable/1_4/1_4_1/UseOfColor';
import MinimumContrast from 'pages/perceivable/1_4/1_4_3/MinimumContrast';
import ResizeText from 'pages/perceivable/1_4/1_4_4/ResizeText';
import TextImage from 'pages/perceivable/1_4/1_4_5/TextImage';

const PerceivableRoutes = () => {
  return (
    <Fragment>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT_NONTEXT}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_TEXTALT}
          returnText="1.1 Text Alternatives"
        >
          <NonTextOverview />
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
      <Route exact path={URIS.URI_PERCEIVABLE_ADAPTABLE_SENSORY}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_ADAPTABLE}
          returnText="Adaptable Overview"
        >
          <SensoryOverview />
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
      <Route exact path={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_COLOR}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}
          returnText="Distinguishable Overview"
        >
          <UseOfColor />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_CONTRAST}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}
          returnText="Distinguishable Overview"
        >
          <MinimumContrast />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_RESIZE}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}
          returnText="Distinguishable Overview"
        >
          <ResizeText />
        </ReturnLink>
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_TEXTIMAGES}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}
          returnText="Distinguishable Overview"
        >
          <TextImage />
        </ReturnLink>
      </Route>

      <Route exact path={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}>
        <ReturnLink
          href={URIS.URI_PERCEIVABLE}
          returnText="Perceivable Overview"
        >
          <DistinguishableOverview />
        </ReturnLink>
      </Route>

      <Route exact path={URIS.URI_PERCEIVABLE}>
        <PerceivableHome />
      </Route>
    </Fragment>
  );
};
export default PerceivableRoutes;
