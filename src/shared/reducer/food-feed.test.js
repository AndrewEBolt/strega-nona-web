import Immutable from 'immutable'
import {
	fetchFoodFeedRequest,
	fetchFoodFeedSuccess,
	fetchFoodFeedFailure,
} from '../action/food-feed'

import foodFeedReducer from './food-feed'
import { exampleFoodPosts } from '../mocks/food-posts'

let foodFeedState

beforeEach(() => {
	foodFeedState = foodFeedReducer(undefined, {})
})

test('handle default', () => {
	expect(foodFeedState.get('loading')).toBe(false)
	expect(foodFeedState.get('posts')).toBe(Immutable.fromJS({}))
})

test('handle FETCH_FOOD_FEED_REQUEST', () => {
	foodFeedState = foodFeedReducer(foodFeedState, fetchFoodFeedRequest())
	expect(foodFeedState.get('loading')).toBe(true)
})

test('handle FETCH_FOOD_FEED_SUCCESS', () => {
	foodFeedState = foodFeedReducer(foodFeedState, fetchFoodFeedSuccess(exampleFoodPosts.data))
	expect(foodFeedState.get('loading')).toBe(false)
	expect(foodFeedState.get('posts')).toEqual(exampleFoodPosts.data)
})

test('handle FETCH_FOOD_FEED_FAILURE', () => {
	foodFeedState = foodFeedReducer(foodFeedState, fetchFoodFeedFailure())
	expect(foodFeedState.get('loading')).toBe(false)
})
