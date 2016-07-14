import test from 'ava'
import insert2 from './index.es6'

test('append', t => {
  const html = insert2('<body class="hi">hello world</body></html>', {
    string: ' is dumb'
  })
  t.is(html, '<body class="hi">hello world is dumb</body></html>')
})

test('prepend', t => {
  const html = insert2('<body id="true">hello world</body></html>', {
    string: 'please say ',
    type: 'prepend'
  })
  t.is(html, '<body id="true">please say hello world</body></html>')
})

test('other tag', t => {
  const html = insert2('<head><style></style></head></html>', {
    string: 'xxx',
    el: 'head'
  })
  t.is(html, '<head><style></style>xxx</head></html>')
})

test('insert multi', t => {
  const html = insert2.multi('<head><style></style></head><body></body></html>', [
    {
      string: 'xxx',
      el: 'head'
    },
    {
      string: 'ooo',
      el: 'body'
    }
  ])
  t.is(html, '<head><style></style>xxx</head><body>ooo</body></html>')
})
