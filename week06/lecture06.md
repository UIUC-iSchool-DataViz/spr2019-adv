---
title: Lecture 6
layout: lecture
---
# Advanced Data Visualization
## Matthew Turk
## Spring 2019

---

# Today: Web Viz

 * (Sort of) How the web works
 * Development environment
    * Local
    * Hosted
    * Github Pages
 * Basic javascript
 * vega-lite

---

# The Web

 * Content is transmitted from point-to-point
 * Content can be manipulated locally or remotely
 * Not all servers can manipulate data before sending

---

# Your Browser

 * Your browser contains -- essentially -- an entire operating system.  It can
   manage:
    * Display mechanisms
    * Interaction with you, the user
    * Input/output from files and file-like objects
    * Interpreter to execute code
 * Most of its activities are mediated via a document object model (DOM) and
   the programming language Javascript

---

# Things to Note

 * Javascript is "garbage collected"
 * Javascript is single-threaded
 * Asynchronous programming can be a real noodle-bender

---

# Document Object Model

The Document Object Model (DOM) is how we interact with the collection of HTML
objects in our document.

For instance, a page can be composed of `<div>` objects, `<p>` objects, etc,
and we can construct and interact with these.  This includes things like
modifying style sheets.  See, for example, the
[jsfiddle](https://jsfiddle.net/) for [jQuery
boilerplate](https://jsfiddle.net/boilerplate/jquery).

One alternative, as we will see, is to have rendering tied to data and data
values, and to have those automatically update as needed.

---

# Synchronous programming

In Python, we would fetch a website and wait for that to finish before we move
on.

```
import requests

r = requests.get("https://google.com/")
print(r.text)
print("Request completed!")
```

---

# Asynchronous programming

In Javascript, we would tell the code to fetch, but we would also tell it what
to do *after* it finished.

This uses jQuery, but you can [do it without
that](http://youmightnotneedjquery.com/#json).

```
$.get("https://google.com/", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
});
console.log("Hey, I've done the thing.");
```

Note that you can't always get this to work. In fact, that example won't even
work!

---

# Async and Event-Driven

Async is how we can think about event driven programming, as well.  We have
done this using `traitlets` and `ipywidgets` in Python, and we will do it here
as well.

```
var button = $("button");

button.on("click", function() {
    console.log("I've been clicked!");
});
```

---

# Dev Env: Local

```
python -m http.server
```

This will start up a server running locally that will just happily serve static
content.  Let's try this out by creating two files, `index.html` and
`script.js`.

---

For instance, `index.html` :

<code>
&lt;html&gt;<br/>
&lt;script src="script.js"&gt;&lt;/script&gt;<br/>
&lt;div&gt;<br/>
&lt;p&gt;Hello there!&lt;/p&gt;<br/>
&lt;/div&gt;<br/>
&lt;/html&gt;<br/>
</code>

`script.js`:

<code>
alert("I am loading!");
</code>

---

# Dev Env: Hosted

 * codepen.io
 * jsfiddle.net
 * observablehq.com
 * glitch.com (includes server)

---

# Basic Javascript

We will go over a few things, and then move on to vega-lite.

You can declare variables in Javascript implicitly or explicitly, depending on how you want them scoped.

```
var myArray = [1, 2, 3, 4];
var myString = "Hello there!";
var myConcatString = "Hi " + "there " + 5;
var myObject = {'a': 1, 'b': 2, 'c': [1, 2, 3, 4]};
```

---

# Updating variables

If you have an array of objects, there are three very handy functions you can
utilize: `slice`, `forEach` and `filter`.  If you have an object, you can
update it either by accessing a property with a period (`obj.something`) or by
accessing it like you would a dictionary in python (`obj['something']`).

---

# Arrays: `filter`

```
var myArray = [1, 5, 1, 3, 50, 14, 2];
myArrayFiltered = myArray.filter(val => val > 2);
```

Note that here I'm using `=>` as shorthand for declaring a function.

---

# Arrays: `forEach`

To execute something on every value in an array, you can call `forEach` with a
function.

```
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(val => console.log(val * 2));
```

---

# Arrays: `slice`

You can set a start and a stop on an array with a `slice` call:

```
var myArray = ["Hello", "I", "am", "here", "now"];
myArray.slice(3).forEach(word => console.log(word));
```

---

# External libraries

Often, you will need to include external libraries.  In many cases, it is
sufficient to include items through content delivery networks (CDNs).  For
instance, [CDNJS](https://cdnjs.com) has a wide variety of includable items.

---

# vega-lite editor

https://vega.github.io/editor/#/custom/vega-lite

---

# vega-lite syntax: basics

From the vega-lite examples, you can make a bar chart that is an aggregate like so:

```
{
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "data": {"url": "data/movies.json"},
  "mark": "bar",
  "encoding": {
    "x": {
      "bin": true,
      "field": "IMDB_Rating",
      "type": "quantitative"
    },
    "y": {
      "aggregate": "count",
      "type": "quantitative"
    }
  }
}
```

---

# vega-lite syntax

There are several mechanisms by which we describe data representations in
vega-lite, but the overarching principle is that it is declarative.  We define
what it does based on what we say we want it to look like.

The place where this is no longer true is when we modify `datum` values.

---

# vega-lite syntax

The syntax you will need to be the most familiar with:

 * `mark`: how to visually represent something
 * [`encoding`](https://vega.github.io/vega-lite/docs/encoding.html): the translation between data and the mark
 * `aggregate`: operating over a collection of points -- `mean`, `sum`, `median`,
   `min`, `max`, `count`
 * `type`: `quantitative`, `temporal`, `ordinal`, or `nominal`

---

# Assignment 5

You will have two and a half weeks, until Wednesday the 27th.  

 * Construct a standalone webpage on GitHub that includes a vega-lite based
   data visualization.
 * This should utilize one or more CSV or JSON-formatted data sets, which you
   will need to clear with me first.  Identify something you are interested in
   and verify the license, suitability, and size.
 * Using at least three different types of marks, construct visualizations of
   this dataset that demonstrate univariate and bivariate modifications.
   (Three visualizations.)
 * Construct one faceted visualization that enables brushing and linking.
 * Write up (and hand in, but do not post on your website) your experience with
   this, including what you did and did not like about it.
