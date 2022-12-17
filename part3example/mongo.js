const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://tester:${password}@cluster0.vprowzq.mongodb.net/noteApp?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
    .connect(url)

// add new notes to database
/* .then((result) => {
  console.log('connected')

  const note = new Note({
    content: 'Connor is baboosh',
    date: new Date(),
    important: true,
  })

  const note2 = new Note({
      content: 'Ivy is cute!',
      date: new Date(),
      important: true,
    })

    result = note.save(), note2.save()

  return result
})
.then(() => {
  console.log('note saved!')
  return mongoose.connection.close()
}) */

// print all the notes in db
Note.find({ important: true}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

    .catch((err) => console.log(err))

