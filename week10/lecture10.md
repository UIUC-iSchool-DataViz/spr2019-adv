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

## Today

 * How to do that in vega-lite...
   * Selection binding
   * Lookups
 * Final Project
 * Large-scale Data Viz
 * RPG continuing

---

## How to do that in vega-lite …

"How can I bind the x and y axes?"  From the docs:

> Single selections can be bound to input elements also known as dynamic query
> widgets. Interval selections can be bound to their own view’s scales to
> enable panning & zooming.

We can't bind the values of `encodings` to these input elements, so how do we do this?

---

## Folding and Filtering

We are able to utilize the value of a selection in a `transform`, specifically a `filter` transform.  We can do this like so:

```json
"transform": [
  {"filter": {"selection": "x_axis"}}
],
```

But how do we make our `x_axis` selection operate?  We have to use the `fold` transform:

```json
{"fold": ["precipitation", "temp_max", "temp_min", "wind"],
 "as": ["variable_x", "value_x"]
},
```

We might even need to fold it twice!

---

## Lookups

The `lookup` transform is useful for keying two different datasets together.

```json
"transform": [
  {
    "lookup": "KEY VALUE",
    "from": DATA_SPEC,
    "as": WHERE_TO_STORE
  }
```

The keys locally and remotely can differ.

---

## Final Project

Create a web-based presentation that discusses the data.  This should be between five and ten minutes and needs to meet these criteria:

 * You should utilize at least two different frameworks for visualizing
 * You should identify key points in the dataset
 * This should be published online

Your final project will be due our last day of class.  You must take into
account the licensing of data, licensing of images, and you will be presenting
to the class.

Let's find some datasets.

---

## RevealJS

RevealJS is a mechanism for building slide presentations in HTML.  All of this class has been made in RevealJS.

---

## RPG

Let's continue with our RPG.  We will eventually need to connect our PaperJS
and our Vega-Lite, which we will do today.

Today:

 * Generate a map
 * Visualize that map
 * Move across the map
 * Fight and visualize results

