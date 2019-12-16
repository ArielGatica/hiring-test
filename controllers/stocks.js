const Stocks = require('../models/details');

exports.getDetails = async (req, res) =>{
    await Stocks.find((err, stocks) =>{
        if(!err)
            res.status(200).json({ data: stocks });
        else
            res.status(400).send({ message: `Error al intentar listar data ${err}` });
    })
}

exports.saveStocks = async (req, res) =>{

    let newStocks = new Stocks({
        type: req.body.type,
        user: req.body.user,
        symbol: req.body.symbol,
        shares: req.body.shares,
        price: req.body.price,
        timestamp: req.body.timestamp
    })
    await newStocks.save((err) =>{
        if(!err)
            res.status(200).send({ message: `Registros agregados correctamente` });
        else
            res.s.status(400).send({  message: `Error al intentar guardar registros ` });
    })
}

exports.editStocks = async (req, res) =>{
    Stocks.findById({ _id: req.params._id }, (err, stocks) =>{
        if(err)
            res.status(400).send({ message: `Error: ${err}` });
        if(stocks){
            let dataToEdit = {
                type: req.body.type,
                user: req.body.user,
                symbol: req.body.symbol,
                shares: req.body.shares,
                price: req.body.price,
                timestamp: req.body.timestamp
            }
            Stocks.findByIdAndUpdate({ _id: req.params._id }, { $set: dataToEdit }, (err) =>{
                if(!err)
                    res.status(200).send({ message: `Stocks editado correctamente` });
                else
                    res.status(400).send({ message: `Error al intentar editar ${err}` });
            })
        }else
            res.status(404).send({ message: `Error no se encontro registro para editar: ${err}` });
    })
}