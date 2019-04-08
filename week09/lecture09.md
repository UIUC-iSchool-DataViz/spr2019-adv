---
title: Lecture 9
layout: lecture
include_vega: true
setup_script: setup_script.js

---
## Advanced Data Visualization
## Matthew Turk
## Spring 2019

---

## Software Frameworks III

 * Updating data in vega-lite
   * Adding new data
   * Removing data
   * Simple RPG
 * PaperJS for diagrams and pixel manipulation
 * RevealJS

---

## Why update data?

 * Reaction to new, incoming data
 * Modify based on some set of inputs that can't be bound to vega-lite events
 * Static visualization, changing view

---

## Embedded vega-lite config

We are principally using a vega-lite "embed" mechanism:

```javascript
var embedded = vegaEmbed('#vis', yourVlSpec);
```

We are also able to specify a configuration variable to this at the config
option.  ([Details](https://github.com/vega/vega-embed))  You may find it
useful to update the `actions` option in `opt`, which controls which items are
available in the menu:

```javascript
var embedded = vegaEmbed('#vis', yourVlSpec, {'actions': false});
```

---

## Accessing embedded vega-lite

The object returned by `vegaEmbed` is a
[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
This means that when you access it, it may not *yet* be available -- so instead
of actually calling on it, we supply a function to be called *at some point*
when it is ready -- when the promise has been __resolved__.  This function will
be called with that object.

```javascript
somePromiseObject.then( function(resolvedObject) {
  resolvedObject.doSomething();
});
```

(This type of syntax, for deferring actions to the future, is very common in
Javascript.)

---

## The vega-lite View API

The [`View` API](https://vega.github.io/vega/docs/api/view/#view_insert) in
vega-lite (rather, vega) is how we manipulate and change data.  This can be
done by constructing a `changeset`, appending operations to that changeset, and
then executing that changeset on the `view` of our embedded visualization.

```javascript
var cs = vega.changeset()
          .remove( function(t) {
              return t.CIRCULATION < 10000
          });
embedded.then( function(res) {
  res.view.change('table', cs).run();
});
```

This will update the data table named `'table'` with everything "queued up" in
the `changeset` object `cs`.

---

## vega-lite: insert example

```json
  {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "description": "A scatterplot",
    "data": {"name": "table",
             "values": [ {"x": 1.0, "y": 2.0},
                         {"x": 2.0, "y": 1.0},
                         {"x": 3.0, "y": 9.0},
                         {"x": 4.0, "y": 8.0},
                         {"x": 5.0, "y": 6.0} ] },
    "mark": "point",
      "encoding": {
        "x": {"field": "x","type": "quantitative"},
        "y": {"field": "y","type": "quantitative"}
      }
  }
```

<div id="vis2"></div>

---

## vega-lite: insert example

We can add elements to our dataset with the `insert` function.  This takes an
array of data tuples, like those already included, and adds them to the data
being visualized.

```javascript
var cs = vega.changeset()
          .insert( [
            {'x': 1.0, 'y': 10.0},
            {'x': 5.0, 'y': 1.3},
            {'x': 2.1, 'y': 0.7}
          ]);
embedded3.then( function(res) {
  res.view.change('table', cs).run();
```

---

## vega-lite: insert example

We do this by affixing an event handler, in this case to a button and the event
`click`.

```javascript
document.getElementById("button3")
  .addEventListener("click", 
    function onButtonClick(event) {
  });
```

<div id="vis3"></div>
<button id="button3">Click to insert</button>

---

## vega-lite: remove

Similarly, we can *remove* data points by supplying a function that is
evaluated on each of the data tuples.

```javascript
var cs = vega.changeset()
          .insert( [
            {'x': 1.0, 'y': 10.0},
            {'x': 5.0, 'y': 1.3},
            {'x': 2.1, 'y': 0.7}
            ])
          .remove( function(t) {
            return t.x < t.y;
          });
embedded4.then( function(res) {
  res.view.change('table', cs).run();
```

---

## vega-lite: remove
  
<div id="vis4"></div>
<button id="button4">Click to insert and remove</button>

(Wait, what happened ...?)

---

## PaperJS and simple vector graphics

Now, let's figure out how we can draw stuff.  We are deferring discussion of D3 to a later date, and instead we will be looking at a lightweight mechanism for drawing.

You can experiment online at [sketch.paperjs.org](https://sketch.paperjs.org/).

---

## PaperJS

<!-- .slide: class="fullHeight" -->

<div class="multiCol">
  <div class="col fullHeight">
    <canvas data-paper-resize="true" data-paper-script="figure_cell_spin"></canvas>
  </div>
  <div class="col fullHeight" style="vertical-align: baseline;">
		[PaperJS](https://paperjs.org/) is a library for vector graphics.  It has
	  lots of nice features, and it's pretty fast!
    </div>
</div>

---

## PaperJS Primitives

We will discuss three main classes of object:

 * Geometric primitives
 * Path primitives
 * Style primitives

---

## PaperJS Primitives: Geometry

Geometric primitives describe positions, sizes, and regions.  The most common you will utilize:

 * `Point` -- 2D position, with `x` and `y` attributes.
 * `Rectangle` -- this is a region, defined by two corners.
 * `Size` -- 2D specification with `width` and `height` attributes.

All of these objects can be created in different ways and can be accessed in
different ways.  These are not in-and-of-themselves graphics!  They are used as
input to graphics primitives.

---

## PaperJS Primitives: Paths

Paths are the main method by which we draw in PaperJS.  In general, there are "paths" and there are predefined shapes.

 * Line segment paths
 * Shapes such as rects, circles, stars, ellipses
 * Curves generated from paths

---

## Making a path

http://paperjs.org/tutorials/paths/working-with-path-items/

```
var path = new Path();
path.strokeColor = 'black';
path.add(new Point(30, 75)); 
path.add(new Point(30, 25)); 
path.add(new Point(80, 25));
path.add(new Point(80, 75));
path.closed = true;

// Select the path, so we can see its handles:
path.fullySelected = true;

// Create a copy of the path and move it 100pt to the right:
var copy = path.clone();
copy.fullySelected = true;
copy.position.x += 100;

// Smooth the segments of the copy:
copy.smooth();
```
<!-- .element: style="font-size: 50%;" -->

<canvas data-paper-resize="true" data-paper-script="figure_cloned_square"></canvas>

---

## PaperJS: Raster

Let's talk about using images.

[PaperJS Tutorial on Pixel Averaging](http://paperjs.org/tutorials/images/using-pixel-colors/)

---

## RPG

What do we need for an RPG?

 * Character information
 * Environmental information
 * Interaction components

---

## First Steps

First, let's make our basic outline.

 * What statistics do we want?
 * What layout do we want?
 * Can we make something that moves around?

---

## Second Steps

Let's now visualize our statistics using vega-lite.  How should we do this?

---

## Iodide

If you like, you can utilize [Iodide](https://alpha.iodide.io/) for this.
