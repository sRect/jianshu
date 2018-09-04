import styled from 'styled-components'
import logo from '../../static/img/logo.png'
import avatar from '../../static/img/avatar.jpeg'

export const HeaderWraper = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`

export const Logo = styled.a.attrs({
  href: '/',
  title: '简书'
})`
  display: block;
  width: 100px;
  height: 56px;
  background: url('${logo}');
  background-size: contain;
`

export const Container = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const Nav = styled.ul`
  height: 100%;
`
export const NavItem = styled.li`
  width: 64px;
  height: 100%;
  margin-right: 10px;
  float: left;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  position: relative;
  &.active {
    color: #ea6f5a;
  }
  &.searchWraper {
    width: 240px;
    position: relative;
    cursor: auto;
    input, button{
      &.slide-enter {
        transition: all .2s ease-out;
      }
      &.slider-enter-active {
        width: 240px;
      }
      &.slide-exit {
        transition: all .2s ease-out;
      }
      &.slider-exit-active {
        width: 136px;
      }
    }
  }
  &.focused {
    input {
      width: 240px;
    }
    button {
      right: 8px;
      background: #777;
      > .icon-zoom {
        color: #fff;
      }
    }
  }
  &.styleMode {
    width: 50px;
  }
  &.userWraper {
    width: 88px;
    position: relative;
  }
`

export const NavSearch = styled.input.attrs({
  type: 'text',
  placeholder: '搜索'
})`
  width: 136px;
  height: 38px;
  border-radius: 38px;
  border: 0;
  outline: none;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  background: #eee;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -19px;
  &::placeholder {
    color: #999;
  }
`

export const SearchInfo = styled.div`
  width: 250px;
  // height: 158px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 1px;
  border-radius: 4px;
  padding: 20px 20px 10px;
  box-sizing: border-box;
  display: none;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    top: -10px;
    left: 25px;
  }
  &.active {
    display: block;
  }
`

export const SearchInfoHeader = styled.div`
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
`

export const SearchInfoTitle = styled.span`
  font-size: 14px;
  color: #969696;
`

export const SearchInfoChangeBtn = styled.a.attrs({
  href: '/'
})`
  font-size: 13px;
  color: #969696;
  text-decoration: none;
`

export const SearchInfoBody = styled.ul`
  width: 100%;
  overflow: hidden;
`

export const SearchInfoItem = styled.li`
  margin-right: 10px;
  margin-bottom: 5px;
  line-height: 20px;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  float: left;
  cursor: pointer;
`

export const SearchBtn = styled.button.attrs({
  title: '点击搜索'
})`
  width: 30px;
  height: 30px;
  background: none;
  border: 0;
  border-radius: 50%;
  outline: none;
  position: absolute;
  top: 50%;
  right: 110px;
  transform: translateY(-50%);
  cursor: pointer;
  > .icon-zoom {
    color: #969696;
  }
  &:active {
    background: #777;
  }
`

export const UserBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('${avatar}');
  background-size: contain;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #999;
    position: absolute;
    top: 50%;
    right: -12px;
  }
`
export const WriteBtn = styled.button.attrs({
  title: '写文章'
})`
  color: #fff;
  font-size: 15px;
  width: 100px;
  height: 40px;
  border: 0;
  outline: none;
  background: #ea6f5a;
  border-radius: 40px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -20px;
  &:hover {
    background: #ec6149;
  }
`