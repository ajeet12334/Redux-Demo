//Step 1 : import redux
const { createStore } = require('redux');

//Step 4 : create initial state
const initialState = {
   age:10
};

//Step 3 : create reducer, Its required prev state and action
const reducer = (state=initialState, action) => {
   //Step 6 : Create copy of prev state
   const newState = {...state};
   //Step 7 : Create code for actions
   if(action.type === 'ADD'){
       newState.age += action.val;
   }
   else if(action.type === 'SUB'){
       newState.age -= action.val;
   }
   //Step 8: return new state
   return newState;
}

//Step 2 : create store
const store = createStore(reducer); // Its required reducer as argument

//Step 9 : Subscribe
store.subscribe(() => {
   console.log("State is :" + JSON.stringify(store.getState()));
})

//Step 5 : dispatch the action through store object
store.dispatch(
   { type: 'ADD', val : 10}
);

store.dispatch(
   { type: 'SUB', val : 10}
);
