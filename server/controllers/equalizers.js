const Equalizer = require('../models/equalizer');

exports.all = function(req,res,next){
    Equalizer.find().then((results) => {

        return res.json(results);
    }).catch((err) => {
        return next(err);
    });
}

exports.get = function(req,res,next){
    const id = req.params.id;
    Equalizer.findOne({ _id : id }).then((equalizer) => {
        if(!equalizer) return res.status(404).send({error:'Equalizer not found'})

        return res.json(equalizer);
    }).catch((err) => {
        return next(err);
    });
}

exports.update = function(req,res,next){
    const id = req.body._id;

    //Delete id for mongoose update
    delete req.body._id;

    Equalizer.findById(id, (err,equalizer) => {
         if(!equalizer) return res.status(404).send({error:'Equalizer not found'})

         equalizer.set(req.body);
         equalizer.save((err) => {
             if(err){ return res.status(500).send(err); }
             return res.json(equalizer);
         });
     }).catch((err) => {
        return next(err);
    });
}

exports.create = function(req,res,next){
    const equalizer = new Equalizer(req.body);

    equalizer.save((err) => {
        if(err){ return res.status(500).send(err); }

        return res.json(equalizer);
    }).catch((err) => {
        return next(err);
    });
}

exports.delete = function(req,res,next){
    const id = req.params.id;
    Equalizer.findByIdAndRemove(id,(err) => {
        return res.json({success:true});
    }).catch((err) => {
        return next(err);
    });
}