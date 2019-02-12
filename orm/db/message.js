const db = require('./db');
const sequelize = require('sequelize');
	const Message = db.define('message', {
    msg: {
        type: sequelize.STRING,
    },
	userId: {
		type: sequelize.INTEGER,
	},
	 createdAt: sequelize.DATE,
     updatedAt: sequelize.DATE,
},{freezeTableName:true});
module.exports = Message;