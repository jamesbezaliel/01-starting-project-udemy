import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
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
    <div>
      {/* each file is responsible to render 1 component */}
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
            {/* this concept will now be executed by JS for EVERY item in the array, and we'll get the item
            for every execution as a VALUE for this parameter */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}

            {/* recommendation from instructor */}
            
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* add tab buttons custom component */}
            <TabButton isSelected={selectedTab === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTab === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          
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
          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;


// Latihan Coding 10
export function ExerciseConditionalContent() {
    const [warning, setWarning] = React.useState();
    
    function handleWarning(selectedWarning) {
        setWarning(selectedWarning);
    }
    
    let warningData = 
        <button onClick={() => {handleWarning("Delete")}}>Delete</button>
      
      if(warning == 'Proceed') {
          warningData = 
          <div>
            <button onClick={() => {handleWarning("Delete")}}>Delete</button>
          </div>
      } else if (warning == 'Delete') {
        warningData = <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => {handleWarning("Proceed")}}>Proceed</button>
        </div>
      }
    
    return (
        <div>
            {warningData}
        </div>
    );
}

// kunci jawaban latihan coding 10
// don't change the Component name "App"
export function Jawaban1() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
    
    function proceedHandler() {
        setIsDeleting(false);
    }
    
    return (
      <div>
        {isDeleting ? <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div> : ''}
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}

// latihan coding 11
export function Styling() {
    const [isClicked, setIsClicked] = useState(false);
    
    
    function handleButton() {
        setIsClicked(true);
    }
    
    return (
        <div>
            <p>Style me!</p>
            <button onClick={handleButton} className={isClicked ? 'active' : ''}>Toggle style</button>
        </div>
    );
}

import React from 'react';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export function DynamicListContent() {
  return (
    <ul>
        {DUMMY_TODOS.map((todoItem) => (
            <Todo text={todoItem} />
        ))}
    </ul>   
  );
}
