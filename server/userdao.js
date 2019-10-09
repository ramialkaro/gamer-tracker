

module.exports=function(server) {
    return {
        getAll(cb){
            server.query("select * from users", result => cb(result));
        },
        get(id,cb){

        },
        insert(user,cb){

        },
        udapte(user,cb){

        },
        delete(id,cb){

        }
    }
}