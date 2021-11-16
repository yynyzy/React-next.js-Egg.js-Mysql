import React, { useState } from 'react'
import Link from 'next/link'
import { List } from 'antd'
import {
    CalendarOutlined,
    FolderOpenOutlined,
    FireOutlined
} from '@ant-design/icons';
import { _marked } from '../utils/mark'

export default function HomeRight(props) {
    const { mylist } = props
    console.log(mylist);
    const marked = _marked()
    return (
        <List
            header={
                <div>
                    <strong>最新日志</strong>
                </div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item =>
                <List.Item>
                    <div className="list-title ">
                        <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                            <a>{item.title}</a>
                        </Link>
                    </div>
                    <div className="list-icon">
                        <span><CalendarOutlined />{item.createTime}</span>
                        <span><FolderOpenOutlined />{item.typeName}</span>
                        <span><FireOutlined /> {item.viewCount}</span>
                    </div>
                    <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}></div>
                </List.Item>
            }
        />
    )
}