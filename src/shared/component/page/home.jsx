// @flow

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { APP_NAME } from '../../config'

const Title = styled.h1`
	color: tomato;
`

const HomePage = () => (
	<div>
		<Helmet
			meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
			]}
		/>
		<Title>
			{APP_NAME}
		</Title>
	</div>
)

export default HomePage
