export default function addUser (user) {
  return (dispatch) => {
    dispatch({ type: "ADD_USER", user: user });
    dispatch({ type: "LOAD_JEOPARDY_BOARD" });
  }
}
