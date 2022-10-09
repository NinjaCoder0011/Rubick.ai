const TableModel = require("../model/TableModel.js");

module.exports.getToDo = async (req, res) => {
    const todo = await TableModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { Product_Code } = req.body;
    const { Name } = req.body;
    const { Qty } = req.body;
    const { Price } = req.body;
    const { Status } = req.body;


    TableModel
        .create({ Product_Code, Name, Qty, Price, Status })
        .then(() => res.set(201).send("Added Successfully..."))
        .catch((err) => console.log(err));
}



