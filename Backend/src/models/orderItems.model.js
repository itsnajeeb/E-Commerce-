import mongoose from 'mongoose'

const orderItemSchems = mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'products',
        required:true,
    },

    size:{
        type:String,
    },

    quantity:{
        type:Number,
        required:true
    },

    price : {
        type:Number,
        required:true,
    },

    discountedPrice : {
        type:Number,
        required:true,
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    delliveryDate:{
        type:Date
    }

})

const OrderItem = mongoose.model('orderItems', orderItemSchems);

module.exports = OrderItem