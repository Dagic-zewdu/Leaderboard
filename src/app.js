import { addGames } from './modules/action/action';
import RenderGames from './modules/Dom/render';
import { form, refresh, selectDom } from './modules/Dom/selector';
import './styles/style.css';

RenderGames();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = selectDom('input#user');
  const scoreInput = selectDom('input#score');
  addGames({ user: userInput.value, score: scoreInput.value });
  userInput.value = '';
  scoreInput.value = '';
  setTimeout(() => RenderGames(), 3000);
});

refresh.addEventListener('click', RenderGames);