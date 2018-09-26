import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
  position: relative;
`

export const Inlogin = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  > .group {
    margin-bottom: 20px;
    > button {
      width: 46%;
      padding: 5px 18px;
      font-size: 18px;
      border: none;
      border-radius: 25px;
      color: #fff;
      background: #3194d0;
      cursor: pointer;
      outline: none;
      clear: both;
    }
  }
`