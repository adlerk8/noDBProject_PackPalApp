import React, {Component} from 'react';

class MyPackMember extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: ""
        }
    }

    handleChange = (e) => {
        this.setState({note: e});
    }
    
    render() {
        const {myPackMember} = this.props;
        const {vetInfo, pmFood, amFood, note} = myPackMember;
        return (
            <li className="myPackList">
                <h2>{myPackMember.name}</h2>
                <h4>{myPackMember.breed}</h4>
                <div className="amMeal"> AM Feeding
                    <h3 className="mealInfo">Food: {amFood.foodType}</h3>
                    <h3 className="mealInfo">Amount in cups: {amFood.cups}</h3>
                    <h3 className="mealInfo">Additional Ingredients: {amFood.additionalIng}</h3>
                    <h3 className="mealInfo">AM Medicines: {myPackMember.amMeds}</h3>
                </div>
                <div className="pmMeal"> PM Feeding
                    <h3 className="mealInfo">Food: {pmFood.foodType}</h3>
                    <h3 className="mealInfo">Amount in cups: {pmFood.cups}</h3>
                    <h3 className="mealInfo">Additional Ingredients: {pmFood.additionalIng}</h3>
                    <h3 className="mealInfo">PM Medicines: {myPackMember.pmMeds}</h3>
                </div>
                <div className="vetInfoBox">Vet Information
                    <h3 className="vetInfo">{vetInfo.name}</h3>
                    <h3 className="vetInfo">{vetInfo.phoneNumber}</h3>
                    <h3 className="vetInfo">{vetInfo.preferredVet}</h3>
                </div>
                <div className="note">
                    <h2 className="amMeal">Notes:</h2>
                    <h3 className="vetInfo">{note}</h3>
                </div>
                <input placeholder="Type note here..." onChange={(e) => this.handleChange(e.target.value)} type="text" value={this.state.note}/>
                <button className="addNoteButton" onClick={() => {this.props.addNote(myPackMember.id)}}>Add Note</button>
                <button className="removeFromPackButton" onClick={() => {this.props.removeFromPack(myPackMember.id)}}>Remove from Pack</button>
            </li>
        );
    }
}

export default MyPackMember;