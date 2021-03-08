const initialToDos = [
  {
    item: "Study React",
    completed: false,
    id: 1528817077286,
  },
  {
    item: "Give Dogs A Bath",
    completed: false,
    id: 1528817084358,
  },
];
export const initialState = {
  todos: initialToDos,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        todos: [...state.todos, { item: action.payload, id: new Date() }],
      }; //set the random id to the item added
    case "TOGGLE_COMPLETED":
      return {
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        }),
      };
    case "CLEAR_COMPLETED":
      return { todos: state.todos.filter((item) => !item.completed) };
    default:
      return state;
  }
};
