// @flow

export const HOME_PAGE_ROUTE = '/'

export const FIND_ME_FOOD_PAGE_ROUTE = '/find-me-food'

export const POST_FOOD_PAGE_ROUTE = '/post-food'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
