import React, { Component } from 'react';

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
class BetsResults extends Component{

    render(){
        return (
            <Table columns={columns} dataSource={data} />
            
        )
    }
}
export default BetsResults;