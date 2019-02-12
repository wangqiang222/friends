var router=require('express').Router();
var account_server=require('./../server/account');
router.post('/add',function(req,res,next){
	account_server.add(req,res)
})
router.post('/login',function(req,res,next){
	account_server.login(req,res)
})
router.post('/get',function(req,res,next){
	account_server.get(req,res)
})
router.post('/detail',function(req,res,next){
	account_server.details(req,res)
})
module.exports=router