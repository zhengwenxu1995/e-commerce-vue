var express = require('express');
var router = express.Router();
let Users=require("../models/users.js");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('我是二级路由users');
// });

//登录
router.post("/userlogin",function (req,res,next){
  let params={
    userName:req.body.userName,
    userPwd:req.body.userName
  }
  Users.findOne(params,function (error,Userdoc){
    if(error){
      res.json({
        status:'500',
        msg:error.message
      })
    }else{   
      if(Userdoc){
        res.cookie("userId",Userdoc.userId,{
          path:"/",
          maxAge:1000*60*60
        })
        res.cookie("userName",Userdoc.userName,{
          path:"/",
          maxAge:1000*60*60
        })
        res.json({
          status:'200',
          msg:"success",
          userNames:Userdoc.userName,
          relute:""
        })
      }else{
        res.json({
          status:'500',
          msg:"failure",
          relute:""
        })
      }
    }
  })
})

//退出登录状态
router.post("/outlogin",function (req,res,next){
  res.cookie("userId","",{
    path:"/",
    maxAge:0
  })
  res.cookie("userName","",{
    path:"/",
    maxAge:0
  })
    res.json({
      status:"200",
      msg:"success",
      relute:""
})
})
//登录状态
router.post("/loginstatus",function (req,res,next){
    if(req.cookies.userId){
      res.json({
        status:"200",
        msg:"success",
        relute:{
          userName:req.cookies.userName
        }
      });
    }else{
      res.json({
        status:"500",
        msg:"failure",
        relute:""
      });
    }
})
//购物车

router.get("/shopcar",function (req,res,next){
  let addCarUserId=req.cookies.userId;
  Users.findOne({"userId":addCarUserId},(error,shopCarDoc)=>{
    if(error){
      res.json({ 
          status:404,
          msg:error.message,

      })
    }else{
     if(shopCarDoc){
      res.json({
        status:200,
        msg:"success",
        relute:shopCarDoc.carList
      })
     }
    }
  })
})
// 删除一个商品

router.post("/delcommerce",(req,res,next)=>{
  let userId=req.cookies.userId;
  let productId=req.body.productId;
  Users.findOne({"userId":userId,"carList":[{"productId":productId}]},(error,doc)=>{
    if(error){
      console.log(error.message);
    }else{
      console.log("wozhaodaole"+doc)
    }
  })
})
module.exports = router;