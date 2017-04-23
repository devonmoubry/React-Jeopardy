import boardView from '../components/game_board.js'
import startPage from '../components/start_page.js'

export default function AppReducer (state, action) {

  if (state === undefined) {
    return {
      username: null,
      categories: [],
      view: startPage,
      showModal: false,
      currentClue: null,
      viewedClues: [],
      contestantScore: 0,
      correctAnswer: ''
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

    case "CLUES_LOADED":
      let newCategory = action.category_with_clues;
      let newCategories = state.categories.map(function(oldCategory) {
        if (oldCategory.id == newCategory.id) {
          return Object.assign({}, oldCategory, newCategory);
        } else {
          return oldCategory;
        }
      });
      let newState = {
        categories: newCategories,
        view: boardView
      };
      return Object.assign({}, state, newState);

    case "SET_CURRENT_CLUE":
        var newState = {
          currentClue: action.clue
        }
      return Object.assign({}, state, newState);

    case "SHOW_MODAL":
        var newState = {
          showModal: true
        }
      return Object.assign({}, state, newState);

    case "VIEWED_CLUE":
      var clue = action.clue;
      let answerFeedback = action.clue.answer;
      var newState = {
        showModal: false,
        viewedClues: state.viewedClues.concat([clue]),
        correctAnswer: answerFeedback
      }
      return Object.assign({}, state, newState);

    case "HANDLE_CORRECT_ANSWER":
      let momoney = action.value
      var newState = {
        contestantScore: state.contestantScore + momoney
      }
      return Object.assign({}, state, newState);

    case "HANDLE_INCORRECT_ANSWER":
      let lessmoney = action.value
      var newState = {
        contestantScore: state.contestantScore - lessmoney
      }
      return Object.assign({}, state, newState);

    default:
      return state;
  }

}
