// const db = require('./../db/db');
// const sequelize = require('sequelize');
// const newstype = require('./../db/newstype');
// const User=require('./../db/news');
//查找方法：：：=====
// var f1=User.findAll({where:{
//       id: {[sequelize.Op.gt]:4}
//   }}).then(news => console.log(JSON.stringify(news)));
  //多表联查---完成
//   User.belongsTo(newstype,{foreignKey:'type',targetKey: 'id'});
//   User.findAll({'include':[{
// 	  'model':newstype,
// 	  where:{
		  //newstype条件设置
// 	  }
//   }],where:{
// 		  id:9
// 	  }}).then(news => console.log(JSON.stringify(news)));
 //更新数据方法======
// var rs= User.update({title:'sss2',content:'实打1实大师'},{where:{id:[9,10]}}).then(news => console.log(news));;

//删除数据方法======
// var ds=User.destroy({where:{id:10}})
//分页++++++++++++++++
// var fy=User.findAndCountAll({0
// where: {},
//   offset:0,
//   limit:1
// }).then(news => console.log(JSON.stringify(news)));
//插入数据++++++++++++++++++++++
// var rs= User.create({title:'sss2',content:'实打1实大师',auth:'订单的',type:8}).then(news => console.log(news));