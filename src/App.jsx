import { useState } from "react";
import "./App.css";
import CurrencyDropdown from "./CurrencyDropdown";
import CurrencyContext from "./contexts/CurrencyContext";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("SGD");

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyContext.Provider
        value={{
          currencyFrom,
          setCurrencyFrom,
          currencyTo,
          setCurrencyTo,
        }}
      >
        <CurrencyDropdown />
      </CurrencyContext.Provider>
    </>
  );
}

export default App;

