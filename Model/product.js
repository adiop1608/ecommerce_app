const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
      title:{type:String,required:true, unique:true} ,
      description:String ,
      price: {type:Number,min:[0,'Wrong  Price'],required:true},
      discountPercentage:{type:Number,min:[0,'Wrong Min Discount'],max:[50,'Wrong Max Discount']} ,
      rating: {type:Number,min:[0,'Wrong Min Rating'],max:[5,'Wrong Max Rating']},
      brand: {type:String,required:true} ,
      category:{type:String,required:true},
      thumbnail:{type:String,required:true},
      images:[String]
});

exports.Product = mongoose.model('Product',productSchema);