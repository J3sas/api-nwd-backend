require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require("../models/nwd-user-schema")
const jwt = require('jsonwebtoken')



router.get('/:id',getUserId,(req,res)=>{
    res.json(res.user)
})


router.get('/info',authenticateToken,(req,res)=>{
    res.json({message : 'Success'})
})

router.post("/create",async(req,res)=>{
    const user = new User(req.body)
    //await User.add(data)
    await user.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
   
});
router.post('/login',getUserName,(req,res)=>{

    //res.json(res.user)

    const username = res.user[0].name

    const user = {name : username }
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json(accessToken) // res.user = user whole JSON data

})


async function getUserId(req,res,next){
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({message : 'Cannot find user'})
        }
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    res.user = user
    next()
}

async function getUserName(req,res,next){
    let user
    try {
        user = await User.find(req.body.name)
        if (user == null) {
            return res.status(404).json({message : 'Cannot find user'})
        }
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    res.user = user
    next()
}

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401)
    }
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}


 // WORKING PERO ANG AUTH FOR TOKEN DI PA SURE , GENERATE TOKEN IS OKAY NA 


module.exports =  router