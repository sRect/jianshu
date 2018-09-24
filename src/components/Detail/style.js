import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding-bottom: 30px;
`

export const Header = styled.h1`
  word-break: break-word!important;
  word-break: break-all;
  margin: 20px 0 0;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
`

export const Content = styled.div`
  margin-top: 30px;
  >p {
    font-size: 16px;
    margin: 0 0 25px;
  }
  >img {
    width: 100%;
    margin-bottom: 25px;
  }
`