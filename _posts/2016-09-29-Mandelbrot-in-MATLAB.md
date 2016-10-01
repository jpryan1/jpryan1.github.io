---
layout: post
title: "Mandelbrot in MATLAB"
---

<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

Along the same vein as my last blog post, I decided to see how few lines of code it would take to come up with some cool Mandelbrot pictures.

The Mandelbrot Set is a set of numbers described by a very simple mathematical statement. The set is famous in mathematics for it's properties of self-similarity, as well as other cool facts that you can find out about on its [Wiki](https://en.wikipedia.org/wiki/Mandelbrot_set) page if you're interested. Here's a visualization of the Mandelbrot set.
<figure>
<a href="/images/mand/mand.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/mand/mand.png" />
</a>
<figcaption style="text-align:center" >Generated in MATLAB.</figcaption>
</figure>
What exactly is going on in the above image? To answer this, we very briefly discuss what <em>is</em> the Mandelbrot Set. 


We begin by picking a complex number \\(c\\); let's say \\(c=-1\\). Now we generate a sequence of numbers based on the following rules:
- The first number is 0
- If the `\(n\)`th number is `\(z\)`, then the `\((n+1)\)`th number is `\(z^2+1\)`. 
In our example, the second number would be `\(0^2+(-1)=-1\)`, then the third number would be `\((-1)^2+(-1)=0\)`, and so on. 







