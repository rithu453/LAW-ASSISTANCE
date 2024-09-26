const mongoose=require ('mongoose')
// const Schema= mongoose.Schema

const schema1 = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    
},{timestamps:true});
module.exports=mongoose.model('user_signup',schema1);



// rithwik:tokan:yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5Mjc5Mjg1MDU4ZDgzOGU1ODdiMDY4In0sImlhdCI6MTcyMDg3NTMwNH0.Hi704d0MQuQR_75_qkM0egH3YhczE9qq0xt1FQNjP-k