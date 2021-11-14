import React from 'react'
import Head from 'next/head'
import { Row, Col, Affix } from 'antd'
import axios from 'axios'

import Header from '../components/Header'
import Author from '../components/Author'
import PicLink from '../components/PicLink'
import Footer from '../components/Footer'
import DetailRight from '../components/DetailRight'
import MarkdownNavbar from '../components/MarkdownNavbar'


export default function Detail() {
    let markdown =
        '\n# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(111)\` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'
    return (
        <div>
            <Head>
                <title>YYN_Detail</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <DetailRight markdown={markdown} />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Affix offsetTop={55}>
                        <MarkdownNavbar markdown={markdown} />
                    </Affix>
                    <PicLink />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
Detail.getInitialProps = async (context) => {

    console.log(context.query.id)
    let id = context.query.id
    return await new Promise((resolve) => {
        axios(`http://127.0.0.1:7001/front/ArticleList/${id}`).then(
            res => {
                resolve(res.data.data[0])
            }
        )
    })
}