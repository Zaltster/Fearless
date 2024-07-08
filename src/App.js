import React, { useState } from 'react';
import akshan from './champs/akshan1.png';
import aphelios from './champs/aphelios1.png';
import placeholder from './placeholder.png';
import './App.css';
import Countdown from './countdown.js';

function App() {
  const [champ, setChamp] = useState(placeholder);
  const [lockedChampLeft, setLockedChampLeft] = useState(placeholder);
  const [lockedChampRight, setLockedChampRight] = useState(placeholder);
  const [isLeftLocked, setIsLeftLocked] = useState(false);
  const [isRightLocked, setIsRightLocked] = useState(false);

  const handleLockIn = () => {
    if (!isLeftLocked) {
      setIsLeftLocked(true);
      setLockedChampLeft(champ); // Lock the current champion for the left side
    } else if (isLeftLocked && !isRightLocked) {
      setIsRightLocked(true);
      setLockedChampRight(champ); // Lock the current champion for the right side
    }
  };

  const handleChampionSelect = (newChamp) => {
    if (!isLeftLocked || (isLeftLocked && !isRightLocked)) {
      setChamp(newChamp);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Countdown />

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

        <div>
          <button style={{ position: 'absolute', top: 0, right: 0 }}>
            <img src={isRightLocked ? lockedChampRight : placeholder} alt="Right Selected Champion" width={100} height={100} />
          </button>
        </div>

        <div>
          <button style={{ position: 'absolute', top: 0, left: 0 }}>
            <img src={isLeftLocked ? lockedChampLeft : champ} alt="Left Locked Champion" width={100} height={100} />
          </button>
        </div>

        <button style={{ position: 'absolute', top: '500px', left: '500px' }} onClick={handleLockIn}>
          Lock In
        </button>
      </header>
    </div>
  );
}

export default App;