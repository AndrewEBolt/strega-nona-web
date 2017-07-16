// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'
import FoodFeed from '../../container/food-feed-container'

const FindMeFoodPage = () => (
	<div>
		<Helmet
			meta={[
        { name: 'description', content: 'Strega Nona is an app to save food and beat your hunger' },
        { property: 'og:title', content: APP_NAME },
			]}
		/>
		<div className="content-inner">
			<FoodFeed />
		</div>
	</div>
)

export default FindMeFoodPage
