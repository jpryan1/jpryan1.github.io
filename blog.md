---
layout: page
title: Blog
permalink: /blog/
---

To be updated soon!
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

<canvas style="background-color:rgb(49, 82, 128)" id="myCanvas" width="800" height="800"></canvas>
<script>function drawSubTree( ctx, depth )
{
  if( depth == 0 ) return;
  
  // var num = Math.round(255-(15-depth)*40);
  // var num = Math.round(255-(144-depth*depth)*2);

  
  // draw a rectangle for the current edge
  // ctx.beginPath();
  // ctx.rect(-20,-60,40,120);
  // ctx.arc(0,-60,20,0,2*Math.PI);
  // ctx.arc(0,60,20,0,2*Math.PI);
  // ctx.fill();
  
  // your transformations here!
  ctx.scale(0.7,0.85);
  ctx.translate(50,-120);
  ctx.rotate(0.6);
  drawSubTree( ctx, depth-1 );
  ctx.rotate(-0.6);
  ctx.translate(-50,120);
  ctx.translate(-50,-120);
  // your transformations here!
  ctx.rotate(-0.8);
  ctx.scale(0.9,0.9);
  drawSubTree( ctx, depth-1 );
  ctx.scale(1/0.9,1/0.9);
  ctx.rotate(0.8);
  ctx.translate(50,120);
  ctx.scale(1/0.7,1/0.85);
  // your transformations here!
    var num = Math.round(4*depth*depth-80*depth+500);
  ctx.fillStyle = "rgba("
    +255+","
  +num+","
  +(num-70)+",1)";
  ctx.beginPath();
  ctx.rect(-20,-60,40,120);
  ctx.arc(0,-60,20,0,2*Math.PI);
  ctx.arc(0,60,20,0,2*Math.PI);
  ctx.fill();
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.translate(400,700);

drawSubTree( context, 15 );</script>
