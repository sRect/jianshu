import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from './style'

class Topic extends Component {
  render() {
    const { list } = this.props;

    return (
      <TopicWrapper>
        {
          list.map(item => {
            return (
              <TopicItem key={item.get("id")} title={item.get("title")}>
                <img src={item.get("imgUrl")} alt="img" />
                <div className="name">
                  {item.get("title")}
                </div>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["homeReducer", "topicList"])
  }
}

export default connect(mapStateToProps, null)(Topic)
