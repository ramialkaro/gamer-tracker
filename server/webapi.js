const error = (err) => ({error:err});

module.exports={
	init:function(app){
		let apiroot="/api/books";
		let bodyParser = require('body-parser');
		let bookdao=require("./bookdao");
		app.use(bodyParser.json());	


		app.get(apiroot, function(req, res) {
			res.json(bookdao.getAll());
		});

		app.get(apiroot+'/:id', function(req, res) {
			let id = Number(req.params.id);
			let book=bookdao.get(id);
			if (!book) {
				res.statusCode = 404;	// Not found
				res.json(error("Item with id " + id + " not found"));
			} else {
				res.json(book);	// Ok, send it as JSON
			}

		});

		app.delete(apiroot+'/:id', function(req, res) {
			let id = Number(req.params.id);
			let success=bookdao.delete(id);
			if (success) res.send("Deleted");
			else res.status(404).json(error("Not found"));
		});

		app.put(apiroot+"/:id",function(req,res){
			let id=Number(req.params.id);
			if (id!=req.body.id) res.status(400).json(error("ID mismatch"));
			else{
				let book=bookdao.update(req.body);
				if (book) res.json(book);
				else res.status(404).json(error("Not found"));
			}
		});

		app.post(apiroot,function(req,res){
			var book=bookdao.create(req.body);
			if (book) res.json(book);
			else res.status(400).json(error("Bad request, something went wrong"));
		});
		
	}
	
	
}
