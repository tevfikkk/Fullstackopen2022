import React from 'react'

const Notes = ({ name, number }) => {
  return (
    <li>
      <b>name:</b> {name} {number}
    </li>
  )
}

export default Notes
