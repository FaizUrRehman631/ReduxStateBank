const reducer = (state = 0, action) => {
  if (action.type === "deeposit") {
    return state + action.payload;
  } else {
    if (action.type === "withdraw") {
      return state - action.payload;
    }
    else{
        return state;
    }
  }
};
export default reducer;