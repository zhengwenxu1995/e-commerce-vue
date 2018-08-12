var express =require("express");
var router =express.Router();
var mongoose= require("mongoose");
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
// 获取路由 这是耳机路由 
//当访问/的时候默认查找商品列表 
//request 请求  response  应答  next  下一个执行什么
router.get("/",function (request,response,next){
    // response.send("你好");
    //获取前端的传过来的参数
    //获取排序
    let sort = parseInt(request.param("sort"));
    let page= parseInt(request.param("page"));
    let pageSize=parseInt(request.param("pageSize"))
    let skip = (page-1)*pageSize;
    let params= {};
    //skip()
    let goodsModel=Goods.find(params).skip(skip).limit(pageSize);  //拿到数据
    goodsModel.sort({"productPrice":sort}) //给数据排序
    //拿到数据模型
    goodsModel.exec(function (error,doc){
        if(error){
            response.json({
                status:404,
                msg:error.message
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
//把路由导出
module.exports = router;