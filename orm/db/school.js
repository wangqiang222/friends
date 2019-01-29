const db = require('./db');
const sequelize = require('sequelize');
	const School = db.define('school', {
    name: {
        type: sequelize.STRING,
    }
},{timestamps: false,freezeTableName:true});
module.exports = School;