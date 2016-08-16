const Compressor = require('../models/compressor');

exports.all = function(req,res,next){
    Compressor.find().then((results) => {

        return res.json(results);
    }).catch((err) => {
        return next(err);
    });
}

exports.get = function(req,res,next){
    const id = req.params.id;
    Compressor.findOne({ _id : id }).then((compressor) => {
        if(!compressor) return res.status(404).send({error:'compressor not found'})

        return res.json(compressor);
    }).catch((err) => {
        return next(err);
    });
}

exports.update = function(req,res,next){
    const id = req.body._id;

    //Delete id for mongoose update
    delete req.body._id;

    Compressor.findById(id, (err,compressor) => {
         if(!compressor) return res.status(404).send({error:'compressor not found'})

         compressor.set(req.body);
         compressor.save((err) => {
             if(err){ return res.status(500).send(err); }
             return res.json(compressor);
         });
     }).catch((err) => {
        return next(err);
    });
}

exports.create = function(req,res,next){
    const compressor = new Compressor(req.body);

    compressor.save((err) => {
        if(err){ return res.status(500).send(err); }

        return res.json(compressor);
    }).catch((err) => {
        return next(err);
    });
}

exports.delete = function(req,res,next){
    const id = req.params.id;
    Compressor.findByIdAndRemove(id,(err) => {
        return res.json({success:true});
    }).catch((err) => {
        return next(err);
    });
}