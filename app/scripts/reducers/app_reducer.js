export default function AppReducer (state, action) {

  if (state === undefined) {
    return {};
  }

  switch (action.type) {

    case "ADD_USER":
      console.log('I added a user');
      console.log(action);
      return state;

    case "LOAD_JEOPARDY_BOARD":
      $.ajax({
        type: 'GET',
        url: 'http://jservice.io/api/categories.json?count=6',
        dataytpe: 'jsonp',
        success: function(data, status, xhr) {
          console.log(data);
        }
      });
      
    default:
      return state;
  }

}
