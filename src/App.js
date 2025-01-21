import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import store from "./store.js";
import Navbar from "./components/Navbar";

const UserList = lazy(() => import("./containers/Users/UserList"));
const Practice = lazy(() => import("./containers/practice/Practice"));

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
                <Route path="*" element={<>Page not found</>} />
              </Routes>
            </div>
          </main>
          {/* <footer class="container">
            <p>&copy; Company 2025</p>
          </footer> */}
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
