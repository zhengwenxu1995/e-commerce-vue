let mongoose=require("mongoose");
let Schema=mongoose.Schema;

//创建表模型
let usersSchema=new Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "orderList":Array,
    "carList":[
        {
            "productId":String,
            "productName":String,
            "salePrice":Number,
            "checked":Number,
            "productNum":Number,
            "productImage":String
         }
    ],
    "addressList":[
        {
            "addressId":String,
            "userName":String,
            "srteetName":String,
            "postCode":String,
            "tel":String,
            "isDefault":String
        }
    ]
});

module.exports= mongoose.model("User",usersSchema);