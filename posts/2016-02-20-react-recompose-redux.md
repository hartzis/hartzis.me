---
title: "React with Recompose with Redux"
description: "Compose/Compute props for [Re]act with [Re]compose and [Re]dux"
date: 2016-02-20 12:00:00 GMT
tags: javascript, react, props, compose, recompose, redux, HOC
slug: react-recompose-redux
...

Over the past few months I've been using a library called [recompose](https://github.com/acdlite/recompose). It claims to be `a react utility belt for function components and higher-order components`, and it fulfills this claim exceedingly well!

I've [previously](/functional-redux-ducks) talked about [stateless functional components](http://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) and how they have helped keep components small and more reusable. Functional components really shine with the help of [recompose](https://github.com/acdlite/recompose)! I've been able to extract computed properties, display logic, and overall optimize my code and views!

### Simple recompose example

Let's say we have a `store` of scientists and we need to display each scientists information.

<script src="https://gist.github.com/hartzis/696edd6cb1f1d08a9e1d.js"></script>

We have a `<Scientist/>` stateless functional component that handles the displaying of the scientists information. This component shouldn't care about how or where it's scientists display data has come from.

<script src="https://gist.github.com/hartzis/b6e9530434885dd8ec6e.js"></script>

Let's assume a [redux](https://github.com/reactjs/redux) store containing [immutablejs](https://github.com/facebook/immutable-js/) data. So with [react-redux](https://github.com/reactjs/react-redux) we can get each scientists data and pass it to the view.

<script src="https://gist.github.com/hartzis/1e6de9c07c0ff7ae7636.js"></script>

The problem here is that our view requires DOB pre-formated and a full url to work properly. We need to compute a few display properties before the data gets passed into the view.

This could be done either in the `mapStateToProps` function with connect, but that shouldn't be its concern. We could also just do that in the `View`, but the view should just be a [presentational component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.hs3v6lpjm)('dumb' component).

Introducing [recompose](https://github.com/acdlite/recompose)! This library gives us HOC's like `withPropsOnChange` that only update computed properties when one of the props it is 'watching' changes. Here is an example implementing it for our scientists.

<script src="https://gist.github.com/hartzis/4c6a834e60cb0099edff.js"></script>

This example also uses `compose` from [recompose](https://github.com/acdlite/recompose) which 'composes multiple higher-order components into a single higher-order component.'

> recompose is a react utility belt for function components and higher-order components

[recompose](https://github.com/acdlite/recompose) has been an amazingly strong addition to projects both at work and at home. It has helped with testing, by pulling out computed property calculations into pure functions, and just moving logic out of the views to make them simpler.

Check it out and if you have questions just let me know! Have fun!
