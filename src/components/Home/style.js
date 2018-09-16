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