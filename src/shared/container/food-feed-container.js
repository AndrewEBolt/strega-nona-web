// @flow

import { connect } from 'react-redux'

import { fetchFoodFeed } from '../action/food-feed'
import FoodFeed from '../component/food-feed'

const mapStateToProps = state => ({
	loading: state.foodFeed.get('loading'),
	posts: state.foodFeed.get('posts'),
})

const mapDispatchToProps = dispatch => ({
	fetchFoodFeed: () => { dispatch(fetchFoodFeed()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(FoodFeed)
