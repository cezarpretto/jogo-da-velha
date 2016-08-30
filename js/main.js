var marcacao = 'O';
var jogador1 = new Jogador();
var jogador2 = new Jogador();
jogador1.nome = prompt('Digite o nome do jogador 1:');
jogador2.nome = prompt('Digite o nome do jogador 2:');
var placar = document.getElementById('placar-table');
placar.rows[0].cells[0].innerHTML = jogador1.nome;
placar.rows[0].cells[1].innerHTML = jogador2.nome;
alert('O jogador ' + jogador1.nome + ' começa!');

function marcar(el){
  if(el.innerHTML === '-'){
    marcacao === 'X' ? marcacao = 'O' : marcacao = 'X';
    el.innerHTML = marcacao;
    verificaDiagonal();
    verificaColuna();
    verificaLinha();
    verificaVelha();
  }else{
    alert('Esta caixa já está marcada!');
  }
};

function verificaColuna(){
  var boxes = document.getElementsByTagName('li');
  if(boxes[0].innerHTML === 'X' && boxes[3].innerHTML === 'X' && boxes[6].innerHTML === 'X'){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }
  if(boxes[1].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[7].innerHTML === 'X'){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }
  if(boxes[2].innerHTML === 'X' && boxes[5].innerHTML === 'X' && boxes[8].innerHTML === 'X'){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }
  if(boxes[0].innerHTML === 'O' && boxes[3].innerHTML === 'O' && boxes[6].innerHTML === 'O'){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
  if(boxes[1].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[7].innerHTML === 'O'){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
  if(boxes[2].innerHTML === 'O' && boxes[5].innerHTML === 'O' && boxes[8].innerHTML === 'O'){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
};

function verificaLinha(){
  var boxes = document.getElementsByTagName('li');
  if(boxes[0].innerHTML === 'X' && boxes[1].innerHTML === 'X' && boxes[2].innerHTML === 'X'){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }
  if(boxes[3].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[5].innerHTML === 'X'){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }
  if(boxes[6].innerHTML === 'X' && boxes[7].innerHTML === 'X' && boxes[8].innerHTML === 'X'){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }
  if(boxes[0].innerHTML === 'O' && boxes[1].innerHTML === 'O' && boxes[2].innerHTML === 'O'){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
  if(boxes[3].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[5].innerHTML === 'O'){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
  if(boxes[6].innerHTML === 'O' && boxes[7].innerHTML === 'O' && boxes[8].innerHTML === 'O'){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
};

function verificaDiagonal(){
  var boxes = document.getElementsByTagName('li');
  if((boxes[0].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[8].innerHTML === 'X') ||
      (boxes[2].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[6].innerHTML === 'X')){
    alert('O jogador ' + jogador1.nome + ' ganhou!');
    jogador1.pontos += 1;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    reset();
  }else if((boxes[0].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[8].innerHTML === 'O') ||
      (boxes[2].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[6].innerHTML === 'O')){
    alert('O jogador ' + jogador2.nome + ' ganhou!');
    jogador2.pontos += 1;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    reset();
  }
};

function verificaVelha(){
  var boxes = document.getElementsByTagName('li');
  var qtdMarcada = 0;
  for (var i = 0; i < boxes.length; i++) {
    if(boxes[i].innerHTML !== '-'){
      qtdMarcada += 1;
    }
  }
  if(qtdMarcada === 9){
    alert('Deu velha!');
    reset();
  }
}

function reset(){
  var boxes = document.getElementsByTagName('li');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '-';
  }
  marcacao = 'O';
};

function restart(){
  if(window.confirm('Deseja realmente zerar o contador?')){
    jogador1.pontos = 0;
    jogador2.pontos = 0;
    placar.rows[1].cells[0].innerHTML = jogador1.pontos;
    placar.rows[1].cells[1].innerHTML = jogador2.pontos;
    marcacao = 'O';
    reset();
  }
};

function Jogador(){
  this.nome = undefined;
  this.pontos = 0;
};
