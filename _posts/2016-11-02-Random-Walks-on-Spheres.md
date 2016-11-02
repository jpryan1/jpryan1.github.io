---
layout: post
title: "Random Walks on Spheres"
---

<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

Consider the following...
<img style="margin:0px auto;display:block;width:300px;" src="/images/kak/consider.jpg" />
Suppose I have a square, metal plate. Initially, every spot on the plate is the same temperature, say 70 degrees Fahrenheit. Now suppose I heat the left wall to 100 degrees Fahrenheit (for example, by clamping a flat iron on it). After a few seconds, what is the temperature in the middle of the plate? How about after an hour? And what about any other point in the plate?

Mathematically, we're looking for a function \\(u(x,t)\\) which describes the temperature at the 2D point \\(x\\) at time \\(t\\). For example, if \\(c\\) is the point in the middle of the plate, then we know that \\(u(c,0)=70\\), by the statement of the problem (the center of the plate was initially 70 degrees). So how do we find this function?

<figure>
<a href="/images/kak/square1.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/kak/square1.png" />
</a>
<figcaption style="text-align:center" >\(f(x)=1\) on the left wall,  \(f(x)=0\) on the other walls.</figcaption>
</figure>

<figure>
<a href="/images/kak/square2.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/kak/square2.png" />
</a>
<figcaption style="text-align:center" >\(f(x)=1\) on the left and right walls,  \(f(x)=0\) on the other walls.</figcaption>
</figure>

<figure>
<a href="/images/kak/square3.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/kak/square3.png" />
</a>
<figcaption style="text-align:center" >\(f(x)=1\) on the left and top walls,  \(f(x)=0\) on the other walls.</figcaption>
</figure>

<figure>
<a href="/images/kak/circle1.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/kak/circle1.png" />
</a>
<figcaption style="text-align:center" >\(f(x)=1\) on the boundary in the second and fourth quadrants,  \(f(x)=0\) on the rest of the boundary.</figcaption>
</figure>

<figure>
<a href="/images/kak/letter.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/kak/letter.png" />
</a>
<figcaption style="text-align:center" >\(f(x)=1\) on the boundary where \(x>y\),  \(f(x)=0\) on the rest of the boundary.</figcaption>
</figure>

<figure>
<a href="/images/kak/v.png">
<img style="margin:0px auto;display:block;width:600px;" src="/images/kak/v.png" />
</a>
<figcaption style="text-align:center" >\(f(x)=0\) on the boundary where \(x\) is between 250 and 300,  \(f(x)=1\) on the rest of the boundary.</figcaption>
</figure>

