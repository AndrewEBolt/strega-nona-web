// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'

const HomePage = () => (
	<div>
		<Helmet
			meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
			]}
		/>
		<h1 className="muted pl4 mt4 green">{APP_NAME}</h1>
	</div>
)

export default HomePage
