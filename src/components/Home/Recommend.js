import React, { Component } from 'react';
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem, QRcode } from './style'

class Recommend extends Component {
  render() {
    let { list } = this.props;

    return (
      <div>
        <RecommendWrapper>
          {
            list.map(item => {
              return (
                <RecommendItem key={item.get("id")}>
                  <img src={item.get("imgUrl")} alt={item.get("alt")} />
                </RecommendItem>
              )
            })
          }
        </RecommendWrapper>
        <QRcode>
          <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="QRcode" />
          <div className="info">
            <div className="title">下载简书手机App</div>
            <div className="description">随时随地发现和创作内容</div>
          </div>
        </QRcode>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["homeReducer", "recommendList"])
})


export default connect(mapStateToProps, null)(Recommend)