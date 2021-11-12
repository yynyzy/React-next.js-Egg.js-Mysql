import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

export default function MarkdownNavbar(props) {
    const { markdown } = props
    return (
        <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <MarkNav
                className="article-menu"
                source={markdown}
                ordered={false}
            />
        </div>
    )
}