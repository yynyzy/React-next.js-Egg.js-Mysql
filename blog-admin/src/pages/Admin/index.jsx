/**
 * 控制界面
 */
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Routes } from 'react-router-dom';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './index.css'
// import ArtRouterLists from './route'
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
                        Option 1
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                        <Breadcrumb.Item>控制台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            {/* {ArtRouterLists.map(item => <Route {...item} key={item.path} />)} */}
                            <Route path='/index' element={<ArtAdd />} exact />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );


}