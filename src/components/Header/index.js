import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import store from '../../store'
import { getInputFoucused, getInputVal, handleInputChange, handleInputFocus, handleInputBlur, getList } from '../../store/actions'
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

const Header = (props) => {
  return (
    <HeaderWraper className="clearfix">
      <Logo className="fl" />
      <Container className="clearfix">
        <Nav className="clearfix fl">
          <NavItem className="active">发现</NavItem>
          <NavItem>关注</NavItem>
          <NavItem>消息</NavItem>
          <NavItem className={props.foucused ? 'focused searchWraper' : 'searchWraper'}>
            <CSSTransition in={props.foucused} timeout={200} classNames='slide'>
              <NavSearch
                value={props.inputVal}
                onChange={(e) => { props.handleInputChange(e.target.value) }}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <CSSTransition in={props.foucused} timeout={200} classNames='slide'>
              <SearchBtn>
                <i className="iconfont icon-zoom"></i>
              </SearchBtn>
            </CSSTransition>
            <SearchInfo className={props.foucused ? 'active' : ''}>
              <SearchInfoHeader className="clearfix">
                <SearchInfoTitle className="fl">热门搜索</SearchInfoTitle>
                <SearchInfoChangeBtn className="fr">换一批</SearchInfoChangeBtn>
              </SearchInfoHeader>
              <SearchInfoBody className="clearfix">
                {
                  props.searchInfoList.map(item => {
                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                  })
                }
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

const mapStateToProps = (state) => {
  return {
    // inputVal: state.headerReducer.get("inputVal"),
    // foucused: state.headerReducer.get("foucused")
    inputVal: state.get("headerReducer").get("inputVal"),
    foucused: state.getIn(["headerReducer", "foucused"]),
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
    handleInputFocus: () => {
      store.dispatch(handleInputFocus())
      store.dispatch(getList()) // axios获取数据
    },
    handleInputBlur: () => {
      store.dispatch(handleInputBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)