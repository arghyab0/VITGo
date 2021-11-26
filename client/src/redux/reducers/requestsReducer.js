const requestsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return [action.request, ...state];

    case "FETCH_REQUESTS":
      return action.request;

    case "APPROVE_REJECT_REQUESTS":
      return state.map((item) =>
        item._id === action.request._id ? action.request : item
      );

    default:
      return state;
  }
};

export default requestsReducer;
