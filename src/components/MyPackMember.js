import React from 'react';

function MyPackMember(props) {
    const {myPackMember} = props;
    return (
        <li>
            <h2>{myPackMember.name}</h2>
            <h3>{myPackMember.breed}</h3>
            <h3>{myPackMember.amFood}</h3>
            <h3>{myPackMember.amMeds}</h3>
            <h3>{myPackMember.pmFood}</h3>
            <h3>{myPackMember.pmMeds}</h3>
            <h3>{myPackMember.vetInfo}</h3>
            <button className="addNoteButton" onClick={() => {props.addNote(myPackMember.id)}}>Add Note</button>
            <button className="removeFromPackButton" onClick={() => {props.removeFromPack(myPackMember.id)}}>Remove from Pack</button>
        </li>
    );
}

export default MyPackMember;