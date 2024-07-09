import React, { useState } from 'react';
import placeholder from './placeholder.png';
import './App.css';
import Countdown from './countdown.js';

function App() {
  const [champ, setChamp] = useState(placeholder);
  const [lockedChamps, setLockedChamps] = useState(Array(20).fill(placeholder));
  const [lockOrder, setLockOrder] = useState(0);
  const lockSequence = [
    { position: 'left', index: 0 },
    { position: 'right', index: 1 },
    { position: 'left', index: 2 },
    { position: 'right', index: 3 },
    { position: 'left', index: 4 },
    { position: 'right', index: 5 },
    { position: 'left', index: 6 },
    { position: 'right', index: 7 },
    { position: 'right', index: 8 },
    { position: 'left', index: 9 },
    { position: 'left', index: 10 },
    { position: 'right', index: 11 },
    { position: 'right', index: 12 },
    { position: 'left', index: 13 },
    { position: 'left', index: 14 },
    { position: 'right', index: 15 },
    { position: 'right', index: 16 },
    { position: 'right', index: 17 },
    { position: 'right', index: 18 },
    { position: 'right', index: 19 },
  ];

  const handleChampionSelect = (newChamp) => {
    console.log("champ select")

    if (lockOrder < lockSequence.length) {
      setChamp(newChamp);
      console.log("champ select")
      console.log(newChamp)
    }
  };

  const handleLockIn = () => {

    if (lockOrder < lockSequence.length) {
      const newLockedChamps = [...lockedChamps];
      newLockedChamps[lockOrder] = champ;
      setLockedChamps(newLockedChamps);
      setLockOrder(lockOrder + 1);
      console.log("lock in")

    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div style={{ display: 'flex', justifyContent: 'center', height: '20vh' }}>
        <Countdown champlockin={handleLockIn} />
      </div>

      <div style={{ display: 'flex' }}>
        <div class="blueside">
          {/* Placeholder buttons on the left */}
          {/* b1 */}
          <button style={{ position: 'absolute', top: '115px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 6}>
            <img src={lockedChamps[6]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b2 */}
          <button style={{ position: 'absolute', top: '230px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 9}>
            <img src={lockedChamps[9]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b3 */}
          <button style={{ position: 'absolute', top: '345px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 10}>
            <img src={lockedChamps[10]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b4 */}
          <button style={{ position: 'absolute', top: '460px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 16}>
            <img src={lockedChamps[17]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b5 */}
          <button style={{ position: 'absolute', top: '575px', left: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 19}>
            <img src={lockedChamps[18]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb1 */}
          <button style={{ position: 'absolute', top: '10px', left: '110px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 0}>
            <img src={lockedChamps[0]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb2 */}
          <button style={{ position: 'absolute', top: '10px', left: '230px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 2}>
            <img src={lockedChamps[2]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb3 */}
          <button style={{ position: 'absolute', top: '10px', left: '350px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 4}>
            <img src={lockedChamps[4]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb4 */}
          <button style={{ position: 'absolute', top: '10px', left: '470px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 13}>
            <img src={lockedChamps[13]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb5 */}
          <button style={{ position: 'absolute', top: '10px', left: '590px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 15}>
            <img src={lockedChamps[15]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>
        </div>

        <div class="champs">
          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ahri.png")}>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ahri.png" className="App-logo" alt="Ahri" width={100} height={100} />
          </button>

          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aatrox.png")}>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aatrox.png" className="App-logo" alt="Aatrox" width={100} height={100} />
          </button>

          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Akshan.png")}>
            <img src={"https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Akshan.png"} className="App-logo" alt="Akshan" width={100} height={100} />
          </button>

          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Amumu.png")}>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Amumu.png" className="App-logo" alt="Amumu" width={100} height={100} />
          </button>

          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Anivia.png")}>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Anivia.png" className="App-logo" alt="Anivia" width={100} height={100} />
          </button>

          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Annie.png")}>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Annie.png" className="App-logo" alt="Annie" width={100} height={100} />
          </button>

          <button onClick={() => handleChampionSelect("https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aphelios.png")}>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aphelios.png" className="App-logo" alt="Aphelios" width={100} height={100} />
          </button>
        </div>

        {/* Placeholder buttons on the right */}
        <div class="redside">
          {/* r1 */}
          <button style={{ position: 'absolute', top: '115px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 7}>
            <img src={lockedChamps[7]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r2 */}
          <button style={{ position: 'absolute', top: '230px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 8}>
            <img src={lockedChamps[8]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r3 */}
          <button style={{ position: 'absolute', top: '345px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 11}>
            <img src={lockedChamps[11]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r4 */}
          <button style={{ position: 'absolute', top: '460px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 16}>
            <img src={lockedChamps[16]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r5 */}
          <button style={{ position: 'absolute', top: '575px', right: '0px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 19}>
            <img src={lockedChamps[19]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb1 */}
          <button style={{ position: 'absolute', top: '10px', right: '110px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 1}>
            <img src={lockedChamps[1]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb2 */}
          <button style={{ position: 'absolute', top: '10px', right: '230px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 3}>
            <img src={lockedChamps[3]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb3 */}
          <button style={{ position: 'absolute', top: '10px', right: '350px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 5}>
            <img src={lockedChamps[5]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb4 */}
          <button style={{ position: 'absolute', top: '10px', right: '470px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 12}>
            <img src={lockedChamps[12]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>


          {/* rb5 */}
          <button style={{ position: 'absolute', top: '10px', right: '590px' }} onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 14}>
            <img src={lockedChamps[14]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;