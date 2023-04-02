import { Navigate, useLocation } from 'react-router-dom';

type PrivateRouteProps = {
  routerCheck?: ('auth' | 'owner' | 'purchased' | 'admin')[];
  children: JSX.Element;
};

const PrivateRoute = ({ routerCheck, children }: PrivateRouteProps) => {
  const { pathname } = useLocation();
  const user = 1;
  routerCheck;
  // TODO: 로그인 상태 확인하기
  if (user === 1) return <Navigate to={`/login?returnUrl=${pathname}`} replace />;
  // TODO: 본인만 접근 가능하게 하기

  // TODO: 구입한 것만 접근 가능하게 하기

  return children;
};

export default PrivateRoute;
