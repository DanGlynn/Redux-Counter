# Redux-Counter
Simple Increment and Decrement App written in Redux

Const INCREMENT AND DECREMENT are assigned.

The incrementAction and decrementAction action creators return action objects containing their respective types, INCREMENT and DECREMENT. 

The countReducer function then switches through the action.type created in the action creators in order to return a copy of the state which is either incremented or decremented based depending on the case value.

The actions are then dispatched to either increment or decrement the state held in the Redux store.
