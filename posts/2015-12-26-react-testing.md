---
title: "Simply test react components"
description: "Test react components with shallow rendering"
date: 2015-12-26 12:00:00 GMT
tags: javascript, react, testing
slug: react-testing
scripts:
 - "//gist.github.com/hartzis/b1ed6d811e6948b293b9.js"
 - "//gist.github.com/hartzis/d9c5f448eecdf3475d48.js"
 - "//gist.github.com/hartzis/e5f889cc4b0c75849ba8.js"
...

With react v0.13 they introduced 'shallow rendering', all basic html inside a component is rendered and no sub components are rendered. We now have the power to run unit tests in node without the need for a 'DOM'.

> [Shallow Rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) takes a component and renders it 'one level deep' and will not render sub components. This allows unit tests to keep focus on their specific component.

This post walks through writing simple tests for an example component `<List/>` which contains `<Item/>` components.

These testing examples use the TAP library [tape](https://github.com/substack/tape) and [airbnb's](http://nerds.airbnb.com/) newly open sourced react component testing utilities [enzyme](https://github.com/airbnb/enzyme) for react components.

### Example `<List/>` component:
<script src="https://gist.github.com/hartzis/b1ed6d811e6948b293b9.js"></script>

When writing unit tests for `<List/>` the tests should focus on the output of `<List/>` and not what `<Item>` does with the item data.

### Example tests for `<List/>`:
<script src="https://gist.github.com/hartzis/d9c5f448eecdf3475d48.js"></script>

These unit tests focus on `<List/>` and make assertions as to what it will render, and are not concerned with what `<Item/>` will render. `<Item/>` has its own specific unit tests.

### Example test for `<Item/>`:
<script src="https://gist.github.com/hartzis/e5f889cc4b0c75849ba8.js"></script>

### Sum

This post is intended to be an easily digestible and simple intro to testing react components. Unit tests for react components can be quick and simple while adding confidence to your code base.

Please check out the repo [simple-react-enzyme-examples](https://github.com/hartzis/simple-react-enzyme-examples) if you'd like to run/check out these examples!
