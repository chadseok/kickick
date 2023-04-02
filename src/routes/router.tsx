import { createBrowserRouter } from 'react-router-dom';

import { BoardEdit, BoardList, BoardPost, BoardWrite } from '../pages/Board';
import Error from '../pages/Error';
import Home from '../pages/Home';
import { KickEdit, KickList, KickPost, KickWrite } from '../pages/Kick';
import Login from '../pages/Login';
import MyPage from '../pages/MyPage';
import { NoticeEdit, NoticeList, NoticePost, NoticeWrite } from '../pages/Notice';
import SignUp from '../pages/SignUp';

import PrivateRoute from './PrivateRoute';

interface RouterElement {
  path: string;
  element: JSX.Element;
  routerCheck?: ('auth' | 'owner' | 'purchased' | 'admin')[];
}

const routerData: RouterElement[] = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/notice/list', element: <NoticeList /> },
  { path: '/notice/post/:postid', element: <NoticePost /> },
  { path: '/notice/write', element: <NoticeWrite />, routerCheck: ['auth', 'admin'] },
  {
    path: '/notice/edit/:postid',
    element: <NoticeEdit />,
    routerCheck: ['auth', 'admin'],
  },
  { path: '/board/list', element: <BoardList /> },
  { path: '/board/post/:postid', element: <BoardPost /> },
  { path: '/board/write', element: <BoardWrite /> },
  {
    path: '/board/edit/:postid',
    element: <BoardEdit />,
    routerCheck: ['auth', 'owner'],
  },
  { path: '/kick/list', element: <KickList /> },
  {
    path: '/kick/post/:postid',
    element: <KickPost />,
    routerCheck: ['auth', 'purchased'],
  },
  { path: '/kick/write', element: <KickWrite /> },
  {
    path: '/kick/edit/:postid',
    element: <KickEdit />,
    routerCheck: ['auth', 'owner'],
  },
  { path: '/mypage', element: <MyPage />, routerCheck: ['auth'] },
];

export const router = createBrowserRouter(
  routerData.map((router) => {
    if (router.routerCheck && router.routerCheck.length !== 0) {
      return {
        path: router.path,
        element: <PrivateRoute routerCheck={router.routerCheck}>{router.element}</PrivateRoute>,
        errorElement: <Error />,
      };
    } else {
      return {
        path: router.path,
        element: router.element,
        errorElement: <Error />,
      };
    }
  }),
);
