import { START_DRAG } from '../constants/constants';

const initialState = {
  items: [
    {name:"Angular", category:"wip", bgcolor: "yellow"},
    {name:"React", category:"wip", bgcolor:"pink"},
    {name:"Vue", category:"complete", bgcolor:"skyblue"}
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_DRAG:
      return state
    default:
      return state;
  }
}