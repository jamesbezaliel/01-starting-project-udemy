export default function TabButton({ children, onSelect, isSelected }) {

  // use it here if you don't want to pass it from App.jsx (such as go to another page)
  // function handleClick() {
  //   console.log(`You clicked the ${children} tab button!`);
  // }

  return (<li><button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button></li>);
}