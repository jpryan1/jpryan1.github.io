---
layout: page
title: Histograms
permalink: /histograms
---

<h4>Description:</h4>
<br>This page contains histograms which detail the contribution of sphere/sphere and wall/sphere collisions to the counter-rotation phenomenon observed in the simulations. The intensity of this phenomenon is estimated by measuring the average total angular momentum of the spheres about their center of mass across a span of 100,000 collisions (about 50 seconds of swirling).  <br>
Before each image, three statistics are listed: the initial angular momentum, the final angular momentum, and the average angular momentum. Since the input configuration of the spheres (initial positions and velocities) is never modified, the initial angular momentum is the same across all experiments. The final angular momentum is the measured angular momentum after the 1000th (and final) collision of the experiment. The average angular momentum across all collisions tends to be negative when the phenomenon occurs. <br>
The title of each histogram includes the sum of all changes to total angular momentum displayed. As a sanity check, notice that the sum of all changes to angular momentum by sphere/sphere collisions and wall/sphere collisions is the difference between initial and final angular momentum. If you want to see a bigger version of an image, just click on it. 
<h3>Default:</h3><br> Sphere/Sphere Friction (mu): 0.2<br> Wall/Sphere Friction (wmu): 0.2<br> Boundary Amplitude (amp): 0.5<br> Number of Spheres (N): 13<br>
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.240073606444323<br>
Average Angular Momentum: -0.3869276931644715<br>
</p>
<a href="defaulthist.png" > <img style="margin:0px auto;display:block;width:600px;" src="defaulthist.png" ></a>


<a href="histograms#mu">Varying Sphere/Sphere Friction </a>
<br>
<a href="histograms#wmu">Varying Wall/Sphere Friction </a>
<br>
<a href="histograms#amp">Varying Boundary Amplitude</a>
<br>
<a href="histograms#N">Varying Number of Spheres </a>

<div id="mu">
<h3>Varying Sphere/Sphere Friction</h3>
</div>
mu = 0<br> Note that sphere/sphere collisions contribute nothing to total angular momentum in this case, since they are elastic.
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -0.32527910128387616<br>
Average Angular Momentum: 0.5800752989128658<br>
</p>
<a href="mu0.png" > <img style="margin:0px auto;display:block;width:600px;" src="mu0.png" ></a>
mu = 0.2
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.240073606444323<br>
Average Angular Momentum: -0.3869276931644715<br>
</p>
<a href="defaulthist.png" > <img style="margin:0px auto;display:block;width:600px;" src="defaulthist.png" ></a>
mu = 0.4
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -2.240967241856384<br>
Average Angular Momentum: -1.250061821494596<br>
</p>
<a href="mu1.png" > <img style="margin:0px auto;display:block;width:600px;" src="mu1.png" ></a>
mu = 0.6
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -0.926767420215738<br>
Average Angular Momentum: -1.6995182951758976<br>
</p>
<a href="mu2.png" > <img style="margin:0px auto;display:block;width:600px;" src="mu2.png" ></a>
mu = 0.8
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 1.9285761127454648<br>
Average Angular Momentum: -1.9364883052638313<br>
</p>
<a href="mu3.png" > <img style="margin:0px auto;display:block;width:600px;" src="mu3.png" ></a>
mu = 1.0
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 1.9609167609707332<br>
Average Angular Momentum: -2.055621564987872<br>
</p>
<a href="mu4.png" > <img style="margin:0px auto;display:block;width:600px;" src="mu4.png" ></a>


<div id="wmu">
<h3>Varying Wall/Sphere Friction</h3>
</div>
wmu = 0
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 8.88546574107103<br>
Average Angular Momentum: 5.426212771537266<br>
</p>
<a href="wmu0.png" > <img style="margin:0px auto;display:block;width:600px;" src="wmu0.png" ></a>
wmu = 0.2
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.240073606444323<br>
Average Angular Momentum: -0.3869276931644715<br>
</p>
<a href="defaulthist.png" > <img style="margin:0px auto;display:block;width:600px;" src="defaulthist.png" ></a>
wmu = 0.4
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
pythonFinal Angular Momentum: -2.3420373344703123<br>
Average Angular Momentum: -0.8002175095029151<br>
</p>
<a href="wmu1.png" > <img style="margin:0px auto;display:block;width:600px;" src="wmu1.png" ></a>
wmu = 0.6
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -1.0290236564433852<br>
Average Angular Momentum: -0.8603895162470843<br>
</p>
<a href="wmu2.png" > <img style="margin:0px auto;display:block;width:600px;" src="wmu2.png" ></a>
wmu = 0.8
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.632233355994766<br>
Average Angular Momentum: -0.8528599368928911<br>
</p>
<a href="wmu3.png" > <img style="margin:0px auto;display:block;width:600px;" src="wmu3.png" ></a>
wmu = 1.0
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 0.8729084338063045<br>
Average Angular Momentum: -1.0379800408213296<br>
</p>
<a href="wmu4.png" > <img style="margin:0px auto;display:block;width:600px;" src="wmu4.png" ></a>



<div id="amp">
<h3>Varying Boundary Amplitude</h3>
</div>
Foo




<div id="N">
<h3>Varying Number of Spheres</h3>
</div>
Foo



