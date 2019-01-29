var userRouter=require('./user');
var schoolRouter=require('./school');
var majorRouter=require('./major');
module.exports={
	'/user':userRouter,
	'/school':schoolRouter,
	'/major':majorRouter
}