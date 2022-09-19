const mongoose = require('mongoose')

const schemaStudent = mongoose.Schema({
  "firstname" : String,
  "lastname" : String,
  "age" : Number,
})

const url = "mongodb+srv://marwen:marwen@cluster0.maa5ozc.mongodb.net/?retryWrites=true&w=majority"
const Student = mongoose.model("student", schemaStudent)

exports.addStudent = (firstname,lastname,age) => {
  return new Promise((resolve,reject) => {
    mongoose.connect(url).then(() => {
      let student = new Student({
        firstname : firstname,
        lastname : lastname,
        age : age,
      })
      student.save().then((data) => {
        mongoose.disconnect()
        resolve(data)
      }).catch((err) => {
        mongoose.disconnect()
        reject(err)
      })
    })
  })
}

exports.getstudents = () => {
  return new Promise((resolve,reject) => {
    mongoose.connect(url).then(() => {
      return Student.find()
    }).then((students) => {
      mongoose.disconnect()
      resolve(students)
    }).catch((err) => {
      mongoose.disconnect()
      reject(err)
    })
  })
}

exports.getstudentbyid = (id) => {
  return new Promise((resolve,reject) => {
    mongoose.connect(url).then(() => {
      return Student.findById(id)
    }).then((student) => {
      mongoose.disconnect()
      resolve(student)
    }).catch((err) => {
      mongoose.disconnect()
      reject(err)
    })
  })
}

exports.deletestudent = (id) => {
  return new Promise((resolve,reject) => {
    mongoose.connect(url).then(() => {
      return Student.deleteOne({_id:id})
    }).then((student) => {
      mongoose.disconnect()
      resolve(student)
    }).catch((err) => {
      mongoose.disconnect()
      reject(err)
    })
  })
}

exports.updatestudent = (id,firstname,lastname,age) => {
  return new Promise((resolve,reject) => {
    mongoose.connect(url).then(() => {
      return Student.updateOne({_id:id},{firstname:firstname,lastname:lastname,age:age})
    }).then((student) => {
      mongoose.disconnect()
      resolve(student)
    }).catch((err) => {
      mongoose.disconnect()
      reject(err)
    })
  })
}