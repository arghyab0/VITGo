const requestsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return [action.data.request, ...state];

    default:
      return state;
  }
};

export default requestsReducer;
