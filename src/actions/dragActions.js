import {
  START_DROP
} from '../constants/constants';

export const dropItem = (event, id) => {
  console.log(event.dataTransfer.getData("id"))
  console.log(id)
  return {
    type: START_DROP,
    payload: event.dataTransfer.getData("id"),
    payload1: id
  }
};