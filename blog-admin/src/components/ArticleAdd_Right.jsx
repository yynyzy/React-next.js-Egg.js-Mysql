import React, { useState } from 'react';
import { Row, Col, Input, Select } from 'antd'


const { Option } = Select;
const { TextArea } = Input
export default function ArticleAddRight(props) {
    const { changeContent, articleContent, markdownContent } = props
    return (
        <div>
            <Row gutter={10} style={{ marginBottom: 20 }}>
                <Col span={20}>
                    <Input
                        placeholder="博客标题"
                        size="large" />
                </Col>
                <Col span={4}>
                    <Select defaultValue="Sign Up" size="large">
                        <Option value="Sign Up">视频/文章</Option>
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
                        dangerouslySetInnerHTML={{ __html: markdownContent }} >
                    </div>
                </Col>
            </Row>
        </div>
    )
}
