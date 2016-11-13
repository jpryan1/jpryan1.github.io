---
layout: post
title: "playground"
---


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
