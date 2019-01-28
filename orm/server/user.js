var User=require('./../db/user');
const sequelize = require('sequelize');
module.exports={
	find(req,res){
	var f1=User.findAll({where:{
		id: {[sequelize.Op.gt]:0},
		status:0
	}}).then(function(e){
		res.send(e)
	});	
	},
	add(req,res){
		User.create(req.body).then(function(e){
 			res.send(req.body)
		})
	},
	update(req,res){
		var gid=req.body['gid'];
		User.update(req.body,{where:{id:gid}}).then(function(e){if(e[0]){
			res.send('修改成功')
		}else{
			res.send('修改失败')
		}	
		});
	},
	dele(req,res){
		var gid=req.query['id'];
		User.update({status:1},{where:{id:gid}}).then(function(e){if(e){
		res.send('冻结用户成功')
		}else{
		res.send('冻结用户失败')	
		}})
	},
	redele(req,res){
		var gid=req.query['id'];
		User.update({status:0},{where:{id:gid}}).then(function(e){if(e){
		res.send('用户恢复成功')
		}})
	}
}