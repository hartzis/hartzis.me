import React, { Component } from 'react'
import Header from './header'
import Aside from './aside'
import Post from './post'
import Home from './home'
import Posts from './posts'
import About from './about'
import FourOhFour from './404'

export default class Index extends Component {
  render () {
    const { posts, url, query } = this.props
    console.log(this.props)
    let page

    if (!url || url === '/') {
      page = <Home posts={posts.slice(0, 5)}/>
    }

    if (url === '/about') {
      page = <About />
    }

    if (!page && url === '/posts') {
      let tag
      if (query) {
        let split = query.split('=');
        tag = split[0] === 'tag' ? split[1] : '';
      }
      page = <Posts posts={posts} tag={tag}/>
    }

    if (!page && url === '/404') {
      page = <FourOhFour />
    }

    if (!page) {
      const found = posts.find(post => post.url === url)
      if (found) {
        page = <Post post={found}/>
      }
    }

    return (
      <div>
        <Header />
        <div className="layout">
          <Aside />
          <main>
            {page}
          </main>
        </div>
      </div>
    )
  }
}
