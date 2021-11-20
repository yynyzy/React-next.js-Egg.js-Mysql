import React from 'react';
import { Row, Col, Input, Select } from 'antd'


const { Option } = Select;
const { TextArea } = Input
export default function ArticleAddLeft(props) {
    const {
        changeContent,
        articleContent,
        markdownContent,
        articleType,
        selectedType,
        selectTypeHandler,
        articleTitle,
        changeArticleTitle
    } = props

    return (
        <>
            <Row gutter={10} style={{ marginBottom: 10 }}>
                <Col span={16}>
                    <Input
                        value={articleTitle}
                        placeholder="博客标题"
                        onChange={(e) => changeArticleTitle(e)}
                        size="large" />
                </Col>
                <Col span={4}>
                    <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                        {articleType.map(item => <Option value={item.torder} key={item.torder}>{item.name}</Option>)}
                    </Select>
                </Col>
            </Row>
            <Row gutter={10} >
                <Col span={12}>
                    <TextArea
                        value={articleContent}
                        className="markdown-content"
                        rows={35}
                        onChange={changeContent}
                        onPressEnter={changeContent}
                        placeholder="文章内容"
                    />
                </Col>
                <Col span={12}>
                    <div
                        className="show-html"
                        dangerouslySetInnerHTML={{ __html: markdownContent }}
                    >
                    </div>
                </Col>
            </Row>
        </>
    )
}
