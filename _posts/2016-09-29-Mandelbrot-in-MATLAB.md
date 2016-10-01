---
layout: post
title: "Mandelbrot in MATLAB"
---
<script type="text/javascript" src="http://latex.codecogs.com/latexit.js"></script>


Along the same vein as my last blog post, I decided to see how few lines of code it would take to come up with some cool Mandelbrot pictures.

The Mandelbrot Set is a set of numbers described by a very simple mathematical statement, which I will discuss only very briefly before showing off some cool pictures. The set is famous in mathematics studies for it's property of self-similarity, as well as other cool facts that you can find out about on its [Wiki](https://en.wikipedia.org/wiki/Mandelbrot_set) page if you're interested. The definition of the set is as follows: if you take a complex number <em>z</em>  and apply the function 
<div lang="latex">f(z) = z^2 + c</div>
(where <em>c</em> is some other complex number that we may choose freely) over and over, does the magnitude of the result run off to infinity? Or does it stay relatively small (less than 2)?  
