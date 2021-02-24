import React, { useEffect, useState } from "react";
import "./style.css";
import { render } from "react-dom";
import { Home } from "./home.component";
import { FirebaseLogin } from "./login/firebase.auth.component";

export function App() {
  const [user, setUser] = useState<{} | undefined>(undefined);

  return (
    <div className={"main"}>
      {user ? (
        <Home />
      ) : (
        <FirebaseLogin
          onLoginSuccess={user => {
            setUser(user);
          }}
        />
      )}
    </div>
  );
}

render(<App />, document.getElementById("root"));
