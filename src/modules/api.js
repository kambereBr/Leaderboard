import renderScore from './utils.js';

const SCORE_END_POINT = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VbApWvk1ousySFVD8bXJ/scores/';

// add game or score
const addAction = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

// Get All Score
const getAllScore = async (htmlElement) => {
  await fetch(SCORE_END_POINT)
    .then((response) => response.json())
    .then((json) => {
      renderScore(json.result, htmlElement);
    });
};

export { addAction, getAllScore, SCORE_END_POINT };
