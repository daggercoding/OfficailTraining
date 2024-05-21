import React, { useReducer } from 'react'
import Test from './Test';
export  function reduce(state, action){
    if(action=="inc"){
        return state+1;
    }else if(action=="dec"){
        return state - 1
    }else if(action=="mul"){
      return state*10
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(reduce, 1);
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch("inc")}>Inc</button>
      <button onClick={()=>dispatch("dec")}>Dec</button>
      <Test dispatch={dispatch}></Test>
    </div>
  )
}

export default Reducer
