const db = require('./db');
const sequelize = require('sequelize');
	const Major = db.define('major', {
    name: {
        type: sequelize.STRING,
    }
},{timestamps: false,freezeTableName:true});
module.exports = Major;