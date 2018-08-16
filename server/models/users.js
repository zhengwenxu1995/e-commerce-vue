let mongoos=require("mongoose");
let Schema=mongoose.Schema;

//创建表模型
let userssChema=new Schema({
    "userId":String,
    "userName":String,
    "userPwd":String,
    "orderList":[],
    "carList":[
        {
            "productId":String,
            "productName":String,
            "salePrice":Number,
            "checked":Number,
            "productNum":Number
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

module.exports= mongoos.model("User",usersSchema);