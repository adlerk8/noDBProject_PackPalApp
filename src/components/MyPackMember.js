import React from 'react';

function MyPackMember() {
    return (
        <li>
            <h2>{fullPack[index].name}</h2>
            <h3>{fullPack[index].breed}</h3>
            <h3>{fullPack[index].amFood}</h3>
            <h3>{fullPack[index].amMeds}</h3>
            <h3>{fullPack[index].pmFood}</h3>
            <h3>{fullPack[index].pmMeds}</h3>
            <h3>{fullPack[index].vetInfo}</h3>
        </li>
    );
}

export default MyPackMember;