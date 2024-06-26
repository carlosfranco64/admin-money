import { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};

const initialState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState,

    () => {
      const localData = localStorage.getItem("transactions");
      JSON.parse(localData);
     return  localData ? JSON.parse(localData) : initialState;
    });


  useEffect(() => {
    
    localStorage.setItem('transactions',JSON.stringify(state))
  
    
  }, [state])
  


  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addMilles = (number) => {
    let partNumber= number.toString().split('.')
    
    partNumber[0]=partNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return partNumber.join('.')
  
  }

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        addMilles
      }}
    >
      {children}
    </Context.Provider>
  );
};
