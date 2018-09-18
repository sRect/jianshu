import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListWrapper, ListItem } from './style'

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <ListWrapper>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get("id")}>
                <img src={item.get("imgUrl")} alt="img" />
                <div className="content">
                  <h4 className="title">{item.get("title")}</h4>
                  <p className="abstract">{item.get("desc")}</p>
                </div>
              </ListItem>
            )
          })
        }
      </ListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(["homeReducer", "articleList"])
  }
}

export default connect(mapStateToProps, null)(List)