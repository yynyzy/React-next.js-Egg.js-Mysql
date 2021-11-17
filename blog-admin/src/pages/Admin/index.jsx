/**
 * 控制界面
 */
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Link } from 'react-router-dom';
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './index.css'
import ArtAdd from '../Article_add'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Admin() {
    const [collapse, setCollapse] = useState(false)
    const onCollapse = (collapse) => {
        setCollapse(collapse);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        工作台
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">添加文章</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 10px' }}>
                    <Breadcrumb style={{ margin: '6px 0' }}>
                        <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background">
                        <div>
                            <Route path='/index' exact component={ArtAdd} />
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );


}