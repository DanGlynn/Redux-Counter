const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


const countReducer = (state = 0, action) => {
  switch(action.type){
    case INCREMENT:
    return state + 1;
    break;
    case DECREMENT:
    return state - 1;
    break;
    default:
    return state;
  }
}

const incrementAction = () => {
  return {
      type: INCREMENT
  }
};

const decrementAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(countReducer);
