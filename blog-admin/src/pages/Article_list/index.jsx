// import React, { useState, useEffect } from 'react';
// import './index.css'
// import { List, Row, Col, Modal, message, Button, Switch } from 'antd';
// import { axios_get, axios_post } from "../../utils/axios"
// const { confirm } = Modal;

import React, { useState, useEffect } from 'react';
import { Table, Radio, Divider } from 'antd';
import './index.css'

import { axios_get, axios_post } from "../../utils/axios"

export default function ArticleList(props) {

    const [articleLists, setArticleLists] = useState([])
    useEffect(() => {
        getArticleList()
    }, [])

    const getArticleList = async () => {
        try {
            const result = await axios_get('/admin/getArticleList')
            console.log(result);
            setArticleLists([...result.data]);
        } catch (error) {
            console.log(error);
        }

    }
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '类别',
            dataIndex: 'type',
        },
        {
            title: '发布时间',
            dataIndex: 'time',
        },
        {
            title: '集数',
            dataIndex: 'episode',
        },
        {
            title: '浏览量',
            dataIndex: 'view_count',
        },
        {
            title: '操作',
            dataIndex: 'control',
        }
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
        // ,getCheckboxProps: (record) => ({
        //     disabled: record.name === 'Disabled User',
        //     name: record.name,
        // }),
    };
    return (
        <div>
            <Divider />
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );



    // const [list, setList] = useState([])
    // return (
    //     <div>
    //         <List
    //             header={
    //                 <Row className="list-div">
    //                     <Col span={8}>
    //                         <b>标题</b>
    //                     </Col>
    //                     <Col span={3}>
    //                         <b>类别</b>
    //                     </Col>
    //                     <Col span={3}>
    //                         <b>发布时间</b>
    //                     </Col>
    //                     <Col span={3}>
    //                         <b>集数</b>
    //                     </Col>
    //                     <Col span={3}>
    //                         <b>浏览量</b>
    //                     </Col>

    //                     <Col span={4}>
    //                         <b>操作</b>
    //                     </Col>
    //                 </Row>

    //             }
    //             bordered
    //             dataSource={list}
    //             renderItem={item => (
    //                 <List.Item>
    //                     <Row className="list-div">
    //                         <Col span={8}>
    //                             {item.title}
    //                         </Col>
    //                         <Col span={3}>
    //                             {item.typeName}
    //                         </Col>
    //                         <Col span={3}>
    //                             {item.addTime}
    //                         </Col>
    //                         <Col span={3}>
    //                             共<span>{item.part_count}</span>集
    //                         </Col>
    //                         <Col span={3}>
    //                             {item.view_count}
    //                         </Col>

    //                         <Col span={4}>
    //                             <Button type="primary" >修改</Button>&nbsp;

    //                             <Button >删除 </Button>
    //                         </Col>
    //                     </Row>

    //                 </List.Item>
    //             )}
    //         />

    //     </div>
    // )

}


