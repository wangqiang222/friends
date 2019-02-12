var router=require('express').Router();
var http=require('http');
var wo=require('socket.io');
var server=http.createServer(function(req,res){
	res.end('over')
})
var io=wo(server)
io.on('connection',function(socket){
	console.log('have people connect')
	socket.on('message',function(msg){
		io.emit('message',msg)
	})
	socket.on('disconnect',function(e){
		console.log('end')
	})
})
server.listen(3300,function(){
	console.log('服务器启动成功')
})
module.exports=router;