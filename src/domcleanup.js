const { JSDOM } = require('jsdom')
const createDOMPurify = require('dompurify')

function domcleanup(dom) {
    const window = new JSDOM('').window
    const DOMpurify = createDOMPurify(window)
    return DOMpurify.sanitize(dom);
}

module.exports = domcleanup