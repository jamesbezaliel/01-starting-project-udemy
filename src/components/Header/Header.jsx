import reactImage from '../../assets/react-core-concepts.png';
import "./Header.css";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function generateRandomText(max) {
  const randomIndex = Math.floor(Math.random() * (max + 1));
  return randomIndex;
}

export default function Header() {
  const generatedText = reactDescription[generateRandomText(reactDescription.length - 1)];
  return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {generatedText} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}