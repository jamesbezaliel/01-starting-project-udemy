import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import {useState} from 'react';

function App() {

  return (
    // in the last lecture, we always use this "div" tag to wrap the whole content, but it's actually not necessary
    // <div>
    // thus we just remove it and use React Fragment instead (shorthand syntax), like below
    <>
      {/* each file is responsible to render 1 component */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
