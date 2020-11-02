const fullPack = require('./pack.json');
let myPack = [];

module.exports = {
    getFullPack: (req, res) => {
        res.status(200).send(fullPack);
    },
    getMyPack: (req, res) => {
        res.status(200).send(myPack);
    },
    addNote: (req, res) => {
        const {id} = req.params;
        const {note} = req.body;

        let foundPackMember = myPack.find(e => e.id === +id);
        if(foundPackMember === undefined) {
            res.status(404).send(myPack);
        }
        foundPackMember.note = note;
        res.status(200).send(myPack);
    },
    addToMyPack: (req, res) => {
        const {id} = req.params;
        const newMember = { ...fullPack.find((dog) => dog.id === +id)};
        myPack.push(newMember);
        res.status(200).send(myPack);
    },
    removeFromPack: (req, res) => {
        const {index} = req.params;
        myPack.splice(index, 1);
        res.status(200).send(myPack);
    }
}