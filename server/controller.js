const fullPack = require('./pack.json');
let myPack = [];

module.exports = {
    getFullPack: (req, res) => {
        res.status(200).send(fullPack);
    },
    getMyPack: (req, res) => {
        res.status(200).send(myPack);
    },
    // Not even sure I need this.
    // createMember: (req, res) => {
    //     res.status(200).send(myPack);
    // },
    addNote: (req, res) => {
        const {index} = req.params;
        const {note} = req.body;

        fullPack[index].note = note;
        res.status(200).send(team);
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