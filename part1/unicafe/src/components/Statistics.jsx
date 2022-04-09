import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
    </div>
  )
}

export default Statistics
