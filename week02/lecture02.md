---
title: Lecture 2
layout: lecture
---
# Advanced Data Visualization
## Matthew Turk
## Spring 2019

---

# Comparisons

 * Which number is big ... and which number is small?
 * By how much?
 * And do we need to know the actual values?

---

# Let's experiment!

How could we evaluate the difference between 1.2 trillion dollars and 20
billion dollars?

 * Do we have internal comparisons to make?
 * Do we have external comparisons to make?
 * Are these comparisons **appropriate**?

---

# Let's experiment!

1.2 trillion dollars is sixty times 20 billion dollars.

What is the base of comparison we have for these two?  What is our unit of
comparison?

---

# Taking Up Space

Our visualizations can consist of elements that
[exist](https://www.youtube.com/watch?v=VyLayjuKQyY) just to take up space, but
how we present those can be challenging and is prone to error.

We'll start by experimenting with "comparisons" that are easy to make,
visually.

---

<!-- .slide: data-background-image="images/twoboxes_1.png" data-background-size="contain" -->

---

<!-- .slide: data-background-image="images/twoboxes_2.png" data-background-size="contain" -->

---

<!-- .slide: data-background-image="images/twoboxes_3.png" data-background-size="contain" -->

---

<!-- .slide: data-background-image="images/twoboxes_4.png" data-background-size="contain" -->

---

<!-- .slide: data-background-image="images/twoboxes_5.png" data-background-size="contain" -->

---

# Normalization and Scales

When are the "units" important?  When does our "base" matter?

---

<iframe width="560" height="315"
src="https://www.youtube.com/embed/vZlXd2Rf6pk" frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

---

# Making a Visualization

On the preceding slides, I have shown some prototypes that I drew by hand.

What are some advantages to doing so?

What are some disadvantages?

How can we address this?

---

## Reproducible Visualization

For this class, iteration and exact re-creation are essential for data-driven
visualizations.  What are steps we can take?

---

# Assignment 1

Hisss the game uses the six colors yellow, orange, blue, green, red and purple.
It contains six body cards of each of these pairs of colors: Yellow-Orange,
Blue-Green, Green-Yellow, Orange-Red, Blue-Purple, and Red-Purple.

There are seven head cards (one rainbow, and one for each color) and seven tail
cards (same).  Develop and evaluate two different methods of visualizing the
state of a game of Hisss.  Keep in mind what information you want someone
playing the game to see, how they process that information, and how actionable
it is.

This should take the form of a PDF submission including both the two different
depictions and a writeup for each.

---

# Assignment 2

Explore the limits of comparison using spatial representation.  Evaluate this
in the case that the numbers are nearly identical, in the case that they are
different by a factor of a few dozen and in the case that they are different
by a factor of a hundred or a thousand.

Experiment in these ways:

 * Use non-rectangular regions -- circles, perhaps triangles.
 * How does placing them in different locations change perception?
 * What about colors, uniformity, style?

We will use this as a basis for our first "evidence-based" examination. Prepare
both a writeup and a set of the visualizations where you have removed all
numbers.

Use real, meaningful data.

---

# Interactive Section

Today during class, we will re-build the visualizations I prototyped and
explore how we can manipulate and vary them.  This will include:

 * "patches" and how to use matplotlib to build data-driven visualizations from
   first principles
 * interactivity in comparisons
 * gists, vega-lite, and D3
 * "reactive" programming and the basics of D3
