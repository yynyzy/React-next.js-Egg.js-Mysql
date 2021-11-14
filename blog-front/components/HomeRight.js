import React, { useState } from 'react'
import Link from 'next/link'
import { List } from 'antd'
import {
    CalendarOutlined,
    FolderOpenOutlined,
    FireOutlined
} from '@ant-design/icons';

export default function HomeRight(props) {
    const { mylist } = props
    return (
        <List
            header={
                <div>
                    {props.children}
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
                        <span><FireOutlined /> 5498人</span>
                    </div>
                    <div className="list-context">{item.introduce}</div>
                </List.Item>
            }
        />
    )
}