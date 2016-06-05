// make it possible to require es6 modules
var webpackConfig = require('hjs-webpack')
var data = require('./data.json')
var fs = require('fs')

function renderScripts (scripts) {
  scripts || (scripts = [])
  return scripts.map(function (url) {
    return '<script src="' + url + '"></script>'
  }).join('')
}

var analytics = '<script>!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];d.src=\'//d1l6p2sc9645hc.cloudfront.net/tracker.js\';q.parentNode.insertBefore(d,q)}(window,document,\'script\',\'_gs\');_gs(\'GSN-892886-O\');</script>'

var links = [
  '<link rel="alternate" type="application/rss+xml" href="https://joreteg.com/rss">',
  '<link rel="apple-touch-icon-precomposed" href="/avatar.png">',
  '<link rel="shortcut icon" href="/avatar.png">'
].join('')

var loaderConfig = webpackConfig({
  in: 'src/root.js',
  out: 'public',
  clearBeforeBuild: '!(images|avatar.png)',
  serveCustomHtmlInDev: false,
  html: function (context) {
    require('babel-core/register')
    var ReactDOMServer = require('react-dom/server')
    var React = require('react')
    var App = require('./src/app').default
    function render (el, title, scripts) {
      var contentHtml = ReactDOMServer.renderToStaticMarkup(el)
      scripts = renderScripts(scripts)
      title || (title = 'Henrik Joreteg\'s Blog')
      return '<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>' + title + '</title><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/><link href="/' + context.css + '" rel="stylesheet"/>' + links + '</head><body><div id="root">' + contentHtml + '</div>' + scripts + analytics + '</body></html>'
    }

    var result = {
      'index.html': render(React.createElement(App, {url: '/', posts: data.posts})),
      '404.html': render(React.createElement(App, {url: '/404', posts: data.posts}), '404 - Not found'),
      'blog/all.html': render(React.createElement(App, {url: '/blog/all', posts: data.posts}), 'Henrik\'s Blog, all posts')
    }

    data.posts.forEach(function (post, index) {
      result[post.outputFile] = render(React.createElement(App, {url: post.url, posts: data.posts}), post.title, post.scripts)
    })
    return result
  }
})

// Having hmre present in the .babelrc will break with the `babel-core/register` above
// so wait until that is done and then add it here via the loader query
// const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
// babelrc.env = {development: {presets: ['react-hmre']}}
// config.module.loaders[0].query = babelrc

module.exports = loaderConfig;
