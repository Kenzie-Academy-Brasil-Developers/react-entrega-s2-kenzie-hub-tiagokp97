import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { useState } from "react";

export default function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Hub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/home">
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/">
        <Register authenticated={authenticated} />
      </Route>
    </Switch>
  );
}
