import React from 'react'

const Test = ({dispatch}) => {
  return (
    <div>
      <button onClick={()=>dispatch("mul")}>MUl</button>
    </div>
  )
}

export default Test
