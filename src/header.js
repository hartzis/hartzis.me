import React, { Component } from 'react'

export default class Header extends Component {
  render () {

    return (
      <header>
        <div>
          <img src={this.props.imageUrl}/>
        </div>
        <h2><a href="/">{this.props.title}</a></h2>
        <p>let me = enjoy&nbsp;(&nbsp;pondering&nbsp;(&nbsp;javascript&nbsp;(&nbsp;reactjs&nbsp;)&nbsp;)&nbsp;)</p>
      </header>
    )
  }
}

Header.defaultProps = {
  title: 'Brian Emil Hartz',
  // subtitle: `let me = enjoy ( javascript ( reactjs ( pondering ) ) )`,
  imageUrl: '/assets/rsz_hartzis-main-feature.jpg',
}
