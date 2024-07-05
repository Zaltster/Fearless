
import akshan from './champs/akshan1.png';
import aphelios from './champs/aphelios1.png';
import './App.css';
import Countdown from './countdown.js';
import React, { useState } from 'react';


function App() {
  const [champ, setChamp] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Countdown />

        <button style={{ position: 'absolute', top: '300px', left: '305px' }} onClick={() => setChamp("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '420px' }} onClick={() => setChamp("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '535px' }} onClick={() => setChamp(akshan)}>
          <img src={akshan} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '650px' }} onClick={() => setChamp("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Amumu.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Amumu.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '765px' }} onClick={() => setChamp("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Anivia.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Anivia.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '880px' }} onClick={() => setChamp("")}></button>

        <button style={{ position: 'absolute', top: '300px', left: '880px' }} onClick={() => setChamp("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Annie.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Annie.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '995px' }} onClick={() => setChamp("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aphelios.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aphelios.png" className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '409px', left: '305px' }} onClick={() => setChamp(aphelios)}>
          <img src={aphelios} className="App-logo" alt="logo" width={100} height={100} />
        </button>

        <div>
          <button style={{ position: 'absolute', top: 0, right: 0 }}>
            <img src={champ} alt="Button" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
