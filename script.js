const textarea = document.getElementById('insert-time');
const submitButton = document.querySelector('.submit-btn');
let inputValue;
let teamsName;
let cityTeams;
let numberOfTeams;

const handleTextarea = ({ target: { value } }) => {
  inputValue = value ? value : '';
}

const handleButtonSubmit = () => {
  try {
    inputValue = inputValue.split('\n');
    numberOfTeams = inputValue.length;
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