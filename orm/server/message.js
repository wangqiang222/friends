var Message=require('./../db/message');
var User=require('./../db/user');
var Major=require('./../db/major');
var School=require('./../db/school');
const sequelize = require('sequelize');
module.exports={
	add(req,res){
		console.log(1)
		Message.create(req.body).then(function(e){
			res.send(e)
		})
	},
	find(req,res){
	User.belongsTo(School,{foreignKey:'schoolId',targetKey: 'id'});
	User.belongsTo(Major,{foreignKey:'majorId',targetKey: 'id'});
	User.belongsTo(Message,{foreignKey:'id',targetKey: 'userId'});
	var sname=req.query['sname'];
	var major=req.query['major'];
	User.findAll({'include':[{
		'model':School,
		where:{
	name: sname,
		}
	},{
		'model':Major,
		where:{
	name: major,
		}
	},
	{
		'model':Message,
	}]}).then(news => res.send(JSON.stringify(news)));
	}
}