import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./detail'),
  loading: () => {
    return <div>正在玩命加载中...</div>
  }
});

export default class DefaultLoadable extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}