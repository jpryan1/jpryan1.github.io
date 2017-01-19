---
layout: default
---
<link rel="stylesheet" type="text/css" href="/chess/chess.css">
<style>
table.tab td{
	width:100;
	height:30;
}
</style>
<div class="parent">
<img class="board" src="/images/chess/board.png"  />
<img id="BR1" src="/images/chess/BR.png" />
<img id="BR2" src="/images/chess/BR.png" />
<img id="BN1" src="/images/chess/BN.png" />
<img id="BN2" src="/images/chess/BN.png" />
<img id="BB1" src="/images/chess/BB.png" />
<img id="BB2" src="/images/chess/BB.png" />
<img id="BQ" src="/images/chess/BQ.png" />
<img id="BK" src="/images/chess/BK.png" />
<img id="BP1" src="/images/chess/BP.png" />
<img id="BP2" src="/images/chess/BP.png" />
<img id="BP3" src="/images/chess/BP.png" />
<img id="BP4" src="/images/chess/BP.png" />
<img id="BP5" src="/images/chess/BP.png" />
<img id="BP6" src="/images/chess/BP.png" />
<img id="BP7" src="/images/chess/BP.png" />
<img id="BP8" src="/images/chess/BP.png" />
<img id="WR1" src="/images/chess/WR.png" />
<img id="WR2" src="/images/chess/WR.png" />
<img id="WN1" src="/images/chess/WN.png" />
<img id="WN2" src="/images/chess/WN.png" />
<img id="WB1" src="/images/chess/WB.png" />
<img id="WB2" src="/images/chess/WB.png" />
<img id="WQ" src="/images/chess/WQ.png" />
<img id="WK" src="/images/chess/WK.png" />
<img id="WP1" src="/images/chess/WP.png" />
<img id="WP2" src="/images/chess/WP.png" />
<img id="WP3" src="/images/chess/WP.png" />
<img id="WP4" src="/images/chess/WP.png" />
<img id="WP5" src="/images/chess/WP.png" />
<img id="WP6" src="/images/chess/WP.png" />
<img id="WP7" src="/images/chess/WP.png" />
<img id="WP8" src="/images/chess/WP.png" />
<div style="display:inline;position:absolute;top:20;left:530;height:530;overflow:scroll;" >
<table id="table" class="tab">
</table></div>
</div>
<script type="text/javascript" src="/chess/chess.js">
</script>
<div>
<img id="left" onclick="leftClick()" style="position:relative;left:180px" src="/images/chess/left.png" /> 
<img id="right" onclick="rightClick()" style="position:relative;left:220px" src="/images/chess/right.png" />
</div>
<input type="text" id="pgn" value="">
<button onclick="pgnSubmit()">Submit</button>
<button onclick="reset()">Reset</button>
<button onclick="reverse()">Reverse</button>
<p id="status" > </p>
<p style="color:red;" id="debug" ></p>
