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