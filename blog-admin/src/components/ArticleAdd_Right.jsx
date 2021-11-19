import React, { useState } from 'react';
import { Row, Col, Input, Button, DatePicker } from 'antd'

const { TextArea } = Input
export default function ArticleAddRight(props) {
    const {
        selectDate,
        introducemd,
        changeIntroduce,
        introducehtml,
        saveArticle
    } = props

    return (
        <div className="ArticleAddRight">
            <Row>
                <Col span={24}>
                    <Button size="large">暂存文章</Button>&nbsp;
                    <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
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
                            onChange={(date, dateString) => selectDate(date, dateString)}
                            placeholder="发布日期"
                            size="large"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
