import './App.css';
import Meme from './components/Meme';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Meme />
      </header>
    </div>
  );
}

export default App;
