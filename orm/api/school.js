var router=require('express').Router();
var school_server=require('./../server/school');
router.get('/find',function(req,res,next){
	school_server.findByname(req,res)
})
router.get('/add',function(req,res,next){
	school_server.add(req,res)
})
module.exports=router