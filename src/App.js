import React, { useState } from 'react';
import akshan from './champs/akshan1.png';
import aphelios from './champs/aphelios1.png';
import placeholder from './placeholder.png';
import './App.css';
import Countdown from './countdown.js';

function App() {
  const [champ, setChamp] = useState(placeholder);
  const [lockedChamps, setLockedChamps] = useState(Array(10).fill(placeholder));
  const [lockOrder, setLockOrder] = useState(0);

  const lockSequence = [
    { position: 'left', index: 0 },
    { position: 'right', index: 1 },
    { position: 'right', index: 2 },
    { position: 'left', index: 3 },
    { position: 'left', index: 4 },
    { position: 'right', index: 5 },
    { position: 'right', index: 6 },
    { position: 'left', index: 7 },
    { position: 'left', index: 8 },
    { position: 'right', index: 9 }
  ];

  const handleChampionSelect = (newChamp) => {
    if (lockOrder < lockSequence.length) {
      setChamp(newChamp);
    }
  };

  const handleLockIn = () => {
    if (lockOrder < lockSequence.length) {
      const newLockedChamps = [...lockedChamps];
      newLockedChamps[lockOrder] = champ;
      setLockedChamps(newLockedChamps);
      setLockOrder(lockOrder + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Countdown champlockin={handleLockIn} />

        <button style={{ position: 'absolute', top: '300px', left: '305px' }} onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png" className="App-logo" alt="Ahri" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '420px' }} onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png" className="App-logo" alt="Aatrox" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '535px' }} onClick={() => handleChampionSelect(akshan)}>
          <img src={akshan} className="App-logo" alt="Akshan" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '650px' }} onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Amumu.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Amumu.png" className="App-logo" alt="Amumu" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '765px' }} onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Anivia.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Anivia.png" className="App-logo" alt="Anivia" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '880px' }} onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Annie.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Annie.png" className="App-logo" alt="Annie" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '300px', left: '995px' }} onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aphelios.png")}>
          <img src="https://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aphelios.png" className="App-logo" alt="Aphelios" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '409px', left: '305px' }} onClick={() => handleChampionSelect(aphelios)}>
          <img src={aphelios} className="App-logo" alt="Aphelios Local" width={100} height={100} />
        </button>

        {/* Placeholder buttons on the left */}
        <button style={{ position: 'absolute', top: '115px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 0}>
          <img src={lockedChamps[0]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '230px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 3}>
          <img src={lockedChamps[3]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '345px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 4}>
          <img src={lockedChamps[4]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '460px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 7}>
          <img src={lockedChamps[7]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '575px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 8}>
          <img src={lockedChamps[8]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* Placeholder buttons on the right */}
        <button style={{ position: 'absolute', top: '115px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 1}>
          <img src={lockedChamps[1]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '230px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 2}>
          <img src={lockedChamps[2]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '345px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 5}>
          <img src={lockedChamps[5]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '460px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 6}>
          <img src={lockedChamps[6]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        <button style={{ position: 'absolute', top: '575px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 9}>
          <img src={lockedChamps[9]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>
      </header>
    </div>
  );
}

export default App;