import React, { Component } from 'react';
import { ListWrapper, ListItem } from './style'

class List extends Component {
  render() {
    return (
      <ListWrapper>
        <ListItem>
          <img src="//upload-images.jianshu.io/upload_images/9807853-11fe67ba82dc2ed9.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="img" />
          <div className="content">
            <h4 className="title">有那种网站吗，嗯？分享5个好用的在线工具！</h4>
            <p className="abstract">工作中，我们常常有一些很小需求，比如传图的时候图片太大，需要压缩一下。 而往往专业的工具动辄几百M，下载安装仅仅是用其中的一个小功能，实在不值得...</p>
          </div>
        </ListItem>
      </ListWrapper>
    )
  }
}

export default List