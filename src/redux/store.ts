import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];

const saveStateToLocalStorage = (state: State) => {
    localStorage.setItem('reduxState', JSON.stringify(state));
};

const loadStateFromLocalStorage = () => {
    const state = localStorage.getItem('reduxState');

    if (state) {
        const jsonState = JSON.parse(state);

        if (jsonState) {
            return jsonState;
        }
    }

    return undefined;
};

console.log(loadStateFromLocalStorage());

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadStateFromLocalStorage();

const store = createStore(rootReducer, persistedState, compose(applyMiddleware(...middleware), composeEnhancers()));

store.subscribe(() => {
    saveStateToLocalStorage(store.getState());
});

export type State = ReturnType<typeof rootReducer>;

export default store;
