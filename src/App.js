import React, { useState } from 'react';
import placeholder from './placeholder.png';
import './App.css';
import Countdown from './countdown.js';

const imgSite = "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/";

var champs = {
  "Ahri": imgSite + "Ahri.png",
  "Aatrox": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aatrox.png",
  "Akshan": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Akshan.png",
  "Amumu": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Amumu.png",
  "Anivia": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Anivia.png",
  "Annie": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Annie.png",
  "Aphelios": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aphelios.png",
}

function ChampButton({ champName, champImage, onButtonClick }) {
  return (
    <button className="champ-button" onClick={onButtonClick}>
        <img src={champImage} className="App-logo" alt={champName} width={100} height={100} />
    </button>
  );
}


function App() {
  const [champ, setChamp] = useState(placeholder);
  const [lockedChamps, setLockedChamps] = useState(Array(20).fill(placeholder));
  const [lockOrder, setLockOrder] = useState(0);
  const [champImages, setChampImages] = useState(champs);
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
    if (lockOrder < lockSequence.length) {
      setChamp( imgSite + newChamp + ".png");
    }
  };

  const handleLockIn = () => {

    if (lockOrder < lockSequence.length) {

      const newLockedChamps = [...lockedChamps];
      newLockedChamps[lockOrder] = champ;
      setLockedChamps(newLockedChamps);
      setLockOrder(lockOrder + 1);
      
      console.log(champ);
      var champName = champ.split('/')[7];
      champName = champName.split('.')[0];
      const newChampImages = {...champImages};
      newChampImages[champName] = "https://raw.githubusercontent.com/Zaltster/Fearless/main/src/greyscale/" + champName + "%203.png";
      setChampImages(newChampImages);
    }
  };


  return (
    <div className="App">
      <div className="timer">
        <Countdown champlockin={handleLockIn} />
      </div>

        <div class="blueside-picks">
          {/* Placeholder buttons on the left */}
          {/* b1 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 6}>
            <img src={lockedChamps[6]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b2 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 9}>
            <img src={lockedChamps[9]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b3 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 10}>
            <img src={lockedChamps[10]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b4 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 16}>
            <img src={lockedChamps[17]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* b5 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 19}>
            <img src={lockedChamps[18]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>
        </div>

        <div class="blueside-bans">
          {/* bb1 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 0}>
            <img src={lockedChamps[0]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb2 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 2}>
            <img src={lockedChamps[2]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb3 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 4}>
            <img src={lockedChamps[4]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb4 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 13}>
            <img src={lockedChamps[13]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* bb5 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 15}>
            <img src={lockedChamps[15]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>
        </div>

        <div class="prevbans">
          
        </div>

        <div class="champs">
          {/*
            Alternative  way to make champ buttons with a for loop:*/
            Object.keys(champs).map((c) => (
              <ChampButton key={c} champName={c} champImage={champImages[c]} onButtonClick={() => handleChampionSelect(c)} />
            )) 
          }

          {/*<ChampButton champName={"Ahri"} champImage={champImages["Ahri"]} onButtonClick={() => handleChampionSelect("Ahri")} />
          <ChampButton champName={"Aatrox"} champImage={champImages["Aatrox"]} onButtonClick={() => handleChampionSelect("Aatrox")} />
          <ChampButton champName={"Akshan"} champImage={champImages["Akshan"]} onButtonClick={() => handleChampionSelect("Akshan")} />
          <ChampButton champName={"Amumu"} champImage={champImages["Amumu"]} onButtonClick={() => handleChampionSelect("Amumu")} />
          <ChampButton champName={"Anivia"} champImage={champImages["Anivia"]} onButtonClick={() => handleChampionSelect("Anivia")} />
          <ChampButton champName={"Annie"} champImage={champImages["Annie"]} onButtonClick={() => handleChampionSelect("Annie")} />
          <ChampButton champName={"Aphelios"} champImage={champImages["Aphelios"]} onButtonClick={() => handleChampionSelect("Aphelios")} />*/}

          {/*<button class="champ-button" onClick={() => handleChampionSelect("Aatrox")}>
            <img src={champImages["Aatrox"]} className="App-logo" alt="Aatrox" width={100} height={100} />
          </button>

          <button class="champ-button" onClick={() => handleChampionSelect("Akshan")}>
            <img src={champImages["Akshan"]} className="App-logo" alt="Akshan" width={100} height={100} />
          </button>

          <button class="champ-button" onClick={() => handleChampionSelect("Amumu")}>
            <img src={champImages["Amumu"]} className="App-logo" alt="Amumu" width={100} height={100} />
          </button>

          <button class="champ-button" onClick={() => handleChampionSelect("Anivia")}>
            <img src={champImages["Anivia"]} className="App-logo" alt="Anivia" width={100} height={100} />
          </button>

          <button class="champ-button" onClick={() => handleChampionSelect("Annie")}>
            <img src={champImages["Annie"]} className="App-logo" alt="Annie" width={100} height={100} />
          </button>

          <button class="champ-button" onClick={() => handleChampionSelect("Aphelios")}>
            <img src={champImages["Aphelios"]} className="App-logo" alt="Aphelios" width={100} height={100} />
          </button>*/}
        </div>

        {/* Placeholder buttons on the right */}
        <div class="redside-picks">
          {/* r1 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 7}>
            <img src={lockedChamps[7]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r2 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 8}>
            <img src={lockedChamps[8]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r3 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 11}>
            <img src={lockedChamps[11]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r4 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 16}>
            <img src={lockedChamps[16]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* r5 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 19}>
            <img src={lockedChamps[19]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>
        </div>

        <div class="redside-bans">
          {/* rb1 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 1}>
            <img src={lockedChamps[1]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb2 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 3}>
            <img src={lockedChamps[3]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb3 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 5}>
            <img src={lockedChamps[5]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>

          {/* rb4 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 12}>
            <img src={lockedChamps[12]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>


          {/* rb5 */}
          <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 14}>
            <img src={lockedChamps[14]} className="App-logo" alt="Placeholder" width={100} height={100} />
          </button>
        </div>
      </div>
  );
}

export default App;