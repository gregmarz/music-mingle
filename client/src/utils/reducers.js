import { useReducer } from 'react';
import {
    ARTIST_LOGIN,
    VENUE_LOGIN,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
      // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
      case ARTIST_LOGIN:
        return {
          ...state,
          artistLogged: true,
        };
  
      case VENUE_LOGIN:
        return {
          ...state,
          venueLogged: true,
        };

        default:
            return state;
        }
      };


export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }
  