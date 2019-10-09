const msg=require('./messages');

const gameTemplate =()=>({
    gameName:'',
    consoleType:''
})

function hassErrors(game){
    if(!game.gameName)
        return msg.error('Validation',400,'game Name required');
    if(game.consoleType)
        return msg.error('Validation',400,'Console type required');
}
module.exports=function(server) {
    return {
        getAll(cb){
            server.query("select * from game", result => cb(result));
        },
        get(game,cb){
            server.query("select * from game where id = "+game, result => cb(result));
        },
        insert(game,cb){

        },
        udapte(game,cb){

        },
        delete(id,cb){

        }
    }
}