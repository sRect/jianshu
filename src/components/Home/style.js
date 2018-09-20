import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
`

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  >.bannerImg {
    width: 100%;
    height: 240px;
  }
`

export const HomeRight = styled.div`
  width: 270px;
  
`

export const TopicWrapper = styled.ul`
  width: 100%;
  margin: 35px 0 20px 0;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.li`
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
  cursor: pointer;
  > img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  > .name {
    font-size: 14px;
    display: inline-block;
    padding: 0 11px 0 6px;
    text-align: center;
  }
`

export const ListWrapper = styled.ol`
  width: 100%;
  height: auto;
`

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  // min-height: 140px;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  cursor: pointer;
  > img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
  }
  > .content {
    padding-right: 140px;
    > h4 {
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    > .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
  }
`

export const RecommendWrapper = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`

export const RecommendItem = styled.a.attrs({
  href: `javascript:;`,
  target: '_blank'
})`
  color: #333;
  cursor: pointer;
  > img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    vertical-align: middle;
    border: 0;
  }
`
export const QRcode = styled.a.attrs({
  href: `javascript:;`,
  target: '_blank'
})`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  display: block;
  > .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
    border: 0;
  }
  > .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    > .title {
      font-size: 15px;
      color: #333;
    }
    > .description {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
`

export const LoadMore = styled.button.attrs({
  title: '点击查看更多'
})`
  font-size: 15px;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  background-color: #a5a5a5;
  cursor: pointer;
`