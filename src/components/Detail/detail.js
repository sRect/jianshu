import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    let detailID = this.props.match.params.id;
    this.props.getDetailData(detailID);
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
    getDetailData: (detailID) => {
      dispatch(handleGetDetailData(detailID))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))