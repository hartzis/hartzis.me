---
title: "Touch Event React Testing"
description: "Test react component that handles touch events"
date: 2017-01-09 12:00:00 GMT
tags: javascript, react, test, touch, mouse, events
slug: test-touch-events-react
...

React component testing has dramatically improved over the past year. A year ago I wrote a [small post](http://www.hartzis.me/react-testing/) that used [Enzyme](https://github.com/airbnb/enzyme) which helped supply much needed tooling around react component testing and isolated component testing with [shallow Rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering).

When I first wrote that post I looked into [Jest](https://facebook.github.io/jest/) but it seemed overly complicated and confusing at the time. Since then it has had a few major overhauls and has come out leading the pack for react testing especially with the addition of [snapshot testing](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing) (sadly we wont get into snapshot testing here, but there are many great examples out there).

> Jest leads the pack for react component testing

## Testing

I've had an [open issue](https://github.com/dogfessional/react-swipeable/issues/18) on `react-swipeable` for over a year that has a task to create tests. I [recently undertook](https://github.com/dogfessional/react-swipeable/pull/59) this adventure and am going to share what I did by going through the creation of a simple touch event component and creating tests that utilize jest and enzyme.

#### Setup

First install all required dependencies by following the general setup on [Jest's page](https://facebook.github.io/jest/docs/tutorial-react.html) and since we're doing "DOM testing" you want to install `enzyme` and `react-addons-test-utils` by following [this example](https://facebook.github.io/jest/docs/tutorial-react.html#dom-testing).

#### Component

Let's start with a simple component that keeps track of `touch events` along the x axis.

<script src="https://gist.github.com/hartzis/b34a4beeb5ceb4bf1ed8659e477c4191.js"></script>

This component will keep track when a `touch event` has started, then tracks if the touch is "swiping" and finally when the touch finishes if the touch is considered a "swipe" - if distance touch travelled is `> this.minDistance`, which is 50px.

#### Test Utils

We will test our new touch event component using enzyme's [mount](http://airbnb.io/enzyme/docs/api/mount.html) component capabilities. Then we need to simulate touch events via [simulate](http://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html) on a selected dom node.

With the addition of some helper functions to mock touch events we can more smoothly simulate what the component considers a touch "swipe". These are a few simple helpers to aid with this.

<script src="https://gist.github.com/hartzis/8d5d98ebc8e31acfccbe5988a90f7975.js"></script>

#### Tests

We now have our component created along with some general helper functions and can now setup our tests.

First we can just test that the component "renders". Then start to test some of the functionality:
* state is updated - tested via checking text output
* prop callback called appropriately - tested via `jest.fn()` spies

<script src="https://gist.github.com/hartzis/25229842d3802a0c9fe62c3241a71567.js"></script>

#### Full Example on Github

I setup this example component and tests in a small [github repo](https://github.com/hartzis/event-testing) that can be cloned and ran locally if desired.

[https://github.com/hartzis/event-testing](https://github.com/hartzis/event-testing)

Again this [pull request](https://github.com/dogfessional/react-swipeable/pull/59) is the original inspiration for this small post.

Let me know if you have questions, cheers!
