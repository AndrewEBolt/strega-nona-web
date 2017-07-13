import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import { API_BASE_URL } from '../config'
import {
	fetchFoodFeed,
	fetchFoodFeedRequest,
	fetchFoodFeedSuccess,
	fetchFoodFeedFailure,
} from './food-feed'

const mockStore = configureMockStore([thunkMiddleware])

afterEach(() => {
	fetchMock.restore()
})

const exampleFoodPosts = {
	data: [{
		_id: '5963ef43427a5c78cf35c88c',
		description: 'I have extra pasta!',
		location: 'adelaide',
		picture: 'http://lorempixel.com/300/300/food',
		type: 'meal',
	}, {
		_id: '5963ef43427a5c78cf35c88c',
		description: 'I have extra pasta!',
		location: 'adelaide',
		picture: 'http://lorempixel.com/300/300/food',
		type: 'meal',
	}],
}

const exampleFoodPostResponse = {
	headers: {
		'content-type': 'application/json',
	},
	body: exampleFoodPosts,
}

test('fetchFoodFeed success', () => {
	fetchMock.get(`${API_BASE_URL}/posts`, exampleFoodPostResponse)
	const store = mockStore()
	return store.dispatch(fetchFoodFeed())
		.then(() => {
			expect(store.getActions()).toEqual([
				fetchFoodFeedRequest(),
				fetchFoodFeedSuccess(exampleFoodPosts.data),
			])
		})
})


test('fetchFoodFeed 404', () => {
	fetchMock.get(`${API_BASE_URL}/posts`, 404)
	const store = mockStore()
	return store.dispatch(fetchFoodFeed())
		.then(() => {
			expect(store.getActions()).toEqual([
				fetchFoodFeedRequest(),
				fetchFoodFeedFailure(),
			])
		})
})

test('fetchFoodFeed data error', () => {
	fetchMock.get(`${API_BASE_URL}/posts`, {})
	const store = mockStore()
	return store.dispatch(fetchFoodFeed())
		.then(() => {
			expect(store.getActions()).toEqual([
				fetchFoodFeedRequest(),
				fetchFoodFeedFailure(),
			])
		})
})
