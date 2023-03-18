import {Navigate, useLocation} from 'react-router-dom';
import {useAppSelector} from "../../utils/hooks";

interface IProtectedRouteElementProps {
  element: JSX.Element;
  anon: boolean;
}


export function ProtectedRouteElement({element, anon}: IProtectedRouteElementProps) {
  const location = useLocation();
  const {user} = useAppSelector(state => state.auth);
  const {from} = location.state || {from: {pathname: "/"}};

  if (anon && user.email) {
    return <Navigate to={from}/>
  }

  if (!anon && !user.email) {
    return <Navigate to="/login" state={{from: location.pathname}} replace/>
  }

  return element
}


