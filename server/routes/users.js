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
  Users.updateMany({"userId":userId},{$pull:{"carList":{"productId":productId}}},(error,doc)=>{
    if(error){
      res.json({
        status:500,
        msg:"failure",
        relute:""
      })
    }else{
      res.json({
        status:200,
        msg:"success",
        relute:""
      })
    }
  })
})

//修改购物车商品数量
router.post("/caredit",(req,res,next)=>{
  let userId=req.cookies.userId,
      productId=req.body.productId,
      productNum=req.body.productNum,
      checked=req.body.checked;
      //$ 是一个占位符
      console.log(userId+" "+productId+" "+productNum)
  Users.update({"userId":userId,
                "carList.productId":productId
              },{
                "carList.$.productNum":productNum,
                "carList.$.checked":checked
              },(error,doc)=>{
                //这个doc 是显示了 修改了几条  修改成功没

                if(error){
                  res.json({
                    status:500,
                    msg:"failure",
                    relute:""
                  });
                }else{
                  res.json({
                    status:200,
                    msg:"success",
                    relute:""
                  })
                }
              })
})
//购物车的全选接口
router.post("/careditallcheck",(req,res,next)=>{
  let allcheck=req.body.allCheck;
  let userId=req.cookies.userId;
  Users.findOne({"userId":userId},(error,userDoc)=>{
      if(error){
          res.json({
              status:"500",
              msg:error.message,
              result:""
          })
      }else{
          if(userDoc){
              userDoc.carList.forEach((item)=>{
                  item.checked=allcheck;
              })
             userDoc.save((error,users)=>{
              if(error){
                  res.json({
                      status:"500",
                      msg:error.message,
                      result:""
                  });
              }else{
                  res.json({
                      status:"200",
                      msg:"suc",
                      result:"suc"
                  });
              }
             })
          }else{
            res.json({
              status:"500",
              msg:error.message,
              result:""
          });
          }
         
      }
  })
})

//加载地址
router.get("/address",(req,res,next)=>{
  let userId=req.cookies.userId;
  // let userId="a0001";
  Users.findOne({"userId":userId},(error,userDoc)=>{
    if(error){
      res.json({
        status:"500",
        msg:error.message,
        result:""
      })
    }else{
      res.json({
        status:"200",
        msg:"ok",
        result:userDoc.addressList
      })
    }
  })
})


//设置默认地址
router.post("/setdefault",(req,res,next)=>{
  let usersId=req.cookies.userId;
  let addressId=req.body.addressId;
  if(usersId==""){
    res.json({
      status:100,
      msg:"",
      result:""
    })
  }else{
    Users.findOne({"userId":usersId},(error,userDoc)=>{
      if(error){
        res.json({
          status:400,
          msg:error.message,
          result:""
        })
      }else{
        userDoc.addressList.forEach((item)=>{
          if(item.addressId==addressId){
            item.isDefault=true;
          }else{
            item.isDefault=false;
          }
        });
        userDoc.save((error,doc)=>{
          if(error){
            res.json({
              status:400,
              msg:error.message,
              result:""
            })
          }else{
            res.json({
              status:200,
              msg:"ok",
              result:""
            })
          }
        })
      }
    })
  }
  
})




module.exports = router;