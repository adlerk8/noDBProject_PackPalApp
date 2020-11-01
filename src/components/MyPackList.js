import React, {Component} from 'react';
import MyPackMember from './components/MyPackMember';

class MyPackList extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render () {
        return (
            <div>
                <ul>
                    <li><MyPackMember/></li>
                </ul>
            </div>
    );
    }
}

export default MyPackList;