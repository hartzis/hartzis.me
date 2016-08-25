import React, { Component } from 'react'
import moment from 'moment'

export default class Home extends Component {
  render () {
    return (
      <article className='about-wrapper'>
        <h1>About Brian Emil and Hartzis.me</h1>
        <hr/>
        <section>
          <p>
            Welcome to Hartzis.me! This will document my adventures and fun times had while developing.
          </p>
          <p>
            Learning web development has given me an astonishingly diverse and powerful set of tools. I now strive to create fun and interesting applications, and to always keep my brain gulping from the pool of knowledge!
          </p>
        </section>
        <footer>
          <hr/>
          <h4>Thanks taking the time to gander at my electronic writings, please:</h4>
          <ul>
            <li><a href='http://twitter.com/hartzis'>follow me on the twitter</a></li>
            <li><a href='http://github.com/hartzis'>check out what I've been coding</a></li>
            <li><a href='/posts/'>see my other posts</a></li>
          </ul>
        </footer>
      </article>
    )
  }
}
