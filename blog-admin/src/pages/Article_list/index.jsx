import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, message } from 'antd';
import './index.css'

import { axios_get, axios_post } from "../../utils/axios"

const { Column } = Table;
const { confirm } = Modal;
export default function ArticleList(props) {

    const [articleLists, setArticleLists] = useState([])
    useEffect(() => {
        getArticleList()
    }, [])

    const getArticleList = async () => {
        try {
            const result = await axios_get('/admin/getArticleList')
            setArticleLists([...result.data]);
        } catch (error) {
            console.log(error);
        }
    }

    //删除文章的方法
    const delArticle = (articleId) => {
        confirm({
            title: '确定要删除当前文章吗?',
            content: '亲，如果删除无法恢复哦~',
            onOk() {
                try {
                    const res = deleteArticleById(articleId)
                    if (res) {
                        message.success('文章删除成功')
                    } else {
                        message.error('文章删除失败')
                    }
                    const _articleLists = articleLists.filter(item => item.Id !== articleId);
                    setArticleLists([..._articleLists]);
                } catch (error) {
                    console.log(error);
                }
            },
            onCancel() {
                message.success('没有任何改变')
            },
        });
    }

    const deleteArticleById = async (articleId) => {
        const result = await axios_post(`/admin/delArticle/${articleId}`)
        if (result.affectedRows === 1) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="article-list">
            <Table dataSource={articleLists} pagination={{ pageSize: 10 }} scroll={{ y: "73vh" }} >
                <Column title="标题" dataIndex="title" key="title" />
                <Column title="类别" dataIndex="typename" key="typename" />
                <Column title="发布时间" dataIndex="addTime" key="addTime" />
                <Column title="浏览量" dataIndex="view_count" key="view_count" />
                <Column
                    title="操作"
                    dataIndex="Id"
                    render={(Id) => (
                        <>
                            <Button type="primary" style={{ marginRight: "10px" }}>修改</Button>
                            <Button onClick={() => delArticle(Id)}>删除</Button>
                        </>
                    )}
                />

            </Table>
        </div >
    );


}


