import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import store from '../../store'
import {
  getInputFoucused,
  getInputVal,
  handleInputChange,
  handleInputFocus,
  handleInputBlur,
  getList,
  changeMouseIn,
  handleChangeList
} from '../../store/actions'

import {
  HeaderWraper,
  Logo,
  Container,
  Nav,
  NavItem,
  NavSearch,
  SearchBtn,
  UserBtn,
  WriteBtn,
  SearchInfo,
  SearchInfoHeader,
  SearchInfoTitle,
  SearchInfoChangeBtn,
  SearchInfoBody,
  SearchInfoItem
} from './style'

class Header extends Component {

  render() {
    const {
      foucused,
      inputVal,
      mouseIn,
      currentPage,
      totalPage,
      pageSize,
      searchInfoList,
      handleInputChange,
      handleInputFocus,
      handleInputBlur,
      changeMouseIn,
      handleChangeList
    } = this.props;

    const pageList = [];
    const newList = searchInfoList.toJS();
    // 注意：searchInfoList是一个immutable对象，不是普通数组，不可以直接使用，如searchInfoList[i]
    // 可以通过toJS()方法转换
    for (let i = (currentPage - 1) * pageSize, len = currentPage * pageSize; i < len; i++) {
      if (newList.length) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    return (
      <HeaderWraper className="clearfix">
        <Logo className="fl" />
        <Container className="clearfix">
          <Nav className="clearfix fl">
            <NavItem className="active">发现</NavItem>
            <NavItem>关注</NavItem>
            <NavItem>消息</NavItem>
            <NavItem className={foucused ? 'focused searchWraper' : 'searchWraper'}>
              <CSSTransition in={foucused} timeout={200} classNames='slide'>
                <NavSearch
                  value={inputVal}
                  onChange={(e) => { handleInputChange(e.target.value) }}
                  onFocus={() => { handleInputFocus(searchInfoList) }}
                  onBlur={handleInputBlur}>
                </NavSearch>
              </CSSTransition>
              <CSSTransition in={foucused} timeout={200} classNames='slide'>
                <SearchBtn>
                  <i className="iconfont icon-zoom"></i>
                </SearchBtn>
              </CSSTransition>
              <SearchInfo
                className={foucused || mouseIn ? 'active' : ''}
                onMouseEnter={() => { changeMouseIn(true) }}
                onMouseLeave={() => { changeMouseIn(false) }}>
                <SearchInfoHeader className="clearfix">
                  <SearchInfoTitle className="fl">热门搜索</SearchInfoTitle>
                  <SearchInfoChangeBtn className="fr" onClick={() => { handleChangeList(currentPage, totalPage, this.spinIcon) }}>
                    <i ref={(spinIcon) => { this.spinIcon = spinIcon }} className="iconfont icon-spin"></i>
                    换一批
                  </SearchInfoChangeBtn>
                </SearchInfoHeader>
                <SearchInfoBody className="clearfix">
                  {pageList}
                </SearchInfoBody>
              </SearchInfo>
            </NavItem>
          </Nav>
          <Nav className="clearfix fr">
            <NavItem className="fl styleMode">
              <i className="iconfont icon-Aa"></i>
            </NavItem>
            <NavItem className="fl userWraper">
              <UserBtn></UserBtn>
            </NavItem>
          </Nav>
        </Container>
        <WriteBtn className="fr">
          <i className="iconfont icon-pen"></i>
          写文章
        </WriteBtn>
      </HeaderWraper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // inputVal: state.headerReducer.get("inputVal"),
    // foucused: state.headerReducer.get("foucused")
    inputVal: state.get("headerReducer").get("inputVal"),
    foucused: state.getIn(["headerReducer", "foucused"]),
    mouseIn: state.getIn(["headerReducer", "mouseIn"]),
    currentPage: state.getIn(["headerReducer", "currentPage"]),
    totalPage: state.getIn(["headerReducer", "totalPage"]),
    pageSize: state.getIn(["headerReducer", "pageSize"]),
    searchInfoList: state.getIn(["headerReducer", "searchInfoList"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInputVal: () => {
      store.dispatch(getInputVal())
    },
    getInputFoucused: () => {
      store.dispatch(getInputFoucused())
    },
    handleInputChange: (val) => {
      store.dispatch(handleInputChange(val))
    },
    handleInputFocus: (searchInfoList) => {
      // searchInfoList.size === 0 ? store.dispatch(getList()) : ''; // axios获取数据
      (searchInfoList.size === 0) && store.dispatch(getList());
      store.dispatch(handleInputFocus())
    },
    handleInputBlur: () => {
      store.dispatch(handleInputBlur())
    },
    changeMouseIn: (arg) => {
      store.dispatch(changeMouseIn(arg))
    },
    handleChangeList: (currentPage, totalPage, spinIcon) => {
      // console.log(spinIcon.style.transform)
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');

      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }

      console.log(originAngle)

      spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (currentPage + 1 > totalPage) {
        store.dispatch(handleChangeList(1))
      } else {
        store.dispatch(handleChangeList(currentPage + 1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)