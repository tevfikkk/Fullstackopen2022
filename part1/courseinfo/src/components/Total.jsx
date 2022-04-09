import React from 'react'

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default Total
