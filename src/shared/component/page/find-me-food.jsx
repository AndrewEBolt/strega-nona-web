// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'

const FindMeFoodPage = () => (
	<div>
		<Helmet
			meta={[
        { name: 'description', content: 'Strega Nona is an app to save food and beat your hunger' },
        { property: 'og:title', content: APP_NAME },
			]}
		/>
		<div>
			This is the find-me-food page
		</div>
	</div>
)

export default FindMeFoodPage
