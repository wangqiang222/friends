var School=require('./../db/school');
const sequelize = require('sequelize');
module.exports={
	findAll(req,res){
	School.findAll({where:{
		id: {[sequelize.Op.gt]:0}
	}}).then(function(e){
		res.send(e)
	});		
	},
	findByname(req,res){
	var f1=School.findAll({where:{
		name: {[sequelize.Op.like]:'%'+req.query['name']+'%'}
	}}).then(function(e){
		res.send(e)
	});	
	},
	add(req,res){
		School.create(req.query).then(function(e){
			res.send(e)
		})
	},
	
}