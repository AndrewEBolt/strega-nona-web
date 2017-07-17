// @flow

import React from 'react'
import PropTypes from 'prop-types';

// Get icons from here:
// http://gorangajic.github.io/react-icons/md.html

// And import them like:
// import { MdNotifications } from 'react-icons/lib/md'

// Then wrap that component in this one for consistent styling

type IconProps = {
	children: ?any
}

class IconMd extends React.Component {
	// static childContextTypes() {
	// 	reactIconBase: PropTypes.object,
	// }

	getChildContext() {
		return {
			reactIconBase: {
				size: 24,
				style: {},
			},
		}
	}

	props: IconProps

	render() {
		return this.props.children
	}
}

IconMd.childContextTypes = {
	reactIconBase: PropTypes.object,
}

export default IconMd
