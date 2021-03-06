import React, { Component } from 'react'

function Github() {
  return <svg className="icon" viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg>
}

function Twitter() {
  return <svg className="icon" viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg>
}

function Email() {
  return <svg className="icon" viewBox="0 0 512 512"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/></svg>
}

function Codepen() {
  return <svg className="icon" viewBox="0 0 512 512"><path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"/></svg>
}

function CodeSandbox() {
  return <svg role="presentation" className="icon" viewBox="0 0 1024 1024"><g><polyline points="719.001,851 719.001,639.848 902,533.802 902,745.267 719.001,851"></polyline><polyline points="302.082,643.438 122.167,539.135 122.167,747.741 302.082,852.573 302.082,643.438"></polyline><polyline points="511.982,275.795 694.939,169.633 512.06,63 328.436,169.987 511.982,275.795"></polyline></g><g><polyline fill="none" stroke="#aaaaaa" strokeWidth="80" strokeMiterlimit="10" points="899,287.833 509,513 509,963"></polyline><line fill="none" stroke="#aaaaaa" strokeWidth="80" strokeMiterlimit="10" x1="122.167" y1="289" x2="511.5" y2="513"></line><polygon fill="none" stroke="#aaaaaa" strokeWidth="80" strokeMiterlimit="10" points="121,739.083 510.917,963.042 901,738.333 901,288 511,62 121,289"></polygon></g></svg>
}

export default class Aside extends Component {
  render () {
    return (
      <aside className="theAside">
        <div className="gravatar">
          <img src={this.props.gravatarSrc}/>
        </div>
        <div className="social">
          <div><a href='/about/'>about&nbsp;me</a></div>
          <div><a href='/posts/'>all&nbsp;posts</a></div>
          <div><a target="_blank" rel="noopener noreferrer" href='http://github.com/hartzis'><Github/><span className="linkText">github</span></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href='https://codesandbox.io/u/hartzis'><CodeSandbox/><span className="linkText">codesandbox</span></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href='http://twitter.com/hartzis'><Twitter/><span className="linkText">twitter</span></a></div>
          <div><a target="_blank" rel="noopener noreferrer" href='http://codepen.io/hartzis'><Codepen/><span className="linkText">codepen</span></a></div>
          <div><a href='mailto:brianhartz@gmail.com'><Email/><span className="linkText">email</span></a></div>
        </div>
      </aside>
    )
  }
}

Aside.defaultProps = {
  gravatarSrc: `http://www.gravatar.com/avatar/6c1be341cc1cf3bf3f4f849d0eb282b4.png?s=150`,
}
