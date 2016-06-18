import React, { Component } from 'react'
import classnames from 'classnames'

export default class Header extends Component {
  render () {
    const imageUrl = 'http://www.hartzis.me/images/rsz_hartzis-main-feature.jpg'

    return (
      <header>
        <div>
          <img src={imageUrl}/>
        </div>
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle}</p>
        <p>
          <a href='/posts'>all posts</a>
          <a href='http://github.com/hartzis'>github</a>
          <a href='http://twitter.com/hartzis'>twitter</a>
          <a href='mailto:brianhartz@gmail.com'>email</a>
        </p>
      </header>
    )
  }
}

Header.defaultProps = {
  title: 'Brian Emil Hartz',
  subtitle: `let me = enjoy ( javascript ( reactjs ( pondering ) ) )`
}
