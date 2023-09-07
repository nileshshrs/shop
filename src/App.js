import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { StoreProvider } from "./Context/StoreContext";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Main />
      </div>
    </StoreProvider>
  );
}

export default App;
