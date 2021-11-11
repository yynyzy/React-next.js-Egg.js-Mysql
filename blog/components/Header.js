// import '../styles/header.module.css'

import { Row, Col, Menu } from 'antd'
import {
    HomeOutlined,
    SmileTwoTone,
    YoutubeOutlined,
    FileDoneOutlined
} from '@ant-design/icons';

export default function Header(props) {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">YYN</span>
                    <span className="header-txt">东方幻想乡</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined style={{ fontSize: 20 }} />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <YoutubeOutlined style={{ fontSize: 20 }} />
                            视频
                        </Menu.Item>
                        <Menu.Item key="article">
                            <FileDoneOutlined style={{ fontSize: 20 }} />
                            文章
                        </Menu.Item>
                        <Menu.Item key="comic">
                            <SmileTwoTone style={{ fontSize: 20 }} />
                            二次元
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}