var express =require("express");
var router =express.Router();
var mongoose= require("mongoose");
//商品展示  goods.js
var Goods = require("../models/goods.js");



//连接mongdb数据库  使用mongoose的驱动  使用mongodb自带的驱动也可以
mongoose.connect("mongodb://127.0.0.1:27017/commerce");
//监听是否连接成功  connected
mongoose.connection.on("connected",function (){
    console.log("连接成功");
});
mongoose.connection.on("error",function (){
    console.log("连接失败");
});
mongoose.connection.on("disconnected",function (){
    console.log("断开连接");
});
// 获取路由 这是二级路由 
//当访问/的时候默认查找商品列表 
//request 请求  response  应答  next  下一个执行什么


//获取商品列表
router.get("/",function (request,response,next){
    // response.send("你好");
    //获取前端的传过来的参数
    //获取排序
    let sort = parseInt(request.param("sort"));
    let page= parseInt(request.param("page"));
    let pageSize=parseInt(request.param("pageSize"));
    let checkPrice=request.param("checkPrice");
    let params= {};
    let gtPrice="",ltPrice="";
    if(checkPrice!="all"){
        switch (checkPrice){
            case "0":
                gtPrice=0;
                ltPrice=100;
            break;
            case "1":
                gtPrice=100;
                ltPrice=500;
            break;
            case "2":
                gtPrice=500;
                ltPrice=1000;
            break;
            case "3":
                gtPrice=1000;
                ltPrice=5000;
            break;
        }
        params = {
            productPrice:{
                $gt:gtPrice,
                $lt:ltPrice
            }   
        };
    }
    let skip = (page-1)*pageSize;

    //skip()  跳过多少行   limit()每次显示多少数据
    let goodsModel=Goods.find(params).skip(skip).limit(pageSize);  //拿到数据
    goodsModel.sort({"productPrice":sort}) //给数据排序
    //拿到数据模型
    goodsModel.exec(function (error,doc){
        if(error){
            response.json({
                status:404,
                msg:error.message,
                relute:""
            })
        }else{
            response.json({
                status:200,
                msg:"ok",
                count:doc.length,
                result:doc
            })
        }
    })
});


//加入购物车
router.post("/addShopCar",function (request,response,next){
    //用户模块 user.js
    var User = require("../models/users.js")
    let userId=request.body.userId;
    let productId=request.body.productId;
    User.findOne({"userId":userId},function (error1,userDoc){
        if(error1){
            response.json({
                status:404,
                msg:error1.message,
                relute:""
            })
        }else{
            if(userDoc){
                //如果购物车里面有的话 productNum 执行++
                let goodsItem="";
                userDoc.carList.forEach((item) => {
                    if(item.productId==productId){
                        item.productNum++;
                        goodsItem=item;
                    }
                });
                if(goodsItem){
                    userDoc.save(function (error3,shopCarDoc){
                        if(error3){
                            response.json({
                                status:404,
                                msg:error3.message,
                                relute:""
                            });
                        }else{
                            response.json({
                                status:200,
                                msg:"添加成功",
                                result:"success"
                            });
                        }
                    })
                }else{
                    Goods.findOne({"productId":productId},function (error2,goodsDoc1){
                        if(error2){
                            response.json({
                                status:404,
                                msg:error2.message,
                                relute:""
                            })
                        }else{
                            if(goodsDoc1){
                                let newGoods={
                                    checked:1,
                                    productNum:1,
                                    productId: goodsDoc1.productId,
                                    productName: goodsDoc1.productName,
                                    productPrice: goodsDoc1.productPrice,
                                    productImage: goodsDoc1.productImage
                                }
                                userDoc.carList.push(newGoods);
                                userDoc.save(function (error3,shopCarDoc){
                                    if(error3){
                                        response.json({
                                            status:404,
                                            msg:error3.message,
                                        });
                                    }else{
                                        response.json({
                                            status:200,
                                            msg:"添加成功",
                                            result:"success"
                                        });
                                    }
                                })
                            }
                        }
                    })
                }
                
            }
            
        }




    })
    
    
})





//把路由导出
module.exports = router;