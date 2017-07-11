// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { APP_NAME } from '../config'
import { HOME_PAGE_ROUTE } from '../routes'

const Header = () => (
	<div>
		<div className="z1 flex items-center justify-center fixed left-0 right-0 top-0 bg-black">
			<Link to={HOME_PAGE_ROUTE} className="text-decoration-none">
				<h2 className="white">{APP_NAME}</h2>
			</Link>
		</div>
	</div>
)

export default Header
