---
layout: page
title: Histograms
permalink: /histograms
---


<a href="histograms#mu">Varying Sphere/Sphere Friction </a>
<br>
<a href="histograms#wmu">Varying Wall/Sphere Friction </a>
<br>
<a href="histograms#amp">Varying Boundary Amplitude</a>
<br>
<a href="histograms#N">Varying Number of Spheres </a>
<br><br>

<h3>Default:</h3><br> Sphere/Sphere Friction (mu): 2<br> Wall/Sphere Friction (wmu): 4<br> Boundary Amplitude (amp): 0.5<br> Number of Spheres (N): 13<br>
<h4>What's going on?</h4>
<br>This page contains histograms which detail the contribution of sphere/sphere and wall/sphere collisions to the counter-rotation phenomenon observed in the simulations. The intensity of this phenomenon is estimated by measuring the average total angular momentum of the spheres about their center of mass across a span of 1000 collisions (about 50 seconds of swirling).  <br>
Before each image, three statistics are listed: the initial angular momentum, the final angular momentum, and the average angular momentum. Since the input configuration of the spheres (initial positions and velocities) is never modified, the initial angular momentum is the same across all experiments. The final angular momentum is the measured angular momentum after the 1000th (and final) collision of the experiment. The average angular momentum across all collisions tends to be negative when the phenomenon occurs. <br>
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 0.39029800982234564<br>
Average Angular Momentum: -2.3990410102472923<br></p>
<a href="defaulthist.png" > <img style="width:100px;align:center;" src="defaulthist.png" /></a>


<div id="mu">
<h3>Varying Sphere/Sphere Friction</h3>
</div>
mu = 0
{% include image.html url="mu0.png" caption="" max_width="100px" align="center" %}
mu = 0.5
{% include image.html url="mu1.png" caption="" max_width="100px" align="center" %}
mu = 1
{% include image.html url="mu2.png" caption="" max_width="100px" align="center" %}
mu = 1.5
{% include image.html url="mu3.png" caption="" max_width="100px" align="center" %}
mu = 2 
{% include image.html url="mu4.png" caption="" max_width="100px" align="center" %}
mu = 2.5
{% include image.html url="mu5.png" caption="" max_width="100px" align="center" %}
mu = 3
{% include image.html url="mu6.png" caption="" max_width="100px" align="center" %}
mu = 3.5
{% include image.html url="mu7.png" caption="" max_width="100px" align="center" %}
mu = 4
{% include image.html url="mu8.png" caption="" max_width="100px" align="center" %}
mu = 4.5
{% include image.html url="mu9.png" caption="" max_width="100px" align="center" %}
mu = 5
{% include image.html url="mu10.png" caption="" max_width="100px" align="center" %}



<div id="wmu">
<h3>Varying Wall/Sphere Friction</h3>
</div>
Foo
{% include image.html url="photo.jpg" caption="" max_width="300px" align="center" %}



<div id="amp">
<h3>Varying Boundary Amplitude</h3>
</div>
Foo
{% include image.html url="photo.jpg" caption="" max_width="300px" align="center" %}





<div id="N">
<h3>Varying Number of Spheres</h3>
</div>
Foo
{% include image.html url="photo.jpg" caption="" max_width="300px" align="center" %}



