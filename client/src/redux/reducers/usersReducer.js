const usersReducer = (state = [], action) => {
  switch (action.type) {
    // case "ADD_REQUEST":
    //   return [action.request, ...state];

    case "FETCH_USERS":
      return action.user;

    case "BLACKLIST_USER":
    case "UNBLACKLIST_USER":
      return state.map((item) =>
        item._id === action.user._id ? action.user : item
      );

    default:
      return state;
  }
};

export default usersReducer;
