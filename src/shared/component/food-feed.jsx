// @flow

import React from 'react'

import FoodPost from './food-post'

type FoodFeedProps = {
	fetchFoodFeed: Function,
	posts: Array<{
		_id: string,
		picture: string,
	}>,
}

export default class FoodFeed extends React.Component {
	componentDidMount() {
		this.props.fetchFoodFeed()
	}

	props: FoodFeedProps

	render() {
		// eslint-disable-next-line no-console
		console.log('render method of FoodPost component')
		// eslint-disable-next-line no-console
		console.log(this.props.posts)
		// eslint-disable-next-line no-underscore-dangle
		const displayPost = post => <FoodPost {...post} key={post._id} />

		return (
			<div className="clearfix col">
				{this.props.posts && this.props.posts.map(displayPost)}
			</div>
		)
	}
}
