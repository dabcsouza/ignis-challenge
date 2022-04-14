const textarea = document.getElementById('insert-time');
const submitButton = document.querySelector('.submit-btn');
const tableContainer = document.querySelector('.table-container');
const teamsCombination = [];
const rounds = []
let inputArray;
let teamsName;
let cityTeams;
let numberOfTeams;
let numberOfGames;

const renderTableGames = () => {
  rounds.forEach((round) => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-dark');
    const theadHtml = `
    <thead>
      <tr>
        <th scope="col">N.º</th>
        <th scope="col">Jogo</th>
        <th scope="col">Cidade</th>
        <th scope="col">Placar</th>
      </tr>
    </thead>
    <tbody>
    `;
    const tbodyHtml = round.games.map((game, index) => {
      return(
        `<tr>
          <th scope="row">${ index + 1 }</th>
          <td>${ game[0] } X ${ game[1] }</td>
          <td>${ round.cities[index] }</td>
          <td>${ Math.floor(Math.random() * 8) } X ${ Math.floor(Math.random() * 8) }</td>
        </tr>`
      );
    });
  tbodyHtml.push(`</tbody>`)
  table.innerHTML = theadHtml + tbodyHtml.join('');
  tableContainer.innerHTML += `<h3>Rodada${round.round}</h3>`
  tableContainer.appendChild(table);
  })
}

const addCitiesArrayToRounds = () => {
  rounds.forEach((round) => {
    const arrCities = []
    round.games.forEach((team) => {
      arrCities.push(
        inputArray.find((el) => el
          .includes(team[0])).split(';')[1]
      )
    });
      round.cities = [...arrCities]
  });
  renderTableGames()
}

const orderRoundsTeams = () => {
  rounds.forEach((round) => {
    if (round.round % 2 === 0) round.games[0].reverse();
    round.games.forEach((game, index) => {if (index % 2 === 1) game.reverse()})
  });
  addCitiesArrayToRounds()
};

const createRounds = () => {
  rounds.splice(0, rounds.length);
  const gamesPerRound = numberOfGames / (numberOfTeams - 1);
  for (let i = 0; i < numberOfTeams - 1; i += 1) {
    rounds.push({
      round: i + 1,
      games: [...teamsCombination].slice(gamesPerRound*(i), gamesPerRound * (i + 1)),
    });
  };
  orderRoundsTeams();
}

const reorderTeam = () => {
  const varAux = teamsName[1];
  teamsName.splice(1,1);
  teamsName.push(varAux);
}

const generateGame = () => {
  for (let i = 0; i < numberOfTeams - 1; i += 1) {
    for(let j = 0; j < numberOfTeams / 2; j += 1) {
      teamsCombination.push([teamsName[j], teamsName[(numberOfTeams - 1) - j]])
    }
    reorderTeam();
  }
  createRounds();
}

const handleButtonSubmit = () => {
  try {
    const inputValue = textarea.value;
    inputArray = inputValue.split('\n');
    textarea.value = '';
    numberOfTeams = inputArray.length;
    //Estatisticamente, cada um dos n times enfrenta n - 1 adversários (não enfrenta ele
    // próprio), por enquanto não considerando a inversão do mandante temos que a ordem não
    // importa nos dando o numero de jogos = n * (n-1) / 2
    numberOfGames = numberOfTeams * (numberOfTeams - 1) / 2;
    teamsName = Array(numberOfTeams).fill('');
    cityTeams = Array(numberOfTeams).fill('');
    inputArray.forEach((team, index) => {
      teamsName[index] = team.split(';')[0];
      cityTeams[index] = team.split(';')[1];
    });
    if(cityTeams.some((el) => !el || el === '')) throw new Error('invalid Data');
    generateGame()
  } catch (e) {
    console.error(e.message);
  }
}

const handleTextarea = ({ target: { value } }) => {
  const inputValue = value ? value : '';
  localStorage.setItem('inputValue', inputValue);
}

window.onload = () => {
  submitButton.addEventListener('click', handleButtonSubmit);
  textarea.addEventListener('keyup', handleTextarea);
}