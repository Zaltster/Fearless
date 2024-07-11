import React, { useState } from 'react';
import placeholder from './placeholder.png';
import './App.css';
import Countdown from './countdown.js';

const imgSite = "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/";

var champs = {
  "Aatrox": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aatrox.png",
  "Ahri": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ahri.png",
  "Akali": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Akali.png",
  "Akshan": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Akshan.png",
  "Alistar": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Alistar.png",
  "Amumu": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Amumu.png",
  "Anivia": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Anivia.png",
  "Annie": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Annie.png",
  "Aphelios": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Aphelios.png",
  "Ashe": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ashe.png",
  "AurelionSol": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/AurelionSol.png",
  "Azir": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Azir.png",
  "Bard": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Bard.png",
  "Belveth": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Belveth.png",
  "Blitzcrank": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Blitzcrank.png",
  "Brand": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Brand.png",
  "Braum": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Braum.png",
  "Briar": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Briar.png",
  "Caitlyn": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Caitlyn.png",
  "Camille": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Camille.png",
  "Cassiopeia": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Cassiopeia.png",
  "Chogath": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Chogath.png",
  "Corki": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Corki.png",
  "Darius": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Darius.png",
  "Diana": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Diana.png",
  "DrMundo": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/DrMundo.png",
  "Draven": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Draven.png",
  "Ekko": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ekko.png",
  "Elise": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Elise.png",
  "Evelynn": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Evelynn.png",
  "Ezreal": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ezreal.png",
  "Fiddlesticks": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Fiddlesticks.png",
  "Fiora": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Fiora.png",
  "Fizz": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Fizz.png",
  "Galio": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Galio.png",
  "Gangplank": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Gangplank.png",
  "Garen": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Garen.png",
  "Gnar": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Gnar.png",
  "Gragas": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Gragas.png",
  "Graves": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Graves.png",
  "Gwen": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Gwen.png",
  "Hecarim": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Hecarim.png",
  "Heimerdinger": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Heimerdinger.png",
  "Hwei": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Hwei.png",
  "Illaoi": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Illaoi.png",
  "Irelia": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Irelia.png",
  "Ivern": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ivern.png",
  "Janna": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Janna.png",
  "JarvanIV": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/JarvanIV.png",
  "Jax": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Jax.png",
  "Jayce": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Jayce.png",
  "Jhin": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Jhin.png",
  "Jinx": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Jinx.png",
  "KSante": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/KSante.png",
  "Kaisa": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kaisa.png",
  "Kalista": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kalista.png",
  "Karma": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Karma.png",
  "Karthus": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Karthus.png",
  "Kassadin": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kassadin.png",
  "Katarina": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Katarina.png",
  "Kayle": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kayle.png",
  "Kayn": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kayn.png",
  "Kennen": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kennen.png",
  "Khazix": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Khazix.png",
  "Kindred": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kindred.png",
  "Kled": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Kled.png",
  "KogMaw": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/KogMaw.png",
  "Leblanc": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Leblanc.png",
  "LeeSin": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/LeeSin.png",
  "Leona": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Leona.png",
  "Lillia": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lillia.png",
  "Lissandra": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lissandra.png",
  "Lucian": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lucian.png",
  "Lulu": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lulu.png",
  "Lux": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Lux.png",
  "Malphite": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Malphite.png",
  "Malzahar": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Malzahar.png",
  "Maokai": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Maokai.png",
  "MasterYi": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/MasterYi.png",
  "Milio": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Milio.png",
  "MissFortune": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/MissFortune.png",
  "MonkeyKing": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/MonkeyKing.png",
  "Mordekaiser": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Mordekaiser.png",
  "Morgana": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Morgana.png",
  "Naafiri": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Naafiri.png",
  "Nami": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nami.png",
  "Nasus": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nasus.png",
  "Nautilus": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nautilus.png",
  "Neeko": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Neeko.png",
  "Nidalee": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nidalee.png",
  "Nilah": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nilah.png",
  "Nocturne": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nocturne.png",
  "Nunu": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Nunu.png",
  "Olaf": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Olaf.png",
  "Orianna": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Orianna.png",
  "Ornn": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ornn.png",
  "Pantheon": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Pantheon.png",
  "Poppy": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Poppy.png",
  "Pyke": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Pyke.png",
  "Qiyana": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Qiyana.png",
  "Quinn": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Quinn.png",
  "Rakan": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Rakan.png",
  "Rammus": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Rammus.png",
  "RekSai": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/RekSai.png",
  "Rell": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Rell.png",
  "Renata": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Renata.png",
  "Renekton": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Renekton.png",
  "Rengar": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Rengar.png",
  "Riven": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Riven.png",
  "Rumble": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Rumble.png",
  "Ryze": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ryze.png",
  "Samira": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Samira.png",
  "Sejuani": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Sejuani.png",
  "Senna": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Senna.png",
  "Seraphine": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Seraphine.png",
  "Sett": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Sett.png",
  "Shaco": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Shaco.png",
  "Shen": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Shen.png",
  "Shyvana": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Shyvana.png",
  "Singed": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Singed.png",
  "Sion": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Sion.png",
  "Sivir": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Sivir.png",
  "Skarner": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Skarner.png",
  "Smolder": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Smolder.png",
  "Sona": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Sona.png",
  "Soraka": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Soraka.png",
  "Swain": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Swain.png",
  "Sylas": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Sylas.png",
  "Syndra": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Syndra.png",
  "TahmKench": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/TahmKench.png",
  "Taliyah": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Taliyah.png",
  "Talon": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Talon.png",
  "Taric": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Taric.png",
  "Teemo": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Teemo.png",
  "Thresh": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Thresh.png",
  "Tristana": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Tristana.png",
  "Trundle": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Trundle.png",
  "Tryndamere": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Tryndamere.png",
  "TwistedFate": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/TwistedFate.png",
  "Twitch": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Twitch.png",
  "Udyr": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Udyr.png",
  "Urgot": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Urgot.png",
  "Varus": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Varus.png",
  "Vayne": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Vayne.png",
  "Veigar": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Veigar.png",
  "Velkoz": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Velkoz.png",
  "Vex": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Vex.png",
  "Vi": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Vi.png",
  "Viego": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Viego.png",
  "Viktor": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Viktor.png",
  "Vladimir": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Vladimir.png",
  "Volibear": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Volibear.png",
  "Warwick": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Warwick.png",
  "Xayah": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Xayah.png",
  "Xerath": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Xerath.png",
  "XinZhao": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/XinZhao.png",
  "Yasuo": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Yasuo.png",
  "Yone": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Yone.png",
  "Yorick": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Yorick.png",
  "Yuumi": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Yuumi.png",
  "Zac": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zac.png",
  "Zed": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zed.png",
  "Zeri": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zeri.png",
  "Ziggs": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Ziggs.png",
  "Zilean": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zilean.png",
  "Zoe": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zoe.png",
  "Zyra": "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/Zyra.png",
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
  const [hoveredChamps, setHoveredChamps] = useState(Array(20).fill(placeholder));
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
    setChamp(imgSite + newChamp + ".png");

    if (lockOrder < lockSequence.length) {
      const newHoveredChamps = [...hoveredChamps];
      newHoveredChamps[lockOrder] = imgSite + newChamp + ".png";
      setHoveredChamps(newHoveredChamps);
    }
  };

  const handleLockIn = () => {
    if (lockOrder < lockSequence.length) {
      const newLockedChamps = [...lockedChamps];
      newLockedChamps[lockOrder] = champ;
      setLockedChamps(newLockedChamps);
      setLockOrder(lockOrder + 1);

      var champName = champ.split('/')[7];
      champName = champName.split('.')[0];
      const newChampImages = { ...champImages };
      newChampImages[champName] = "https://raw.githubusercontent.com/Zaltster/Fearless/main/src/greyscale/" + champName + "%203.png";
      setChampImages(newChampImages);


      const newHoveredChamps = [...hoveredChamps];
      newHoveredChamps[lockOrder] = champ;
      setHoveredChamps(newHoveredChamps);
    }
  };

  return (
    <div className="App">
      <div className="timer">
        <Countdown champlockin={handleLockIn} />
      </div>

      <div className="prevbans"></div>

      <div className="champs">
        {Object.keys(champs).map((c) => (
          <ChampButton key={c} champName={c} champImage={champImages[c]} onButtonClick={() => handleChampionSelect(c)} />
        ))}
      </div>

      <div className="blueside-picks">
        {/* Placeholder buttons on the left */}
        {/* b1 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 6}>
          <img src={lockedChamps[6] !== placeholder ? lockedChamps[6] : hoveredChamps[6]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* b2 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 9}>
          <img src={lockedChamps[9] !== placeholder ? lockedChamps[9] : hoveredChamps[9]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* b3 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 10}>
          <img src={lockedChamps[10] !== placeholder ? lockedChamps[10] : hoveredChamps[10]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* b4 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 16}>
          <img src={lockedChamps[17] !== placeholder ? lockedChamps[17] : hoveredChamps[17]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* b5 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 19}>
          <img src={lockedChamps[18] !== placeholder ? lockedChamps[18] : hoveredChamps[18]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>
      </div>

      <div className="blueside-bans">
        {/* bb1 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 0}>
          <img src={lockedChamps[0] !== placeholder ? lockedChamps[0] : hoveredChamps[0]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* bb2 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 2}>
          <img src={lockedChamps[2] !== placeholder ? lockedChamps[2] : hoveredChamps[2]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* bb3 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 4}>
          <img src={lockedChamps[4] !== placeholder ? lockedChamps[4] : hoveredChamps[4]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* bb4 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 13}>
          <img src={lockedChamps[13] !== placeholder ? lockedChamps[13] : hoveredChamps[13]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* bb5 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 15}>
          <img src={lockedChamps[15] !== placeholder ? lockedChamps[15] : hoveredChamps[15]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>
      </div>

      {/* Placeholder buttons on the right */}
      <div className="redside-picks">
        {/* r1 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 7}>
          <img src={lockedChamps[7] !== placeholder ? lockedChamps[7] : hoveredChamps[7]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* r2 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 8}>
          <img src={lockedChamps[8] !== placeholder ? lockedChamps[8] : hoveredChamps[8]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* r3 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 11}>
          <img src={lockedChamps[11] !== placeholder ? lockedChamps[11] : hoveredChamps[11]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* r4 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 16}>
          <img src={lockedChamps[16] !== placeholder ? lockedChamps[16] : hoveredChamps[16]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* r5 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 19}>
          <img src={lockedChamps[19] !== placeholder ? lockedChamps[19] : hoveredChamps[19]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>
      </div>

      <div className="redside-bans">
        {/* rb1 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 1}>
          <img src={lockedChamps[1] !== placeholder ? lockedChamps[1] : hoveredChamps[1]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* rb2 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 3}>
          <img src={lockedChamps[3] !== placeholder ? lockedChamps[3] : hoveredChamps[3]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* rb3 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 5}>
          <img src={lockedChamps[5] !== placeholder ? lockedChamps[5] : hoveredChamps[5]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* rb4 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 12}>
          <img src={lockedChamps[12] !== placeholder ? lockedChamps[12] : hoveredChamps[12]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>

        {/* rb5 */}
        <button onClick={() => handleChampionSelect(placeholder)} disabled={lockOrder > 14}>
          <img src={lockedChamps[14] !== placeholder ? lockedChamps[14] : hoveredChamps[14]} className="App-logo" alt="Placeholder" width={100} height={100} />
        </button>
      </div>
    </div>
  );
}

export default App;