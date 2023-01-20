import dino from './dino.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dino} className="App-logo" alt="logo" />
        <p>
          More Orpheus goodness coming soon!
        </p>
        <a
          className="App-link"
          href="https://hackclub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Hack Club
        </a>
      </header>
    </div>
  );
}

export default App;
