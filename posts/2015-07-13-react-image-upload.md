---
layout: post
title: Upload Image File Component Fun
description: "Upload images to express server with react"
tags: [javascript, react, xhr, ajax, express]
comments: false
---

I'm currently building a couple little apps to digest, catalog, and display heel clicking's from my worldly adventures.  


While building the image processing app I needed to upload the images to an express server. This proved to be a very awesome learning experience that I have felt like sharing in order to help others and probably myself again down the road.

## The React File Upload Component

<p data-height="436" data-theme-id="9092" data-slug-hash="VvNGZP" data-default-tab="result" data-user="hartzis" class='codepen'>See the Pen <a href='http://codepen.io/hartzis/pen/VvNGZP/'>React Image Preview & Upload</a> by Brian Emil Hartz (<a href='http://codepen.io/hartzis'>@hartzis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<script src="https://gist.github.com/hartzis/0b77920380736f98e4f9.js"></script>

>Component Includes Preview of Image

When submitted it will trigger the callback that fires the below ajax call with the image file.

## XHR/Ajax Image Upload

<script src="https://gist.github.com/hartzis/093173bb0b82eaafa73b.js"></script>

## The Server Side Image Save and Copy

Along with express I needed to npm install ['multiparty'](https://www.npmjs.com/package/multiparty). This example uses multiparty to parse the form data and extract the image file information. Then 'fs' to copy the temporarily upload image to a more permanent location.

<script src="https://gist.github.com/hartzis/fb43721affdf9acd8555.js"></script>

I am now working on reprocessing the images to standard sizes and thumbnails using ['lwip'](https://github.com/EyalAr/lwip).

>Please hit me up if you have problems and questions, I'm more than willing to help anyone doing this too!
