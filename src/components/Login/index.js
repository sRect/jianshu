import React from 'react';
import Loadable from 'react-loadable';

const Login = Loadable({
  loader: () => import('./login'),
  loading: () => {
    return <div>正在玩命加载中...</div>
  }
});

export default () => <Login />