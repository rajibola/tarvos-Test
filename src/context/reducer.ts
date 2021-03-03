import {CartProps} from '../types/types.d';
import {initialState} from './context';

export type Dipatch =
  | {type: 'REMOVE_ITEM'; payload: {id: number}}
  | {type: 'REDUCE_QUANTITY'; payload: {id: number}}
  | {
      type: 'ADD_ITEM';
      payload: CartProps;
    };

export const ListReducer = (state = initialState, action: Dipatch) => {
  switch (action.type) {
    case 'REDUCE_QUANTITY': {
      const id = action.payload.id;
      const itemToReduce = state.CheckedEvent.find((obj) => obj.id === id);
      if (itemToReduce) {
        if (itemToReduce.total > 1) {
          itemToReduce.total -= 1;
          return {
            ...state,
            CheckedEvent: [...state.CheckedEvent, itemToReduce],
          };
        }
      }
    }
    case 'REMOVE_ITEM': {
      const id = action.payload.id;
      return {
        ...state,
        CheckedEvent: state.CheckedEvent.filter(
          (a) => a.id !== action.payload.id,
        ),
      };
    }

    case 'ADD_ITEM': {
      const item = action.payload;
      const itemToAdd = state.CheckedEvent.find((obj) => obj.id === item.id);

      if (itemToAdd) {
        if (itemToAdd.total >= 1) {
          itemToAdd.total += 1;
          return {
            ...state,
            CheckedEvent: [...state.CheckedEvent, itemToAdd],
          };
        }
      }
      item.total = 1;
      return {
        ...state,
        CheckedEvent: [...state.CheckedEvent, item],
      };
    }

    default:
      return state;
  }
};
