import React, {createContext} from 'react';
import {ListReducer, Dipatch} from './reducer';

export type InitialStateType = {
  CheckedEvent: {
    name: string;
    amount: number;
    price: number;
    size: string;
    id: number;
    image: any;
    color: string;
    total: number;
  }[];
};

export const initialState: InitialStateType = {
  CheckedEvent: [],
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Dipatch>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function AppProvider(props: any) {
  const [state, dispatch] = React.useReducer(ListReducer, initialState);
  const value = {state, dispatch};
  console.log(value);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
