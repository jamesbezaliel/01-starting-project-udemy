import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
  const [selectedTab, setSelectedTab] = useState('components');

  function handleClick(tabName) {
    // tabContent = <h3>{`You clicked the ${tabName} tab button!`}</h3>;
    setSelectedTab(tabName);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* not recommended */}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
            
            {/* least recommended */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {/* recommended */}
            {/* {
              CORE_CONCEPTS.map((concept) => (
                <CoreConcept 
                  key={concept.title}
                  title={concept.title}
                  description={concept.description}
                  image={concept.image}
                />
              ))
            } */}

            {/* pretty recommended */}
            {/* <CoreConcept2 concept={CORE_CONCEPTS[0]} />
            <CoreConcept2 concept={CORE_CONCEPTS[1]} />
            <CoreConcept2 concept={CORE_CONCEPTS[2]} />
            <CoreConcept2 concept={CORE_CONCEPTS[3]} /> */}

            {/* very recommended */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTab].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
