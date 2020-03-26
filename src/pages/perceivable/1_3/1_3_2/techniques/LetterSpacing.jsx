import React, { Fragment } from 'react';
import CodeDisplay from 'components/Code/CodeDisplay';

const LetterSpacing = () => {
  return (
    <Fragment>
      <p>
        There are two related items when trying to space letters. One is to
        space letters with CSS to allow{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to continue to read the words and not the individual letters. The second
        is to have{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        read individual letters while having the letters together. This would
        typically be done when detailing fileformats, some which are read out as
        words (wav should be read as wave), others as letters (jpg as j p g).{' '}
      </p>
      <h2>Usng CSS for Letter Spacing</h2>
      <p>
        Sometimes it is necessary to space letters wider than normal, while
        still retaining the ability to have the entire word read out as usual.
        In this situation, do not use spaces to separate the letters, since that
        will cause{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to read out the individual letters rather than the word.
      </p>
      <p>
        DON&apos;T space out words with spaces:{' '}
        <strong>
          F&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;E&nbsp;&nbsp;L&nbsp;&nbsp;P&nbsp;&nbsp;&nbsp;H&nbsp;E&nbsp;R&nbsp;E
        </strong>
      </p>
      <p>
        DO use CSS letter-spacing to space out words if necessary:{' '}
        <span className="wide-spacing">
          <strong>FIND HELP HERE</strong>
        </span>
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="Using CSS Letter Spacing"
      >{`
      <p>
      DON'&apos;'T space out words with spaces:{' '}
      <strong>
        F&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;D&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;E&nbsp;&nbsp;L&nbsp;&nbsp;P&nbsp;&nbsp;&nbsp;H&nbsp;E&nbsp;R&nbsp;E
      </strong>
    </p>

    <p>
      DO use CSS letter-spacing to space out words if necessary:{' '}
      <span className="wide-spacing">
        <strong>FIND HELP HERE</strong>
      </span>
    </p>

      `}</CodeDisplay>
      <p>
        It&apos;s pretty easy to see how much more readable (and maintainable)
        the CSS styling is.
      </p>
      <h2>Spacing letters for Assistive Technology</h2>
      <p>
        In this case, there will be situations where we want the letters to stay
        together for visual user's and be understandable for{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>
        . A common situation in this case would be to show supported file
        formats under a file upload.
      </p>
      <h3>Supported File Formats Example</h3>
      <input
        type="file"
        id="attachment"
        name="attachment"
        aria-label="choose file to upload"
        aria-describedby="attachmentDescription"
      />
      <div>
        <p className="supporting-text" aria-hidden="true">
          Supported file formats PDF (.pdf), Word (.doc, .docx), Excel (.xls,
          .xlsx, .csv), Text files (.txt, .rtf), Image files (.jpeg, .jpg, .png,
          .tif, .tiff), Video files (.mp4, .mov, .wmv, .3gp), and Audio files
          (.mp3, .aac, .wav, .wma).
        </p>
        <p className="sr-only" id="attachmentDescription">
          Supported file formats: PDF (.p d f), Word (.d o c, .d o c x), Excel
          (.x l s, .x l s x, .c s v), Text files (.t x t, .r t f), Image files
          (.j peg, .j p g, .p n g, .t i f, .t i f f), Video files (.m p 4, .m o
          v, .w m v, .3 g p), and Audio files (.m p 3, .a a c, .wave, .w m a).
        </p>
      </div>
      <p>
        In this example we actually have two paragraphs, one which is visual
        (but hidden from AT) and the other one is only available to AT via the
        aria-described attribute on the input. Note in the Code that certain
        words are spelled out in a way that allows AT to pronounce properly,
        while other items which need to have the letters spelled out includes
        appropriate spacing.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="spacing letters for screen readers"
      >{`
<input
  type="file"
  id="attachment"
  name="attachment"
  aria-label="choose file to upload"
  aria-describedby="attachmentDescription"
/>
<div>
  <p className="supporting-text" aria-hidden="true">
    Supported file formats PDF (.pdf), Word (.doc, .docx), Excel (.xls,
    .xlsx, .csv), Text files (.txt, .rtf), Image files (.jpeg, .jpg, .png,
    .tif, .tiff), Video files (.mp4, .mov, .wmv, .3gp), and Audio files
    (.mp3, .aac, .wav, .wma).
  </p>
  <p className="sr-only" id="attachmentDescription">
    Supported file formats: PDF (.p d f), Word (.d o c, .d o c x), Excel
    (.x l s, .x l s x, .c s v), Text files (.t x t, .r t f), Image files
    (.j peg, .j p g, .p n g, .t i f, .t i f f), Video files (.m p 4, .m o
    v, .w m v, .3 g p), and Audio files (.m p 3, .a a c, .wave, .w m a).
  </p>
</div>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default LetterSpacing;
