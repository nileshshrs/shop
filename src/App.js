import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { StoreProvider } from "./Context/StoreContext";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <StoreProvider>
        <div className="App">
          <Main />
        </div>
      </StoreProvider>
    </AuthContextProvider>
  );
}

export default App;
