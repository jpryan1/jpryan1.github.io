---
layout: page
title: Blog
permalink: /blog/
---

<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator">{{ y }}</li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url | prepend: site.baseurl }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
<img src="/images/rich.jpg" />
<canvas style="background-color:rgb(49, 82, 128)" id="myCanvas" width="800" height="800"></canvas>

<script>function drawSubTree( ctx, depth, img )
 {
   if( depth == 0 ) return;
   
   ctx.scale(0.7,0.85);
   ctx.translate(50,-120);
   ctx.rotate(0.6);
   drawSubTree( ctx, depth-1 ,img);
   ctx.rotate(-0.6);
   ctx.translate(-50,120);
   ctx.translate(-50,-120);
   ctx.rotate(-0.8);
   ctx.scale(0.9,0.9);
   drawSubTree( ctx, depth-1,img );
   ctx.scale(1/0.9,1/0.9);
   ctx.rotate(0.8);
   ctx.translate(50,120);
   ctx.scale(1/0.7,1/0.85);
     var num = Math.round(4*depth*depth-80*depth+500);
   ctx.fillStyle = "rgba("
     +255+","
   +num+","
   +(num-70)+",1)";
   
   ctx.beginPath();
  
   
    ctx.drawImage(img,-20,-60);
  
   ctx.fill();
 }
  var img=document.getElementById("scream");
 var canvas = document.getElementById('myCanvas');
 var context = canvas.getContext('2d');
 
 context.translate(400,700);
 
 drawSubTree( context, 15,img );</script>

