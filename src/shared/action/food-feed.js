// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { getReq } from '../libs/api-base'

export const FETCH_FOOD_FEED_REQUEST = 'FETCH_FOOD_FEED_REQUEST'
export const FETCH_FOOD_FEED_SUCCESS = 'FETCH_FOOD_FEED_SUCCESS'
export const FETCH_FOOD_FEED_FAILURE = 'FETCH_FOOD_FEED_FAILURE'

export const fetchFoodFeedRequest = createAction(FETCH_FOOD_FEED_REQUEST)
export const fetchFoodFeedSuccess = createAction(FETCH_FOOD_FEED_SUCCESS)
export const fetchFoodFeedFailure = createAction(FETCH_FOOD_FEED_FAILURE)


export const fetchFoodFeed = () => (dispatch: Function) => {
	dispatch(fetchFoodFeedRequest())
	return getReq('/posts')
	.then((res) => {
		dispatch(fetchFoodFeedSuccess(res.data))
	})
	.catch((err) => {
		// eslint-disable-next-line no-console
		console.log(err)
		dispatch(fetchFoodFeedFailure())
	})
}
