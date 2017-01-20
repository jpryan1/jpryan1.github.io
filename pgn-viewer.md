---
layout: default
---
<style>
.parent{
   position: relative;
   top: 30px;
   left: 100px;
   height:600px;
}
   
.board{
   position: relative;
   top: 0;
   left: 0;
}

#BR1, #BR2, #BN1, #BN2, #BB1, #BB2, #BQ, #BK, #BP1, #BP2, #BP3, #BP4, #BP5, #BP6, #BP7, #BP8,
#WR1, #WR2, #WN1, #WN2, #WB1, #WB2, #WQ, #WK, #WP1, #WP2, #WP3, #WP4, #WP5, #WP6, #WP7, #WP8{
   position: absolute;
}
table.tab td{
	width:160px;
	height:30px;
}
</style>
<script type="text/javascript" src="/chess/chess.js"></script>
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
	<div style="display:inline;
			position:absolute;
			top:20px;left:530px;
			height:510px;
			overflow:scroll;" >
		<table style="background-color:white;" id="table" class="tab">
		</table>
	</div>
	<br />
	<img id="left" onclick="leftClick()" style="position:relative;left:180px" src="/images/chess/left.png" /> 
	<img id="right" onclick="rightClick()" style="position:relative;left:220px" src="/images/chess/right.png" />
	<div style="position:relative;">
		<input type="text" id="pgn" value="">
		<button onclick="pgnSubmit()">Submit</button>
		<button onclick="reset()">Reset</button>
		<button onclick="reverse()">Reverse</button>
        <button onclick="example()">Example</button>
	</div>
</div>
<br />
<p id="status" > </p>
<p style="color:red;" id="debug" ></p>
