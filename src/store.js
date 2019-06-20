const uuid = require('uuid/v4')

const bookmarks = [
    { id: uuid(),
      title: 'D3',
      url: 'https://github.com/d3/d3/wiki/Gallery',
      description: 'D3 data visualization github gallery'
    },
    { id: uuid(),
      title: 'p5.js',
      url: 'https://p5js.org/',
      description: 'Processing foundations javascript library',
    },
    {  id: uuid(),
       url: 'http://paperjs.org/showcase/',
       description: 'Paper.js another canvas based visualization library'
    }
]

module.exports = { bookmarks }