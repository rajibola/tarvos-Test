import React, {createContext} from 'react';
import {CartProps, Dipatch} from '../types/types.d';
import {ListReducer} from './reducer';

export type InitialStateType = {
  CheckedEvent: CartProps[];
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
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
