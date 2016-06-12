---
layout: post
title: Tributary.io and D3
description: "Write visualizations with D3js online!"
tags: [d3, javascript, tributary]
comments: false
---

I'd like to share what maybe the greatest tool for working with D3js: [tributary.io](http://www.trubutary.io).

> Tributary is an experimental environment for rapidly prototyping visualization code.

This web application lets you build any D3 visualization you can imagine right in your browser. No need to setup the D3 environment locally when you want to just test out an idea or quickly get a proof of concept going.

#####My Work With Tributary.io:

I used [tributary.io](http://www.trubutary.io) extensively while collaboratively working on [CMPD2012](http://CMPD2012.herokuapp.com). Tributary.io is so easy to use, responsive and instantly refreshed and updated changes as you typed.

> Tributary uses your github.com authentication to save your work to your [Gist](http://gist.github.com) as, what they call, an *inlet*.

####Example Inlet for 'Hello World'

You can click the [link](http://tributary.io/inlet/093144225f67c410e515) in the gist below to open this example inlet then expand it and save it to your own gist!

{% gist hartzis/093144225f67c410e515 %}

####Advanced Tributary Uses

Along with all the inherent Tributary libraries(d3, underscore, and more), it lets you import other javascript libraries. The example inlet below was used to build the map on [CMPD2012](http://CMPD2012.herokuapp.com).

#####CMPD2012 Map inlet Example Gist

>**Example inlet loads these additional libraries:**

* [topojson](https://github.com/mbostock/topojson) - extension to JSON that encodes topology
* [polymaps](http://polymaps.org/) - library for making dynamic, interactive maps

<figure>
  <a href="/images/cmpd2012-tributary-map.jpg"><img src="/images/cmpd2012-tributary-map.jpg"></a>
  <figcaption><a href="http://tributary.io/inlet/11292469" title="CMPD2012 - tributary.io - Map inlet">CMPD2012 - tributary.io - Map inlet</a>.</figcaption>
</figure>

{% gist hartzis/11292469 %}
