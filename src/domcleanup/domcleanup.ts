import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify'

function domcleanup(dom: string | Node) {
    const window = new JSDOM('').window
    const DOMpurify = createDOMPurify(window)
    return DOMpurify.sanitize(dom);
}

export default domcleanup