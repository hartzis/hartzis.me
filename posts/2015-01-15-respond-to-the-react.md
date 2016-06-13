---
title: "Respond to the React"
description: "Learning my third-ish javascript framework in under a year, me likee!"
date: 2015-01-15 12:00:00 GMT
tags: javascript, react, jsx, jest, socket, testing
slug: respond-to-the-react
...

This is my third javascript framework I have begun to learn in under a year since graduating from [RefatorU](www.refactoru.com). Started the roller coaster with Angular, then traversed Backbone w/JQuery, and now the V(iew) that is [Reactjs](https://facebook.github.io/react/)!

> I say ish since React is mostly just the View of a framework, but dizzam it is powerful and fast!

## The Code - React and jsx

I have definitely grown to exuberantly embrace jsx file format and react component creation. I used separate template files for js and html files in backbone and angular with handlebars. These now seems odd to me.

> Having everything inside the component jsx file; javascript, state, and "html", feels right at home now.

### Small example component from a todo app

```
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <input className="todoInput" onChange={this.onChange} value={this.state.text} />
          <button className="submitTodo">{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
  );}
});
```

- Small, contained piece of code that has everything right there
- You get HTML and other custom components as tags(think directives/web components)
- event handlers are right there, you know where to look
- state of the element also clear

## Testing - React and Jest

React offers many things, including the amazing ability to test the DOM not in the browser!  

> React.addons.TestUtils + Jest are the awesomeness

The ability to test DOM interaction and state in node with js tests is just, yup. Seriously, I can test clicking things, inputing data, and then see how my app reacts to all of this interaction with js tests! Check out the __tests__ folder below and see how easy it is.

Example todo react app I had fun with, that has jest tests [test-react-with-jest](https://github.com/hartzis/test-react-with-jest)

## Fun stuff - React and socket.io

I also decided to see how I could integrate updating a component with socket.io.  Turned the previous todo app basically into a chat application.

Isomorphic todo app turned chat app [react-socket-todo](https://github.com/hartzis/react-socket-todo)

> State tracked in app passed to components rendered into static html!

This app is also [isomorphically](http://blog.risingstack.com/from-angularjs-to-react-the-isomorphic-way/) loading the components. Tracking the state on the server side, and new people to the chat get the history as static html, and then the javascript kicks in and takes over.  Using the same JS on the front and the back is pretty cool.

### Example rendering html server side with React

```
// Render React to a string, passing in current todos
var markup = React.renderToString(
  TodoApp({
    todos: todos
  })
);
```

You then inject the generated markup where it needs to go in your template being sent from the server and boom!

## Conclusion

Currently having a superbly fun time using React, jsx, and jest. Continuing to look forward to a bright future of "web components"!
