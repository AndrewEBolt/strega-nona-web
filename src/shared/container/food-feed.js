// @flow

import { connect } from 'react-redux'

import { fetchFoodFeed } from '../action/food-feed'
import Feed from '../component/feed'

const mapStateToProps = state => ({
	posts: state.findFood.get('posts'),
})

const mapDispatchToProps = dispatch => ({
	fetchFoodFeed: () => { dispatch(fetchFoodFeed()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
