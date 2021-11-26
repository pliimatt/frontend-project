import React, {useState} from 'react';

function buildingCost (building, buildingTier) {
    return (building + 1) * 10 ** buildingTier
}

function buildingGain (buildingTier) {
    return 5 ** (buildingTier - 1)
}

function numberWithCommas (x) {
    // Add commas to big numbers
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function buyBuilding (currency, setCurrency, building, setBuilding, buildingTier, cgain, setCGain) {
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

export default function Buildingcomp ({currency, setCurrency, buildingTier, cgain, setCGain}) {
    const [building, setBuilding] = useState(0);
    const clickF = () => buyBuilding(currency, setCurrency, building, setBuilding, buildingTier, cgain, setCGain);

    return <div className={"building"}>
        <p>
            {numberWithCommas(building)} x Tier {numberWithCommas(buildingTier)}, each giving {numberWithCommas(buildingGain(buildingTier))} /sec for a total of {numberWithCommas(building * buildingGain(buildingTier))} /sec
        </p>
        <button onClick={clickF}>
            Buy ({numberWithCommas(buildingCost(building, buildingTier))} currency)
        </button>
    </div>;
}
