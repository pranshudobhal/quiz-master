import { Navigate, Route, useLocation } from 'react-router';
import { useAuth } from './context/auth/authContext';

export function PrivateRoute({ path, ...props }: any) {
  const location = useLocation();
  const { token } = useAuth();

  return token ? <Route path={path} {...props} /> : <Navigate state={{ from: location.pathname }} replace to="/login" />;
}
