import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { FormTransaction } from "./components/transaction/FormTransaction";
import { TransactionList } from "./components/transaction/TransactionList";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <FormTransaction />
      <TransactionList />
    </GlobalProvider>
  );
};

export default App;
