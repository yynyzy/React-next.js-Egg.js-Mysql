// import React, { useState, useEffect } from 'react';
// import './index.css'
// import { List, Row, Col, Modal, message, Button, Switch } from 'antd';
// import { axios_get, axios_post } from "../../utils/axios"
// const { confirm } = Modal;

import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import './index.css'

import { axios_get, axios_post } from "../../utils/axios"

const { Column, ColumnGroup } = Table;
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


    const data = [
        {
            key: '1',
            firstName: 'John',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
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
            <Table dataSource={articleLists}>
                <Column title="标题" dataIndex="title" key="title" />
                <Column title="类别" dataIndex="typename" key="typename" />
                <Column title="发布时间" dataIndex="addTime" key="addTime" />
                <Column title="浏览量" dataIndex="view_count" key="view_count" />
                <Column title="操作" dataIndex="addTime" key="addTime" />
                <Column
                    title="操作"

                    key="tags"
                    render={() => (
                        <>
                            <Button type="primary" style={{ marginRight: "10px" }}>修改</Button>
                            <Button >删除</Button>
                        </>
                    )}
                />

            </Table>
        </div>
    );


}


