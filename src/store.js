import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import { taskReducer } from "./features/reducers/todo.reducer";
import { userReducer } from "./features/reducers/user.reducer";
// import { fetchData } from './features/actions/user.action'
const rootReducer = combineReducers({
  todo: taskReducer,
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: "myCustomApiService",
      },
    }),
});
