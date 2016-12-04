---
layout: page
title: Project Proposal
permalink: /proposal/
---
<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

## Scotty3D Visualization of Quantum Wave Functions

The goal of this project is to develop a meaningful and informative visualization of one dimensional wave functions and how they evolve in time in various potentials. 

The implementation of this visualization will largely be informed by our class discussion on solving discretized PDE's with numerical methods, and updating a mesh accordingly. The PDE at play is the 1D time-dependent Schrodinger equation 

\\(i\hbar \frac{\partial }{\partial t} \Psi(x,t) = \left( \frac{-\hbar^2}{2m}\nabla^2 + V(x,t)\right) \Psi(x,t)\\)

and its numerical integration can be performed as outlined in [this paper](http://www.scielo.org.mx/pdf/rmfe/v54n2/v54n2a3.pdf). 

Here is an example of a visualization of a 1D quantum wave function. Notice especially the solid green function that appears at around the 2:00 mark.

<iframe width="560" height="315" src="https://www.youtube.com/embed/imdFhDbWDyM" frameborder="0" allowfullscreen></iframe>

The solid green function is the amplitude of the wave function, or the probability that the particle will be observed at a given \\(x\\). The goal of my implementation will be to display this amplitude with a mesh structure, such as in the following gif. 

<img src="/images/wave.gif" />

(Note: I just found this gif on Google, it was created for some other purpose.) 

To make things simple, the potential \\(V(x,t)\\) will be time-independent and piecewise linear. Examples of fun potentials for me to try include wells, steps, and walls (for example, to illustrate quantum tunneling). The visualization of the potential isn't important, but one idea I have is to display the potential along the x-axis as a semi-transparent surface of revolution. This idea is inspired by the usage in Assignment 4 of a semi-transparent container around the joints to display the threshold for linear blend skinning. 

Here is a to-do list which I could follow for this project:

1) Build a cylinder mesh with small distance between the vertices.

2) Modify the Scotty3D code to update the amplitude of each vertex in the mesh according to the value of the wave function (which has yet to be calculated). 

3) Write code based on the (relatively simple) techniques from the above paper to numerically integrate the Schrodinger equation for a simple potential with simple boundary conditions. Have the code written in step 2) access the solution to this integration. 

4) Check the numerical accuracy and stability of this code against an analytical solution before proceeding. Modify discretizations and perhaps numerical integration sceheme (use higher order RK, for example) as necesessary. 

5) Run a demo of quantum tunneling. 

6) Include the actual value of the wave function in the visualization (including phase information), perhaps by coloring squares of the mesh, or some other method (optional).

7) Write code so that the user can press a button and the wave function will collapse and the particle will be observed (perhaps as an sphere) (optional)

8) Implement any or all of the above for the 2D equation. The phase information can be ditched (or displayed in another fashion, like color), and the wave function represented by a surface in \\(R^3\\): \\(f(x,y) = |\Psi(x,y,t)|\\). (optional). 

Lorem Ipsum Dolor
