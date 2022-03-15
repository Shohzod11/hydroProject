import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReduser } from 'redux-form'
// import { reducer as formReduser } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

const rootReducers = combineReducers({
    form: formReduser
})

const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, compoceEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store