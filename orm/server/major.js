var Major=require('./../db/major');
const sequelize = require('sequelize');
module.exports={
	findByname(req,res){
	var f1=Major.findAll({where:{
		name: {[sequelize.Op.like]:'%'+req.query['name']+'%'}
	}}).then(function(e){
		res.send(e)
	});	
	},
	add(req,res){
		Major.create(req.query).then(function(e){
			res.send(e)
		})
	},
	
}