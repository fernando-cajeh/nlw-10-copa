//criando a função para alterar os jogos e as datas
function createGame(player1, hour, player2) {
  return `
  <li><!--item do primeiro horário-->
      <img src="/assets/icon-${player1}.svg" alt="Log${player1}"> <!--imagembandeira-->
    <strong>${hour}</strong><!--horario-->
      <img src="/assets/icon-${player2}.svg" alt="Log${player2}"> <!--imagemoutra bandeira-->
  </li>   
  `
  //No código acima, foi criada uma função que quando chamada, retorna um código que faz as as bandeiras dos dois times que vão jogar e o horário.
}
//  criando a função para criar o card, recebendo data,dia e jogos
let delay = -0.3;//criando uma variavel para adicionar o delay pelo javascript e esta linha é executada apenas para o 1º card, os outros são executados pelo delay que esta dentro da função.
function createCard(date, day, games) {
  delay = delay + 0.3;//esta linha faz comque o delay atribua + 0.4 segundos em cada card
  return `
    <div class="card" style="animation-delay: ${delay}s"> <!--div de um dos cartões--> 
    <h2>${date} <span>${day}</span></h2><!--conteúdo com span para estiliseparadamente-->

    <ul><!--lista com os horários-->
        ${games}
    </ul>

    </div>
`
}
//Abaixo vemos o seletor alterando o conteúdo do #cards que é a div em que estão os cards
//através do innerHTML, criando a data e o dia através da função createCard e criando as bandeiras e o horário 
//através da função createGame
document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11",
    "Quinta",
    createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "Segunda",
    createGame("brazil", "13:00", "switzerland")) +
  createCard(
    "02/12",
    "Sexta",
    createGame("brazil", "16:00", "cameroon"))
      
   //Este código acima faz com que nós possamos colocar um código dentro de uma função para poder
   //repetir este código sem precisar digitar novamente, basta chamar a função que ela faz o
   //trabalho
