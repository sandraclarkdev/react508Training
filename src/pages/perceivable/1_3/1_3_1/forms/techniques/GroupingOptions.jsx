import React, { Fragment } from 'react';
import { ComboBox, MultiSelect } from 'carbon-components-react';
import CodeDisplay from 'components/Code/CodeDisplay';

const items = [
  { id: 'option-0', text: 'option 1', label: 'option 1' },
  { id: 'option-1', text: 'option 2', label: 'option 2' },
  { id: 'option-2', text: 'option 3', label: 'option 3' },
  { id: 'option-3', text: 'option 4', label: 'option 4' },
  { id: 'option-4', text: 'option 5', label: 'option 5' },
  { id: 'option-5', text: 'option 6', label: 'option 6' },
  { id: 'option-6', text: 'option 7', label: 'option 7' },
  { id: 'option-7', text: 'option 8', label: 'option 8' },
  { id: 'option-8', text: 'option 9', label: 'option 9' },
  { id: 'option-9', text: 'option 10', label: 'option 10' },
  { id: 'option-10', text: 'option 11', label: 'option 11' },
  { id: 'option-11', text: 'option 12', label: 'option 12' },
  { id: 'option-12', text: 'option 13', label: 'option 13' },
  { id: 'option-13', text: 'option 14', label: 'option 14' },
  { id: 'option-14', text: 'option 15', label: 'option 15' },
  { id: 'option-15', text: 'option 16', label: 'option 16' },
  { id: 'option-16', text: 'option 17', label: 'option 17' },
  { id: 'option-17', text: 'option 18', label: 'option 18' },
  { id: 'option-18', text: 'option 19', label: 'option 19' },
  { id: 'option-19', text: 'option 20', label: 'option 20' },
  { id: 'option-20', text: 'option 21', label: 'option 21' },
  { id: 'option-21', text: 'option 22', label: 'option 22' },
  { id: 'option-22', text: 'option 23', label: 'option 23' },
  { id: 'option-23', text: 'option 24', label: 'option 24' },
  { id: 'option-24', text: 'option 25', label: 'option 25' },
  { id: 'option-25', text: 'option 26', label: 'option 26' },
  { id: 'option-26', text: 'option 27', label: 'option 27' },
  { id: 'option-27', text: 'option 28', label: 'option 28' },
  { id: 'option-28', text: 'option 29', label: 'option 29' },
  { id: 'option-29', text: 'option 30', label: 'option 30' },
];

const GroupingOptions = () => {
  return (
    <Fragment>
      <h2>Long Select Options</h2>
      <p>
        While the original recommendation for long lists of items in a select
        control was to use the &lt;optgroup /&gt; tag, that really isn&apos;t
        feasible. There aren&apos;t any keyboard commands that work with it
        easily, especially for a sighted keyboard only user. A better solution
        is to use a combo box that allows a user to search (either a single or
        multi select)
      </p>
      <h3>Single Select</h3>
      <ComboBox
        name="options"
        id="optionSelect"
        items={items}
        titleText="Select an Option"
        itemToString={item => (item ? item.text : '')}
      />

      <p>
        In this example we are using the Carbon Design Combo Box to illustrate
        an accessible filterable component
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="Single Select usage"
      >{`
<ComboBox
  name="options"
  id="optionSelect"
  items={items}
  titleText="Select an Option"
  itemToString={item => (item ? item.text : '')}
/>
  `}</CodeDisplay>
      <h3>Multi Select</h3>
      <MultiSelect.Filterable
        items={items}
        itemToString={item => (item ? item.text : '')}
        titleText="Select Multiple Options"
      />
      <p>
        Within a multi select combo box you want to be mindful of a few things.{' '}
      </p>
      <ol>
        <li>
          Selections should be announced via an aria-live region for additions
          and removals
        </li>
        <li>Keyboard access is key for accessibility as well. </li>
      </ol>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="Multi Select usage"
      >{`
      <MultiSelect.Filterable
      items={items}
      itemToString={item => (item ? item.text : '')}
      titleText="Select Multiple Options"
    />
  `}</CodeDisplay>
    </Fragment>
  );
};
export default GroupingOptions;
