import React, { useState, useEffect } from "react";
import './index.css';
import { Row, Col, message } from 'antd'

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
    // const [updateDate, setUpdateDate] = useState()                  //修改日志的日期(以后使用现在用不到)
    const [articleType, setArticleType] = useState([])                 // 文章类别信息
    const [selectedType, setSelectType] = useState("请选择文章类别")    //选择的文章类别

    useEffect(async () => {
        getArticleType()
        //下面是从列表修改处跳转过来
        const { articleId } = props.match.params
        if (articleId) {
            try {
                const data = props.location.state.data[0]
                const { content } = await axios_get(`/admin/getArticleByIdToUpdate/${articleId}`)
                data.content = content
                // data.addTime = new Date(data.addTime).getTime()
                console.log(data);

                setArticleId(articleId)
                getArticleByIdToUpdate(data)
                console.log(showDate);
            } catch (error) {
                console.log(error);
            }
        }
    }, [])
    //获取文章分类
    const getArticleType = async () => {
        try {
            const result = await axios_get('/admin/articleType')
            setArticleType(result.data)
        } catch (error) {
            if (error.response.status === 401) {
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
        console.log(dateString);
        setShowDate(dateString)
    }
    //blog的标题的切换
    const changeArticleTitle = e => {
        setArticleTitle(e.target.value)
    }
    //暂存文章检查
    const saveArticle = () => {
        console.log(selectedType);
        if (!selectedType || selectedType === "请选择文章类别") {
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
        try {
            if (articleId === 0) {
                //随机设置一个浏览量
                dataProps.view_count = Math.ceil(Math.random() * 100) + 1000
                const result = await axios_post('/admin/addArticle', dataProps)
                //文章在数据库中的id保存一下，方便修改
                setArticleId(result.insertId)
                if (result.isScuccess) {
                    message.success('文章发布成功')
                } else {
                    message.error('文章保存失败');
                }
            } else {
                dataProps.articleId = articleId
                const result = await axios_post('/admin/updateArticle', dataProps)
                if (result.isScuccess) {
                    message.success('文章修改成功')
                } else {
                    message.error('文章修改失败');
                }
            }
        }
        catch (error) {
            if (error.status === 401) {
                message.error("用户未授权！")
                props.history.push('/login')
            }
        }


    }

    //从文章列表跳转过来进行修改
    const getArticleByIdToUpdate = (data) => {
        setArticleTitle(data.title)
        setArticleContent(data.content)
        let html = marked(data.content)
        setMarkdownContent(html)
        setIntroducemd(data.introduce)
        let tmpInt = marked(data.introduce)
        setIntroducehtml(tmpInt)
        setShowDate(data.addTime)
        setSelectType(data.typeId)
    }

    return (
        <>
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
        </>
    )


}
