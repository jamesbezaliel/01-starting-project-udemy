import { EXAMPLES } from '../data.js';
import TabButton from '../components/TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import {useState} from 'react';

export default function Examples() {
  // we use state to keep track of which tab is selected
  // useState is one of the built-in hooks that React provides (it is used to handle state in functional components)
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(tabName) {
    setSelectedTab(tabName);
  }

  // third approach
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTab) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTab].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <Section id='examples' title="Examples">
      <Tabs 
      // this is crucial because if we set lowercase in the attribute name, it will be treated as a regular parameter/prop
      // instead we wanna use uppercase to set up component types dynamically
        // ButtonsContainer="menu"

        // (note (case): if there are 3 different tabs with 2 ButtonsContainer with the same value
        // just use default value for the 2 Tabs, then use "ButtonsContainer" for the 3rd Tabs only)
        buttons={
          <>
          {/* add tab buttons custom component */}
          <TabButton isSelected={selectedTab === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTab === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTab === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </>
        }>
        {tabContent}
      </Tabs>
      
      {/* EXAMPLES is taken from ./data.js */}
      
      {/* first approach */}
      {/* {!selectedTab ? <p>Please select a topic.</p> : null}
      {selectedTab ? (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTab].code}
            </code>
          </pre>
        </div>
      ) : null } */}
      
      {/* second approach */}
      {/* {!selectedTab ? <p>Please select a topic.</p> : 
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTab].code}
            </code>
          </pre>
        </div>
      } */}

      {/* third approach */}
      {/* {tabContent} */}

    </Section>
  );
}