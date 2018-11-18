import {
  START_DROP,
  GET_INITIAL_STATE
} from '../constants/constants'

const resettedState = {
  items: [{
    name: 'Angular',
    category: 'wip',
    bgcolor: 'yellow'
  },
  {
    name: 'React',
    category: 'wip',
    bgcolor: 'pink'
  },
  {
    name: 'Vue',
    category: 'complete',
    bgcolor: 'skyblue'
  }
  ],
  count: 0
}

const initialState = {
  items: [{
    name: 'Angular',
    category: 'wip',
    bgcolor: 'yellow'
  },
  {
    name: 'React',
    category: 'wip',
    bgcolor: 'pink'
  },
  {
    name: 'Vue',
    category: 'complete',
    bgcolor: 'skyblue'
  }
  ],
  count: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case START_DROP:
      let tasks = state.items.filter((item) => {
        if (item.name === action.payload) {
          item.category = action.payload1
        }
        return item
      })
      return Object.assign({}, state, {
        items: tasks,
        count: state.count + 1
      })
    case GET_INITIAL_STATE:
      const copiedObject = clone(resettedState)
      return copiedObject
    default:
      return state
  }
}

function clone (obj) {
  var copy

  // Handle the 3 simple types, and null or undefined
  if (obj == null || typeof obj !== 'object') return obj

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = []
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr])
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported.")
}