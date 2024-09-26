require('dotenv').config()

const express = require ('express')
const cors = require('cors');
const app= express()

const mongoose= require('mongoose')

const allroutes =require('./routes/allroutes')
const bodyParser = require('body-parser');

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use('/api',allroutes)

// app.post('/',(req,res)=>{
//     res.json({msg:123456})
// })


// app.use('/api',allroutes)
// app.use(
//     cors({
//       origin: ["http://localhost:3000"],
//       methods: ["GET", "POST"],
//       credentials: true,
//     })
//   );
app.use(cors());
mongoose.connect('mongodb://localhost:27017/rithwik')
    .then(()=>{
        // console.log(process.env.MONGO_URI)
        app.listen(5000, ()=>{
            console.log('hey connected to mongo compass db and listening at port 5000')
        });
    })
    .catch((error)=>{
        console.log(error);
    })
