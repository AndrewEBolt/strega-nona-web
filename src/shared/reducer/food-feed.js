// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
	FETCH_FOOD_FEED_REQUEST,
	FETCH_FOOD_FEED_SUCCESS,
	FETCH_FOOD_FEED_FAILURE,
} from '../action/food-feed'

const initialState = Immutable.fromJS({
	loading: false,
	posts: [],
})

const foodFeedReducer = (state: Immut = initialState, action: {type: string, payload: any}) => {
	switch (action.type) {
	case FETCH_FOOD_FEED_REQUEST:
		return state.set('loading', true)
	case FETCH_FOOD_FEED_SUCCESS:
		return state
			.set('loading', false)
			.set('posts', action.payload)
	case FETCH_FOOD_FEED_FAILURE:
		return state
			.set('loading', false)
			.set('posts', [])
	default:
		return state
	}
}

export default foodFeedReducer
