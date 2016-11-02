---
layout: post
title: "Random Walks on Spheres"
---

<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

Consider the following...
<img style="margin:0px auto;display:block;width:300px;" src="/images/kak/consider.jpg" />
Suppose I have a square, metal plate. Suppose also that I can control the temperature of each of the walls of the plate (maybe I have clamped flat irons on all four walls, and can vary the temperatures of the flat irons (don't ask me why I have four flat irons)). I set up the plate so that every wall is the same temperature, say 70 degrees Fahrenheit. Then, at a certain time \\(t=0\\), I switch the temperature on the left wall to be 100 degrees Fahrenheit. Here's a question: after a few seconds, what is the temperature in the middle of the plate? How about after an hour? And what about any other point in the plate?

Mathematically, we're looking for a function \\(u(x,t)\\) which describes the temperature at the 2D point \\(x\\) at time \\(t\\). For example, if \\(c\\) is the point in the middle of the plate, then we know that \\(u(c,0)=70\\), by the statement of the problem (the center of the plate was initially 70 degrees). So how do we find this function, \\(u(x,t)\\)?

(I am assuming that the plate's temperature is only affected by the flat irons, and not by the air. The point is that we're working with a 2D problem). 

The answer is that we solve the *heat equation*, using our initial and boundary conditions. This is the heat equation:
\\(\[\frac{\partial u}{\partial t} = \alpha \nabla^2 u\]\\)

What are our conditions? Firstly, \\(u(x,t)=100\\) on the left wall of the plate, and \\(u(x,t)=70\\) on every other wall (we are keeping the temperatures of the walls constant). Also, \\(u(x,0)=70\\) everywhere on the plate *except* the left wall; this is to say that at the instant the wall is switched to 100 degrees, the rest of the plate hasn't changed from its initial temperature of 70 degrees.


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

