// Object Deep Clone

// https://redux.js.org/usage/structuring-reducers/immutable-update-patterns#immutable-update-patterns

function updateVeryNestedField(state, action) {

 return {
 ...state,
 first: {
 ...state.first,
 second: {
 ...state.first.second,
 [action.someId]: {
 ...state.first.second[action.someId],
 fourth: action.someValue
 }}}}}