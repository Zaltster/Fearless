
import ahri from './champs/ahri.png';
import aatrox from './champs/aatrox.png';
import akshan from './champs/akshan1.png';
import alistar from './champs/alistar1.png';
import amumu from './champs/amumu1.png';
import anivia from './champs/anivia1.png';
import annie from './champs/annie1.png';
import aphelios from './champs/aphelios1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button style={{ position: 'absolute', top: '300px', left: '305px' }}>
          <img src={ahri} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '420px' }}>
          <img src={aatrox} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '535px' }}>
          <img src={akshan} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '650px' }}>
          <img src={alistar} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '765px' }}>
          <img src={amumu} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '880px' }}>
          <img src={anivia} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '995px' }}>
          <img src={annie} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '409px', left: '305px' }}>
          <img src={aphelios} className="App-logo" alt="logo" width={100} height={100} />
        </button>
      </header>
    </div>
  );
}

export default App;
