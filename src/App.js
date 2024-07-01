import logo from './logo.svg';
import ahri from './champs/ahri.png';
import aatrox from './champs/aatrox.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ahri} className="App-logo" alt="logo" width={100} height={100} />
        <img src={aatrox} className="App-logo" alt="logo" width={100} height={100} />
      </header>
    </div>
  );
}

export default App;
