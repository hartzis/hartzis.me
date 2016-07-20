---
title: "React OnError Image Component"
description: "Universal/Isomorphic react onError image component"
date: 2016-07-17 12:00:00 GMT
tags: javascript, react, recompose, HOC
slug: onError-image-component
...

I tweeted the other day about image onError react component. The below tweet and attached component are a great start.

<div>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A small <a href="https://twitter.com/hashtag/React?src=hash">#React</a> Universal/Isomorphic Image onError Component <a href="https://t.co/J4eYM4iyEm">https://t.co/J4eYM4iyEm</a> <a href="https://twitter.com/reactjs">@reactjs</a> <a href="https://t.co/LZkJl20iJF">pic.twitter.com/LZkJl20iJF</a></p>&mdash; Brian Emil Hartz (@hartzis) <a href="https://twitter.com/hartzis/status/753698944471793665">July 14, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

But I'd like to create one that has some self contained state that updates based `onError` and uses [recompose](https://github.com/acdlite/recompose)!

The below component uses recompose to hold image state, add onError callbacks, and attach lifecycle methods. I also feel it adds easy to reason about flow and good separation of concerns to create an overall strong reusable image component.

<script src="https://gist.github.com/hartzis/9b23d09f2c98019ddcf452f6916f09aa.js"></script>
