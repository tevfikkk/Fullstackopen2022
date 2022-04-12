const mongoose = require('mongoose')

process.argv.length < 3
  ? console.log(
      'Please provide the password as an argument: node mongo.js <password>'
    )
  : null

const password = process.argv[2]

// so-called login
const personName = process.argv[3]
const personNumber = process.argv[4]

const url = `mongodb+srv://tevfik1234:${password}@fso.ghowy.mongodb.net/personData?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  person: String,
  number: String,
  date: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  person: personName,
  number: personNumber,
  date: new Date(),
})

// show people and register
if (password && !(personName && personNumber)) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
      mongoose.connection.close()
    })
  })
} else {
  person.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })
}

// Since the parameter is an empty object {}, we get all of the persons stored in the people collection in db
