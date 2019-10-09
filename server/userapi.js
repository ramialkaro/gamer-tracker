module.exports=function(app,dbserver){
    let dao=require('./userdao')(dbserver);

    app.get("/api/users",function(req,resp){
        dao.getAll(function({error,rows}){
            resp.json(rows);
        });
    })

    
}