// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import foodFeedReducer from '../shared/reducer/food-feed'

const initStore = (plainPartialState: ?Object) => {
	const preloadedState = plainPartialState ? {} : undefined

	if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
		preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
	}

	if (plainPartialState && plainPartialState.foodFeed) {
		// eslint-disable-next-line no-console
		console.log('there is a plainPartialState.foodFeed')
		// flow-disable-next-line
		preloadedState.foodFeed = foodFeedReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.foodFeed))
	}

	return createStore(combineReducers({
		foodFeed: foodFeedReducer,
		hello: helloReducer,
	}),
	preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
