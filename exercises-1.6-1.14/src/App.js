import { useState } from 'react'
import "./App.css"

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.variable}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" variable={props.good} />
      <StatisticLine text="neutral" variable={props.neutral} />
      <StatisticLine text="bad" variable={props.bad} />
      <StatisticLine text="all" variable={props.all} />
      <StatisticLine text="average" variable={props.average.toFixed(2)} />
      <StatisticLine text="positive" variable={(props.positive * 100).toFixed(0) + "%"} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1);
    setAverage((good - bad + 1) / (all + 1))
    setPositive((good + 1) / (all + 1))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / (all + 1))
    setPositive(good / (all + 1))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad - 1) / (all + 1))
    setPositive(good / (all + 1))
  }

  //random anecdote generator
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(anecdotes[0])
  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  const [rand, setRand] = useState(0)
  const [maxlocation, setMax] = useState(0)

  const handleAnecdote = () => {
    let randm = Math.floor(Math.random() * 7)
    setRand(randm)
    setSelected(anecdotes[randm])

    return (
      <div>
        {selected}
        {rand}
      </div>
    )
  }

  const handlePoints = () => {
    const copy = Object.values({ ...points })
    copy[rand] += 1
    setPoints(copy)

    var maxValue = Math.max(...copy)
    setMax(copy.indexOf(maxValue))

    return (
      <div>
        {points}
        {maxlocation}
      </div>
    )
  }

  if (all > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button action={handleGood} text="good" />
        <Button action={handleNeutral} text="neutral" />
        <Button action={handleBad} text="bad" />
        <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
        <h1>random anecdote generator</h1>
        <p>{selected} <br /> has {points[rand]} votes</p>
        <button onClick={handleAnecdote}>next anecdote</button>
        <button onClick={handlePoints}>vote</button>
        <h1>anecdote with most votes</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
        <h1>statistics</h1>
        <p>No feedback given</p>
        <h1>random anecdote generator</h1>
        <p>{selected} <br /> has {points[rand]} votes</p>
        <button onClick={handleAnecdote}>next anecdote</button>
        <button onClick={handlePoints}>vote</button>
        <h1>anecdote with most votes</h1>
        <p>{anecdotes[maxlocation]}</p>
      </div>
    )
  }
}

export default App