const requestsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return [action.request, ...state];

    case "FETCH_REQUESTS":
      console.log(action.request);
      return action.request;

    default:
      return state;
  }
};

export default requestsReducer;
