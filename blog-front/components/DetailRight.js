import { Breadcrumb } from 'antd'
import {
    CalendarOutlined,
    FolderOpenOutlined,
    FireOutlined
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'


export default function DetailRight(props) {
    const { markdown } = props
    return (
        <div>
            <div className="bread-div">
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                    <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div>
                <div className="detailed-title">
                    React实战视频教程-技术胖Blog开发(更新08集)
                </div>

                <div className="list-icon center">
                    <span><CalendarOutlined /> 2019-06-28</span>
                    <span><FolderOpenOutlined /> 视频教程</span>
                    <span><FireOutlined /> 5498人</span>
                </div>

                <div className="detailed-content" >
                    <ReactMarkdown
                        children={markdown}
                        escapeHTML={false}
                    />
                </div>

            </div>

        </div>
    )
}