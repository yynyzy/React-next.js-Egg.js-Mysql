import marked from 'marked'
import Tocify from './tocify.tsx'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const _marked = function (rendererHeadConfig) {
    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    if (rendererHeadConfig) {
        renderer.heading = rendererHeadConfig
    }

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    })
    return marked
}


export {
    _marked
}
