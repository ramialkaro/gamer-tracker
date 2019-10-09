module.exports=function(app,dbserver){
    let dao=require('./gamedao')(dbserver);

    app.get("/api/game",function(req,resp){
        dao.getAll(function({error,rows}){
            resp.json(rows);
        });
    })

    app.get("/api/game/:id",function(req,resp){
        var id = req.params.id;
        dao.get(id,function({error,rows}){
            resp.json(rows[0]);
        });
    })

    
}