const express = require('express');
const router = express.Router();
const x = require("../models/people");
const JWT_SECRET = "RITH";
const jwt = require('jsonwebtoken');


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, password and email are required fields' });

    }
    // res.json({ name, email, password });

    try {
        let user = await x.findOne({ email });

        if (!user) {
            user = new x({ name, email, password });
            await user.save();
            const data = {
                user: {
                    id: user.id
                }
            }

            const authToken = jwt.sign(data, JWT_SECRET);

            console.log({ authToken });
            res.json({ auth: true, 'authtoken': authToken, message: 'User data saved successfully' });
        }
        else {
            res.json({ message: 'Email is already exists!!' });
        }
    } catch (error) {
        console.error('Error saving user details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/signin', async (req, res) => {
    const { email , password} = req.body;
    if ( !email || !password ) {
      return res.status(400).json({ error: 'Please enter the email and password' });
    }
    try {
      let user = await x.findOne({ email});
      if (!user) {
        res.json({ message: 'Email does not exists!!' });
      }
      if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid credentials!' });
      }
      else
      {
        const data = {
          user:{
            id: user.id
          }
        }
        const user_name = user.name;
        const authToken = jwt.sign(data, JWT_SECRET);
        
        console.log({authToken});
        res.json({ user_Name : user_name, auth : true ,'authtoken':authToken, message: 'User logined successfully' });
      }
    } catch (error) {
      console.error('Error saving user details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports=router;

