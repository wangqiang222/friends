const db = require('./db');
const sequelize = require('sequelize');
	const account = db.define('account', {
    username: {
        type: sequelize.STRING,
    },
	password: {
		type: sequelize.STRING,
	}
},{timestamps: false,freezeTableName:true});
module.exports = account;