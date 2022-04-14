const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('Connecting')

mongoose
  .connect(url)
  .then(res => {
    console.log('connected to MongoDB')
  })
  .catch(err => {
    console.log('error connectiong to MongoDB')
  })

const personSchema = new mongoose.Schema({
  person: String,
  number: String,
  date: String,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
