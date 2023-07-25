import './styles/style.scss';
import { renderScore } from './utils';

const arrayScore = [
    { name: 'Albert A.', score: 100 },
    { name: 'Georges D.', score: 80 },
    { name: 'Frank G.', score: 70 },
    { name: 'Silver M.', score: 100 },
    { name: 'Robert K.', score: 100 },
];
const bodyList = document.getElementById('body-list-score');
renderScore(arrayScore, bodyList);