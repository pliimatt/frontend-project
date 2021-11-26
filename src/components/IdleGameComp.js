import React, {useState, useEffect} from 'react';
import '../css/IdleGame.css';
import Buildingcomp from './BuildingComp';

function numberWithCommas (x) {
    // Add commas to big numbers
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function IdleGameComp () {
    const [currency, setCurrency] = useState(0);
    const [cgain, setCGain] = useState(0);

    const buildingTiers = [];
    for (let i = 1; i <= 10; i++) {
        buildingTiers.push(i)
    }

    // Begin looping to increase currency
    useEffect(() => {
        let interval = setInterval(() => setCurrency(currency => currency + cgain), 1000)
        return () => clearInterval(interval)
    }, [cgain]);

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
