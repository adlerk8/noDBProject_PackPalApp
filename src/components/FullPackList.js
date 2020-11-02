import React from 'react';
import PackMember from './components/PackMember';

function FullPackList() {
    const {fullPackList} = this.props;
    return (
        <div>
            <ul>
                {fullPackList.map((e) => {
                    return <PackMember key={e.id} packMember={e}/>})
                }
            </ul>
        </div>
    );
}

export default FullPackList;