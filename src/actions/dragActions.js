import { START_DRAG } from '../constants/constants';

export const startDragging = (event) => {
  console.log("You clicked on user: ", event.target.id);
  return {
      type: START_DRAG,
      payload: event.target.id
  }
};