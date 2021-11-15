import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { Row, Col, Menu, Affix } from 'antd'
import {
    HomeOutlined,
    SmileTwoTone,
    YoutubeOutlined,
    FileDoneOutlined
} from '@ant-design/icons';

import { HeaderBarType } from '../service/servicePath'
import { axios_get } from '../utils/axios'

export default function Header(props) {
    const [headerBarArr, setHeaderBarArr] = useState([])
    //获取标签分类的函数
    useEffect(async () => {
        const result = await axios_get(HeaderBarType)
        setHeaderBarArr(result.data)
    }, [])
    console.log(headerBarArr);

    const toBar = (e) => {
        console.log(e);
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list/' + e.key)
        }
    }

    return (
        <Affix offsetTop={0}>
            <div className="header">
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={10} lg={13} xl={11}>
                        <span className="header-logo">
                            <Link href={{ pathname: '/' }}>
                                <a> YYN</a>
                            </Link>
                        </span>
                        <span className="header-txt">东方幻想乡</span>
                    </Col>

                    <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu mode="horizontal" onClick={toBar}>
                            <Menu.Item key="0">
                                <HomeOutlined style={{ fontSize: 20 }} />
                                首页
                            </Menu.Item>
                            {
                                headerBarArr.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}>
                                            {item.type_name}
                                        </Menu.Item>
                                    )
                                })
                            }
                            {/* <Menu.Item key="video">
                                <YoutubeOutlined style={{ fontSize: 20 }} />
                                视频/文章
                            </Menu.Item>
                            <Menu.Item key="article">
                                <FileDoneOutlined style={{ fontSize: 20 }} />
                                生活
                            </Menu.Item>
                            <Menu.Item key="comic">
                                <SmileTwoTone style={{ fontSize: 20 }} />
                                二次元
                            </Menu.Item> */}
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Affix>
    )
}