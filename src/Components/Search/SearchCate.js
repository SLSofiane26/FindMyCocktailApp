import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as ACT from '../../Reducer/ActionData';
import PaginationBisBis from './PaginationBisBis';
import SearchCateBis from './SearchCateBis';

class SearchCate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      postPerPage: 10,
      currentPage: 1,
    };
    this.handlePaginate = this.handlePaginate.bind(this);
  }
  componentDidMount = () => {
    let q = new URLSearchParams(this.props.location.search);
    for (let key of q.entries()) {
      this.setState({
        data: key[0].toString(),
      });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.data !== null && prevState.data !== this.state.data) {
      this.props.handleFetch(this.state.data);
    }
  };
  handlePaginate = (number) => {
    this.setState((prevState) => ({
      currentPage: number,
    }));
  };

  render() {
    let indexOfLast = this.state.currentPage * this.state.postPerPage;
    let indexofFirst = indexOfLast - this.state.postPerPage;
    let dataBis = this.props.data.slice(indexofFirst, indexOfLast);
    return (
      <Fragment>
        <SearchCateBis data={dataBis} />{' '}
        <PaginationBisBis
          total={this.props.data.length}
          paginate={this.handlePaginate}
          postperPage={this.state.postPerPage}
        />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.data.SearchCatBis,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleFetch: (items) => dispatch(ACT.SearchCatBis(items)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchCate));
