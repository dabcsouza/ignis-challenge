const textarea = document.getElementById('insert-time');
const submitButton = document.querySelector('.submit-btn');
const tableContainer = document.querySelector('.table-container');
const tableResults = document.querySelector('.table-results');
const teamsCombination = [];
const rounds = [];
let pointsArray = [];
let inputArray;
let teamsName;
let cityTeams;
let numberOfTeams;
let numberOfGames;

const calcTotalPoints = () => {
  pointsArray.forEach((team) => {
    team.totalPoints = (team.wins * 3) + team.draws
  });
  renderTableGames();
};

const renderTableResults = () => {
  //ordenando a tabela de resultados
  pointsArray.sort((a, b) => {
    return b.totalPoints - a.totalPoints
  });
}

const generateRoundsReturn = () => {
  const roundsReturn = rounds.map((round) => ({
    round: `${ round.round } - Returno`,
    results: round.results.map((_result) => [Math.floor(Math.random() * 8),
      Math.floor(Math.random() * 8)]),
    games: round.games.map(([team1, team2]) => [team2, team1]),
    cities: round.games
      .map(([_team1, team2]) => inputArray.find((el) => el.includes(team2)))
      .map((city) => city.split(';')[1]),
  }));
  return roundsReturn;
}
const renderTableGames = () => {
  rounds.forEach((round) => {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-dark');
    const theadHtml = `
      <thead>
        <tr>
          <th scope="col">N.º</th>
          <th scope="col">Jogo</th>
          <th scope="col">Estado</th>
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
          <td>${ round.results[index][0] } X ${ round.results[index][1] }</td>
        </tr>`
      );
    });
    tbodyHtml.push(`</tbody>`)
    table.innerHTML = theadHtml + tbodyHtml.join('');
    tableContainer.innerHTML += `<h3>Rodada ${ round.round }</h3>`
    tableContainer.appendChild(table);
  })
  renderTableResults()
};

const generateArrayPoints = () => {
  pointsArray = teamsName.map((team) => ({
    name: team,
    wins: 0,
    draws: 0,
    loss: 0,
  }));
  //Gera o Array de jogos de retorno e agrega ele ao array rounds
  const roundReturn = generateRoundsReturn();
  rounds.push(...roundReturn);
  //percorre o array com o objeto de resultado de cada time
  pointsArray.forEach((team) => {
    //para cada time percorrer o array de rodadas
    rounds.forEach((round) => {
      round.games.forEach(([player1, player2], index) => {
        // Este condicional mais externo verifica se o time jogou a partida
        if ( player1 === team.name || player2 === team.name ) {
          // Este condicional verifica se o time é o mandante do jogo
          if (player1 === team.name) {
            //Verifica o resultado do jogo (tricotomia: ganha, perde ou empata)
            if (round.results[index][0] > round.results[index][1]) {
              team.wins += 1
            } else if (round.results[index][0] === round.results[index][1]) {
              team.draws += 1
            } else { team.loss += 1 }
          } else {
            //Se não é o mandante do jogo, é o visitante pois aqui ja sabemos que o time jogou
            //Este else verifica o resultado do jogo no qual o time é visitante.
            if (round.results[index][1] > round.results[index][0]) {
              team.wins += 1
            } else if (round.results[index][1] === round.results[index][0]) {
              team.draws += 1
            } else { team.loss += 1 }
          };
        };
      })
    });
  });
  calcTotalPoints();
};

const addCitiesAndResultToRounds = () => {
  rounds.forEach((round) => {
    const arrCities = []
    const arrResults = []
    round.games.forEach((team) => {
      arrCities.push(
        inputArray.find((el) => el
          .includes(team[0])).split(';')[1]
      );
      arrResults.push([Math.floor(Math.random() * 8),
        Math.floor(Math.random() * 8)]);
    });
      round.cities = [...arrCities];
      round.results = [...arrResults];
  });
  generateArrayPoints();
};

const orderRoundsTeams = () => {
  rounds.forEach((round) => {
    if (round.round % 2 === 0) round.games[0].reverse();
    round.games.forEach((game, index) => {if (index % 2 === 1) game.reverse()})
  });
  addCitiesAndResultToRounds();
};

const createRounds = () => {
  rounds.splice(0, rounds.length);
  const gamesPerRound = numberOfGames / (numberOfTeams - 1);
  for (let i = 0; i < numberOfTeams - 1; i += 1) {
    rounds.push({
      round: i + 1,
      games: [...teamsCombination].slice(gamesPerRound * (i), gamesPerRound * (i + 1)),
    });
  };
  orderRoundsTeams();
};

const reorderTeam = () => {
  const varAux = teamsName[1];
  teamsName.splice(1,1);
  teamsName.push(varAux);
};

const generateGame = () => {
  for (let i = 0; i < numberOfTeams - 1; i += 1) {
    for(let j = 0; j < numberOfTeams / 2; j += 1) {
      teamsCombination.push([teamsName[j], teamsName[(numberOfTeams - 1) - j]])
    }
    reorderTeam();
  };
  createRounds();
};

const clearData = () => {
  teamsCombination.splice(0, teamsCombination.length);
  rounds.splice(0, rounds.length);
  pointsArray= [];
  teamsName = [];
  cityTeams = [];
  numberOfTeams = 0;
  numberOfGames = 0;
  tableContainer.innerHTML = '';
  tableResults.innerHTML = '';
  textarea.value = '';
};

const handleButtonSubmit = () => {
  try {
    const inputValue = textarea.value;
    inputArray = inputValue.split('\n');
    clearData();
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
    console.error('Algo deu ruim');
    console.error(e.message);
  }
};

const handleTextarea = ({ target: { value } }) => {
  const inputValue = value ? value : '';
  localStorage.setItem('inputValue', inputValue);
};

window.onload = () => {
  submitButton.addEventListener('click', handleButtonSubmit);
  textarea.addEventListener('keyup', handleTextarea);
};