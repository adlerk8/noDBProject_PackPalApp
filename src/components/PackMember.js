import React from 'react';

function PackMember() {
    const {fullPack} = this.props
    return(
        <li>
            <h2>{fullPack[index].name}</h2>
            <button className="addToPackButton"
            onClick={() => {props.addtoTeam(props.fullPack.id)}>Add to My Pack</button>
        </li>
    );
}


export default PackMember;