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

The answer is that we solve the *heat equation*, using our initial and boundary conditions. This is the heat equation:

\\(\frac{\partial u}{\partial t} = \alpha \nabla^2 u\\)

where \\(\alpha\\) is the thermal diffusivity of the material (heat spreads differently through different materials, hence the existence of Thermos). Let's say our plate has thermal diffusivity 1, and note that this is roughly a 2D problem (assuming the air around the plate doesn't affect its temperature too much). Then the heat equation looks like this:

\\(\frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2}\\)

What are our conditions? Firstly, \\(u(x,t)=100\\) on the left wall of the plate, and \\(u(x,t)=70\\) on every other wall (we are keeping the temperatures of the walls constant). Also, \\(u(x,0)=70\\) everywhere on the plate *except* the left wall; this is to say that at the instant the wall is switched to 100 degrees, the rest of the plate hasn't changed from its initial temperature of 70 degrees.

The point is, we can use the heat equation to solve for \\(u(x,t)\\), and that's really nice. However, that's a lot of math, so let's let the physics undergrads work on that and I'll get to my point. 

Once we switch the left wall to 100 degrees, the heat will spread throughout the plate. After enough time, the plate will reach a steady state again, wherein the temperature of each point stops changing. If it isn't clear that a steady state should be achieved, imagine leaving a hot cup of coffee on a table. After a minute, the coffee has cooled a bit. After 2 hours, its practically room temperature. After a day, it is room temperature. After a week, it is still room temperature - it has achieved a steady state. 

Suppose I want a formula that describes the temperature *at steady state* at a point in the plate. Looking again at the heat equation, we realize that, at steady state, we will have 

\\(\frac{\partial u}{\partial t} = 0\\)

Which is to say that the temperature at any point doesn't change with time. Then we have a new PDE, called *Laplace's Equation*:

\\(\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0\\)


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

