// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { APP_NAME } from '../../config'
import {
	FIND_ME_FOOD_PAGE_ROUTE,
	POST_FOOD_PAGE_ROUTE,
} from '../../routes'

const HomePage = () => (
	<div>
		<Helmet
			meta={[
        { name: 'description', content: 'Strega Nona is an app to save food and beat your hunger' },
        { property: 'og:title', content: APP_NAME },
			]}
		/>
		<div className="clearfix">
			<Link to={POST_FOOD_PAGE_ROUTE} className="bg-navy fixed left-0 top-0 bottom-0 col-6 flex justify-center items-center text-decoration-none">
				<h1 className="white">I made too much.</h1>
			</Link>
			<Link to={FIND_ME_FOOD_PAGE_ROUTE} className="bg-teal fixed right-0 top-0 bottom-0 col-6 flex justify-center items-center text-decoration-none">
				<h1 className="white">Feed me!</h1>
			</Link>
		</div>
	</div>
)

export default HomePage
