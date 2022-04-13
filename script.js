const textarea = document.getElementById('insert-time');
const submitButton = document.querySelector('.submit-btn');
const TeamsCombination = [];
let inputValue;
let arrayTeamsAndCity;
let teamsName;
let cityTeams;
let numberOfTeams;
let numberOfGames;

const handleTextarea = ({ target: { value } }) => {
  inputValue = value ? value : '';
}

const reorderTeam = () => {
  const varAux = teamsName[1];
  teamsName.splice(1,1);
  teamsName.push(varAux);
  console.log(teamsName);
}

const generateGame = () => {
  console.log(teamsName);
  for (let i = 0; i < numberOfTeams - 1; i += 1) {
    for(let j = 0; j < numberOfTeams / 2; j += 1) {
      TeamsCombination.push([teamsName[j], teamsName[(numberOfTeams - 1) - j]])
    }
    reorderTeam();
  }
  console.log(TeamsCombination)
}

const handleButtonSubmit = () => {
  try {
    inputValue = inputValue.split('\n');
    numberOfTeams = inputValue.length;
    //Estatisticamente, cada um dos n times enfrenta n - 1 adversários (não enfrenta ele
    // próprio), por enquanto não considerando a inversão do mandante temos que a ordem não
    // importa nos dando o numero de jogos = n * (n-1) / 2
    numberOfGames = numberOfTeams * (numberOfTeams - 1) / 2;
    console.log(numberOfGames);
    teamsName = Array(numberOfTeams).fill('');
    cityTeams = Array(numberOfTeams).fill('');
    inputValue.forEach((team, index) => {
      teamsName[index] = team.split(';')[0];
      cityTeams[index] = team.split(';')[1];
    });
    if(cityTeams.some((el) => !el || el === '')) throw new Error('invalid Data');
    generateGame()
  } catch (e) {
    console.error(e.message);
  }
}

window.onload = () => {
  submitButton.addEventListener('click', handleButtonSubmit);
  textarea.addEventListener('change', handleTextarea);
}