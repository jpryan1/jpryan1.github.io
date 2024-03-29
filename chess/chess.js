


var blacks, whites, move_IDX, last_move, occupied, isReversed;

window.onload = function () {
    hideButtons();
    initializeBoard();
}

//INITIALIZATION - SETTING UP PIECES
//TODO: Nothing
function initializeBoard(){
    move_IDX = 0;
    isReversed = false;
    
    occupied = [[1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [2,2,2,2,2,2,2,2],
                [2,2,2,2,2,2,2,2]
                ];
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
    
    blacks = [BR1, BN1, BB1, BQ, BK, BB2, BN2, BR2, BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8];
    whites = [WR1, WN1, WB1, WQ, WK, WB2, WN2, WR2, WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8];
    squareFun = function(row, col){ //bottom left is 1,1. 0,0 is off the board.
        if(row === 0 || col === 0){
            this.element.style.display = 'none';
        }else{
            this.element.style.top = (15+(8-row)*61.5)+'px';
            this.element.style.left = (15+(col-1)*61.5)+'px';
        }
    };
    
    for(var i=0; i<2; i++){
        for(var j=0; j<8; j++){
            whites[i*8+j].setSquare = squareFun;
            whites[i*8+j].setSquare(i+1, j+1);
            whites[i*8+j].pos = [[i+1, j+1]];
        }
    }
    for(var i=0; i<2; i++){
        for(var j=0; j<8; j++){
            blacks[i*8+j].setSquare = squareFun;
            blacks[i*8+j].setSquare(8-i, j+1);
            blacks[i*8+j].pos = [[8-i, j+1]];
        }
    }
}

function reset(){
    document.getElementById("table").innerHTML = "";
    move_IDX=0;
    if(isReversed){
        reverse();
    }
    resetBoard();
    hideButtons();
    document.getElementById("pgn").value = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("debug").innerHTML = "";
    occupied = [[1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [2,2,2,2,2,2,2,2],
                [2,2,2,2,2,2,2,2]
                ];
}
function example(){
	document.getElementById("pgn").value = "[Event \"Third Rosenwald Trophy\"]\
	[Site \"New York, NY USA\"]\
	[Date \"1956.10.17\"]\
	[EventDate \"1956.10.07\"]\
	[Round \"8\"]\
	[Result \"0-1\"]\
	[White \"Donald Byrne\"]\
	[Black \"Robert James Fischer\"]\
	[ECO \"D92\"]\
	[WhiteElo \"?\"]\
	[BlackElo \"?\"]\
	[PlyCount \"82\"]\
	\
	1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4\
	7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 {11. Be2\
		followed by 12 O-O would have been more prudent. The bishop\
		move played allows a sudden crescendo of tactical points to be\
		uncovered by Fischer. -- Wade} Na4 {!} 12. Qa3 {On 12. Nxa4\
			Nxe4 and White faces considerable difficulties.} Nxc3 {At\
				first glance, one might think that this move only helps White\
				create a stronger pawn center; however, Fischer's plan is\
				quite the opposite. By eliminating the Knight on c3, it\
				becomes possible to sacrifice the exchange via Nxe4 and smash\
				White's center, while the King remains trapped in the center.}\
				13. bxc3 Nxe4 {The natural continuation of Black's plan.}\
					14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 {!! If\
						this is the game of the century, then 17...Be6!! must be the\
						counter of the century. Fischer offers his queen in exchange\
						for a fierce attack with his minor pieces. Declining this\
							offer is not so easy: 18. Bxe6 leads to a 'Philidor Mate'\
							(smothered mate) with ...Qb5+ 19. Kg1 Ne2+ 20. Kf1 Ng3+\
							21. Kg1 Qf1+ 22. Rxf1 Ne2#. Other ways to decline the queen\
							also run into trouble: e.g., 18. Qxc3 Qxc5} 18. Bxb6 Bxc4+\
					19. Kg1 Ne2+ 20. Kf1 Nxd4+ {This tactical scenario, where a\
						king is repeatedly revealed to checks, is sometimes called a\
						\"windmill.\"} 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4\
					Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1\
					29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 {Every piece\
						and pawn of the black camp is defended. The white queen has\
						nothing to do.} 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1\
					Ng3+ {Now Byrne is hopelessly entangled in Fischer's mating\
						net.} 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+\
					41. Kc1 Rc2# 0-1\
					";
					pgnSubmit();
}

// PGN INPUT
//TODO: Nothing really
function resetBoard(){
    for(var i=0; i<2; i++){
        for(var j=0; j<8; j++){
            whites[i*8+j].setSquare(i+1, j+1);
            whites[i*8+j].pos = [[i+1, j+1]];
            whites[i*8+j].element.style.display = "inline";
        }
    }
    for(var i=0; i<2; i++){
        for(var j=0; j<8; j++){
            blacks[i*8+j].setSquare(8-i, j+1);
            blacks[i*8+j].pos = [[8-i, j+1]];
            blacks[i*8+j].element.style.display = "inline";
            
        }
    }
    
}

function pgnSubmit(){
    
    resetBoard();
    var pgn = document.getElementById("pgn").value;
    var arr = pgn.split("]");
    if(arr.length<1){
        document.getElementById("status").innerHTML = "Invalid PGN!";
        hideButtons();
        return;
    }
    var moves = arr[arr.length-1];
    moves = moves.replace(/\{[^}]*\}/g ,"");
    if(!isValid(moves)){
        document.getElementById("status").innerHTML = "Invalid PGN!";
        hideButtons();
        return;
    }
    moves = moves.split(".");
    
    //I'm new to this, so maybe a lame way to do it
    moves = moves.slice(1, moves.length); //remove first number
    
    var move;
    for(var i=0; i<moves.length-1; i++){
        move = moves[i];
        moves[i] =
        move.slice(0,move.length-1).trim().split(/\s+/);
        
    }
    move = moves[moves.length-1]; //DON'T SLICE THE LAST ONE! NO NUMBER TO SLICE OFF
    moves[moves.length-1] = move.trim().split(/\s+/);
    report(moves);
    if(parsePGN(moves)){
        document.getElementById("status").innerHTML = "Parse Successful!";
        showButtons();
    }else{
        document.getElementById("status").innerHTML = "Invalid PGN!";
        hideButtons();
    }
}

function isValid(input){
    if(typeof input !== 'string'){
        return false;
    }
    input = input.replace(/[|]|\.|[0-9]|[a-z]|[A-Z]|#|\+|\-/g,"");
    input = input.trim();
    if(input.length>0){
        return false;
    }
    return true;
}
function showButtons(){
    document.getElementById("left").style.display="inline";
    document.getElementById("right").style.display="inline";
}
function hideButtons(){
    document.getElementById("left").style.display="none";
    document.getElementById("right").style.display="none";
}
function reverse(){
    var fun;
    if(isReversed){
        isReversed = false;
        fun = function(row, col){ //bottom left is 1,1. 0,0 is off the board.
            if(row === 0 || col === 0){
                this.element.style.display = 'none';
            }else{
                this.element.style.top = (15+(8-row)*61.5)+'px';
                this.element.style.left = (15+(col-1)*61.5)+'px';
            }
        };
        
    }else{
        isReversed = true;
        fun = function(row, col){ //bottom left is 1,1. 0,0 is off the board.
            if(row === 0 || col === 0){
                this.element.style.display = 'none';
            }else{
                this.element.style.top = (15+(row-1)*61.5)+'px';
                this.element.style.left = (15+(8-col)*61.5)+'px';
            }
        };
    }
    var position;
    for(var i=0;i<16;i++){
        whites[i].setSquare = fun;
        blacks[i].setSquare = fun;
        position = whites[i].pos[move_IDX];
        whites[i].setSquare(position[0], position[1]);
        position = blacks[i].pos[move_IDX];
        blacks[i].setSquare(position[0], position[1]);
    }
}

// PARSING PGN INTO TIMELINE OF POSITIONS
//TODO:
//      2) Detect and settle ambiguity

function parsePGN(moves){
    //each element of moves is an array of 2 strings, each of which is a move.
    last_move = moves.length*2; //don't worry about this until later.
    var move;
    updatePotentialMoves();
    for(var i = 0; i< moves.length-1; i++){
        
        //the update functions trust the move_IDX to signify current positions
        move = moves[i];
        tableAdd(move[0], move[1], move_IDX);
        
        if(!makeMove( move[0].replace(/\+|#/,""), 1)){
            return false;
        }
        move_IDX++;
        updatePotentialMoves();
        if(!makeMove( move[1].replace(/\+|#/,""), 2)){
            return false;
        }
        move_IDX++;
        updatePotentialMoves();
    }
    move = moves[moves.length-1];
    
    if(!makeMove( move[0].replace(/\+|#/,""), 1)){
        return false;
    }
    move_IDX++;
    
    
    if(move.length>1){
        var firstchar = move[1].charCodeAt(0);
       if( !isCastle( move[1].replace(/\+|#/,"") ) && (firstchar<65||firstchar>122) ){
            //            //its just the score
            report("Score detected");
            last_move--;
            tableAdd(move[0], " ", move_IDX-1);
            
        }else{
            updatePotentialMoves();
            if(!makeMove( move[1].replace(/\+|#/,""), 2)){
                return false;
            }
            tableAdd(move[0], move[1], move_IDX-1)
        }
    }else{//actually, this might never happen if score is always included. Whatever.
        last_move--;
        tableAdd(move[0], " ", move_IDX-1);
        
    }
    //document.getElementById("debug").innerHTML = debugInfo();
    move_IDX = 0;
    return true;
    
}
function makeMove(move, color){ //needs to return false for impossible move
    //assumption: move_IDX refers to locations of pieces
    //before move. Potentials are set up. New positions to be added
    //at index move_IDX + 1
    
    for(var i=0; i<16; i++){
        whites[i].pos[move_IDX+1] = whites[i].pos[move_IDX];
        blacks[i].pos[move_IDX+1] = blacks[i].pos[move_IDX];
    }
    
    if(isCastle(move)){
        processCastle(move, color);
        return true;
    }
    var newPos = whereTo(move); //GOOD
    
    var isEnPassant = false;
    var moving_piece;
    
    if(move.indexOf('x')>-1){ //THIS IS WRONG ON EN PASSANT
        var taken_color;
        if(color==1){
            taken_color=blacks;
        }else{
            taken_color=whites;
        }
        var remove = pieceOnSquare(newPos, taken_color); //FIX THIS FOR EN PASSANT
        if(remove==0){//enpassant
            isEnPassant = true;
            var sourceCol = move.charCodeAt(0) - 96;
            var takenPawnPos, sourceRow;
            //require that previous move was a pawn moving two spaces?
            if(color==1){
                sourceRow = newPos[0]-1;
                takenPawnPos = [newPos[0]-1, newPos[1]];
                occupied[newPos[0]-2][newPos[1]-1] = 0;
                moving_piece = pieceOnSquare([sourceRow,sourceCol], whites);
            }else{
                sourceRow = newPos[0]+1;
                takenPawnPos = [newPos[0]+1, newPos[1]];
                occupied[newPos[0]][newPos[1]-1] = 0;
                moving_piece = pieceOnSquare([sourceRow,sourceCol], blacks);
            }
            remove = pieceOnSquare(takenPawnPos, taken_color);
            
        }
        remove.pos[move_IDX+1] = [0,0]; //
    }
    if(!isEnPassant){
        moving_piece = whichPiece(move, newPos, color); //NEEDS WORK
    }
    var oldPos = moving_piece.pos[move_IDX]; //GOOD
    moving_piece.pos[move_IDX+1] = newPos;
    occupied[newPos[0]-1][newPos[1]-1] = color;
    occupied[oldPos[0]-1][oldPos[1]-1] = 0;
    return true;
    
}
function whichPiece(move, newPos, color){
    //based on first letter and location of move
    var code = move.charCodeAt(0);
    
    var movers=[0];
    if(code>96){//aka lower case, aka pawn
        movers = whichOfThem(newPos, color, [8,9,10,11,12,13,14,15]);
    }else{
        switch(code){
            case 66: //B
                movers = whichOfThem(newPos, color, [2, 5]);
                break;
            case 75: //K
                movers = whichOfThem(newPos, color, [4]);
                break;
            case 78: //N
                movers = whichOfThem(newPos, color, [1, 6]);
                break;
            case 81: //Q
                movers = whichOfThem(newPos, color, [3]);
                break;
            case 82: //R
                movers = whichOfThem(newPos, color, [0, 7]);
                break;
            default:
                report("WHICH PIECE?");
                break;
        }
    }
    if(movers.length>1){
        
        return settleAmbiguity(move, newPos, color, movers);
    }
    return movers[0];
}
function whichOfThem(pos, color, nums){
    
    var pieces;
    if(color == 1){
        pieces = whites;
    }else{
        pieces = blacks;
    }
    var num, piece, potpos;
    var correctPieces = [];
    
    for(var j=0; j<nums.length; j++){
        num = nums[j];
        
        piece = pieces[num];
        for(var i = 0; i < piece.potential.length; i++){
            potpos = piece.potential[i];
            
            if(potpos[0]==pos[0] && potpos[1]==pos[1]){
                correctPieces.push(piece);
            }
        }
    }
    return correctPieces;
    
}
function whereTo(move){
    var len = move.length;
    var pos1 = move.charCodeAt(move.length-2)-96;
    var pos0 = move.charCodeAt(move.length-1)-48;
    return [pos0, pos1];
}
function pieceOnSquare(pos, pieces){
    
    for(var i =0; i<pieces.length; i++){
        if(pos[0]==pieces[i].pos[move_IDX][0] && pos[1]==pieces[i].pos[move_IDX][1]){
            return pieces[i];
        }
    }
    return 0;
}

function isCastle(move){
    return move=="O-O"||move=="O-O-O";
}
function processCastle(move, color){
    
    if(move=="O-O"){
        if(color==1){
            whites[4].pos[move_IDX+1] = [1,7];
            whites[7].pos[move_IDX+1] = [1,6];
            occupied[0][4] = 0;
            occupied[0][5] = 1;
            occupied[0][6] = 1;
            occupied[0][7] = 0;
        }else{
            blacks[4].pos[move_IDX+1] = [8,7];
            blacks[7].pos[move_IDX+1] = [8,6];
            occupied[7][4] = 0;
            occupied[7][5] = 2;
            occupied[7][6] = 2;
            occupied[7][7] = 0;
            
        }
    }else{
        if(color==1){
            whites[4].pos[move_IDX+1] = [1,3];
            whites[0].pos[move_IDX+1] = [1,4];
            occupied[0][0] = 0;
            occupied[0][1] = 0;
            occupied[0][2] = 1;
            occupied[0][3] = 1;
            occupied[0][4] = 0;
            
        }else{
            blacks[4].pos[move_IDX+1] = [8,3];
            blacks[0].pos[move_IDX+1] = [8,4];
            occupied[7][0] = 0;
            occupied[7][1] = 0;
            occupied[7][2] = 2;
            occupied[7][3] = 2;
            occupied[7][4] = 0;
            
        }
    }
}


function settleAmbiguity( move, newPos, color, movers){
    
    //Two cases: 1) There is another character present to indicate
    //the moving piece's original row/col
    //or 2) One of the moves would put the color into check
    
    //Case 1: Find first non-uppercase character in move. Is it second to last?
    var helper,ascii;
    var isCase2 = false;;
    for(var i=0; i<move.length; i++){
        ascii = move.charCodeAt(i);
        if(ascii<65 || ascii > 90){
            helper = move.charAt(i);
            break;
        }
        if(i==move.length-3){
            isCase2 = true;
        }
    }
    report("iscase2 is "+isCase2);
    
    if(!isCase2){
        //helper must be helpful!
        if(helper.charCodeAt(0)>96){ //meaning is lower case char
            var sourceCol = helper.charCodeAt(0)-96;
            report("Ambiguity from col "+sourceCol);
            for(var i=0; i<movers.length; i++){
                if(movers[i].pos[move_IDX][1]==sourceCol){
                    return movers[i];
                }
            }
        }else{
            var sourceRow = helper.charCodeAt(0)-48;
            report("Ambiguity from row "+sourceRow);
            for(var i=0; i<movers.length; i++){
                if(movers[i].pos[move_IDX][0]==sourceRow){
                    return movers[i];
                }
            }
            
        }
        
    }
    else{
        //case2
        //Right, a bit tricky here.
        var potential_mover, other_color, winner, potpos, king_pos, temp;
        //for each potential mover
        for(var i=0 ; i<movers.length; i++){
            winner = true;
            potential_mover = movers[i];
            report("Testing piece on position " +potential_mover.pos[move_IDX]);
            
            //make the move
            var oldPos = potential_mover.pos[move_IDX]; //GOOD
            potential_mover.pos[move_IDX+1] = newPos;
            temp = occupied[newPos[0]-1][newPos[1]-1];
            occupied[newPos[0]-1][newPos[1]-1] = color;
            occupied[oldPos[0]-1][oldPos[1]-1] = 0;
        
            //update potentials
            move_IDX++;
            updatePotentialMoves();
            move_IDX--;
            //for each piece of OTHER color
            var others;
            if(color == 1){
                king_pos = whites[4].pos[move_IDX];
                others = blacks;
            }else{
                others = whites;
                king_pos = blacks[4].pos[move_IDX];
            }
        
            //for each pos in potential
            //same pos as king?
            //else, undo damage, return piece
         outerloop:
            for(var j=0; j<others.length;j++){
                other_color = others[j];
                for(var k = 0; k<other_color.potential.length; k++){
                    potpos = other_color.potential[k];
                    if(potpos[0] == king_pos[0] && potpos[1] == king_pos[1]){ // moves into check!
                        winner = false;
                        report("No good! Moving that piece puts in check from piece at "+other_color.pos[move_IDX]);
                        break outerloop;
                    }
                }
            }
            if(winner){
                //leave move made
                return potential_mover;
            }
            
            potential_mover.pos[move_IDX+1] = oldPos;
            occupied[newPos[0]-1][newPos[1]-1] = temp;
            occupied[oldPos[0]-1][oldPos[1]-1] = color;
            
            
            //unmake the move
            //update potentials
            updatePotentialMoves();
        }
        report("AMBIGUITY NOT SOLVED PROPERLY!");
        return movers[0];
    }
    
    
    
    
}

// DISPLAYING MOVES
// TODO: NOTHING
function leftClick(){
    if(move_IDX > 0){
        move_IDX--;
        updatePieces();
        
        if(move_IDX>0){
            document.getElementById(""+(move_IDX-1)).style.background = "#C0C0C0";
        }
        document.getElementById(""+(move_IDX)).style.background = "white";
    }
}
function rightClick(){
    if(move_IDX < last_move){
        move_IDX++;
        updatePieces();
        
        if(move_IDX>1){
            document.getElementById(""+(move_IDX-2)).style.background = "white";
        }
        document.getElementById(""+(move_IDX-1)).style.background = "#C0C0C0";
    }
}


function updatePieces(){
    var pos, piece;
    for(var i=0; i<16;i++){
        
        piece = whites[i];
        if(move_IDX==piece.pos.length){ //TODO THIS MAY BE OBSOLETE METHOD
            piece.setSquare(0,0);
        }else if(move_IDX<piece.pos.length){
            piece.element.style.display = "inline";
            pos = piece.pos[move_IDX];
            piece.setSquare(pos[0], pos[1]);
        }
        piece = blacks[i];
        if(move_IDX==piece.pos.length){
            piece.setSquare(0,0);
        }else if(move_IDX<piece.pos.length){
            piece.element.style.display = "inline";
            pos = piece.pos[move_IDX];
            piece.setSquare(pos[0], pos[1]);
        }
    }
}

// UPDATING POTENTIALS
function updatePotentialMoves(){
    
    updateRooksPotentialMoves();
    updateKnightsPotentialMoves();
    updateBishopsPotentialMoves();
    updateQueensPotentialMoves();
    updateKingsPotentialMoves();
    updatePawnsPotentialMoves();
    
}
function updateRooksPotentialMoves(){
    updateRookPotentialMoves(whites[0], 1);
    updateRookPotentialMoves(whites[7], 1);
    updateRookPotentialMoves(blacks[0], 2);
    updateRookPotentialMoves(blacks[7], 2);
}
function updateRookPotentialMoves(rook, color, queen=false){
    var captures;
    if(color==1){
        captures = 2;
    }else{
        captures = 1;
    }
    if(!queen){
        rook.potential = [];
    }
    var pos = rook.pos[move_IDX];
    if(pos[0]==0&&pos[1]==0){ //meaning the pawn has been taken.
        return;
    }
    var row = pos[0], col = pos[1];
    row++;
    while( row < 9 && occupied[row-1][col-1]!=color){
        rook.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }row++;
    }
    row = pos[0];
    row--;
    while( row > 0 && occupied[row-1][col-1]!=color){
        rook.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }row--;
    }
    row = pos[0]
    col++;
    while( col < 9 && occupied[row-1][col-1]!=color){
        rook.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }col++;
    }
    col = pos[1];
    col--;
    while( col > 0 && occupied[row-1][col-1]!=color){
        rook.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }col--;
    }
    
    
}
function updateKnightsPotentialMoves(){
    updateKnightPotentialMoves(whites[1], 1);
    updateKnightPotentialMoves(whites[6], 1);
    updateKnightPotentialMoves(blacks[1], 2);
    updateKnightPotentialMoves(blacks[6], 2);
    
}
function updateKnightPotentialMoves(knight, color){
    knight.potential = [];
    //a brief reflection: I should probably get better at OOP w/ Javascript. Oh well.
    var pos = knight.pos[move_IDX];
    if(pos[0]==0&&pos[1]==0){ //meaning the pawn has been taken.
        return;
    }
    var move, newpos;
    var knightmoves = [-2, -1, 1, 2];
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            
            if(Math.abs(knightmoves[i])==Math.abs(knightmoves[j])){
                //a little bit of trickery
                continue;
            }
            move = [knightmoves[i], knightmoves[j]];
            
            newpos = [pos[0]+move[0], pos[1]+move[1]];
            if(newpos[0]>0&&newpos[0]<9&&newpos[1]>0&&newpos[1]<9){
                if(occupied[newpos[0]-1][newpos[1]-1]!=color){
                    knight.potential.push(newpos);
                }
            }
        }
    }
    
    
}
function updateBishopsPotentialMoves(){
    updateBishopPotentialMoves(whites[2], 1);
    updateBishopPotentialMoves(whites[5], 1);
    updateBishopPotentialMoves(blacks[2], 2);
    updateBishopPotentialMoves(blacks[5], 2);
}
function updateBishopPotentialMoves(bishop, color, queen=false){
    var captures;
    if(color==1){
        captures = 2;
    }else{
        captures = 1;
    }
    if(!queen){
        bishop.potential = [];
    }
    var pos = bishop.pos[move_IDX];
    if(pos[0]==0&&pos[1]==0){ //meaning the pawn has been taken.
        return;
    }
    var row = pos[0], col = pos[1];
    row++;
    col++;
    while( row < 9 && col < 9 && occupied[row-1][col-1]!=color){
        bishop.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }row++;
        col++;
    }
    row = pos[0];
    col = pos[1];
    row--;
    col++;
    while( row > 0 && col<9 && occupied[row-1][col-1]!=color){
        bishop.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }
        row--;
        col++;
    }
    row = pos[0];
    col = pos[1];
    row++;
    col--;
    while( row < 9 && col>0 && occupied[row-1][col-1]!=color){
        bishop.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }col--;
        row++;
    }
    row = pos[0];
    col = pos[1];
    row--;
    col--;
    while( row > 0 && col > 0 && occupied[row-1][col-1]!=color){
        bishop.potential.push([row,col]);
        if(occupied[row-1][col-1]==captures){
            break;
        }col--;
        row--;
    }
    
    
}
function updateQueensPotentialMoves(){
    whites[3].potential = [];
    blacks[3].potential = [];
    updateRookPotentialMoves(whites[3], 1, true);
    updateBishopPotentialMoves(whites[3], 1, true);
    updateRookPotentialMoves(blacks[3], 2, true);
    updateBishopPotentialMoves(blacks[3], 2, true);
}
function updateKingsPotentialMoves(){
    updateKingPotentialMoves(whites[4], 1);
    updateKingPotentialMoves(blacks[4], 1);
}
function updateKingPotentialMoves(king, color){
    king.potential = [];
    var row,col;
    var pos = king.pos[move_IDX];
    for(var i=-1; i<2; i++){
        for(var j=-1; j<2; j++){
            if(i==0&&j==0) continue;
            row = pos[0]+i;
            col = pos[1]+j;
            if(row>0&&row<9&&col>0&&col<9&&occupied[row-1][col-1]!=color){
                king.potential.push([row,col]);
            }
        }
    }
}
function updatePawnsPotentialMoves(){
    for(var i=8; i<16; i++){
        updatePawnPotentialMoves(whites[i], 1);
        updatePawnPotentialMoves(blacks[i], 2);
    }
}
function updatePawnPotentialMoves(pawn, color){
    pawn.potential = [];
    var pos = pawn.pos[move_IDX];
    if(pos[0]==0&&pos[1]==0){ //meaning the pawn has been taken.
        return;
    }
    if(color==1){ //this if else is mostly for readability
        
        //we assume pos[0]<8
        if(occupied[pos[0]][pos[1]-1]==0){
            pawn.potential.push([pos[0]+1, pos[1]]);
            if(pos[0]==2){
                if(occupied[4-1][pos[1]-1]==0){
                    pawn.potential.push([4, pos[1]]);
                }
            }
        }
        if( pos[1] < 8 && occupied[pos[0]][pos[1]]==2){
            pawn.potential.push([pos[0]+1,pos[1]+1]);
        }
        if( pos[1] >1  && occupied[pos[0]][pos[1]-2]==2){
            pawn.potential.push([pos[0]+1,pos[1]-1]);
        }
    }
    else{
        //assume pos[0]>1
        if(occupied[pos[0]-2][pos[1]-1]==0){
            pawn.potential.push([pos[0]-1, pos[1]]);
            if(pos[0]==7){
                if(occupied[6-1][pos[1]-1]==0){
                    pawn.potential.push([5, pos[1]]);
                }
            }
        }
        if( pos[1] < 8 && occupied[pos[0]-2][pos[1]]==1){
            pawn.potential.push([pos[0]-1,pos[1]+1]);
        }
        if( pos[1] >1  && occupied[pos[0]-2][pos[1]-2]==1){
            pawn.potential.push([pos[0]-1,pos[1]-1]);
        }
        
    }
    
}


function tableAdd(move1, move2, index){
    document.getElementById("table").innerHTML +=
    "<tr><td id=\""+index+"\" >" + ((index/2)+1) + ". "+ move1 + "</td><td id=\""+(index+1)+"\" >" + move2 + "</td></tr>";
}

function report(statement){
    //for debugging - disabled on my website!
    
    //document.getElementById("debug").innerHTML +=(statement+"<br />");
    
}



/*TODO
 checking
 
 Anything involving promotion. This should require a big update.
 
 */

/*checking:
 potential moves need to be known to identify which piece of a certain type
 was moved to a certain square. If there is an ambiguity, THEN we can check whether one
 of those moves would put the King in check. */
/*Thoughts on potential moves: This can give rise to a graphic that allows
 the user to constantly know the reach of a certain piece as the game goes on.
 Applications to a potential expansion of this project into a chess engine are
 obvious*/










