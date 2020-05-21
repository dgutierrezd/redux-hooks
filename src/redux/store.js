import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  todos: [
    {
      id: 1,
      name: "Go to the gym",
      complete: false,
    },
    {
      id: 2,
      name: "Do laundry",
      complete: true,
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
