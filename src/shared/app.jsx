// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Helmet from 'react-helmet'
import CoreLayout from './layouts/core-layout'
import FindMeFoodPage from './component/page/find-me-food'
import HomePage from './component/page/home'
import PostFoodPage from './component/page/post-food'
import { APP_NAME } from './config'
import {
	FIND_ME_FOOD_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	POST_FOOD_PAGE_ROUTE,
} from './routes'

const App = () => (
	<div>
		<Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
		<CoreLayout>
			<Switch>
				<Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
				<Route path={FIND_ME_FOOD_PAGE_ROUTE} render={() => <FindMeFoodPage />} />
				<Route path={POST_FOOD_PAGE_ROUTE} render={() => <PostFoodPage />} />
			</Switch>
		</CoreLayout>
	</div>
)

export default App
