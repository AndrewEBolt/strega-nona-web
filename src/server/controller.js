// @flow

export const findMeFoodPage = () => null

// export const findMeFoodPage = () => ({
// 	foodFeed: {
// 		loading: false,
// 		posts: {
// 			message: 'from server',
// 		},
// 	},
// })

export const homePage = () => null

export const helloPage = () => ({
	hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
	hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const helloEndpoint = (num: number) => ({
	serverMessage: `Hello from the server! (received ${num})`,
})

export const postFoodPage = () => ({})
