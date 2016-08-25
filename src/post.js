import React, { Component } from 'react'
import moment from 'moment'

export default class Post extends Component {

  render () {
    const { post } = this.props

    let tags

    if (post.tags) {
      let linkedTags = post.tags.split(',').map(t=>t.trim()).map(t=>(
        <span key={t}><a href={`/posts/?tag=${t}`}>{t}</a> </span>
      ))
      tags = (
        <span className='tags'>tagged: {linkedTags}</span>
      )
    }

    let twitterUrl = `http://www.twitter.com/share?url=http://hartzis.me${post.url}&amp;text=${post.title}`

    let date = post.last_updated || post.date

    date = moment(date).format('D MMM YYYY')

    return (
      <article className='post-wrapper'>
        <h1><a href={post.url}>{post.title}</a></h1>
        <hr/>
        <aside>
          <div>Last updated: {date}</div>
          <div>{tags}</div>
        </aside>
        <section dangerouslySetInnerHTML={{__html: post.html}}></section>
        <footer>
          <hr/>
          <h4>Thanks taking the time to gander at my electronic writings, please:</h4>
          <ul>
            <li><a href={twitterUrl}>share this on the twitter</a></li>
            <li><a href='http://twitter.com/hartzis'>follow me on the twitter</a></li>
            <li><a href='http://github.com/hartzis'>check out what I've been coding</a></li>
            <li><a href='/posts/'>see my other posts</a></li>
          </ul>
        </footer>
      </article>
    )
  }
}
