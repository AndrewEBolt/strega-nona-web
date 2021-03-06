// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'

import initStore from './init-store'
import App from './../shared/app'
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
	// eslint-disable-next-line no-console
	console.log('server/render-app.jsx')
	// eslint-disable-next-line no-console
	console.log(plainPartialState)
	const store = initStore(plainPartialState)
	const appHtml = ReactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouter location={location} context={routerContext}>
				<App />
			</StaticRouter>
		</Provider>)
	const head = Helmet.rewind()

	return `<!DOCTYPE html>
	<html>
		<head>
			${head.title}
			${head.meta}
		</head>
		<body>
			<div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
			<script>
				window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
			</script>
			<script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"}"></script>
		</body>
	</html>
	`
}

export default renderApp
