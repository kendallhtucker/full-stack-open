const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = ({ arr }) => {
  console.log(arr)
  return (
    <p>
      <div>{arr[0].name} {arr[0].exercises} </div>
      <div>{arr[1].name} {arr[1].exercises} </div>
      {arr[2].name} {arr[2].exercises}
    </p>

  )
}

const Total = ({ arr }) => {
  return (
   arr[0].exercises + arr[1].exercises + arr[2].exercises
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content arr={course.parts} />
      Total Number of Exercises&nbsp;
      <Total arr={course.parts} />
    </div>
  )
}

export default App