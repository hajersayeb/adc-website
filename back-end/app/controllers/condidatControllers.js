exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.condidatBoard = (req,res) => {
    res.status(200).send("Condidat Content.");   
};
exports.employeurBoard = (req,res) => {
    res.status(200).send("employeur Content.");   
};
exports.adminBoard = (req,res) => {
    res.status(200).send("Admin Content.");     
}
