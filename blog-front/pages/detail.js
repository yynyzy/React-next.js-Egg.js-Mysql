import React from 'react'
import Head from 'next/head'
import { Row, Col, Affix } from 'antd'
import axios from 'axios'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Header from '../components/Header'
import Author from '../components/Author'
import PicLink from '../components/PicLink'
import Footer from '../components/Footer'
import DetailRight from '../components/DetailRight'
import MarkdownNavbar from '../components/MarkdownNavbar'



export default function Detail(props) {
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    const html = marked(props.content)
    return (
        <div>
            <Head>
                <title>YYN_Detail</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <DetailRight markdown={html} />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Affix offsetTop={55}>
                        <MarkdownNavbar markdown={html} />
                    </Affix>
                    <PicLink />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
Detail.getInitialProps = async (context) => {
    const id = context.query.id
    return await new Promise((resolve) => {
        axios(`http://127.0.0.1:7001/front/ArticleList/${id}`).then(
            res => {
                resolve(res.data.data[0])
            }
        )
    })
}