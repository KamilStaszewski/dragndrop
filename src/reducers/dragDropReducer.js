import {
  START_DROP
} from '../constants/constants';

const initialState = {
  items: [{
      name: "Angular",
      category: "wip",
      bgcolor: "yellow"
    },
    {
      name: "React",
      category: "wip",
      bgcolor: "pink"
    },
    {
      name: "Vue",
      category: "complete",
      bgcolor: "skyblue"
    }
  ],
  count: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_DROP:
      let tasks = state.items.filter((item) => {
        if (item.name === action.payload) {
          item.category = action.payload1;
        }
        return item;
      });
      return Object.assign({}, state, {
        items: tasks,
        count: state.count + 1
      });
    default:
      return state;
  }
}