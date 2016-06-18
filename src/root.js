import data from '../data.json'
import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './styles/main.styl'

let url, query

if (typeof window !== 'undefined') {
  url = window.location.pathname
  query = window.location.search.substring(1)
}

render(React.createElement(App, { posts: data.posts, url, query }), document.getElementById('root'));
