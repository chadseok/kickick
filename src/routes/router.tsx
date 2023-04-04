import { createBrowserRouter } from 'react-router-dom';

import Layout from 'src/components/features/Layout';
import { BoardEdit, BoardList, BoardPost, BoardWrite } from 'src/pages/Board';
import Error from 'src/pages/Error';
import Home from 'src/pages/Home';
import { KickEdit, KickList, KickPost, KickWrite } from 'src/pages/Kick';
import Login from 'src/pages/Login';
import MyPage from 'src/pages/MyPage';
import { NoticeEdit, NoticeList, NoticePost, NoticeWrite } from 'src/pages/Notice';
import SignUp from 'src/pages/SignUp';

import PrivateRoute from './PrivateRoute';

interface RouterElement {
  path: string;
  element: JSX.Element;
  withLayout?: boolean;
  routerCheck?: ('auth' | 'owner' | 'purchased' | 'admin')[];
}

const routerData: RouterElement[] = [
  { path: '/', element: <Home />, withLayout: true },
  { path: '/login', element: <Login />, withLayout: false },
  { path: '/signup', element: <SignUp />, withLayout: false },
  { path: '/notice/list', element: <NoticeList />, withLayout: true },
  { path: '/notice/post/:postid', element: <NoticePost />, withLayout: true },
  {
    path: '/notice/write',
    element: <NoticeWrite />,
    routerCheck: ['auth', 'admin'],
    withLayout: true,
  },
  {
    path: '/notice/edit/:postid',
    element: <NoticeEdit />,
    routerCheck: ['auth', 'admin'],
    withLayout: true,
  },
  { path: '/board/list', element: <BoardList />, withLayout: true },
  { path: '/board/post/:postid', element: <BoardPost />, withLayout: true },
  { path: '/board/write', element: <BoardWrite />, withLayout: true },
  {
    path: '/board/edit/:postid',
    element: <BoardEdit />,
    routerCheck: ['auth', 'owner'],
    withLayout: true,
  },
  { path: '/kick/list', element: <KickList />, withLayout: true },
  {
    path: '/kick/post/:postid',
    element: <KickPost />,
    routerCheck: ['auth', 'purchased'],
    withLayout: true,
  },
  { path: '/kick/write', element: <KickWrite />, withLayout: true },
  {
    path: '/kick/edit/:postid',
    element: <KickEdit />,
    routerCheck: ['auth', 'owner'],
    withLayout: true,
  },
  { path: '/mypage', element: <MyPage />, routerCheck: ['auth'], withLayout: true },
];

export const router = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element:
        router.routerCheck && router.routerCheck.length !== 0 ? (
          <PrivateRoute routerCheck={router.routerCheck}>
            <Layout withLayout={router.withLayout}>{router.element}</Layout>
          </PrivateRoute>
        ) : (
          <Layout withLayout={router.withLayout}>{router.element}</Layout>
        ),
      errorElement: <Error />,
    };
  }),
);
