---
title: "Dynamic Password Validation"
description: "Nifty jquery password validation modified from stack exchange logic"
date: 2014-10-02 12:00:00 GMT
tags: javascript, jquery, forms
slug: jquery-password-validation
scripts:
 - "//codepen.io/assets/embed/ei.js"
...

Password validation based on specific security parameters was the task at hand. I wanted instant validation as the user typed their password in. These were the specifications that the user needed to meet.

### Password Requirements
* 6 characters in length
* one uppercase
* one lowercase
* one digit
* one special character

## Example validations

As I browsed the internet using Chrome developer tools I came across a simple, yet cool implimentation.

* [Stack Exchange](https://stackexchange.com/users/login#create-account)'s new user creation

I quickly copied stack exchanges solution javascript into a [gist](https://gist.github.com/hartzis/6ae1980d3e90faf2c969) and went at creating a codepen from it!

### Codepen

Enter the amazing code playground that is Codepen.io! I built the following codepen that anyone is free to copy/use/fork.

### Password Validation Codepen Example

<p data-height="233" data-theme-id="9092" data-slug-hash="bgJqK" data-default-tab="result" data-user="hartzis" class='codepen'>See the Pen <a href='http://codepen.io/hartzis/pen/bgJqK/'>Dynamic Password Validation, work in progress...</a> by Brian Emil Hartz (<a href='http://codepen.io/hartzis'>@hartzis</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

ps... Please introduce code completion on codepen.io

## Password validation Gist
<script src="https://gist.github.com/hartzis/6ae1980d3e90faf2c969.js"></script>
