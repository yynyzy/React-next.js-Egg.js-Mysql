import React, { useState } from 'react'
import { List } from 'antd'
import {
    CalendarOutlined,
    FolderOpenOutlined,
    FireOutlined
} from '@ant-design/icons';

export default function HomeRight(props) {
    const { mylist } = props
    console.log(mylist);
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
                    <div className="list-title ">{item.title}</div>
                    <div className="list-icon">
                        <span><CalendarOutlined />{item.addTime}</span>
                        <span><FolderOpenOutlined />{item.typeName}</span>
                        <span><FireOutlined /> {item.view_count}</span>
                    </div>
                    <div className="list-context">{item.introduce}</div>
                </List.Item>
            }
        />
    )
}