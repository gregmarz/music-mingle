import { useReducer } from 'react';
import {
    CURRENT_USER,
    ADD_ARTIST,
    ADD_VENUE
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
      // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
      case CURRENT_USER:
        return {
          ...state,
          currentUser: '',
        };
  
        case ADD_ARTIST:
          return {
            ...state,
            artists: [...action.artist],
          };
    
        case ADD_VENUE:
          return {
            ...state,
            venues: [...action.venue],
          };

        default:
            return state;
        }
      };


export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }
  