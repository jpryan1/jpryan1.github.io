---
layout: post
title: "Heat, Laplace's Equation and Random Walks on Spheres (Part 2 - the algorithm)"
category: Science/Programming
---

<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

To recap the conclusion of the last post, we are going to find the steady state temperature of a 2D plate with a certain boundary temperature. This is equivalent to finding \\(u(x,y)\\) that satisfies 

\\(\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0\\)

and has the boundary condition \\(u(x,y)=f(x,y)\\) for \\((x,y)\\) on the boundary (where \\(f(x,y)\\) is some function that describes the temperature on the boundary). 

We found that the solution, if it exists, can be written as 

\\(u(x,y) = E^{(x,y)}[f(W_\tau)]\\)

which, in English, is the expected value of the temperature of the boundary at the hitting spot of a Wiener process that started at \\((x,y)\\). 


<!--
 <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,400italic,700italic|Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet">
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
<link rel="stylesheet" href="/chess/pgnviewer/chessboardjs/css/chessboard-0.3.0.min.css" />
<link rel="stylesheet" href="/chess/pgnviewer/stylesheets/style.css" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<div class="container">
      <div class="page-header">
        <h1>chessboardjs + chess.js pgn viewer</h1>
      </div>
      <div class="row">
        <div class="col-xs-4">
          <div id="board" style="width: 100%;"></div>
          <div id="board-buttons">
            <button type="button" class="btn btn-default" id="btnStart"><i class="fa fa-fast-backward fa-lg"></i></button>
            <button type="button" class="btn btn-default" id="btnPrevious"><i class="fa fa-step-backward fa-lg"></i></button>
            <button type="button" class="btn btn-default" id="btnNext"><i class="fa fa-step-forward fa-lg"></i></button>
            <button type="button" class="btn btn-default" id="btnEnd"><i class="fa fa-fast-forward fa-lg"></i></button>
          </div>
        </div>
        <div class="col-xs-8">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="gameSelect" class="col-xs-4 control-label">Select game:</label>
              <div class="col-xs-8">
                <select id="gameSelect" class="form-control input-sm" onchange="loadGame(this.value);return false;"></select>
              </div>
            </div>
          </form>
          <div id="game-data">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h4>Keyboard Shortcuts</h4>
          <dl class="dl-horizontal">
            <dt>Next move:</dt><dd>Right arrow key</dd>
            <dt>Previous move:</dt><dd>Left arrow key</dd>
            <dt>End of game:</dt><dd>Ctrl + right arrow key</dd>
            <dt>Start of game:</dt><dd>Ctrl + left arrow key</dd>
            <dt>Next game:</dt><dd>Up arrow key</dd>
            <dt>Previous game:</dt><dd>Down arrow key</dd>
            <dt>First game:</dt><dd>Ctrl + up  arrow key</dd>
            <dt>Last game:</dt><dd>Ctrl + down arrow key</dd>
          </dl>
        </div>
      </div>
    </div>
<script src="/chess/pgnviewer/chessboardjs/js/chessboard-0.3.0.min.js"></script>
<script src="/chess/pgnviewer/chessjs/chess.js"></script>
<script src="/chess/pgnviewerjs/pgnviewer.js"></script>
-->
