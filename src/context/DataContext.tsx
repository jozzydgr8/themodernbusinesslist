import React, { createContext, useReducer } from "react";
import { BusinessCategory, StateType } from "../types";


// Types


type State = {
  stateData: StateType[] | null;
  loading: boolean;
  businessCategory:BusinessCategory[] | null
  
};


type categoryAction = {
    type:"getbusinesscategory",
    payload:BusinessCategory[] | null
}

type LoadAction = {
  type: "setloading";
  payload: boolean;
};


type stateAction = {
  type:'getstates',
  payload: StateType[] | null
}


type Action = LoadAction | stateAction | categoryAction

type ContextProps = State & {
  dispatch: React.Dispatch<Action>;
};

type ComponentProps = {
  children: React.ReactNode;
};

// Initial State
const initialState: State = {
  loading: false,
  stateData:null,
  businessCategory:null,
 

};


// Create Context with default value
export const Context = createContext<ContextProps>({
  ...initialState,
  dispatch: () => null, // dummy dispatch for default
});

// Reducer
const reducer = (stateData: State, action: Action): State => {
  switch (action.type) {
    case "setloading":
      return { ...stateData, loading: action.payload };
    
    case "getstates":
       return { ...stateData, stateData: action.payload, loading:false };

    case "getbusinesscategory":
        return {...stateData, businessCategory:action.payload, loading:false}

    default:
      return stateData;
  }
};

// Provider
export const DataContext = ({ children }: ComponentProps) => {
  const [stateData, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...stateData, dispatch }}>
      {children}
    </Context.Provider>
  );
};