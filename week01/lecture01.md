---
title: Lecture 1
layout: lecture
---
# Data Visualization
## Matthew Turk
## Spring 2018

---
# Basics

1PM-3:50PM Fridays, LIS-126

Matthew Turk - mjturk@illinois.edu
Office Hours: Wednesday 2-4, LIS 222

TA Jarai Carter - carter31@illinois.edu

http://github.com/UIUC-iSchool-DataViz/


---
# Timed activity!

---
Each of you has a notecard with a number.

On the back of that notecard:

* What are the most memorable movies you saw over the last year?
* Do you prefer cats or dogs?
* How would you quantify your experience in visualization?
* What would you guess the square footage of this building is?
* People per row in this class.

---
Break into groups based on your numbers, and visualize the results by whatever method you choose: by hand, by computer, or otherwise.

Affix to or inscribe upon your sheet of paper.

---
# Syllabus

* Week 1 (Sept 1): Introduction, syllabus, examples, and some basics
* Week 2 (Sept 8): Operational palette, structured python, and files
* Week 3 (Sept 15): Quantitative plots, plot components
* Week 4 (Sept 22): Histograms and distributions
* Week 5 (Sept 29): R and ggplot
* Week 6 (Oct 6): Images: color, colormaps
* Week 7 (Oct 13): Comparisons between datasets
* Week 8 (Oct 20): Comparisons between different datasets
* Week 9 (Oct 27): Network visualization
* Week 10 (Nov 3): Principles of interactive visualization
* Week 11 (Nov 10): Interactive visualization with Python
* Week 12 (Nov 17): Scientific visualization
* Week 13 (Dec 1): Advanced topics
* Week 14 (Dec 8): Group presentations

---
# Overview - Themes
1. What are the components of an effective visualization of quantitative data?
1. What tools and ecosystems are available for visualizing data?
1. What systems can be put in place to generate visualizations rapidly and with high-fidelity representation?


---
# Overview - Goals

* Students will be able to communicate information and data through visual representation
* Students will be able to examine a visualization and understand how it can be improved upon
* Students will have facility with the commonplace tools used for visualization, and a deeper understanding of where those tools have shortcomings

---
# Initial steps with Viz

The first thing we're going to do is set up our visualization environment.

We'll import a few things and go from there.


```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

Now we have a few things imported, so let's check out where to go from here.


```python
pd.read_csv("hello.csv")
```
