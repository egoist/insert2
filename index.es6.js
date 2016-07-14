export default function insert(html = '', {
  string = '',
  el = 'body',
  type = 'append'
} = {}) {
  if (type === 'append') {
    return html.replace(
      new RegExp(`</${el}>`),
      `${string}$&`
    )
  }

  // any case other than append
  // a.k.a. prepend
  return html.replace(
    new RegExp(`<${el}[^>]*>`),
    `$&${string}`
  )
}

export function inserMulti(html = '', arr = []) {
  let result = html
  for (const option of arr) {
    result = insert(result, option)
  }
  return result
}

