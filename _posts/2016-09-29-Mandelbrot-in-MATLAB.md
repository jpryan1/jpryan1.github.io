---
layout: post
title: "Mandelbrot in MATLAB"
---

<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  skipStartupTypeset: true,
  showProcessingMessages: false,
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  }
});
</script>


Along the same vein as my last blog post, I decided to see how few lines of code it would take to come up with some cool Mandelbrot pictures.

The Mandelbrot Set is a set of numbers described by a very simple mathematical statement. The set is famous in mathematics for it's properties of self-similarity, as well as other cool facts that you can find out about on its [Wiki](https://en.wikipedia.org/wiki/Mandelbrot_set) page if you're interested. Here's a visualization of the Mandelbrot set.
<figure>
<a href="/images/mand/mand.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/mand/mand.png" />
</a>
<figcaption style="text-align:center" >Generated in MATLAB.</figcaption>
</figure>



