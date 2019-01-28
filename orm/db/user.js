const db = require('./db');
const sequelize = require('sequelize');
	const User = db.define('user', {
    name: {
        type: sequelize.STRING,
    },
    sex: {
        type: sequelize.STRING,
    },
	birth:{
			type: sequelize.STRING,
			},
	schoolId:{
			type: sequelize.INTEGER,
			},
	phone:{
			type: sequelize.STRING,
	},
	email:{
			type: sequelize.STRING,
	},
	qq:{
			type: sequelize.STRING,
	},
	majorId:{
			type: sequelize.INTEGER,
	},
	grade:{
			type: sequelize.STRING,
	},
	graduation:{
			type: sequelize.STRING,
	},
	status:{
			type: sequelize.INTEGER,
	}
},{timestamps: false,freezeTableName:true});
module.exports = User;