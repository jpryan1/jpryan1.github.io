//alert("Hello World");
//Initialize the board:
window.onload = function () { 

  var BK = new Object();
  BK.element = document.getElementById("BK");
  var BQ = new Object();
  BQ.element = document.getElementById("BQ");

  
  var BB1 = Object();
  BB1.element = document.getElementById("BB1");
  var BB2 = Object();
  BB2.element = document.getElementById("BB2");
  
  var BP1 = Object();
  BP1.element = document.getElementById("BP1");
  var BP2 = Object();
  BP2.element = document.getElementById("BP2");
  var BP3 = Object();
  BP3.element = document.getElementById("BP3");
  var BP4 = Object();
  BP4.element = document.getElementById("BP4");
  var BP5 = Object();
  BP5.element = document.getElementById("BP5");
  var BP6 = Object();
  BP6.element = document.getElementById("BP6");
  var BP7 = Object();
  BP7.element = document.getElementById("BP7");
  var BP8 = Object();
  BP8.element = document.getElementById("BP8");
  
  var BN1 = Object();
  BN1.element = document.getElementById("BN1");
  var BN2 = Object();
  BN2.element = document.getElementById("BN2");
  
  var BR1 = Object();
  BR1.element = document.getElementById("BR1");
  var BR2 = Object();
  BR2.element = document.getElementById("BR2");
  
  var WK = Object();
  WK.element = document.getElementById("WK");
  var WQ = Object();
  WQ.element = document.getElementById("WQ");
  
  var WB1 = Object();
  WB1.element = document.getElementById("WB1");
  var WB2 = Object();
  WB2.element = document.getElementById("WB2");
  
  var WP1 = Object();
  WP1.element = document.getElementById("WP1");
  var WP2 = Object();
  WP2.element = document.getElementById("WP2");
  var WP3 = Object();
  WP3.element = document.getElementById("WP3");
  var WP4 = Object();
  WP4.element = document.getElementById("WP4");
  var WP5 = Object();
  WP5.element = document.getElementById("WP5");
  var WP6 = Object();
  WP6.element = document.getElementById("WP6");
  var WP7 = Object();
  WP7.element = document.getElementById("WP7");
  var WP8 = Object();
  WP8.element = document.getElementById("WP8");
  
  var WN1 = Object();
  WN1.element = document.getElementById("WN1");
  var WN2 = Object();
  WN2.element = document.getElementById("WN2");
  
  var WR1 = Object();
  WR1.element = document.getElementById("WR1");
  var WR2 = Object();
  WR2.element = document.getElementById("WR2");

  blacks = [BR1, BN1, BB1, BQ, BK, BB2, BN2, BR1, BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8];
  whites = [WR1, WN1, WB1, WQ, WK, WB2, WN2, WR2, WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8];
  squareFun = function(row, col){
                          this.element.style.top = (14+row*61.5)+'px';
                          this.element.style.left = (14+col*61.5)+'px';
                        };
  for(var i=0; i<2; i++){
    for(var j=0; j<8; j++){
        whites[i*8+j].setSquare = squareFun;
        whites[i*8+j].setSquare(i, j);
    }
  }
  for(var i=0; i<2; i++){
    for(var j=0; j<8; j++){
        blacks[i*8+j].setSquare = squareFun;
        blacks[i*8+j].setSquare(7-i, j);
    }
  }
  
  
  
  
  
  
  
  
  
}
