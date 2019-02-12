var userRouter=require('./user');
var schoolRouter=require('./school');
var majorRouter=require('./major');
var messageRouter=require('./message');
var accountRouter=require('./account');
module.exports={
	'/user':userRouter,
	'/school':schoolRouter,
	'/major':majorRouter,
	'/message':messageRouter,
	'/account':accountRouter
}