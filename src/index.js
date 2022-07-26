import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import store from './util/store'
import { Provider } from 'react-redux'

//use React-lazy to reduce size of chunk bundel.js
const Home = React.lazy(() => import('./pages/Home/Home'))
const EmployeeList = React.lazy(() => import('./pages/EmployeeList/EmployeeList'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback='Loading...'>
              <Home />
            </React.Suspense>
          }
          />
          <Route path="/employee-list" element={
            <React.Suspense fallback='Loading...'>
              <EmployeeList />
            </React.Suspense>
          } />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
