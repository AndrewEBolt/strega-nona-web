// @flow

import React from 'react'
import debounce from 'lodash/debounce'
import Spinner from '../component/spinner'

type Props = {
	nextPage: Function,
	hasMore: boolean,
};

function Paginate(WrappedComponent: Class<React$Component<void, Props, void>>) {
	type State = {
		loading: boolean,
	};

	return class PropsProxy extends React.Component<void, Props, State> {
		getNextPage: Function
		handleScroll: Function
		paginator: HTMLDivElement
		state: State
		props: Props
		constructor(props: Props) {
			super(props)
			this.getNextPage = this.getNextPage.bind(this)
			this.handleScroll = debounce(this.handleScroll, 300).bind(this)
			this.state = { loading: false }
		}

		componentDidMount() {
			window.addEventListener('scroll', this.handleScroll)
			this.handleScroll()
		}

		componentWillUnmount() {
			window.removeEventListener('scroll', this.handleScroll)
		}

		getNextPage() {
			this.setState({ loading: true })
			this.props.nextPage()
				.then(() => {
					this.setState({ loading: false })
					this.handleScroll()
				})
		}

		handleScroll() {
			if (this.inFlight
				|| this.state.loading
				|| !this.props.hasMore) return

			if (this.paginator.getBoundingClientRect().top < window.innerHeight) {
				this.getNextPage()
			}
		}

		render() {
			return (
				<div>
					<WrappedComponent {...this.props} />
					{ this.props.hasMore && (
					<div className="center mb2" ref={(el) => { this.paginator = el }}>
						{ this.state.loading && <Spinner />}
					</div>
					)}
				</div>
			)
		}
  }
}

export default Paginate
