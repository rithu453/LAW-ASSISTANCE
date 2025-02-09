// require('dotenv').config()

// const express = require ('express')
// const cors = require('cors');
// const app= express()

// const mongoose= require('mongoose')

// const allroutes =require('./routes/allroutes')
// const bodyParser = require('body-parser');

// app.use((req,res,next)=>{
//     console.log(req.path,req.method);
//     next();
// })
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.json())
// app.use('/api',allroutes)

// app.use(cors());
// mongoose.connect('mongodb://localhost:27017/rithwik')
//     .then(()=>{
//         // console.log(process.env.MONGO_URI)
//         app.listen(5000, ()=>{
//             console.log('hey connected to mongo compass db and listening at port 5000')
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// module.export=app;


require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import route files
const sessionRoutes = require('./routes/sesRoutes'); 
const allroutes = require('./routes/allroutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Log requests
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
});

// **✅ Root route to prevent "Cannot GET /" error**
app.get('/', (req, res) => {
    res.send("🚀 API is running! Use /api for endpoints.");
});

// Routes
app.use('/api', sessionRoutes);
app.use('/api', allroutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/rithwik';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
    });

// Export for Vercel
module.exports = app;

