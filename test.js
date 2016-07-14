import test from 'ava'
import insert2 from './index.es6'

test('append', t => {
  const html = insert2({
    html: '<body class="hi">hello world</body></html>',
    string: ' is dumb'
  })
  t.is(html, '<body class="hi">hello world is dumb</body></html>')
})

test('prepend', t => {
  const html = insert2({
    html: '<body id="true">hello world</body></html>',
    string: 'please say ',
    type: 'prepend'
  })
  t.is(html, '<body id="true">please say hello world</body></html>')
})

test('other tag', t => {
  const html = insert2({
    html: '<head><style></style></head></html>',
    string: 'xxx',
    el: 'head'
  })
  t.is(html, '<head><style></style>xxx</head></html>')
})
