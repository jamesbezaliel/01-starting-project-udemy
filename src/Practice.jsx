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

// PELAJARI LAGI (latihan coding 15)

// import Button from './Button';
// import HomeIcon from './HomeIcon';
// import PlusIcon from './PlusIcon';

// function App() {
//   return (
//      <div id="app">
//       <section>
//         <h2>Filled Button (Default)</h2>
//         <p>
//           <Button>Default</Button>
//         </p>
//         <p>
//           <Button mode="filled">Filled (Default)</Button>
//         </p>
//       </section>
//       <section>
//         <h2>Button with Outline</h2>
//         <p>
//           <Button mode="outline">Outline</Button>
//         </p>
//       </section>
//       <section>
//         <h2>Text-only Button</h2>
//         <p>
//           <Button mode="text">Text</Button>
//         </p>
//       </section>
//       <section>
//         <h2>Button with Icon</h2>
//         <p>
//           <Button Icon={HomeIcon}>Home</Button>
//         </p>
//         <p>
//           <Button Icon={PlusIcon} mode="text">
//             Add
//           </Button>
//         </p>
//       </section>
//       <section>
//         <h2>Buttons Should Support Any Props</h2>
//         <p>
//           <Button mode="filled" disabled>
//             Disabled
//           </Button>
//         </p>
//         <p>
//           <Button onClick={() => console.log('Clicked!')}>Click me</Button>
//         </p>
//       </section>
//     </div>
//   );
// }

// export default App;


// export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
//   let cssClass = `button ${mode}-button`;
 
//   if (Icon) {
//     cssClass += ' icon-button';
//   }
 
//   if (className) {
//     cssClass += ' ' + className;
//   }

  
//  return (
//         <button className={cssClass} {...props}>
//         {Icon && (
//             <span className="button-icon"><Icon /></span>
//         )}
//         <span>{children}</span>
//         </button>
//      );
// }


// kunci Jawaban
// export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
//   let cssClasses = `button ${mode}-button`;
 
//   if (Icon) {
//     cssClasses += ' icon-button';
//   }
 
//   if (className) {
//     cssClasses += ' ' + className;
//   }
 
//   return (
//     <button className={cssClasses} {...props}>
//       {Icon && (
//         <span className="button-icon">
//           <Icon />
//         </span>
//       )}
//       <span>{children}</span>
//     </button>
//   );
// }