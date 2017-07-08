// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'

const PostFoodPage = () => (
	<div>
		<Helmet
			meta={[
        { name: 'description', content: 'Strega Nona is an app to save food and beat your hunger' },
        { property: 'og:title', content: APP_NAME },
			]}
		/>
		<div>
			This is the post-food page
		</div>
	</div>
)

export default PostFoodPage
