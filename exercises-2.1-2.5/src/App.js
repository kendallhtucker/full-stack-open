import "./App.css"

const Course = (props) => {
  //make course a local array
  const course = { ...props.course }

  //seperate parts from course
  var parts = course.parts

  return (
    <div>
      <h1>{props.course.name}</h1>
      {parts.map((part, i) =>
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      )}
    </div>
  )
}

const Sum = (props) => {
  //make course a local array
  const course = { ...props.course }

  //seperate parts from course
  var parts = course.parts

  const initialValue = 0
  var total = parts.reduce((sum, amount) => {
    return sum + amount.exercises
  }, initialValue  )

  console.log(total)

  return (
       <div id="bold">
       Total exercises {total}
       </div>
    )
  }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Cooking for cockroaches',
        exercises: 69,
        id: 4
      }
    ]
  }

  return (
    <div>
    <Course course={course} />
    <Sum course={course} />
    </div>
  )
}

export default App