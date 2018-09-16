import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from './style'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img src="http://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="img" />
          <div className="name">
            简书电影
          </div>
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic