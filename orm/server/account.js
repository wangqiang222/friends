var account=require('./../db/account');
var User=require('./../db/user');
var School=require('./../db/school');
var Major=require('./../db/major');
const sequelize = require('sequelize');
module.exports={
	add(req,res){
		account.findAll({where:{username:req.body['username']}}).then(function(e){
			if(e[0]){
				res.send({code:1,msg:'该用户已注册',data:[]})
			}else{
				account.create(req.body).then(function(e){
				res.send({code:0,msg:'注册成功',data:[]})
				})
			}
		})
		
	},
	get(req,res){	
		if(req.session['user']){
			res.send({code:0,msg:'有用户在线',data:[{
				'user':req.session['user'],
				'id':req.session['userid']
			}]})
		}else{
			res.send({code:1,msg:'无用户在线',data:[]})
		}
	},
	login(req,res){
		account.findAll({where:{
			username:req.body['username'],
			password:req.body['password']
		}}).then(function(e){
			req.session.userid=e[0]['id'];
			req.session.user=e[0]['username'];
			res.send({code:0,msg:'登录成功',data:[]})
		})
	},
	details(req,res){
		User.belongsTo(School,{foreignKey:'schoolId',targetKey: 'id'});
		User.belongsTo(Major,{foreignKey:'majorId',targetKey: 'id'});
		var id=req.body['user'];
		User.findAll(
		{
		where:{account:id},
		'include':[{
		'model':School,
	},{
		'model':Major,
	}]}).then(function(e){
			res.send(e)
		})
		
	}
	
}