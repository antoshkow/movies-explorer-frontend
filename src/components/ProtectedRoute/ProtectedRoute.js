import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './ProtectedRoute.css';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({ isLoggedIn, path, children, isChecking }) {

  return (
    <Route path={path} exact>
      {
        isChecking ? (
          <main className="hoc">
            <Preloader />
          </main>
        ) : (
          isLoggedIn ? children : <Redirect to="/signin" />
        )
      }
    </Route>
  );
}

export default ProtectedRoute;
