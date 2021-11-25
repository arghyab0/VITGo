const requestsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      console.log(action.request);
      return [action.request, ...state];

    default:
      return state;
  }
};

export default requestsReducer;
