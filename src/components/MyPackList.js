import React from 'react';
import MyPackMember from './components/MyPackMember';

function MyPackList(props) {
    const {currentPackList} = props;
    return (
        <div>
            <ul>
                {currentPackList.map((e) => {
                    return <MyPackMember key={e.id} myPackMember={e}/>})
                }
            </ul>
        </div>
    );
}

export default MyPackList;