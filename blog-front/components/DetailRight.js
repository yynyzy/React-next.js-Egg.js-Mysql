import { Breadcrumb } from 'antd'
import {
    CalendarOutlined,
    FolderOpenOutlined,
    FireOutlined
} from '@ant-design/icons';


export default function DetailRight(props) {
    const { markdown, viewCount, title, createTime, typeName } = props
    return (
        <div>
            <div className="bread-div">
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                    <Breadcrumb.Item> {typeName}</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div>
                <div className="detailed-title">
                    {title}
                </div>

                <div className="list-icon center">
                    <span><CalendarOutlined />{createTime}</span>
                    <span><FolderOpenOutlined /> {typeName}</span>
                    <span><FireOutlined /> {viewCount}人</span>
                </div>

                <div className="detailed-content"
                    dangerouslySetInnerHTML={{ __html: markdown }}
                >
                </div>

            </div>

        </div>
    )
}