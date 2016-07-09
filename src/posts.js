import React, { Component } from 'react'
import moment from 'moment'

export default class Posts extends Component {
  render () {
    const { posts, tag } = this.props
    // console.log(this.props)
    let filteredPosts = tag
      ? posts.filter(post=>(post.tags && post.tags.split(',').map(a=>a.trim()) || []).find(t=>t===tag))
      : posts
    return (
      <section className='post-list'>
        {tag ? (<p>Posts tagged with: <span>{tag}</span></p>) : null}
        {filteredPosts.map(post => {
          let date = moment(post.date)
          return (
            <li key={date}>
              <time dateTime={date.format('YYYY-MM-DD HH:mm')}>{date.format('D MMM YYYY').toUpperCase()}</time>
              <a href={post.url}>{post.title}</a>
            </li>
          )
        })}
      </section>
    )
  }
}
