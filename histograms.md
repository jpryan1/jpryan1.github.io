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
amp = 0.25
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -1.1704383012292703<br>
Average Angular Momentum: -0.8843229448672488<br>
</p>
<a href="amp0.png" > <img style="margin:0px auto;display:block;width:600px;" src="amp0.png" ></a>
amp = 0.5
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.240073606444323<br>
Average Angular Momentum: -0.3869276931644715<br>
</p>
<a href="defaulthist.png" > <img style="margin:0px auto;display:block;width:600px;" src="defaulthist.png" ></a>
amp = 0.75
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 8.037128656496044<br>
Average Angular Momentum: 0.8235660913250102<br>
</p>
<a href="amp1.png" > <img style="margin:0px auto;display:block;width:600px;" src="amp1.png" ></a>
amp = 1
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 4.17893697511071<br>
Average Angular Momentum: 1.3765178220705807<br>
</p>
<a href="amp2.png" > <img style="margin:0px auto;display:block;width:600px;" src="amp2.png" ></a>
amp = 1.25
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: 1.2163548921263176<br>
Average Angular Momentum: 2.3676806608775807<br>
</p>
<a href="amp3.png" > <img style="margin:0px auto;display:block;width:600px;" src="amp3.png" ></a>
amp = 1.5
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.415695771561229<br>
Average Angular Momentum: 2.6015201983173624<br>
</p>
<a href="amp4.png" > <img style="margin:0px auto;display:block;width:600px;" src="amp4.png" ></a>




<div id="N">
<h3>Varying Number of Spheres</h3>
</div>
N = 8
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 0.3150000000000004<br>
Final Angular Momentum: -0.015327855507005772<br>
Average Angular Momentum: 0.9003599431103011<br>
</p>
<a href="n0.png" > <img style="margin:0px auto;display:block;width:600px;" src="n0.png" ></a>
N = 9
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 0.05833333333333279<br>
Final Angular Momentum: 4.499391733274962<br>
Average Angular Momentum: 0.7493111651378899<br>
</p>
<a href="n1.png" > <img style="margin:0px auto;display:block;width:600px;" src="n1.png" ></a>
N = 10
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 6.761999999999998<br>
Final Angular Momentum: 5.078967024418938<br>
Average Angular Momentum: 0.6538657767051941<br>
</p>
<a href="n2.png" > <img style="margin:0px auto;display:block;width:600px;" src="n2.png" ></a>
N = 11
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 6.200727272727271<br>
Final Angular Momentum: 2.0826243891649727<br>
Average Angular Momentum: 0.4622010470094366<br>
</p>
<a href="n3.png" > <img style="margin:0px auto;display:block;width:600px;" src="n3.png" ></a>
N = 12
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8164999999999991<br>
Final Angular Momentum: 1.4418048460199062<br>
Average Angular Momentum: -0.2275961624252202<br>
</p>
<a href="n4.png" > <img style="margin:0px auto;display:block;width:600px;" src="n4.png" ></a>
N = 13
<p style="text-align:center;font-size:80%;" >
Initial Angular Momentum: 1.8165000000000002<br>
Final Angular Momentum: -4.240073606444323<br>
Average Angular Momentum: -0.3869276931644715<br>
</p>
<a href="defaulthist.png" > <img style="margin:0px auto;display:block;width:600px;" src="defaulthist.png" ></a>



