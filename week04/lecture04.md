---
title: Lecture 4
layout: lecture
---
# Advanced Data Visualization
## Matthew Turk
## Spring 2019

---

# Assignment 3

 * If you have not turned it in, you have until Weds
 * Those who have already completed it will receive extra credit

---

# Today

 * Review of affine transformations
 * Review of colormaps
 * Color spaces

## Packages

You will need the packages `ipywidgets`, `traitlets`, `colorspacious`,
`matplotlib`, and `pillow`.

You can install these with:

```
!pip install ipywidgets traitlets colorspacious matplotlib pillow
```

---

## Transformations

Affine transformations satisfy:

$ \vec{y} = A\vec{x} + \vec{b} $

<!-- .slide: data-background-image="images/affine_1.svg" data-background-size="30% auto" data-background-position="right 20% bottom 50%" -->

---

## Transformations

Affine transformations satisfy:

$ \vec{y} = A\vec{x} + \vec{b} $

We can use these to accomplish:

 * Shifts

<!-- .slide: data-background-image="images/affine_2.svg" data-background-size="30% auto" data-background-position="right 20% bottom 50%" -->

---

## Transformations

Affine transformations satisfy:

$ \vec{y} = A\vec{x} + \vec{b} $

We can use these to accomplish:

 * Shifts
 * Rotations

<!-- .slide: data-background-image="images/affine_3.svg" data-background-size="30% auto" data-background-position="right 20% bottom 50%" -->

---

## Transformations

Affine transformations satisfy:

$ \vec{y} = A\vec{x} + \vec{b} $

We can use these to accomplish:

 * Shifts
 * Rotations
 * Scaling

<!-- .slide: data-background-image="images/affine_4.svg" data-background-size="30% auto" data-background-position="right 20% bottom 50%" -->

---

## How Do Colors Work?

Rods (low-light) and cones (color) mediate vision. Humans have about 20 times
as many rods (120 million) as cones (6 million).

https://upload.wikimedia.org/wikipedia/commons/e/e8/1414_Rods_and_Cones.jpg
By OpenStax College [CC BY 3.0](http://creativecommons.org/licenses/by/3.0),
via Wikimedia Commons

---

## Color Matching Function

<!-- .slide: data-background-image="images/cmf.png" data-background-size="auto 75%" -->

---

## Responsivity Function

<!-- .slide: data-background-image="images/resp.png" data-background-size="auto 75%" -->

---

## "Naming" Colors

 * RGB triplets, often expressed in hexadecimel ("#00FFAA", etc)
 * Color spaces 
   * HSV (Hue, saturation, value)
   * [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space)
   * sRGB, Adobe sRGB
   * XYZ -- scaled from 0 to 100
 * List of colors by name
   * [Web](https://www.w3schools.com/colors/colors_names.asp)
   * [matplotlib](https://matplotlib.org/2.0.2/examples/color/named_colors.html)

---

## Color Palettes

 * Colorbrewer Categories
   * Sequential
   * Diverging
   * Qualitative
 * Resources:
  * colorbrewer.org
  * palettable (package)

---

<iframe width="1024" height="576"
src="https://www.youtube.com/embed/xAoljeRJ3lU" frameborder="0"
allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

## Sequential Colormaps

![](images/blues_discrete.png)

![](images/blues_continuous.png)

---

## Diverging Colormaps

![](images/spectral_discrete.png)

![](images/spectral_continuous.png)

---

## Qualitative Colormaps

![](images/set1_discrete.png)

![](images/set1_continuous.png)

(See?  Works better as discrete!)

---

## HSV Wheel

https://commons.wikimedia.org/wiki/File:HSV_color_solid_cylinder.png

By HSV_color_solid_cylinder.png: SharkD derivative work: SharkD Talk [CC BY-SA 3.0
(http://creativecommons.org/licenses/by-sa/3.0) or GFDL
(http://www.gnu.org/copyleft/fdl.html)], via Wikimedia Commons

---

## Palette Mapping

![](images/set1_discrete.png)

Assign each value to a specific color or element.

---

## Color Mapping

$f(v) \rightarrow (R, G, B)$

We can also re-map:

$f(v') \rightarrow (R, G, B)$

$v' = f(v)$

For instance, with logs or squares.

---

## Color Mapping: Linear Mapping

We map from a range of values to (0, 1):

$ v' = (v - v_0)/(v_1 - v_0) $

---

# Exploring Colors

We will experiment with converting from one color space to another, and more
specifically, interpolating and modifying before converting back.

To convert an image from sRGB (RGB in the range 0-255) to another color space,
we use `colorspacious.cspace_convert`:

```
new_image = colorspacious.cspace_convert(image, source_space, dest_space)
```

---

# CVD

[Color vision deficiency](https://en.wikipedia.org/wiki/Color_blindness) refers
to a decreased sensitivity to differentiation between colors.

```
cvd_space = {"name": "sRGB1+CVD",
             "cvd_type": "deuteranomaly",
             "severity": 50}
```

`colorspacious` has three different available `cvd_type` values: protanomaly,
deuteranomaly, tritanomaly.

---

# Experimenting

We will now experiment with interpolations between different colorspaces,
applying colormaps, and simulating CVD to differing degrees.
