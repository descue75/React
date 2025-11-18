import { useState } from 'react';

import { EXAMPLES } from '../../data';
import type { ExampleKey } from '../../models/Example';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import './Examples.css';
import Tabs from '../Tabs/Tabs';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey>();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic)
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );

  function clickHandler(selectedButton: ExampleKey) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id='examples' title='Examples'>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => clickHandler('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => clickHandler('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => clickHandler('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => clickHandler('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
