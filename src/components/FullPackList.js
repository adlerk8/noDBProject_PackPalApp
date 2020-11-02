import React from 'react';
import PackMember from './PackMember';

function FullPackList(props) {
    const {fullPackList} = props;
    return (
        <div className="pickPack">
            <h3>Pick Your Pack</h3>
            <ul className="choosePack">
                {fullPackList.map((e) => {
                    return <PackMember key={e.id} packMember={e} addToPack={props.addToPack}/>})
                }
            </ul>
        </div>
    );
}

export default FullPackList;