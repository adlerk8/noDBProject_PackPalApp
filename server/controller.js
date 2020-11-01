const fullPack = require('./pack.json');
let myPack = [];

module.exports = {
    getFullPack: (req, res) => {
        res.status(200).send(fullPack);
    },
    getMyPack: (req, res) => {
        res.status(200).send(myPack);
    },
    editMeds: (req, res) => {
        const {index} = req.params;
        const {amMeds, pmMeds} = req.body;
        myPack[index].amMeds = amMeds;
        myPack[index].pmMeds = pmMeds;
        res.status(200).send(myPack);
    },
    removeFromPack: (req, res) => {
        const {index} = req.params;
        myPack.splice(index, 1);
        res.status(200).send(myPack);
    }
}