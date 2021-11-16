import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, Breadcrumb } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import HomeRight from '../components/HomeRight'
import PicLink from '../components/PicLink'
import Footer from '../components/Footer'
import { axios_get } from '../utils/axios'
import { List_Id } from '../service/servicePath'

export default function List(props) {
    const [lists, setLists] = useState(props.data)
    useEffect(() => {
        setLists(props.data)
    })

    return (
        <div>
            <Head>
                <title>YYN_List</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                {/* 左侧 */}

                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <HomeRight mylist={lists}>
                    </HomeRight>
                </Col>
                {/* 右侧 */}
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <PicLink />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
List.getInitialProps = async (context) => {
    let { id } = context.query
    const res = await axios_get(`${List_Id}/${id}`)
    return res
}

