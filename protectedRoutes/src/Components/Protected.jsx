import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';


const Protected = ({loggedIn,Children}) => {

  if(!loggedIn){
    return <Navigate to="/login" />
  }
  return Children?Children:Outlet;
}

export default Protected
