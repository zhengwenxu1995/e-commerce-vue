let mongoose=require("mongoose")//引入mongoose模块
let Schema=mongoose.Schema;  //定义表模型   通过mongoose获取schema对象

//定义商品模型
var productSchema=new Schema({
    "productId": String,
    "productName": String,
    "productPrice": Number,
    "productImage": String
});


//导出模块
module.exports = mongoose.model("Good",productSchema);
//在routes 定义路由