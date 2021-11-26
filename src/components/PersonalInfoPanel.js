import React from 'react';

export default function PersonalInfoPanel ({info}) {
    return <div className={"infoPanel"}>
        <h3>
            {info.name}
        </h3>
        <p>
            {info.addr}
        </p>
        <p>
            {info.postiPaikka}
        </p>
        <p>
            {info.puhNro}
        </p>
        <p>
            {info.email}
        </p>
    </div>;
}
