const db = require("../model")

module.exports = {
    create: (req, res) => {
        db.Book.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err))
    },
    
    readAll: (req, res) => {
        db.Book.find(req.query)
        .sort({data: 1})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err))
    },

    readOne: (req, res) => {
        then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err))
    },

    update: (req, res) => {
        db.Book.findOneAndUpdate({_id: req.params.id})
        .then((dbModel) => res.json(dbModel))
        .catch((err)=> res.status(422).json(err))
    },

    delete: (req, res) => {
        db.Book.findById({_id: req.params.id}, req.body)
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(421).json(err))
    }
    }