const equalisers = require('./controllers/equalizers');
const compressors = require('./controllers/compressors');

module.exports = function(app){
    //Allow cross Origin
    app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTIONS")
      next();
    });

    app.get('/api/v1/equalizers',equalisers.all);
    app.post('/api/v1/equalizers',equalisers.create);
    app.put('/api/v1/equalizers/:id',equalisers.update);
    app.delete('/api/v1/equalizers/:id',equalisers.delete);
    app.get('/api/v1/equalizers/:id',equalisers.get);

    app.get('/api/v1/compressors',compressors.all);
    app.post('/api/v1/compressors',compressors.create);
    app.put('/api/v1/compressors/:id',compressors.update);
    app.delete('/api/v1/compressors/:id',compressors.delete);
    app.get('/api/v1/compressors/:id',compressors.get);

    app.use(function (err, req, res, next) {
		res.status(500).json(err);
	});
}