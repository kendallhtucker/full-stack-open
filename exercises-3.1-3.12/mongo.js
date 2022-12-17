const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const nam = process.argv[3]
const num = process.argv[4]

let newEntry
if (nam !== undefined) {
    newEntry = true
} else {
    newEntry = false
}

const url = `mongodb+srv://tester:${password}@cluster0.vprowzq.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (newEntry) {
    mongoose
        .connect(url)

        // add new people to database
        .then((result) => {
            console.log('connected')

            const newb = new Person({
                name: nam,
                number: num,
            })
            return newb.save()
        })

        .then(() => {
            console.log('added', nam, 'number', num, 'to phonebook')
            return mongoose.connection.close()
        })
        .catch((err) => console.log(err))
} else {
    mongoose
        .connect(url)
        // print all the notes in db
        .then(() => {
            Person.find({}).then(result => {
                result.forEach(person => {
                    console.log(person)
                })
                return mongoose.connection.close()
            })
        })
        .catch((err) => console.log(err))
}