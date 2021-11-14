import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import HomeRight from '../components/HomeRight'
import PicLink from '../components/PicLink'
import Footer from '../components/Footer'
import axios from 'axios'
// import { getArticleList } from '../service/homeService'


export default function Home(props) {
  // const ArticleList = getArticleList()
  const [mylist, setMylist] = useState(props.data);


  return (
    <div>
      <Head>
        <title>YYN_HOME</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        {/* 左侧 */}
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <HomeRight mylist={mylist} />
        </Col>
        {/* 右侧 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author mylist={mylist} />
          <PicLink />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  return await new Promise((resolve) => {
    axios('http://127.0.0.1:7002/front/ArticleLists').then(
      res => {
        console.log(res.data);
        resolve(res.data)
      }
    ).catch(err => {
      console.log(err);
    })
  })


}