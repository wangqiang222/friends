var router=require('express').Router();
var major_server=require('./../server/major');
router.get('/find',function(req,res,next){
	major_server.findByname(req,res)
})
router.get('/add',function(req,res,next){
	major_server.add(req,res)
})
module.exports=router