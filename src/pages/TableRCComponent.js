import React from 'react';

import { Table, Switch, Radio, Form, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

class TableRCComponent extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandable,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: 'none',
    bottom: 'bottomRight',
  };


  handleDataChange = hasData => {
    this.setState({ hasData });
  };

  render() {
    const { xScroll, yScroll, ...state } = this.state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    return (
      <>
  
        <Table
          {...this.state}
         
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
      </>
    );
  }
}
export default TableRCComponent;
//ReactDOM.render(<TableRCComponent />, mountNode);