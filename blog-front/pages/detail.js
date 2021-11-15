import React from 'react'
import Head from 'next/head'
import { Row, Col, Affix } from 'antd'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Header from '../components/Header'
import Author from '../components/Author'
import PicLink from '../components/PicLink'
import Footer from '../components/Footer'
import DetailRight from '../components/DetailRight'
import MarkdownNavbar from '../components/MarkdownNavbar'
import Tocify from '../utils/tocify.tsx'
import { axios_get } from '../utils/axios'
import { ArticleList_ID } from '../service/servicePath'

export default function Detail(props) {
    const { content, viewCount, title, createTime, typeName } = props
    //用于解析 Markdown 格式，与文章右侧目录的配置
    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };
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
    })
    const html = marked(content)

    return (
        <div>
            <Head>
                <title>YYN_Detail</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <DetailRight markdown={html} viewCount={viewCount} title={title} createTime={createTime} typeName={typeName} />
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Affix offsetTop={55}>
                        <MarkdownNavbar tocify={tocify} />
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
Detail.getInitialProps = async (context) => {
    const id = context.query.id
    const { data } = await axios_get(`${ArticleList_ID}/${id}`)
    return data[0]
}