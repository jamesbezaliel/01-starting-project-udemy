import CoreConcept from '../components/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
  return (
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {/* first 3 rows are static */}
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

          {/* pretty recommended */}
          {/* <CoreConcept2 concept={CORE_CONCEPTS[0]} />
          <CoreConcept2 concept={CORE_CONCEPTS[1]} />
          <CoreConcept2 concept={CORE_CONCEPTS[2]} />
          <CoreConcept2 concept={CORE_CONCEPTS[3]} /> */}

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

          {/* very recommended */}
          {/* this concept will now be executed by JS for EVERY item in the array, and we'll get the item
          for every execution as a VALUE for this parameter */}
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}

          {/* recommendation from instructor */}
          
        </ul>
      </section>
  );
}