import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx';
import randomCharacter from './mocks/characters.js';

const year = new Date();
const character = randomCharacter();

function App() {
  return (
    <div>
      <Header title="Tema 05" subtitle="Práctica 01" />

      <main>
        <Card character={character} />
      </main>

      <Footer year={year.getFullYear()} />
    </div>
  );
}

export default App;
