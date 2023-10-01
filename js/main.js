alert("Hola! bienvenido al juego de piedra, papel o tijera, son dos jugadores, cada uno elige una de esas tres opciones")

const primerPlayer = prompt("Player 1, ingresa tu nombre")
const segundoPlayer = prompt("Player 2, ingresa tu nombre")

const gameOptions = ["piedra", "papel", "tijera"];

const gameRules = {
  piedra: {
    tijera: true,
  },
  papel: {
    piedra: true,
  },
  tijera: {
    papel: true,
  },
};
function game(player1, player2) {
  if (!gameOptions.includes(player1) | !gameOptions.includes(player2))
    throw new Error("Opción de juego no válida");

  if (player1 === player2) return "Empate";

  if (gameRules[player1][player2]) return primerPlayer + " gana";
  return segundoPlayer + " gana";
}

console.log(game(prompt("Que usara el primer jugador?"), prompt("Que usara el segundo jugador?")));