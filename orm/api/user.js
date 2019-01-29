var router=require('express').Router();
var user_server=require('./../server/user');
router.post('/add',function(req,res,next){
	console.log(req.body)
	user_server.add(req,res)
})
router.get('/find',function(req,res,next){
	user_server.find(req,res)
})
router.post('/update',function(req,res,next){
	user_server.update(req,res)
})
router.get('/dele',function(req,res,next){
	user_server.dele(req,res)
})
router.get('/redele',function(req,res,next){
	user_server.redele(req,res)
})
router.get('/finds',function(req,res,next){
	user_server.finds(req,res)
})
router.get('/findm',function(req,res,next){
	user_server.findm(req,res)
})
module.exports=router
