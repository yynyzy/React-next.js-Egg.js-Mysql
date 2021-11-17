import React, { useState } from "react";
import './index.css';
import { Row, Col, Input, Select, Button, DatePicker } from 'antd'

import marked from "../../utils/marked";
import ArticleAddRight from '../../components/ArticleAdd_Right'

const { TextArea } = Input

export default function ArticleAdd() {
    const [articleId, setArticleId] = useState(0)                       //文章的ID
    const [articleTitle, setArticleTitle] = useState('')                //文章标题
    const [articleContent, setArticleContent] = useState('')            //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容')  //html内容
    const [introducemd, setIntroducemd] = useState()                   //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('等待编辑')      //简介的html内容
    const [showDate, setShowDate] = useState()                          //发布日期
    const [updateDate, setUpdateDate] = useState()                       //修改日志的日期
    const [typeInfo, setTypeInfo] = useState([])                        // 文章类别信息
    const [selectedType, setSelectType] = useState(1)                   //选择的文章类别

    //内容区markdown转化
    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }
    //简介区markdown转化
    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value)
        let html = marked(e.target.value)
        setIntroducehtml(html)
    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <ArticleAddRight
                        changeContent={changeContent}
                        articleContent={articleContent}
                        markdownContent={markdownContent}
                    />
                </Col>

                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" >发布文章</Button>
                            <br />
                        </Col>
                        <Col span={24}>
                            <br />
                            <TextArea
                                rows={4}
                                value={introducemd}
                                onChange={changeIntroduce}
                                onPressEnter={changeIntroduce}
                                placeholder="文章简介"
                            />
                            <div
                                className="introduce-html"
                                dangerouslySetInnerHTML={{ __html: '文章简介：' + introducehtml }} >
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    placeholder="发布日期"
                                    size="large"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )


}