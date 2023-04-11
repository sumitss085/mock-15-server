const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connection =mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

module.exports=connection