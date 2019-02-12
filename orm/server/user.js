var User=require('./../db/user');
var School=require('./../db/school');
var Major=require('./../db/major');
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
	finds(req,res){
  User.belongsTo(School,{foreignKey:'schoolId',targetKey: 'id'});
  var sname=req.query['sname'];
  User.findAll({'include':[{
	  'model':School,
	  where:{
	name: {[sequelize.Op.like]:'%'+sname+'%'}
	  }
  }]}).then(news => res.send(JSON.stringify(news)));
	},
	findm(req,res){
	User.belongsTo(School,{foreignKey:'schoolId',targetKey: 'id'});
	User.belongsTo(Major,{foreignKey:'majorId',targetKey: 'id'});
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
	}]}).then(news => res.send(JSON.stringify(news)));
	},
	add(req,res){
	School.findAll({where:{name:req.body['schoolId']}}).then(function(e){
		if(e[0]){
			var sid=e[0]["id"];
			req.body['schoolId']=sid;
			Major.findAll({where:{name:req.body['majorId']}}).then(function(me){
				if(me[0]){
				var mid=me[0]["id"];	
				req.body['majorId']=mid;
						User.create(req.body).then(function(e){
						if(e){
							res.send({'code':0,'msg':'增加成功','data':[]})
						}
						})
				}else{
				res.send('该专业暂无记录,请重新输入，或者申请增加专业')	
				}
			})
			}else{
			res.send('该学校暂无记录,请重新输入，或者申请增加学校')
		}
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