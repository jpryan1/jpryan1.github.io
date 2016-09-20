---
layout: post
title: "Fractal Trees"
---

Earlier this week I was working on an assignment for my Computer Graphics course here at CMU. The task was to write pseudocode that would generate a fractal tree, and we were provided with the following structure:

<pre> 
drawSubTree( depth )
{
   if( depth == 0 ) return;
   
   // draw some geometry for the current edge
   
   // apply some transformations

   drawSubTree( depth-1 );

   // apply some transformations

   drawSubTree( depth-1 );

   // apply some transformations
 }
 </pre>
Indeed, this "assignment" was moreso a reason for us to submit a writeup in class and verify our attendance. In any event, there was an optional task that involved actually implementing this algorithm in JavaScript to draw a tree on a webpage via the "canvas" HTML element. How fun!

To make the task even easier, the instructors provided a "CodePen" page. What is CodePen? I asked myself this when first perusing the assignment, and have since learned that it is a super cool website by which users may write and edit HTML, CSS, and JavaScript code, and see the results in real-time. I wouldn't call the concept revolutionary, but it's very well implemented - check it out [here](https://codepen.io).

After struggling with the order of transformations for longer than I'd like to admit, I wrote some working code, and came up with the following Fractal Tree. How cool!
<img style="margin:0px auto;display:block;width:600px;" src="/images/tree.png" />

For the curious, my source code is [here](/documents/tree.txt).
