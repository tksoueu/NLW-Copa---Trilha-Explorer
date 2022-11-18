function createGame(player1, bplayer1, hour, player2, bplayer2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${bplayer1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira ${bplayer2}" />
      </li>
  `
}

let delay = -0.3

function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "Domingo",
    createGame("qatar", "Catar", "13:00h", "ecuador", "Equador")
  ) +
  createCard(
    "21/11",
    "Segunda",
    createGame("england", "Inglaterra", "10:00h", "iran", "Irã") +
      createGame("senegal", "Senegal", "13:00h", "netherlands", "Holanda") +
      createGame("usa", "Estados Unidos", "16:00h", "wales", "País de Gales")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame(
      "argentina",
      "Argentina",
      "07:00h",
      "saudi_arabia",
      "Arábia Saudita"
    ) +
      createGame("denmark", "Dinamarca", "10:00h", "tunisia", "Tunísia") +
      createGame("mexico", "México", "13:00h", "poland", "Polônia") +
      createGame("france", "França", "16:00h", "australia", "Austrália")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("morocco", "Marrocos", "07:00h", "croatia", "Croácia") +
      createGame("germany", "Alemanha", "10:00h", "japan", "Japão") +
      createGame("spain", "Espanha", "13:00h", "costa_rica", "Costa Rica") +
      createGame("belgium", "Bélgica", "16:00h", "canada", "Canadá")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "Suiça", "07:00h", "cameroon", "Camarões") +
      createGame(
        "uruguay",
        "Uruguai",
        "10:00h",
        "south_korea",
        "Coréia do Sul"
      ) +
      createGame("portugal", "Portugal", "13:00h", "ghana", "Gana") +
      createGame("brazil", "Brasil", "16:00h", "serbia", "Sérvia")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("wales", "País de Gales", "07:00h", "iran", "Irã") +
      createGame("qatar", "Catar", "10:00h", "senegal", "Senegal") +
      createGame("netherlands", "Holanda", "13:00h", "ecuador", "Equador") +
      createGame("england", "Inglaterra", "16:00h", "usa", "Estados Unidos")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("tunisia", "Tunísia", "07:00h", "australia", "Austrália") +
      createGame(
        "poland",
        "Polônia",
        "10:00h",
        "saudi_arabia",
        "Arábia Saudita"
      ) +
      createGame("france", "França", "13:00h", "denmark", "Dinamarca") +
      createGame("argentina", "Argentina", "16:00h", "mexico", "México")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japan", "Japão", "07:00h", "costa_rica", "Costa Rica") +
      createGame("belgium", "Bélgica", "10:00h", "morocco", "Marrocos") +
      createGame("croatia", "Croácia", "13:00h", "canada", "Canadá") +
      createGame("spain", "Espanha", "16:00h", "germany", "Alemanha")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "Camarões", "07:00h", "serbia", "Sérvia") +
      createGame("south_korea", "Coréia do Sul", "10:00h", "ghana", "Gana") +
      createGame("brazil", "Brasil", "13:00h", "switzerland", "Suíça") +
      createGame("portugal", "Portugal", "16:00h", "uruguay", "Uruguay")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("ecuador", "Equador", "12:00h", "senegal", "Senegal") +
      createGame("netherlands", "Holanda", "12:00h", "qatar", "Catar") +
      createGame("iran", "Irã", "16:00h", "usa", "Estados Unidos") +
      createGame("wales", "País de Gales", "16:00h", "england", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "Tunísia", "12:00h", "france", "França") +
      createGame("australia", "Australia", "12:00h", "denmark", "Dinamarca") +
      createGame("poland", "Polônia", "16:00h", "argentina", "Argentina") +
      createGame("saudi_arabia", "Arábia Saudita", "16:00h", "mexico", "México")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("croatia", "Croácia", "12:00h", "belgium", "Bélgica") +
      createGame("canada", "Canadá", "12:00h", "morocco", "Marrocos") +
      createGame("japan", "Japão", "16:00h", "spain", "Espanha") +
      createGame("costa_rica", "Costa Rica", "16:00h", "germany", "Alemanha")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame(
      "south_korea",
      "Coréia do Sul",
      "12:00h",
      "portugal",
      "Portugal"
    ) +
      createGame("ghana", "Gana", "12:00h", "uruguay", "Uruguay") +
      createGame("serbia", "Sérvia", "16:00h", "switzerland", "Suíça") +
      createGame("cameroon", "Camarões", "16:00h", "brazil", "Brasil")
  )
