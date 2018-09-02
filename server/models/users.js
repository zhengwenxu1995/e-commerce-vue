let mongoose=require("mongoose");
let Schema=mongoose.Schema;

//创建表模型
let usersSchema=new Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "orderList":[
        {
            orderId:String,
            orderTotal:Number,
            addressInfo:Object,
            goodsList:Object,
            orderStatus:String,
            createDate:String
        }
    ],
    "carList":[
        {
            "productId":String,
            "productName":String,
            "productPrice":Number,
            "checked":Number,
            "productNum":Number,
            "productImage":String
         }
    ],
    "addressList":[
        {
            "addressId":Number,
            "userName":String,
            "srteetName":String,
            "postCode":String,
            "tel":String,
            "isDefault":Boolean
        }
    ]
});

module.exports= mongoose.model("User",usersSchema);