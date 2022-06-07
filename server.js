
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

const io = require("socket.io")(3000, {
    cors: {
      origin: "*",
    },
  });
  require('dotenv').config()

const cors = require("cors");

io.on('connection',socket => {
    socket.on('send-chat-message',message => {
        socket.broadcast.emit('chat-message',message)
    })
})



//conneting to DB via ENV
mongoose.connect(process.env.DATABASE_URL_CHILLDB)
.then(()=> app.listen(process.env.PORT || 4000,()=>console.log("up and running *4000")),
e=>console.log(`error`,e))

const app = express();
app.use(express.json());
app.use(cors());




const subscribersRouter = require('./routes/subscribers')
app.use('/users',subscribersRouter)




