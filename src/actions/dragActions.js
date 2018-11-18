import {
  START_DROP,
  GET_INITIAL_STATE
} from '../constants/constants';

export const dropItem = (event, id) => {
  return {
    type: START_DROP,
    payload: event.dataTransfer.getData("id"),
    payload1: id
  }
};

export const resetState = () => {
  return {
    type: GET_INITIAL_STATE
  }
};