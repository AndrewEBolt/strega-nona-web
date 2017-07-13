import { API_BASE_URL } from '../config'

const headers = {
  // 'Content-type': 'application/json',
	Accept: 'application/json',
	'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

const responseError = (res) => {
	const error = new Error(res.statusText)
	// eslint-disable-next-line no-console
	console.log(res)
	error.response = res
	throw error
}

const checkStatus = (res) => {
	if (res.status >= 200 && res.status < 300) {
		return res
	} else if (res.status === 403) {
		// TODO need to log user out here
		return responseError(res)
	}
	return responseError(res)
}

const parseJSON = (response) => {
	const contentType = response.headers.get('content-type')
	if (contentType && contentType.indexOf('application/json') !== -1) {
		return response.json()
	}
	return true
}

// const camelizeKeys = (res) => {
	// This will change all server responses from snake_case to camelCase
	// return Promise.resolve(humps.camelizeKeys(res))
// }

const baseRequest = (path, options) => {
	const url = `${API_BASE_URL}${path}`
	const reqOptions = {
		...options,
		headers,
	}
	return fetch(url, reqOptions)
		.then(checkStatus)
		.then(parseJSON)
		.catch((e) => {
			// eslint-disable-next-line no-console
			console.log(e)
		})
		// .then(camelizeKeys)
}

export const deleteReq = (path, data) => {
	const options = {
		method: 'DELETE',
		body: data,
	}
	return baseRequest(path, options)
}

export const getReq = (path, qs) => {
	const options = {
		method: 'GET',
		qs,
	}
	return baseRequest(path, options)
}

export const postReq = (path, qs, body) => {
	const options = {
		method: 'POST',
		qs,
		body: JSON.stringify(body),
	}
	return baseRequest(path, options)
}

export const putReq = (path, qs, body) => {
	const options = {
		method: 'PUT',
		qs,
		body: JSON.stringify(body),
	}
	return baseRequest(path, options)
}
