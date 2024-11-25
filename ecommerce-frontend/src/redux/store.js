import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Redux Thunk for asynchronous actions
import rootReducer from './reducers/rootReducer';  // Import your combined reducers

// Create the Redux store with rootReducer and applyMiddleware (for async actions)
const store = createStore(
    rootReducer,  // Combine all reducers here
    applyMiddleware(thunk)  // Apply Redux Thunk for handling async actions like API calls
);

export default store;
