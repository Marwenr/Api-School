const express = require('express')
const app = express()
const mongoose = require('mongoose')
const studentRoute = require('./routers/student.route')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin',"*")
  res.setHeader('Access-Control-Request-Method',"*")
  res.setHeader('Access-Control-Allow-Methods',"*")
  res.setHeader('Access-Control-Allow-Headers',"*")
  next()
})

app.use('/',studentRoute)

app.listen(4040)