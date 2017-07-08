// @flow

import {
	findMeFoodPage,
  homePage,
  helloEndpoint,
  postFoodPage,
} from './controller'

import {
	FIND_ME_FOOD_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  helloEndpointRoute,
  POST_FOOD_PAGE_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
	app.get(HOME_PAGE_ROUTE, (req, res) => {
		res.send(renderApp(req.url, homePage()))
	})

	app.get(helloEndpointRoute(), (req, res) => {
		res.json(helloEndpoint(req.params.num))
	})

	app.get(FIND_ME_FOOD_PAGE_ROUTE, (req, res) => {
		res.send(renderApp(req.url, findMeFoodPage()))
	})

	app.get(POST_FOOD_PAGE_ROUTE, (req, res) => {
		res.send(renderApp(req.url, postFoodPage()))
	})

	app.get('*', (req, res) => {
		res.status(404).send(renderApp(req.url))
	})

  // eslint-disable-next-line no-unused-vars
	app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
		console.error(err.stack)
		res.status(500).send('Something went wrong!')
	})
}
