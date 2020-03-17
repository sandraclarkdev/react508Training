import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import URIS from 'libraries/constants/uri-constants';
import { ExternalLink } from 'components/Links';

const PerceivableHome = () => {
  return (
    <Fragment>
      <h1>Perceivable Overview</h1>
      <p>
        For accessibility, Perceivable refers to the fact that content must be
        presentable in ways that they can perceive.
      </p>
      <p> Different people have different ways of discerning web content. </p>
      <p>
        A blind person needs to be able to perceive the content via audio.
        Consequently someone who is deaf needs to see it. What about someone who
        is blind and deaf? They need to be able to perceive the content via
        braille.
      </p>
      <p>
        If we structure our content correctly, we don&#39;t really need to worry
        about how someone accesses our content. There are multiple Assistive
        Technologies (known as AT) which will translate our content into the
        appropriate output for someone, but we need to make sure that our
        content can be used across those AT. We do that by making sure our
        content accords to specific guidelines.
      </p>
      <p>
        Perception isn&#39;t just about visual versus audio though, it also
        encompasses time for someone who might be slower at recognizing
        information and works to make sure that color and size is also not a
        barrier to entry.
      </p>

      <h2>Perceivable Guidelines</h2>
      <div className="overview-item">
        <p>
          <strong>
            <Link to={URIS.URI_PERCEIVABLE_TEXTALT}>1.1 Text Alternatives</Link>
          </strong>{' '}
          - Make sure that anything on the page that is not text can be changed
          to forms people need.
        </p>
        <p>
          <ExternalLink to="https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html">
            WCAG Understanding Non Text Content
          </ExternalLink>
        </p>
      </div>
      <div className="overview-item">
        <p>
          <strong>1.2 Time Based Media - (TBD)</strong> - Time based media is
          anything that is embedded on a website that moves, makes noise,
          displays content synchronized with another element of the site or
          displays content that changes without user input.{' '}
        </p>
        <p>
          <ExternalLink to="https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv.html">
            WCAG Understanding Time Based Media
          </ExternalLink>
        </p>{' '}
      </div>
      <div className="overview-item">
        <p>
          <strong>1.3 Adaptable (TBD)</strong> - Adaptable mainly means that
          content can be presented in different ways. It allows a user to know
          what the document structure of the content is and that{' '}
          <abbr
            title="Accessible Technology"
            aria-label="Accessible Technology"
          >
            AT
          </abbr>{' '}
          can read and present it as best for the user. Basically this involves
          using proper HTML structure for your content and the sequence the
          content is structured in allows it to be read correctly.
        </p>
        <p>
          <ExternalLink to="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation.html">
            WCAG Understanding Adaptable
          </ExternalLink>
        </p>{' '}
      </div>
      <div className="overview-item">
        <p>
          <strong>1.4 Distinguishable (TBD)</strong> - Distinguishable content
          is easier to work for all users. The focus is to make the content as
          easy to perceive such as making sure colors are able to be
          distinguished, and that for audio, foreground sounds are loud enough
          to be heard easily over background sounds.
        </p>
        <p>
          <ExternalLink to="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast.html">
            WCAG Understanding Distinguishable
          </ExternalLink>
        </p>
      </div>
    </Fragment>
  );
};

export default PerceivableHome;
