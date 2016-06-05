---
layout: post
title: Immutable State and React
description: "Immutable.js keeping a wonderful state for React"
tags: [javascript, react, immutable, state]
comments: false
---

Over the past six months I've had the opportunity, nay, the privilege, nay, the honor to work with reactjs.  This library is growing in popularity at an astounding rate.  My current employer was both smart and lucky to have chosen this library as the ground work for its front end architecture and I consider myself blessed to be apart of its development process.

## Love hate of state

While learning, building, and refactoring react components I've come to both love and hate state. I learned fast that many stateful components was a bad idea; instead passing down props while having stateless components was a very good idea.

Having a "global" app state has worked wonderfully. This can also lead to interesting problems with mutability of your state as it gets passed down as props through components. You will learn fast as I did that mutable state is not a fun problem to solve.

## Immutable.js win

Here is where we introduce [Immutable.js](https://facebook.github.io/immutable-js/) in all its wonderful immutableness.  Storing an apps state as an immutable map has saved hours worth of debugging, helped data management and has guided better conceptual understanding of app data flow.

### React app diagram

Here is a diagram of a react app structure that I've used many times. Simple, clean, top down approach.

![Top down React app](/images/reactApp.png "Top down React App")

Store app state in a top level "view" component that passes its state down as props to subcomponents that handle data display and interaction. The interaction(updating) happens by passing functions down as props. These functions get called by the sub components with updated data that gets merged into the state that in turn gets passed down again as props.

> ES2015, React and Immutable.js - yup

Here is a small codepen example using ES2015, React, and Immutable.js that uses babel.io precompiler.

<p data-height="400" data-theme-id="9092" data-slug-hash="NqwjpN" data-default-tab="result" data-user="hartzis" class='codepen'>See the Pen <a href='http://codepen.io/hartzis/pen/NqwjpN/'>React and Immutable, Top Down</a> by Brian Emil Hartz (<a href='http://codepen.io/hartzis'>@hartzis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
