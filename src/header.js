import React, { Component } from 'react'

export default class Header extends Component {
  render () {

    return (
      <header>
        <div>
          <img src={this.props.imageUrl}/>
        </div>
        <h2><a href="/">{this.props.title}</a></h2>
        <p>{this.props.subtitle}</p>
      </header>
    )
  }
}

Header.defaultProps = {
  title: 'Brian Emil Hartz',
  subtitle: `let me = enjoy ( javascript ( reactjs ( pondering ) ) )`,
  imageUrl: 'http://www.hartzis.me/images/rsz_hartzis-main-feature.jpg',
}
