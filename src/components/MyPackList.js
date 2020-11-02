import React from 'react';
import MyPackMember from './MyPackMember';

function MyPackList(props) {
    const {currentPackList} = props;
    return (
        <div className="myPackListDiv">My Pack
            <ul className="myPackList">
                {currentPackList.map((e) => {
                    return <MyPackMember key={e.id} myPackMember={e} removeFromPack={props.removeFromPack} addNote={props.addNote}/>})
                }
            </ul>
        </div>
    );
}

export default MyPackList;