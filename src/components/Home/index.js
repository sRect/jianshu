import React, { Component } from 'react';
import Topic from './Topic'
import List from './List'
import Recommend from './Recommend'
import Writer from './Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft className="fl">
          <img className="bannerImg" src="https://upload.jianshu.io/admin_banners/web_images/4453/459c5959bc66eecbd16d62140c5dbf361fd3fd20.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="img" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight className="fr">
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home