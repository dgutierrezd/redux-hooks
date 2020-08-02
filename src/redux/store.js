import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  todos: [
    {
      id: 0,
      name: "Go to the gym",
      complete: false,
    },
    {
      id: 1,
      name: "Do laundry",
      complete: true,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
