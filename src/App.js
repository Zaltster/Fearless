
import akshan from './champs/akshan1.png';

import aphelios from './champs/aphelios1.png';
import './App.css';
import Countdown from './countdown.js';


function App() {


  return (

    <div className="App">
      <Countdown />
      <header className="App-header">


        <button style={{ position: 'absolute', top: '300px', left: '305px' }}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '420px' }}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '535px' }}>
          <img src={akshan} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '650px' }}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Amumu.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '765px' }}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Anivia.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '880px' }}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Annie.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '995px' }}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aphelios.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '409px', left: '305px' }}>
          <img src={aphelios} className="App-logo" alt="logo" width={100} height={100} />
        </button>
      </header>
    </div>
  );
}

export default App;
