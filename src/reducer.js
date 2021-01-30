// reducers are supposed to return a new state depending on a given action
let lastId = 0;
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'BUG_ADDED':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case 'BUG_RESOLVED':
      return state.map(b =>
        b.id === action.payload.id
          ? { ...b, resolved: true }
          : b
      );
    case 'BUG_REMOVED':
      return state.filter(b => b.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
