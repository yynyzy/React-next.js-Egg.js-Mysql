import { Avatar, Divider, Image } from 'antd'
// import '../static/style/components/author.css'
import {
    QqOutlined,
    WechatOutlined,
    GithubOutlined
} from '@ant-design/icons';

export default function Author() {

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src={'assets/lm.jpg'} /></div>
            <div className="author-introduction">
                幻想乡
                幻想乡是在日本的深山里，通过结界与外面世界隔绝的秘境。被称为“博丽大结界”的结界包围，生活着比人类还多的妖怪、众神等人类以外的存在的不可思议的世界。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />
                <Avatar size={28} icon={<GithubOutlined />} className="account" />

            </div>
        </div>
    )

}

