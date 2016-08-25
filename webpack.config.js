// make it possible to require es6 modules
var webpack = require('webpack')
var webpackConfig = require('hjs-webpack')
var data = require('./data.json')
var fs = require('fs')

function renderScript(url) {
  return '<script async src="' + url + '"></script>'
}

function renderScripts (scripts = []) {
  return scripts.map(function (url) {
    return renderScript(url)
  }).join('')
}

var analytics = `
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52253751-1', 'auto');
  ga('send', 'pageview');

</script>
`

var links = [
  // '<link rel="apple-touch-icon-precomposed" href="/avatar.png">',
  // '<link rel="shortcut icon" href="/avatar.png">',
  '<link rel="shortcut icon" href="assets/favicon.ico">'
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
    function render ({el, title, scripts, loadJS}) {
      var contentHtml = ReactDOMServer.renderToStaticMarkup(el)
      scripts = renderScripts(scripts)
      title || (title = 'Brian Emil Hartz is.Me')
      return `
        <!doctype html><html lang="en">
          <head>
            <meta charset="utf-8"/>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            <link href="/${context.css}" rel="stylesheet"/>
            <link rel="canonical" href="http://www.hartzis.me/">
            ${links}
          </head>
          <body>
            <div id="root">${contentHtml}</div>
            ${scripts}${analytics}${loadJS?renderScript('/'+context.main):''}
          </body>
        </html>
      `
    }

    var result = {
      'index.html': render({el: React.createElement(App, {url: '/', posts: data.posts})}),
      '404.html': render({el: React.createElement(App, {url: '/404', posts: data.posts}), title: '404 - Not found'}),
      'about/index.html': render({el: React.createElement(App, {url: '/about/'})}),
      // load the js on this page so we can use the query param :)
      'posts/index.html': render({el: React.createElement(App, {url: '/posts/', posts: data.posts}), title: 'All Posts – Hartzis.Me', loadJS: true})
    }

    data.posts.forEach(function ({outputFile, url, title, scripts}) {
      result[outputFile] = render({el: React.createElement(App, {url, posts: data.posts}), title, scripts})
    })
    return result
  }
})

// Having hmre present in the .babelrc will break with the `babel-core/register` above
// so wait until that is done and then add it here via the loader query
// const babelrc = JSON.parse(fs.readFileSync('./.babelrc'))
// babelrc.env = {development: {presets: ['react-hmre']}}
// config.module.loaders[0].query = babelrc

// loaderConfig.plugins.push(
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   })
// )

// console.log(loaderConfig);

module.exports = loaderConfig;
