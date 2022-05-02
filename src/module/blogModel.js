const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema( {
    title:{
        type:String,
        required:true,
        trim:true

    },
    body:{
        type:String,
        required:true,
        trim:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true,
        ref:"ProjectAuthor"
    },
    tags:{
        type: [String],
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    subcategory:{
        type:[String],
        trim:true
    },
    deletedAt:{
        type:Date
    },
    isDeleted:{
        type:Boolean,
        default:false,
        trim:true
    },
    publishedAt:Date,
    isPublished:{
        type:Boolean,
        default:false,
        trim:true
    }

},{timestamps:true})

module.exports = mongoose.model('Blog',blogSchema) //blogs