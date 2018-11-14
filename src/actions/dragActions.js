import {
  START_DROP
} from '../constants/constants';

export const dropItem = (event, id) => {
  return {
    type: START_DROP,
    payload: event.dataTransfer.getData("id"),
    payload1: id
  }
};