/**
 * 登录界面
 */
import React, { useState } from 'react';
import { Card, Avatar, Input, Button, Spin, message } from 'antd';
import {
    UserOutlined,
    KeyOutlined
} from '@ant-design/icons';
import './index.css'
import { axios_post } from '../../utils/axios'
const { Meta } = Card;

export default function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const login = async () => {
        setIsLoading(true)
        if (!userName || !password) {
            message.error("用户名和密码不能为空！")
            setIsLoading(false)
            return false
        }
        let user = {
            'username': userName,
            'password': password
        }
        try {
            const result = await axios_post('/admin/login', user)
            console.log(result);
            localStorage.setItem('token', result.token)
            message.success(`欢迎加入${result.username}`)
            setIsLoading(false)
            props.history.push('/index')
        } catch (error) {
            console.log(error);
            message.error(error.data.message)
            setIsLoading(false)
        }
    }
    return (
        <div className="login">
            <>
                <Spin tip="Loading..." spinning={isLoading}>
                    <Card bordered={true} style={{ width: 400 }} >
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="点击进入神秘世界观看小电影！"
                            style={{ marginBottom: 20 }}
                        />
                        <Input
                            id="userName"
                            size="large"
                            placeholder="Enter your userName"
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={(e) => { setUserName(e.target.value) }}
                            style={{ marginBottom: 20 }}
                        />
                        <Input.Password
                            id="password"
                            size="large"
                            placeholder="Enter your password"
                            prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={(e) => { setPassword(e.target.value) }}
                            style={{ marginBottom: 20 }}
                        />
                        <Button type="primary" size="large" block onClick={login} > Login </Button>
                    </Card>
                </Spin>
            </>
        </div>
    )
}