import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'antd';

const columns = [{
  title: 'Nome',
  dataIndex: 'name',
  key: 'name',
  render: text => <span>{text}</span>,
}, {
  title: 'Pontos',
  dataIndex: 'scores',
  key: 'scores',
}];

const data = [{
  name: 'John Brown',
  scores: 32,
  address: 'New York No. 1 Lake Park',
}, {
  name: 'Jim Green',
  scores: 42,
  address: 'London No. 1 Lake Park',
}, {
  name: 'Joe Black',
  scores: 32,
  address: 'Sidney No. 1 Lake Park',
}];
class ListPlayer extends Component{

  componentDidMount(){

  }

    render(){
        return (
            <Table columns={columns} dataSource={this.props.usuarios} />
            
        )
    }
}
const mapStateToProps = state => ({ usuarios: state.initialInformations.usuarios });
// const mapDispatchToProps = dispatch => bindActionCreators( { setInitialInformations }, dispatch);
export default connect(mapStateToProps)(ListPlayer);
// export default ListPlayer;