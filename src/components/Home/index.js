import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetHomeData, toggleScrollTopShow } from '../../store/actions'
import Topic from './Topic'
import List from './List'
import Recommend from './Recommend'
import Writer from './Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackToTop
} from './style'

class Home extends Component {

  handleScrollTop = () => { // 回到顶部
    window.scrollTo(0, 0);
  }

  handleChangeScrollTopShow = () => {
    window.addEventListener("scroll", this.props.changeScrollTopShow)
  }

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
        {
          this.props.showScroll ? <BackToTop onClick={this.handleScrollTop}>Top</BackToTop> : ''
        }

      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.handleGetHomeData();
    this.handleChangeScrollTopShow();
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(["homeReducer", "showScroll"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetHomeData: () => {
      dispatch(handleGetHomeData());
    },
    changeScrollTopShow: () => {
      let num = document.documentElement.scrollTop;
      if (num > 500) {
        dispatch(toggleScrollTopShow(true));
      } else {
        dispatch(toggleScrollTopShow(false));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)