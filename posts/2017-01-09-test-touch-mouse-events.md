---
title: "Touch and Mouse Event React Testing"
description: "Test react component that handles touch and mouse events"
date: 2016-02-20 12:00:00 GMT
tags: javascript, react, test, touch, mouse, events
slug: test-touch-mouse-events-react
...

React component testing has dramatically improved over the past year. A year ago I wrote a [small post](http://www.hartzis.me/react-testing/) that used [Enzyme](https://github.com/airbnb/enzyme) which helped supply much needed tooling around react component testing and isolated component testing with [shallow Rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering).

When I first wrote that post I looked into [Jest](https://facebook.github.io/jest/) but it seemed overly complicated at the time. Since then it has had a few major overhauls and has come out leading the testing pack for react testing especially with the addition of [snapshot testing](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing).

> Jest snapshot testing is amazing for testing react components

## Testing

I've had an [open issue](https://github.com/dogfessional/react-swipeable/issues/18) on [react-swipeable](https://github.com/dogfessional/react-swipeable/) for over a year that has a task to create tests. I [recently undertook](https://github.com/dogfessional/react-swipeable/pull/59) this adventure and am going to briefly discuss creating touch and mouse event tests using Jest and enzyme.

#### Setup

First install all required deps by following the general setup on [Jest's page](https://facebook.github.io/jest/docs/tutorial-react.html) and since we're doing 'DOM testing' you want to install enzyme and react-addons-test-utils by following [this example](https://facebook.github.io/jest/docs/tutorial-react.html#dom-testing).

#### Component

Let's start with a simple component that keeps track of a touch events x axis interaction.

#### Test Utils

#### Tests

#### Full Example on Github

I setup the discussed component and tests in a github repo that can be cloned and ran locally if desired.

[https://github.com/hartzis/event-testing](https://github.com/hartzis/event-testing)
