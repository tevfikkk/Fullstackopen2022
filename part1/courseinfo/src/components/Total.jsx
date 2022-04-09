const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises{' '}
        {parts.reduce((acc, sum) => (acc += sum.exercises), 0)}
      </p>
    </div>
  )
}

export default Total
