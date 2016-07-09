---
title: "Tasty Vanilla JS and React"
description: "Enjoying more javascript fun with the help of React"
date: 2015-03-01 12:00:00 GMT
tags: javascript, react, jsx
slug: vanilla-js-and-react
...

I'm always trying to improve my base javascript understanding and programming abilities. React helps with this task by letting me focus more on the "business logic" and less on the DOM manipulation.

## Write tasty javascript

> React lets you focus more on pure javascript and not the DOM.

Below is a small cart example written with React. It was one of my first react app creations. It simply searches flicker, not instagram, for a search query of images, and lets you add them to a "cart".

[React-cart Example](http://www.hartzis.me/react-gram-cart)  

[React-cart github](https://github.com/hartzis/react-gram-cart)

- One way data flow
  - Pass callbacks to subcomponents to trigger events
- "vanilla js" jsonP service request for data

### Example jsonP request from React-cart
```

AppService.getGramsByQuery = function(query, passedInCallback) {

  var query = "tags=" + tags + "&tagmode=" + "any" + "&format=" + "json";

  var jsonPcallback = function ( data ) {
      // remove from global scope
      delete window.jsonFlickrFeed;

      return passedInCallback({gramItems: data.items});
  };

  // Vanilla
  var jsonFlickrFeed = function ( data ) {
    jsonPcallback( data );
  }
  // put on global scope temporaralllyyyy
  window.jsonFlickrFeed = jsonFlickrFeed;
  var scr = document.createElement('script');

  scr.src = 'http://api.flickr.com/services/feeds/photos_public.gne?callback=jsonFlickrFeed&' + query;
  document.body.appendChild(scr);

}

```

I've been able to learn many fun and delicious javascript goodies over the past few months, and I attribute a lot that to React
