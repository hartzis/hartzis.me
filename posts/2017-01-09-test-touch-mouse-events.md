---
title: "Touch and Mouse Event Testing"
description: "Test react component that handles touch and mouse events"
date: 2016-02-20 12:00:00 GMT
tags: javascript, react, test, touch, mouse, events
slug: test-touch-mouse-events-react
...

React component testing has dramatically improved over the past year. A year ago I wrote a [small post](http://www.hartzis.me/react-testing/) that used  [Enzyme](https://github.com/airbnb/enzyme) which helped supply much needed tooling around react component testing and easier testing with [shallow Rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering).

When I first wrote that post I looked into [Jest](https://facebook.github.io/jest/) but it seemed overly complicated at the time. Since then it has had a few major overhauls and has come out leading the testing pack for react component testing especially with the addition of [snapshot testing](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing).

> Jest snapshot testing is amazing for testing react components

I've had an [issue](https://github.com/dogfessional/react-swipeable/issues/18) open on [react-swipeable](https://github.com/dogfessional/react-swipeable/) for over a year that has a task to create tests. I [recently undertook](https://github.com/dogfessional/react-swipeable/pull/59) this adventure and am going to briefly discuss creating touch and mouse event tests using Jest and enzyme.
