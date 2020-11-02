import React from 'react';

function PackMember(props) {
    const {packMember, addToPack} = props
    return(
        <li className="packMember">
            <h2>{packMember.name}</h2>
            <button className="addToPackButton" onClick={() => {addToPack(packMember.id)}}>Add to My Pack</button>
        </li>
    );
}

export default PackMember;