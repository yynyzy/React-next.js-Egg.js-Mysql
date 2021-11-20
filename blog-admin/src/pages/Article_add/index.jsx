import React, { useState, useEffect } from "react";
import './index.css';
import { Row, Col, Input, message } from 'antd'

import marked from "../../utils/marked";
import ArticleAddLeft from '../../components/ArticleAdd_Left'
import ArticleAddRight from '../../components/ArticleAdd_Right'
import { axios_get, axios_post } from "../../utils/axios"

export default function ArticleAdd(props) {
    const [articleId, setArticleId] = useState(0)                       //文章的ID
    const [articleTitle, setArticleTitle] = useState('')                //文章标题
    const [articleContent, setArticleContent] = useState('')            //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容')  //html内容
    const [introducemd, setIntroducemd] = useState()                   //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('等待编辑')      //简介的html内容
    const [showDate, setShowDate] = useState()                          //发布日期
    const [updateDate, setUpdateDate] = useState()                       //修改日志的日期
    const [articleType, setArticleType] = useState([])                        // 文章类别信息
    const [selectedType, setSelectType] = useState("请选择文章类别")                   //选择的文章类别

    useEffect(() => {
        getArticleType()
    }, [])
    //获取文章分类
    const getArticleType = async () => {
        try {
            const result = await axios_get('/admin/articleType')
            if (result.code == 200) {
                setArticleType([...result.data])
            }
        } catch (error) {
            if (error.response.status == 401) {
                message.error("用户未授权！")
                props.history.push('/login')
            }
        }
    }
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
    //文章的类别切换
    const selectTypeHandler = (value) => {
        setSelectType(value)
    }
    //文章日期的选择
    const selectDate = (date, dateString) => {
        setShowDate(dateString)
    }
    //blog的标题的切换
    const changeArticleTitle = e => {
        setArticleTitle(e.target.value)
    }
    //暂存文章检查
    const saveArticle = () => {
        if (!selectedType || selectedType == "请选择文章分类") {
            message.error('请选择文章类别')
            return false
        } else if (!articleTitle) {
            message.error('标题不能为空')
            return false
        } else if (!articleContent) {
            message.error('内容不能为空')
            return false
        } else if (!introducemd) {
            message.error('简介不能为空')
            return false
        } else if (!showDate) {
            message.error('发布日期不能为空')
            return false
        }
        commitArticle()
        message.success('文章发布成功~')
    }
    //上传文章
    const commitArticle = async () => {
        let datetext = showDate.replace(/-/g, '/') //把字符串转换成时间戳
        const dataProps = {
            type_id: selectedType,
            title: articleTitle,
            content: articleContent,
            introduce: introducemd,
            addTime: (new Date(datetext).getTime()) / 1000,
        }
        console.log(dataProps);
        try {
            if (articleId == 0) {
                //模仿设置一个浏览量
                dataProps.view_count = Math.ceil(Math.random() * 100) + 1000
                const result = await axios_post('/admin/addArticle', dataProps)
                console.log(result)
                setArticleId(result.insertId)
                if (result.isScuccess) {
                    message.success('文章保存成功')
                } else {
                    message.error('文章保存失败');
                }
            }
        } catch (error) {
            if (error.response.status == 401) {
                message.error("用户未授权！")
                props.history.push('/login')
            }
        }


    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <ArticleAddLeft
                        changeContent={changeContent}
                        articleContent={articleContent}
                        articleType={articleType}
                        markdownContent={markdownContent}
                        selectedType={selectedType}
                        selectTypeHandler={selectTypeHandler}
                        articleTitle={articleTitle}
                        changeArticleTitle={changeArticleTitle}
                    />
                </Col>
                <Col span={6}>
                    <ArticleAddRight
                        selectDate={selectDate}
                        introducemd={introducemd}
                        changeIntroduce={changeIntroduce}
                        introducehtml={introducehtml}
                        saveArticle={saveArticle}
                    />
                </Col>
            </Row>
        </div>
    )


}
