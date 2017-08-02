// @flow

import { connect } from 'react-redux'

import { fetchFoodFeed } from '../action/food-feed'
import FoodFeed from '../component/food-feed'
import Paginate from '../libs/paginate'

const mapStateToProps = state => ({
	loading: state.foodFeed.get('loading'),
	posts: state.foodFeed.get('posts').toJS(),
})

const mapDispatchToProps = dispatch => ({
	fetchFoodFeed: () => { dispatch(fetchFoodFeed()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Paginate(FoodFeed))
