const route = require('express').Router()
const studentModel = require('../models/student')

route.post('/addstudent', (req,res) => {
  studentModel.addStudent(req.body.firstname,req.body.lastname,req.body.age)
  .then((student) => res.send(student))
  .catch((err) => res.send(err))
})

route.get('/students', (req,res) => {
  studentModel.getstudents()
  .then((students) => res.status(200).json(students))
  .catch((err) => res.status(400).json(err))
})

route.get('/student/:id', (req,res) => {
  studentModel.getstudentbyid(req.params.id)
  .then((student) => res.status(200).json(student))
  .catch((err) => res.status(400).json(err))
})

route.delete('/student/:id', (req,res) => {
  studentModel.deletestudent(req.params.id)
  .then((student) => res.status(200).json(student))
  .catch((err) => res.status(400).json(err))
})

route.patch('/student/:id', (req,res) => {
  studentModel.updatestudent(req.params.id,req.body.firstname,req.body.lastname,req.body.age)
  .then((student) => res.status(200).json(student))
  .catch((err) => res.status(400).json(err))
})

module.exports = route