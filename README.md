# insert2 [![NPM version](https://img.shields.io/npm/v/insert2.svg)](https://npmjs.com/package/insert2) [![NPM downloads](https://img.shields.io/npm/dm/insert2.svg)](https://npmjs.com/package/insert2) [![Build Status](https://img.shields.io/circleci/project/egoist/insert2/master.svg)](https://circleci.com/gh/egoist/insert2)

> Insert string into HTML.

## Install

```bash
$ npm install --save insert2
```

## Usage

```js
const insert2 = require('insert2')

const html = `
<html>
  <head>
    <title>hi</title>
  </head>
  <body>
  </body>
</html> 
`

insert2({
  html,
  string: '<link rel="stylesheet" href="style.css" />',
  el: 'head'
})

// returned
<html>
  <head>
    <title>hi</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
  </body>
</html> 
```

## API

### insert2(options)

#### html

Type: `string`<br>
Default: `''`

The original HTML string.

#### string

Type: `String`<br>
Default: `''`

The string to be inserted into HTML.

#### el

Type: `String`<br>
Default: `body`

HTML tag name, the place to insert into.

#### type:

Type: `String`<br>
Default: `append`

`append` or `prepend`.

## License

MIT © [EGOIST](https://github.com/egoist)
