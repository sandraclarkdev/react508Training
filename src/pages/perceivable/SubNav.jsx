import React from 'react';
import { Link } from 'react-router-dom';

import URIs from 'libraries/constants/uri-constants';

const PerceivableSubNav = () => {
  return (
    <nav className="page-nav">
      <ul className="list-group list-group-flush">
        <li className="section-header">
          <Link to={URIs.URI_PERCEIVABLE}>Perceivable Overview</Link>
        </li>
        <li>
          <Link to={URIs.URI_PERCEIVABLE_TEXTALT}>1.1 Text Alternatives </Link>
        </li>
        <li className="section-header">
          <Link to={URIs.URI_PERCEIVABLE_TIMEBASE}>
            1.2 Time Based Media (TBD)
          </Link>
        </li>
        <li className="section-header">
          <Link to={URIs.URI_PERCEIVABLE_ADAPTABLE}>1.3 Adaptable</Link>
          <ul>
            <li>
              <Link>1.3.1 Info and Relationships (A)</Link>
            </li>
            <li>
              <Link>1.3.2 Meaningful Sequence (A)</Link>
            </li>
            <li>
              <Link>1.3.3 Sensory Characteristics</Link>
            </li>
          </ul>
        </li>
        <li className="section-header">
          <Link to={URIs.URI_PERCEIVABLE_DISTINGUISHABLE}>
            1.4 Distinguishable{' '}
          </Link>
          <ul>
            <li>
              <Link>1.4.1 Use of Color (A)</Link>
            </li>
            <li>
              <Link>1.4.2 Audio Control (A)</Link>
            </li>
            <li>
              <Link>1.4.3 Contrast (Minimum) (AA)</Link>
            </li>
            <li>
              <Link>1.4.4 Resize Text (AA)</Link>
            </li>
            <li>
              <Link>1.4.5 Images of TExt (AA)</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default PerceivableSubNav;
