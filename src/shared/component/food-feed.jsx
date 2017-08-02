// @flow

import React from 'react'

import FoodPost from './food-post'
import Spinner from './spinner'

type Props = {
	fetchFoodFeed: Function,
	loading: boolean,
	posts: Array<{
		_id: string,
		description: string,
		location: string,
		picture: string,
	}>,
}

class FoodFeed extends React.Component<void, Props, void> {
	componentDidMount() {
		this.props.fetchFoodFeed()
	}

	render() {
		// eslint-disable-next-line no-underscore-dangle
		const displayPost = post => <FoodPost {...post} key={post._id} />

		return (
			<div className="clearfix col col-12 mt3">
				{ this.props.loading && <div className="py3"><Spinner /></div> }
				{ this.props.posts && this.props.posts.map(displayPost) }
			</div>
		)
	}
}

export default FoodFeed
