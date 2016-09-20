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
<figure>
<img style="margin:0px auto;display:block;width:600px;" src="/images/tree.png" />
<figcaption style="text-align:center" >It almost looks like electricity!</figcaption></figure>
For the curious, my source code is [here](/documents/tree.txt). If one line deserves a comment, it's this one:
<pre>  var num = Math.round(4*depth*depth-80*depth+500);</pre>
The variable "num" is written as a quadratic in the depth of the recursion. The idea is that the number will transition smoothly from big at the trunk of the tree, to small for the branches, then back to big again for the leaves. The result is the effect of the tree's color changing in a cool way.

This tree began as an attempt to create a [weirwood tree](/images/weirwood.jpg), and is the result of dozens of minor adjustments to various parameters. After deciding that it was finished, I posted the code into one of this website's pages and took a screenshot. I then went back onto the CodePen site to grab my code so that I could post it in my blog (as I have just done). 

However, before I could do this, I first decided to tempt fate and play a bit more with the code. Namely, I made some adjustments to the height of the tree - I decided to see if 16 levels looked much different than 15. "Very well" said my fingers, "but we're tired from typing numbers, so let's type 160 instead of 16." Of course, this gave the page quite a task to accomplish, such that it ignored my attempts to erase the extra 0. "Hmm," I thought, "I'm no mathematician, but 2^160 is probably a great deal bigger than 2^16." In conclusion, the page crashed and I lost my code. 

Having already made my mind up that I would post <em>some</em> code to my website along with the above image, I decided to attempt to rewrite what I'd lost - after all, I'd spent so much time writing and rewriting the code, a good amount of it was memorized. Plus, I happened to have grabbed this screenshot when working on the original code (I made a typo and thought the result looked like a robot attack), 
<figure>
<img style="margin:0px auto;display:block;width:600px;" src="/images/attack.png" /><figcaption style="text-align:center" > I, for one, welcome our new robot overlords.</figcaption></figure>
so I had some code to work with. Still, I struggled to recreate what I originally had, and after maybe 15 minutes of trying, I gave up and decided to stick with code that was "close enough." So, I posted that code on one of these pages so that I could grab a screen shot, and ... 

Hey! Didn't I post my original code on one of these pages? Aha!
<figure>
<img style="margin:0px auto;display:block;width:600px;" src="/images/githist.png" /><figcaption style="text-align:center" >GitHub, you da real MVP.</figcaption></figure>
Old (and better) image and code recovered - good save, GitHub! Lesson (re)learned: any time I ever write anything that resembles code, push to GitHub immediately!
