const Trades = require('../models/details');

exports.DeleteTrades = async (req, res) =>{
    await Trades.findById({ _id: req.params._id }, (err, Trades) =>{
        if(Trades){
            Trades.remove((err) =>{
                if(!err)
                    res.status(200).send({ message: `Registro Trades eliminado correctamente` });
                else
                    res.status(400).send({ message: `Error al intentar eliminar registro: ${err}` });
            })
        }else
            res.status(404).send({ message: `Error, registro no encontrado para eliminar: ${err}` });
    })
}

exports.DeleteAllTrades = async (req, res) =>{
    await Trades.deleteMany({ _id: { $exists: true } }, (err) =>{
        if(!err)
            res.status(200).send({ message: `Trades eliminados correctamente` });
        else
            res.status(400).send({ message: `Error al intentar eliminar Trades: ${err}`})
    })
}