import "./App.css"

//shit we need for sum
const initialValue = 0

const Sum = (props) => {
  const array = props.array

  console.log("array = ", array)

  const total = array.reduce((sum, amount) => {
    console.log("hello", sum, amount)
    return (
      sum + amount.exercises
    )
  }, 0)

  return (
    <div id="bold">total of {total} exercises</div>
  )
}

const Course = (props) => {
  //make course a local array
  const courselist = props.courses.map((x) => x)
  console.log("courselist = ", courselist)

  //seperate parts from course (just did this to learn)
  var parts = courselist[0].parts.map((x) => x)
  console.log("parts = ", parts)



  return (
    <div>
      {/* get all courses */}
      {courselist.map((part, i) =>
        <div key={part.id}>
          <h1>{part.name}</h1>

          {/* get all parts */}
          {courselist[i].parts.map((subpart, i) =>
            <p key={subpart.id}>
              {subpart.name} {subpart.exercises}
            </p>
          )}

          {/* sum parts in this course*/}
          <Sum array={courselist[i].parts} />

        </div>
      )}
    </div>
  )
}

export default Course