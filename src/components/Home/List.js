import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetMoreArticle } from '../../store/actions'
import { ListWrapper, ListItem, LoadMore } from './style'

class List extends Component {
  render() {
    const { list, handleGetMoreArticle } = this.props;
    return (
      <ListWrapper>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img src={item.get("imgUrl")} alt="img" />
                <div className="content">
                  <h4 className="title">{item.get("title")}</h4>
                  <p className="abstract">{item.get("desc")}</p>
                </div>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={handleGetMoreArticle}>阅读更多</LoadMore>
      </ListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(["homeReducer", "articleList"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetMoreArticle() {
      dispatch(handleGetMoreArticle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)