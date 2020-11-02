import React from 'react';
import PackMember from './PackMember';

function FullPackList(props) {
    const {fullPackList} = props;
    return (
        <div className="pickPack">Pick Your Pack
            <ul className="choosePack">
                {fullPackList.map((e) => {
                    return <PackMember key={e.id} packMember={e} addToPack={props.addToPack}/>})
                }
            </ul>
        </div>
    );
}

export default FullPackList;