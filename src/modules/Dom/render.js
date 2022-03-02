import { getGames } from '../action/action';
import { gamesListContainer } from './selector';

const RenderGames = async () => {
  let list = '<li class="center process">Loading...</li>';
  gamesListContainer.innerHTML = list;
  const games = await getGames();
  if (games.length) {
    list = '';
    games.forEach((game, index) => {
      list += `<li class="score-item ${index % 2 === 0 ? 'bg-light' : ''} ">
        <p class="score-description">${game.user}:${game.score}</p>
    </li>`;
    });
  } else {
    list = '<li class="center">No games score yet!</li>';
  }
  gamesListContainer.innerHTML = list;
};

export default RenderGames;