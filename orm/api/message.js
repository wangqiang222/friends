var router=require('express').Router();
var message_server=require('./../server/message');
router.post('/add',function(req,res,next){
	message_server.add(req,res)
})
router.get('/find',function(req,res,next){
	message_server.find(req,res)
})

module.exports=router