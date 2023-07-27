import './styles/style.scss';
import { addAction, getAllScore, SCORE_END_POINT } from './modules/api.js';
import Player from './modules/player.js';

const bodyList = document.getElementById('body-list-score');
const formScore = document.getElementById('form-score');
const inputName = document.getElementById('player-name');
const inputScore = document.getElementById('player-score');
const refreshBtn = document.getElementById('refresh-btn');

getAllScore(bodyList);

formScore.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputName.value !== '' && inputScore.value !== '') {
    const newPlayer = new Player(inputName.value, inputScore.value);

    addAction(SCORE_END_POINT, newPlayer).then(() => {
      inputName.value = '';
      inputScore.value = '';
      getAllScore(bodyList);
    });
  }
});

refreshBtn.addEventListener('click', () => {
  getAllScore(bodyList);
});