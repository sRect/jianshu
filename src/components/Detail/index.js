import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetDetailData } from '../../store/actions'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetailData();
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(["detailReducer", "title"]),
    content: state.getIn(["detailReducer", "content"])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetailData: () => {
      dispatch(handleGetDetailData())
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)