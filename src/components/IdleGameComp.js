import React, { useState, useEffect } from 'react';
import '../css/IdleGame.css';

function buildingCost(building, buildingTier) {
  return (building + 1) * 10 ** buildingTier
}

function buildingGain(buildingTier) {
  return 5 ** (buildingTier - 1)
}

function numberWithCommas(x) {
  // Add commas to big numbers
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function buyBuilding(currency, setCurrency, building, setBuilding, buildingTier, cgain, setCGain) {
  const cost = buildingCost(building, buildingTier)

  if (currency >= cost) {
    setCurrency(currency - cost)
    setBuilding(building + 1)
    setCGain(cgain + buildingGain(buildingTier))
    console.log("Brought building with ", cost, "currency.")
  } else {
    console.log("Could not buy building.")
  }
}

function Buildingcomp({ currency, setCurrency, buildingTier, cgain, setCGain }) {
  const [building, setBuilding] = useState(0);
  const clickF = () => buyBuilding(currency, setCurrency, building, setBuilding, buildingTier, cgain, setCGain)

  return <div className={"building"}>
    <p>
      {numberWithCommas(building)} x Tier {numberWithCommas(buildingTier)}, each giving {numberWithCommas(buildingGain(buildingTier))} /sec for a total of {numberWithCommas(building * buildingGain(buildingTier))} /sec
    </p>
    <button onClick={clickF}>
      Buy ({numberWithCommas(buildingCost(building, buildingTier))} currency)
    </button>
  </div>
}

function incrementPassiveCurrency(currency, setCurrency, cgain) {
  console.log("Incrementally gaining ", cgain, "currency.")
  return setCurrency(currency + cgain)
}

export default function IdleGameComp() {
  const [gameState, setGameState] = useState(false);
  const [currency, setCurrency] = useState(0);
  const [cgain, setCGain] = useState(0);
  const buildingTiers = [];
  for (let i = 1; i <= 10; i++) {
    buildingTiers.push(i)
  }

  // Begin looping to increase currency
  useEffect(() => {
    const interval = setInterval(() => incrementPassiveCurrency(currency, setCurrency, cgain), 1000)
    return () => clearInterval(interval)
  }, [currency, setCurrency, cgain]);

  // If the game is off, give a button to start the game
  if (gameState === false) {
    return <div className="GameWindow">
      <button onClick={() => setGameState(true)}>Start idle game</button>
    </div>
  }
  return <div className="GameWindow">
    <p>Idle clicker game</p>
    <button onClick={() => setCurrency(currency + 1)}>Increment</button>
    <p>Current amount of currency: {numberWithCommas(currency)}, gaining {numberWithCommas(cgain)} /sec</p>

    {
      buildingTiers.map(x => (
        <Buildingcomp key={x} currency={currency} setCurrency={setCurrency} buildingTier={x} cgain={cgain} setCGain={setCGain} />
      ))
    }
  </div>;
}
