import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import HomeRight from '../components/HomeRight'
import PicLink from '../components/PicLink'
import Footer from '../components/Footer'


export default function List() {

    return (
        <div>
            <Head>
                <title>YYN_List</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                {/* 左侧 */}

                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <HomeRight>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
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
    let { id } = context.query.id
    console.log(id);
    const promise = new Promise((resolve) => {
        axios(servicePath.getListById + id).then(
            (res) => resolve(res.data)
        )
    })
    return await promise
}

