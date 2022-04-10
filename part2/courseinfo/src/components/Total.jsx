const Total = ({ parts }) => {
  return (
    <div>
      <b>
        Number of exercises{' '}
        {parts.reduce((acc, sum) => (acc += sum.exercises), 0)}
      </b>
    </div>
  )
}

export default Total
