/**
 *  文章详情页面的右侧目录
 */

export default function MarkdownNavbar(props) {
    const { tocify } = props
    return (
        <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            {tocify && tocify.render()}
        </div>
    )
}