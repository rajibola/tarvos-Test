import {initialState} from './context';

export type Dipatch =
  | {type: 'REMOVE_ITEM'; payload: {id: number}}
  | {
      type: 'ADD_ITEM';
      payload: {
        name: string;
        amount: number;
        price: number;
        size: string;
        id: number;
        image: any;
        color: string;
        total: number;
      };
    };

export const ListReducer = (state = initialState, action: Dipatch) => {
  switch (action.type) {
    case 'REMOVE_ITEM': {
      const id = action.payload.id;
      return {
        ...state,
        CheckedEvent: state.CheckedEvent.filter(
          (a) => a.id !== action.payload?.id,
        ),
      };
    }

    case 'ADD_ITEM': {
      const item = action.payload;
      const check = state.CheckedEvent.some((obj) => obj.id === item.id);
      console.log('CHECK', check);

      if (check) {
        return null;
      } else {
        return {
          ...state,
          CheckedEvent: [...state.CheckedEvent, item],
        };
      }
    }

    default:
      return state;
  }
};
