import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";

export function ProtectedRouteElement({element, anon}) {
  const location = useLocation();
  const {user} = useSelector(state => state.auth);
  const {from} = location.state || {from: {pathname: "/"}};

  if (anon && user.email) {
    return <Navigate to={from}/>
  }

  if (!anon && !user.email) {
    return <Navigate to="/login" state={{from: location.pathname}} replace/>
  }

  return element
}

