/**Bugs conhecidos: 
 * -Esta comparando espaços vazios
 */

var { board, turn } = globalScope();
 

function globalScope() {
    var turn = 0;
    var board = [];
    return { board, turn };
}

function initBoard(){
    for(let i = 0; i < board.length; i++){
        board[i].innerHTML=null;
        board[i].disabled=false;
     }
    turn = 0;
    document.getElementsByClassName("restart")[0].style.display="none";
}
function blockBoard(){
    for(let i = 0; i < board.length; i++){
        board[i].disabled=true;
    }
} 
function Listener() {
        for(let i = 0; i < 9; i++){
            board[i] = document.getElementById('bt'+(i+1));
            document.getElementById('bt'+(i+1)).addEventListener("click", function(){game(i)});
           
        }
}

function rules(){
        //Diagonal principal
        if(board[4].innerText === board[0].innerText && board[4].innerText === board[8].innerText){
            return true;
        }
        //Diagonal secundaria
        if(board[4].innerText === board[2].innerText && board[4].innerText === board[6].innerText){
            return true;
        }
        //Coluna central
        if(board[4].innerText === board[1].innerText && board[4].innerText === board[7].innerText){
            return true;
        }
        //Linha central
        if(board[4].innerText === board[3].innerText && board[4].innerText === board[5].innerText){
            return true;
        }
        //Primeira linha
        if(board[0].innerText === board[1].innerText && board[0].innerText === board[2].innerText){
            return true;
        }
        //Primeira coluna
        if(board[0].innerText === board[3].innerText && board[0].innerText === board[6].innerText){
            return true;
        }
        //Ultima coluna
        if(board[2].innerText === board[5].innerText && board[2].innerText === board[8].innerText){
            return true;
        }
        //Ultima linha
        if(board[6].innerText === board[7].innerText && board[6].innerText === board[8].innerText){
            return true;
        }
    
    return false;
}
function game(btn){ 
   
            document.getElementById("turn").innerHTML="Jogador:"+((turn+1)%2+1);
            if(turn % 2 === 0){
                board[btn].innerHTML='x'.fontsize(30);
            }else {
                board[btn].innerHTML='o'.fontsize(30);
            }
            
            if(turn >= 4 && rules()){
                alert("jogador "+(turn%2+1)+" ganhoou");
                blockBoard();
                document.getElementsByClassName("restart")[0].style.display="flex";
                

            }
            board[btn].disabled = true;
            turn++;
        
     
        
        
}

