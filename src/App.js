import React, { lazy, Suspense } from "react";

import store from "./store.js";
import { Provider } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

const UserList = lazy(() => import("./containers/Users/UserList.jsx"));
const Practice = lazy(() => import("./containers/practice/Practice.jsx"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <Provider store={store}>
          <Navbar />
          <main role="main">
            <div className="container">
              <Routes>
                <Route path="/" element={<Practice />} />
                <Route path="/users" element={<UserList />} />
                {/* <Route path="/to-do" element={<TaskList />} />
              <Route path="/memo-callback" element={<MemoCallback />} /> */}
                <Route path="*" element={<>Page not found</>} />
              </Routes>
            </div>
          </main>
          <footer class="container">
            <p>&copy; Company 2025</p>
          </footer>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
