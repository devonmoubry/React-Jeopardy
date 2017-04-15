import boardView from '../components/game_board.js'
import startPage from '../components/start_page.js'

export default function AppReducer (state, action) {

  if (state === undefined) {
    return {
      username: null,
      categories: [],
      view: startPage
    };
  }

  switch (action.type) {

    case "ADD_USER":
      console.log('I added a user');
      console.log(action);
      var newState = {
        username: action.username
      };
      return Object.assign({}, state, newState);

    case "CATEGORIES_LOADED":
      var newState = {
        categories: action.categories,
        view: boardView
      };
      return Object.assign({}, state, newState);



    default:
      return state;
  }

}
