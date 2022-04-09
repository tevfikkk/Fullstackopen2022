import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const onClick = () => setSelected(Math.floor(Math.random() * 7))

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    setVote(vote.map((val, i) => (selected === i ? val + 1 : val)))
  }
  //const voteNumbers = Array(anecdotes.length).fill(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {vote[selected]} votes
      <Button onClick={handleVote} text='vote' />
      <Button onClick={onClick} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[vote.indexOf(Math.max(...vote))]}
    </div>
  )
}

export default App
