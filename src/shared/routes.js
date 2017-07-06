// @flow

export const HOME_PAGE_ROUTE = '/'

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
